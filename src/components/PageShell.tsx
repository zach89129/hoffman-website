"use client";

import { useUrlHash } from "@/hooks/useUrlHash";
import Footer from "./Footer";
import Header from "./Header";

type PageShellProps = {
  children: React.ReactNode;
};

export default function PageShell({ children }: PageShellProps) {
  const [, hashNavigate] = useUrlHash();

  return (
    <div className="App">
      <Header hashNavigate={hashNavigate} />
      <div className="content-wrapper">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
