"use client";

import styled from "@emotion/styled";
import { LinkBreakIcon, ArrowUDownLeftIcon } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

const Page = styled.main`
  min-height: 100vh;
  width: 100%;
  background: #fff;
  display: grid;
  place-items: center;
  padding: 32px 16px;
  position: relative;
`;

const CornerLabel = styled.div`
  position: fixed;
  top: 10px;
  left: 10px;
  font-size: 12px;
  line-height: 1;
  color: rgba(0, 0, 0, 0.55);
  font-family: var(--font-alt);
  z-index: 10;
  user-select: none;
`;

const Center = styled.section`
  width: min(760px, 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
`;

const IconWrap = styled.div`
  width: 96px;
  height: 96px;
  display: grid;
  place-items: center;

  & svg {
    width: 62px;
    height: 62px;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  line-height: 1;
  letter-spacing: -1px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.85);
  font-family: var(--font-body);
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 14px;
  line-height: 1.25;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.55);
  font-family: var(--font-alt);
  margin: 0;
  max-width: 360px;
`;

const Redirect = styled.div`
  margin-top: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 11px;
  line-height: 1;
  color: rgba(0, 0, 0, 0.4);
  font-family: var(--font-alt);

  & svg {
    width: 14px;
    height: 14px;
  }
`;

const REDIRECT_SECONDS = 4;

export default function NotFound() {
  const router = useRouter();
  const [remaining, setRemaining] = useState(REDIRECT_SECONDS);

  const display = useMemo(() => {
    // Mantém a string bem fiel ao print ("ms").
    return `${Math.max(0, remaining).toFixed(2)}ms`;
  }, [remaining]);

  useEffect(() => {
    const startedAt = performance.now();
    const tick = () => {
      const elapsedMs = performance.now() - startedAt;
      const next = REDIRECT_SECONDS - elapsedMs / 1000;
      setRemaining(next);
      if (next <= 0) {
        router.replace("/");
        return;
      }
      raf = requestAnimationFrame(tick);
    };

    let raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [router]);

  return (
    <Page>
      <CornerLabel>Error 404</CornerLabel>
      <Center aria-label="Página não encontrada">
        <IconWrap aria-hidden="true">
          <LinkBreakIcon weight="light" />
        </IconWrap>

        <Title>ERRO 404</Title>
        <Subtitle>
          Esse erro indica que a página que você tentou acessar, está indisponível ou não existe
        </Subtitle>

        <Redirect aria-live="polite">
          <ArrowUDownLeftIcon weight="bold" />
          <span>Você será redirecionado em {display}</span>
        </Redirect>
      </Center>
    </Page>
  );
}
