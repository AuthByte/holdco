import { NextResponse } from "next/server";
import { funds } from "@/data/funds";
import { fetchYahooQuotes } from "@/lib/yahoo";

export const revalidate = 60;

export async function GET() {
  const tickers = funds.map((f) => f.ticker);
  const live = await fetchYahooQuotes(tickers);
  const byTicker = new Map(live.map((q) => [q.ticker.toUpperCase(), q]));

  const quotes = funds.map((f) => {
    const q = byTicker.get(f.ticker.toUpperCase());
    if (q) {
      return {
        ticker: f.ticker,
        price: q.price,
        previousClose: q.previousClose,
        change: q.change,
        changePercent: q.changePercent,
        nav: f.nav,
        currency: q.currency,
        asOf: q.asOf,
        exchange: q.exchange,
        source: q.source,
        live: true as const,
      };
    }

    return {
      ticker: f.ticker,
      price: f.price,
      previousClose: null,
      change: null,
      changePercent: null,
      nav: f.nav,
      currency: "USD",
      asOf: f.priceAsOf,
      exchange: f.exchange,
      source: "static-fallback",
      live: false as const,
    };
  });

  return NextResponse.json({
    quotes,
    fetchedAt: new Date().toISOString(),
    source: "yahoo-finance",
  });
}
