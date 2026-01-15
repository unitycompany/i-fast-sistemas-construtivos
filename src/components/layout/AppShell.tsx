"use client";

import type { ReactNode } from "react";
import { useCallback, useState } from "react";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

export default function AppShell({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuClick = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, []);

  return (
    <div className="app-shell">
      <div className="container">
        <Header onMenuClick={handleMenuClick} isSidebarOpen={isSidebarOpen} />
      </div>

      {isSidebarOpen ? (
        <div className="container">
          <Sidebar />
        </div>
      ) : null}

      <main className="app-main">
        <div className="container">{children}</div>
      </main>

      <div className="container">
        <Footer />
      </div>
    </div>
  );
}
