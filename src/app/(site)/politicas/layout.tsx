"use client";

import type { ReactNode } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styled from "@emotion/styled";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import PolicySidebar from "./_components/PolicySidebar";
import { ArrowUpIcon, XIcon } from "@phosphor-icons/react/dist/ssr";
import Text from "@/components/ui/Text";
import type { CSSProperties } from "react";

const PolicyLayoutContainer = styled.section`
  width: 100%;
  padding: 96px 0;
  position: relative;
  display: grid;
  grid-template-columns: minmax(220px, 250px) 1fr;
  column-gap: 48px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 24px;
    padding: 72px 0;
  }

  & .policy__sidebar {
    position: sticky;
    top: 96px;
    height: fit-content;
    width: 250px;
    max-width: 100%;
    align-self: start;

    @media (max-width: 768px) {
      display: none;
    }
  }

  & .policy__content {
    min-width: 0;
  }
`;

const MobileBackdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 1100;
  background: rgba(0, 0, 0, 0.45);
`;

const MobileSheet = styled(motion.aside)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }

  position: fixed;
  max-height: fit-content;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  width: 100%;

  z-index: 1100;
  background-color: var(--color-bg);
  border-top: 1px solid var(--color-border);
  border-radius: 24px 24px 0 0;
  box-shadow: var(--shadow-md);

  overflow: hidden;
  flex-direction: column;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const MobileSheetHeader = styled.button`
  border: none;
  background: transparent;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  padding: 20px 24px;
  cursor: pointer;

  color: var(--color-dark);
  font-family: var(--font-body);
  font-size: 16px;
  letter-spacing: -0.4px;

  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  & > svg {
    width: 18px;
    height: 18px;
    flex: 0 0 auto;
  }
`;

const MobilePanelHeader = styled.div`
  position: absolute;
  top: 18px;
  right: 18px;
  z-index: 2;
`;

const MobileSheetBody = styled(motion.div)`
  padding: 24px 24px 40px 24px;
  overflow: auto;
`;

const MobileClose = styled.button`
  border: 4px solid #f5f5f5;
  background: var(--color-bg);
  color: var(--color-dark);
  border-radius: var(--radius-all);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  cursor: pointer;

  & > svg {
    width: 16px;
    height: 16px;
  }
`;

const MobileCloseWrap = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const MobileArrow = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const PageMotion = styled(motion.div)`
  min-width: 0;
