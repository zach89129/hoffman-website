"use client";

import { useCallback, useEffect, useLayoutEffect, useState } from "react";

export function useUrlHash() {
  const [hash, setHash] = useState("");

  useLayoutEffect(() => {
    setHash(typeof window !== "undefined" ? window.location.hash : "");
  }, []);

  useEffect(() => {
    const sync = () => setHash(window.location.hash);
    window.addEventListener("hashchange", sync);
    window.addEventListener("popstate", sync);
    return () => {
      window.removeEventListener("hashchange", sync);
      window.removeEventListener("popstate", sync);
    };
  }, []);

  const setHashNavigate = useCallback((fragment: string) => {
    const h = fragment.startsWith("#") ? fragment : `#${fragment}`;
    window.history.pushState(null, "", h);
    setHash(h);
  }, []);

  return [hash, setHashNavigate] as const;
}
