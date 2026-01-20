"use client";
import Input from "@/components/forms/Input";
import Text from "@/components/ui/Text";
import styled from "@emotion/styled";
import { MagnifyingGlassIcon, Spinner } from "@phosphor-icons/react/dist/ssr";
import { useCallback, useEffect, useMemo, useState } from "react";
import STORE_UNITS, { type StoreUnit } from "../_data/storesDb";
import CardSearch from "../_components/CardSearch";

const SearchSectionContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-direction: column;

    & .search__bar {
        border: 1px solid #f5f5f5;
        padding: 2px 0px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 12px;
        transition: border-radius 180ms ease;

        &-input {
            flex: 1;
            width: auto;
            border-radius: 0;
            border: none;
        }
    }

    & .search__bar.is-active {
        border-radius: 12px 12px 0 0;
    }

    & .search__result {
        border: 1px solid #f5f5f5;
        border-radius: 0 0 12px 12px;
        border-top: none;
        width: 100%;
        padding: 20px 20px;
        align-items: center;
        justify-content: center;
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 18px;
        transition: opacity 180ms ease;

        @media (max-width: 768px) {
            grid-template-columns: repeat(1, minmax(0, 1fr));
        }
    }

    & .search__result.is-hidden {
        display: none;
    }

    & .search__loading {
        grid-column: 1 / -1;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 28px 16px 32px;
        min-height: 140px;
        gap: 6px;
        border-radius: 10px;
    }

    & .search__loading-icon {
        width: 32px;
        height: 32px;
        color: var(--color-muted);
        animation: loadingSpin 0.9s linear infinite;
        margin-bottom: 6px;
    }

    @keyframes loadingSpin {
        to {
            transform: rotate(360deg);
        }
    }
