"use client";

import { useUrlHash } from "@/hooks/useUrlHash";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";

export default function HomeShell() {
  const [urlHash, hashNavigate] = useUrlHash();

  return (
    <div className="App">
      <Header hashNavigate={hashNavigate} />
      <div className="content-wrapper">
        <main>
          <Home urlHash={urlHash} hashNavigate={hashNavigate} />
        </main>
      </div>
      <Footer />
    </div>
  );
}
