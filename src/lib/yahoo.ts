export type YahooQuote = {
  ticker: string;
  price: number;
  previousClose: number | null;
  change: number | null;
  changePercent: number | null;
  currency: string;
  asOf: string;
  exchange: string | null;
  source: "yahoo-finance";
};

type ChartResponse = {
  chart?: {
    result?: Array<{
      meta?: {
        symbol?: string;
        currency?: string;
        regularMarketPrice?: number;
        chartPreviousClose?: number;
        previousClose?: number;
        regularMarketTime?: number;
        exchangeName?: string;
        fullExchangeName?: string;
      };
    }>;
    error?: { description?: string } | null;
  };
};

function formatAsOf(epochSeconds?: number): string {
  if (!epochSeconds) return new Date().toISOString();
  return new Date(epochSeconds * 1000).toLocaleString("en-US", {
    timeZone: "America/New_York",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  });
}

export async function fetchYahooQuote(
  ticker: string,
): Promise<YahooQuote | null> {
  const symbol = encodeURIComponent(ticker.toUpperCase());
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?interval=1d&range=1d`;

  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; Holdco/1.0)",
      Accept: "application/json",
    },
    next: { revalidate: 60 },
  });

  if (!res.ok) return null;

  const data = (await res.json()) as ChartResponse;
  const meta = data.chart?.result?.[0]?.meta;
  const price = meta?.regularMarketPrice;
  if (price == null || !Number.isFinite(price)) return null;

  const previousClose =
    meta?.chartPreviousClose ?? meta?.previousClose ?? null;
  const change =
    previousClose != null ? Number((price - previousClose).toFixed(4)) : null;
  const changePercent =
    previousClose != null && previousClose !== 0
      ? Number((((price - previousClose) / previousClose) * 100).toFixed(2))
      : null;

  return {
    ticker: (meta?.symbol ?? ticker).toUpperCase(),
    price,
    previousClose,
    change,
    changePercent,
    currency: meta?.currency ?? "USD",
    asOf: formatAsOf(meta?.regularMarketTime),
    exchange: meta?.fullExchangeName ?? meta?.exchangeName ?? null,
    source: "yahoo-finance",
  };
}

export async function fetchYahooQuotes(
  tickers: string[],
): Promise<YahooQuote[]> {
  const results = await Promise.all(
    tickers.map(async (ticker) => {
      try {
        return await fetchYahooQuote(ticker);
      } catch {
        return null;
      }
    }),
  );
  return results.filter((q): q is YahooQuote => q != null);
}