`

type Coords = { lat: number; lon: number };

function normalizeCep(raw: string) {
    return raw.replace(/\D/g, "");
}

function cleanAddressText(raw: string) {
    return raw
        .replace(/\bCEP\b\s*\d{5}-?\d{3}/gi, "")
        .replace(/\s{2,}/g, " ")
        .replace(/\s+,/g, ",")
        .trim();
}

function isCep(raw: string) {
    const digits = normalizeCep(raw);
    return digits.length === 8;
}

function haversineKm(a: Coords, b: Coords) {
    const R = 6371;
    const toRad = (v: number) => (v * Math.PI) / 180;
    const dLat = toRad(b.lat - a.lat);
    const dLon = toRad(b.lon - a.lon);
    const lat1 = toRad(a.lat);
    const lat2 = toRad(b.lat);
    const sinDLat = Math.sin(dLat / 2);
    const sinDLon = Math.sin(dLon / 2);
    const h = sinDLat * sinDLat + Math.cos(lat1) * Math.cos(lat2) * sinDLon * sinDLon;
    return 2 * R * Math.asin(Math.sqrt(h));
}

async function geocodeToCoords(query: string): Promise<Coords | null> {
    const url = new URL("https://nominatim.openstreetmap.org/search");
    url.searchParams.set("format", "jsonv2");
    url.searchParams.set("limit", "1");
    url.searchParams.set("countrycodes", "br");
    url.searchParams.set("accept-language", "pt-BR");
    url.searchParams.set("q", query);

    const res = await fetch(url.toString(), { method: "GET" });
    if (!res.ok) return null;
    const data = (await res.json()) as Array<any>;
    const first = data?.[0];
    if (!first?.lat || !first?.lon) return null;
    return { lat: Number(first.lat), lon: Number(first.lon) };
}

async function mapWithConcurrency<T, R>(items: T[], limit: number, mapper: (item: T) => Promise<R>) {
    const results: R[] = new Array(items.length);
    let index = 0;

    const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
        while (index < items.length) {
            const current = index++;
            results[current] = await mapper(items[current]);
        }
    });

    await Promise.all(workers);
    return results;
}

function storeGeocodeQuery(store: StoreUnit) {
    const zip = store.zipCode ? normalizeCep(store.zipCode) : "";
    if (zip.length === 8) return `${zip}, Brasil`;
    if (store.addressLine1) return `${cleanAddressText(store.addressLine1)}, ${store.city} - ${store.state}, Brasil`;
    return `${store.name}, ${store.city} - ${store.state}, Brasil`;
}

const STATE_NEIGHBORS: Record<string, string[]> = {
    AC: ["AM", "RO"],
    AL: ["PE", "SE", "BA"],
    AM: ["AC", "RO", "MT", "PA", "RR"],
    AP: ["PA"],
    BA: ["SE", "AL", "PE", "PI", "TO", "GO", "MG", "ES"],
    CE: ["PI", "PE", "PB", "RN"],
    DF: ["GO"],
    ES: ["BA", "MG", "RJ"],
    GO: ["DF", "MT", "MS", "MG", "BA", "TO"],
    MA: ["PA", "TO", "PI"],
    MG: ["BA", "ES", "RJ", "SP", "MS", "GO"],
    MS: ["MT", "GO", "MG", "SP", "PR"],
    MT: ["RO", "AM", "PA", "TO", "GO", "MS"],
    PA: ["AP", "AM", "MT", "TO", "MA"],
    PB: ["RN", "CE", "PE"],
    PE: ["PB", "CE", "BA", "AL"],
    PI: ["MA", "TO", "BA", "PE", "CE"],
    PR: ["SP", "MS", "SC"],
    RJ: ["ES", "MG", "SP"],
    RN: ["CE", "PB"],
    RO: ["AC", "AM", "MT"],
    RR: ["AM", "PA"],
    RS: ["SC"],
    SC: ["PR", "RS"],
    SE: ["AL", "BA"],
    SP: ["RJ", "MG", "PR", "MS"],
    TO: ["PA", "MA", "PI", "BA", "GO", "MT"],
};

export default function SearchSection() {
    const [query, setQuery] = useState("");
    const [origin, setOrigin] = useState<Coords | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [searchNonce, setSearchNonce] = useState(0);
    const [searchState, setSearchState] = useState<string | null>(null);

    const maxResults = 6;

    const storeCoordsCache = useMemo(() => new Map<string, Coords | null>(), []);


    const candidateStores = useMemo(() => {
        if (!searchState) return STORE_UNITS;
        const uf = searchState.toUpperCase();
        const sameState = STORE_UNITS.filter((store) => store.state.toUpperCase() === uf);
        if (sameState.length > 0) return sameState;
        const neighbors = STATE_NEIGHBORS[uf] ?? [];
        const nearby = STORE_UNITS.filter((store) => neighbors.includes(store.state.toUpperCase()));
        if (nearby.length > 0) return nearby;
        return STORE_UNITS;
    }, [searchState]);

    const cancelOngoingSearch = useCallback(() => {
        setSearchNonce((n) => n + 1);
        setError("");
        setRanked([]);
        setOrigin(null);
        setIsLoading(false);
        setLoadingMessage("");
        setSearchState(null);
    }, []);

    const beginNewSearch = useCallback((message: string) => {
        setError("");
        setRanked([]);
        setOrigin(null);
        setIsLoading(true);
        setLoadingMessage(message);
        setSearchNonce((n) => n + 1);
    }, []);

    const formatCepMask = useCallback((raw: string) => {
        const digits = normalizeCep(raw).slice(0, 8);
        if (digits.length <= 5) return digits;
        return `${digits.slice(0, 5)}-${digits.slice(5)}`;
    }, []);

    const getStoreCoords = useCallback(
        async (store: StoreUnit): Promise<Coords | null> => {
            const cached = storeCoordsCache.get(store.id);
            if (cached !== undefined) return cached;

            // 1) Tenta usar o que já está no mapUrl (geralmente mais confiável)
            const mapQuery = extractQueryFromMapUrl(store.mapUrl);
            if (mapQuery) {
                const coordsFromMap = await geocodeToCoords(`${mapQuery}, Brasil`);
                if (coordsFromMap) {
                    storeCoordsCache.set(store.id, coordsFromMap);
                    return coordsFromMap;
                }
            }

            // 2) Tenta por CEP (quando existir)
            const zipDigits = store.zipCode ? normalizeCep(store.zipCode) : "";
            if (zipDigits.length === 8) {
                const coordsFromZip = await geocodeToCoords(`${zipDigits}, Brasil`);
                if (coordsFromZip) {
                    storeCoordsCache.set(store.id, coordsFromZip);
                    return coordsFromZip;
                }

                // 2b) Fallback: ViaCEP -> Nominatim
                const viaCepQuery = await viaCepToQuery(zipDigits);
                if (viaCepQuery) {
                    const coordsFromViaCep = await geocodeToCoords(viaCepQuery);
                    if (coordsFromViaCep) {
                        storeCoordsCache.set(store.id, coordsFromViaCep);
                        return coordsFromViaCep;
                    }
                }
            }

            // 3) Fallback geral (endereço / cidade / estado)
            const coords = await geocodeToCoords(storeGeocodeQuery(store));
            storeCoordsCache.set(store.id, coords);
            return coords;
        },
        [storeCoordsCache]
    );

    const computeNearest = useCallback(
        async (originCoords: Coords, stores: StoreUnit[]) => {
            const coordsList = await mapWithConcurrency(stores, 3, async (store) => ({
                store,
                coords: await getStoreCoords(store),
            }));

            const ranked = coordsList
                .map((x) => ({
                    store: x.store,
                    km: x.coords ? haversineKm(originCoords, x.coords as Coords) : Number.POSITIVE_INFINITY,
                }))
                .sort((a, b) => a.km - b.km);

            return ranked;
        },
        [getStoreCoords]
    );

    const requestGeolocation = useCallback(() => {
        beginNewSearch("Obtendo sua localização...");
        setSearchState(null);
        if (typeof navigator === "undefined" || !("geolocation" in navigator)) {
            setError("Geolocalização não está disponível neste navegador.");
            setIsLoading(false);
            setLoadingMessage("");
            return;
        }
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setOrigin({ lat: pos.coords.latitude, lon: pos.coords.longitude });
                setLoadingMessage("Calculando as lojas mais próximas...");
            },
            () => {
                setIsLoading(false);
                setLoadingMessage("");
                setError("Não foi possível obter sua localização.");
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 30000 }
        );
    }, [beginNewSearch]);

    const [ranked, setRanked] = useState<Array<{ store: StoreUnit; km: number }>>([]);

    const runQuerySearch = useCallback(async () => {
        const q = query.trim();
        if (!q) {
            setError("");
            setRanked([]);
            setOrigin(null);
            setIsLoading(false);
            setLoadingMessage("");
            setSearchState(null);
            return;
        }

        // Se for CEP, exige 8 dígitos
        if (isCep(q) === false && q.length < 3) {
            setError("Digite pelo menos 3 caracteres ou um CEP válido.");
            setRanked([]);
            setOrigin(null);
            setIsLoading(false);
            setLoadingMessage("");
            return;
        }

        beginNewSearch("Buscando a localização informada...");
        const normalized = isCep(q) ? normalizeCep(q) : q;

        let lookupQuery = `${normalized}, Brasil`;
        if (isCep(q)) {
            const cepLocation = await viaCepToLocation(normalized);
            if (cepLocation?.query) lookupQuery = cepLocation.query;
            setSearchState(cepLocation?.state ?? null);
        } else {
            setSearchState(null);
        }

        const coords = await geocodeToCoords(lookupQuery);
        if (!coords) {
            setIsLoading(false);
            setLoadingMessage("");
            setError("Não encontramos essa localização.");
            return;
        }
        setLoadingMessage("Calculando as lojas mais próximas...");
        setOrigin(coords);
    }, [beginNewSearch, query]);

    useEffect(() => {
        let cancelled = false;
        const nonceAtStart = searchNonce;

        async function run() {
            if (!origin) {
                if (!isLoading) {
                    setRanked([]);
                    setLoadingMessage("");
                }
                return;
            }

            setIsLoading(true);
            setLoadingMessage((m) => m || "Calculando as lojas mais próximas...");

            const updated = await computeNearest(origin, candidateStores);
            if (cancelled || nonceAtStart !== searchNonce) return;
            setRanked(updated);
            setIsLoading(false);
            setLoadingMessage("");
        }

        run();
        return () => {
            cancelled = true;
        };
    }, [candidateStores, computeNearest, isLoading, origin, searchNonce]);

    const visible = useMemo(() => ranked.slice(0, maxResults), [maxResults, ranked]);
    const hasSearch = isLoading || !!error || visible.length > 0;

    return (
        <SearchSectionContainer>
            <aside className={`search__bar${hasSearch ? " is-active" : ""}`}>
                <Input
                    type="text"
                    placeholder="Digite sua localização ou CEP"
                    className="search__bar-input"
                    icon={MagnifyingGlassIcon}
                    onIconClick={runQuerySearch}
                    iconAriaLabel="Pesquisar"
                    value={query}
                    onChange={(e) => {
						const next = e.currentTarget.value;
                        cancelOngoingSearch();
						if (/^[0-9-]*$/.test(next)) {
							setQuery(formatCepMask(next));
							return;
						}
						setQuery(next);
					}}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							e.preventDefault();
							runQuerySearch();
						}
					}}
                />
            </aside>
            <main className={`search__result${hasSearch ? "" : " is-hidden"}`}>
                {isLoading ? (
                    <div className="search__loading" aria-live="polite">
                        <Spinner className="search__loading-icon" aria-hidden="true" />
                    </div>
                ) : error ? (
                    <Text as="p">{error}</Text>
                ) : (
                    visible.map(({ store, km }) => (
                        <CardSearch
                            key={store.id}
                            nome={store.name}
                            adress={store.addressLine1 ?? ""}
                            imageUrl={store.imageUrl ?? ""}
                            km={km}
                            hours={store.hours}
                            weekendHours={store.hoursWeekend}
                        />
                    ))
                )}
            </main>
        </SearchSectionContainer>
    );
}

function extractQueryFromMapUrl(mapUrl?: string) {
    if (!mapUrl) return null;
    try {
        const u = new URL(mapUrl);
        const q = u.searchParams.get("query") || u.searchParams.get("q") || u.searchParams.get("destination");
        const decoded = (q ?? "").replace(/\+/g, " ").trim();
        return decoded || null;
    } catch {
        return null;
    }
}

async function viaCepToQuery(cepDigits: string): Promise<string | null> {
    const location = await viaCepToLocation(cepDigits);
    return location?.query ?? null;
}

async function viaCepToLocation(cepDigits: string): Promise<{ query: string; state: string } | null> {
    if (cepDigits.length !== 8) return null;
    try {
        const res = await fetch(`https://viacep.com.br/ws/${cepDigits}/json/`, { method: "GET" });
        if (!res.ok) return null;
        const data = (await res.json()) as any;
        if (data?.erro) return null;
        const state = typeof data?.uf === "string" ? data.uf.trim().toUpperCase() : "";
        const parts = [data?.logradouro, data?.bairro, data?.localidade, data?.uf]
            .map((v) => (typeof v === "string" ? v.trim() : ""))
            .filter(Boolean);
        if (parts.length === 0) return null;
        return { query: `${parts.join(", ")}, Brasil`, state };
    } catch {
        return null;
    }
}