`;

export default function PoliticasLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef<HTMLElement | null>(null);
  const sidebarRailRef = useRef<HTMLDivElement | null>(null);
  const sidebarRef = useRef<HTMLElement | null>(null);
  const [desktopSidebarStyle, setDesktopSidebarStyle] = useState<CSSProperties | undefined>(undefined);

  const desktopTopOffset = 96;

  const desktopStaticStyle = useMemo<CSSProperties>(
    () => ({
      position: "sticky",
      top: desktopTopOffset,
      height: "fit-content",
      width: 250,
      maxWidth: "100%",
    }),
    []
  );

  const openMenu = useCallback(() => setIsMenuOpen(true), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  const toggleMenu = useCallback(() => setIsMenuOpen((v) => !v), []);

  useEffect(() => {
    // Close menu when navigating between policy pages.
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia("(min-width: 769px)");
    if (!mql.matches) {
      setDesktopSidebarStyle(undefined);
      return;
    }

    let rafId = 0;
    let lastMode: "static" | "fixed" | "bottom" | null = null;
    let lastLeft = 0;
    let lastWidth = 0;
    let lastTop = 0;

    const update = () => {
      rafId = 0;
      const containerEl = containerRef.current;
      const railEl = sidebarRailRef.current;
      const sidebarEl = sidebarRef.current;
      if (!containerEl || !railEl || !sidebarEl) return;

      const scrollY = window.scrollY || window.pageYOffset || 0;
      const containerRect = containerEl.getBoundingClientRect();
      const containerTop = containerRect.top + scrollY;
      const containerHeight = containerEl.offsetHeight;
      const containerBottom = containerTop + containerHeight;

      const sidebarHeight = sidebarEl.offsetHeight;
      const start = containerTop - desktopTopOffset;
      const end = containerBottom - desktopTopOffset - sidebarHeight;

      const isWithin = scrollY >= start && scrollY < end;
      const isPastEnd = scrollY >= end;

      const railRect = railEl.getBoundingClientRect();
      const nextLeft = railRect.left;
      const nextWidth = railRect.width;

      let nextMode: "static" | "fixed" | "bottom";
      let nextStyle: CSSProperties;

      if (!isWithin && !isPastEnd) {
        nextMode = "static";
        nextStyle = {
          ...desktopStaticStyle,
          position: "static",
        };
      } else if (isPastEnd) {
        nextMode = "bottom";
        const absoluteTop = Math.max(0, containerHeight - sidebarHeight - desktopTopOffset);
        nextStyle = {
          position: "absolute",
          top: absoluteTop,
          left: railRect.left - containerRect.left,
          width: railRect.width,
          zIndex: 10,
        };
      } else {
        nextMode = "fixed";
        nextStyle = {
          position: "fixed",
          top: desktopTopOffset,
          left: nextLeft,
          width: nextWidth,
          zIndex: 10,
        };
      }

      const modeChanged = nextMode !== lastMode;
      const leftChanged = Math.abs(nextLeft - lastLeft) > 0.5;
      const widthChanged = Math.abs(nextWidth - lastWidth) > 0.5;
      const topChanged =
        typeof nextStyle.top === "number" && Math.abs((nextStyle.top as number) - lastTop) > 0.5;

      if (modeChanged || leftChanged || widthChanged || topChanged) {
        lastMode = nextMode;
        lastLeft = nextLeft;
        lastWidth = nextWidth;
        lastTop = typeof nextStyle.top === "number" ? (nextStyle.top as number) : 0;
        setDesktopSidebarStyle(nextStyle);
      }
    };

    const schedule = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(update);
    };

    // Keep in sync with Lenis (RAF-based) and native scroll.
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    mql.addEventListener("change", schedule);

    // Run once.
    schedule();

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      mql.removeEventListener("change", schedule);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [pathname, desktopStaticStyle]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen, closeMenu]);

  return (
    <PolicyLayoutContainer ref={containerRef}>
      <div ref={sidebarRailRef}>
        <aside
          ref={sidebarRef}
          className="policy__sidebar"
          style={desktopSidebarStyle}
        >
          <PolicySidebar />
        </aside>
      </div>

      <main className="policy__content">
        <AnimatePresence mode="wait" initial={false}>
          <PageMotion
            key={pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: [0.2, 0, 0, 1] }}
          >
            {children}
          </PageMotion>
        </AnimatePresence>
      </main>

      <AnimatePresence>
        {isMenuOpen ? (
          <MobileBackdrop
            key="policy-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeMenu}
          />
        ) : null}
      </AnimatePresence>

      <MobileSheet
        role={isMenuOpen ? "dialog" : undefined}
        aria-modal={isMenuOpen ? true : undefined}
        aria-label={isMenuOpen ? "Menu de políticas" : "Abrir menu de políticas"}
        initial={false}
        animate={{ height: isMenuOpen ? "min(82dvh, calc(100dvh - 96px))" : "72px" }}
        transition={{ type: "spring", stiffness: 320, damping: 34 }}
      >
        {!isMenuOpen ? (
          <MobileSheetHeader type="button" onClick={openMenu} aria-expanded={isMenuOpen}>
            <Text as="span">Selecionar política</Text>
            <MobileArrow animate={{ rotate: 0 }} transition={{ duration: 0.18 }}>
              <ArrowUpIcon />
            </MobileArrow>
          </MobileSheetHeader>
        ) : (
          <MobilePanelHeader>
            <MobileCloseWrap onClick={(e) => e.stopPropagation()}>
              <MobileClose type="button" onClick={closeMenu} aria-label="Fechar menu">
                <XIcon />
              </MobileClose>
            </MobileCloseWrap>
          </MobilePanelHeader>
        )}

        <MobileSheetBody
          initial={false}
          animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : 8 }}
          transition={{ duration: 0.18, ease: [0.2, 0, 0, 1] }}
          style={{ pointerEvents: isMenuOpen ? "auto" : "none" }}
        >
          <PolicySidebar onNavigate={closeMenu} />
        </MobileSheetBody>
      </MobileSheet>
    </PolicyLayoutContainer>
  );
}
