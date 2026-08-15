"use client";

import { useMemo, useState, useTransition } from "react";
import {
  aggregateSectorExposure,
  funds,
  getFundByTicker,
} from "@/data/funds";
import { useFundQuotes } from "@/hooks/useFundQuotes";
import { FundCard } from "./FundCard";
import { FundDetail } from "./FundDetail";
import { SectorPieChart } from "./SectorPieChart";

export function Dashboard() {
  const [selectedTicker, setSelectedTicker] = useState<string | null>(null);
  const [, startTransition] = useTransition();
  const { quotes, status: quoteStatus, fetchedAt } = useFundQuotes();

  const selected = selectedTicker
    ? getFundByTicker(selectedTicker) ?? null
    : null;
  const selectedQuote = selected
    ? quotes[selected.ticker.toUpperCase()]
    : undefined;

  const overviewSectors = useMemo(
    () => aggregateSectorExposure(funds),
    [],
  );

  const handleSelect = (ticker: string) => {
    startTransition(() => {
      setSelectedTicker((prev) => (prev === ticker ? prev : ticker));
    });
  };

  const handleClose = () => {
    startTransition(() => setSelectedTicker(null));
  };

  const liveCount = Object.values(quotes).filter((q) => q.live).length;

  return (
    <div className="dashboard">
      <header className="site-header">
        <div className="brand">
          <span className="brand__mark" aria-hidden>
            ◈
          </span>
          <div>
            <p className="brand__name">Holdco</p>
            <p className="brand__tag">Public wrappers for private companies</p>
          </div>
        </div>
        <p className="site-header__aside">
          Track expense ratios, NAV, and portfolio exposure across listed private-market
          funds.
          {quoteStatus === "ready" && liveCount > 0 ? (
            <>
              {" "}
              Prices via Yahoo Finance
              {fetchedAt
                ? ` · updated ${new Date(fetchedAt).toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                  })}`
                : null}
              .
            </>
          ) : null}
        </p>
      </header>

      <section className="intro">
        <h1>
          Private markets,
          <em> publicly traded.</em>
        </h1>
        <p>
          Compare RVI, RVII, DXYZ, VCX, and ARKVX — closed-end and interval funds that
          hold stakes in private companies. Select a fund for full holdings.
        </p>
      </section>

      <section className="fund-rail" aria-label="Funds">
        {funds.map((fund, i) => (
          <div
            key={fund.id}
            className="fund-rail__item"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <FundCard
              fund={fund}
              quote={quotes[fund.ticker.toUpperCase()]}
              selected={selectedTicker === fund.ticker}
              onSelect={handleSelect}
            />
          </div>
        ))}
      </section>

      {!selected ? (
        <section className="overview-grid">
          <SectorPieChart
            sectors={overviewSectors}
            title="Where these funds invest"
            subtitle="Equal-weight average sector mix across listed funds — hover a color"
          />
          <div className="overview-copy">
            <h2>Sector lens</h2>
            <p>
              Before drilling into a single fund, this chart shows how the category as a
              whole allocates across AI, aerospace, fintech, data infrastructure, and cash.
            </p>
            <ul>
              <li>Click any fund card to open holdings by percentage.</li>
              <li>Click a private company to see valuation, series, and website.</li>
              <li>Market prices refresh from Yahoo Finance about every minute.</li>
            </ul>
            <div className="overview-keys">
              {funds.map((f) => (
                <button
                  key={f.ticker}
                  type="button"
                  className="chip"
                  onClick={() => handleSelect(f.ticker)}
                >
                  {f.ticker}
                </button>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <FundDetail
          fund={selected}
          quote={selectedQuote}
          onClose={handleClose}
        />
      )}
    </div>
  );
}
