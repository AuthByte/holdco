"use client";

import { useEffect, useState } from "react";

export type FundQuote = {
  ticker: string;
  price: number;
  previousClose: number | null;
  change: number | null;
  changePercent: number | null;
  nav: number;
  currency: string;
  asOf: string;
  exchange: string | null;
  source: string;
  live: boolean;
};

type QuotesResponse = {
  quotes: FundQuote[];
  fetchedAt?: string;
};

export function useFundQuotes() {
  const [quotes, setQuotes] = useState<Record<string, FundQuote>>({});
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading",
  );
  const [fetchedAt, setFetchedAt] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch("/api/quotes", { cache: "no-store" });
        if (!res.ok) throw new Error(`quotes ${res.status}`);
        const data = (await res.json()) as QuotesResponse;
        if (cancelled) return;

        const map: Record<string, FundQuote> = {};
        for (const q of data.quotes ?? []) {
          map[q.ticker.toUpperCase()] = q;
        }
        setQuotes(map);
        setFetchedAt(data.fetchedAt ?? new Date().toISOString());
        setStatus("ready");
      } catch {
        if (!cancelled) setStatus("error");
      }
    }

    void load();
    const id = window.setInterval(load, 60_000);
    return () => {
      cancelled = true;
      window.clearInterval(id);
    };
  }, []);

  return { quotes, status, fetchedAt };
}
