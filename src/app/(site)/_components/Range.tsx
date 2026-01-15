"use client";
import PublicImage from "@/components/ui/PublicImage";
import { publicAsset } from "@/utils/publicAssets";
import styled from "@emotion/styled";
import React from "react";
import { useEffect, useMemo, useRef, useState } from "react";

const RangeContainer = styled.section`
  width: 100%;
  padding: 48px 0;
  position: relative;
  overflow: hidden;
  cursor: grab;

  @media (max-width: 768px) {
    padding: 24px 0;
  }

  &:active {
    cursor: grabbing;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100%;
    background: linear-gradient(
      to right,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0) 100%
    );
    z-index: 2;
    pointer-events: none;

    @media (max-width: 768px) {
      width: 80px;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100%;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    z-index: 2;
    pointer-events: none;

    @media (max-width: 768px) {
      width: 80px;
    }
  }

  .marquee {
    position: relative;
    z-index: 1;
    width: 100%;
    user-select: none;
    touch-action: pan-y;
  }

  .track {
    display: flex;
    align-items: center;
    gap: 18px;
    will-change: transform;
    white-space: nowrap;
  }

  .item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    flex: 0 0 auto;
  }

  .range__text {
    font-family: var(--font-body);
    font-size: 42px;
    font-weight: 200;
    letter-spacing: -3px;
    color: var(--color-muted);

    @media (max-width: 768px) {
      font-size: 28px;
      letter-spacing: -2px;
    }
  }

  .range__icon {
    width: 32px;
    height: 32px;

    @media (max-width: 768px) {
      width: 24px;
      height: 24px;
    }
  }
`

export default function Range() {
  const items = useMemo(
    () => [
      { type: "text" as const, value: "PIONEIRA NA CONSTRUÇÃO A SECO" },
      { type: "icon" as const },
      { type: "text" as const, value: "COMPRE DIRETO DA FÁBRICA" },
      { type: "icon" as const },
      { type: "text" as const, value: "SISTEMA COMPLETO PARA VOCÊ" },
      { type: "icon" as const },
    ],
    []
  );

  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const setRef = useRef<HTMLDivElement | null>(null);
  const [setWidth, setSetWidth] = useState(0);

  const offsetRef = useRef(0);
  const isDraggingRef = useRef(false);
  const lastPointerXRef = useRef(0);
  const baseSpeedPxPerSec = 80;

  useEffect(() => {
    if (!setRef.current) return;

    const update = () => {
      const width = setRef.current?.getBoundingClientRect().width ?? 0;
      setSetWidth(width);
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(setRef.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!marqueeRef.current) return;
    if (!setWidth) return;

    let raf = 0;
    let lastTs = performance.now();

    const tick = (ts: number) => {
      const dt = Math.min(0.05, (ts - lastTs) / 1000);
      lastTs = ts;

      if (!isDraggingRef.current) {
        offsetRef.current += baseSpeedPxPerSec * dt;
      }

      if (offsetRef.current >= setWidth) {
        offsetRef.current = offsetRef.current % setWidth;
      } else if (offsetRef.current < 0) {
        offsetRef.current = ((offsetRef.current % setWidth) + setWidth) % setWidth;
      }

      marqueeRef.current!.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [setWidth]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
    isDraggingRef.current = true;
    lastPointerXRef.current = e.clientX;
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - lastPointerXRef.current;
    lastPointerXRef.current = e.clientX;
    offsetRef.current -= dx;
  };

  const onPointerUp = () => {
    isDraggingRef.current = false;
  };

  const renderItem = (item: (typeof items)[number], key: string) => {
    return (
      <span className="item" key={key}>
        {item.type === "icon" ? (
          <PublicImage
            src={publicAsset("icon-fast-sistemas-construtivos-gray.svg")}
            alt="Ícone Fast Sistemas Construtivos"
            width={32}
            height={32}
            className="range__icon"
            draggable={false}
          />
        ) : (
          <span className="range__text">{item.value}</span>
        )}
      </span>
    );
  };

  return (
    <RangeContainer>
      <div
        className="marquee"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        <div className="track" ref={marqueeRef}>
          <div className="track" ref={setRef}>
            {items.map((it, idx) => renderItem(it, `a-${idx}`))}
          </div>
          <div className="track" aria-hidden>
            {items.map((it, idx) => renderItem(it, `b-${idx}`))}
          </div>
          <div className="track" aria-hidden>
            {items.map((it, idx) => renderItem(it, `c-${idx}`))}
          </div>
        </div>
      </div>
    </RangeContainer>
  );
}
