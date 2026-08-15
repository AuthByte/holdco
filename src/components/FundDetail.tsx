"use client";

import { useEffect, useState } from "react";
import type { Fund, Holding } from "@/data/funds";
import { premiumToNav, sectorsForFund } from "@/data/funds";
import {
  getCompanyByHoldingName,
  isSelectableHolding,
} from "@/data/companies";
import type { FundQuote } from "@/hooks/useFundQuotes";
import { FundLogo } from "./FundLogo";
import { SectorPieChart } from "./SectorPieChart";
import { CompanyCard } from "./CompanyCard";
import { HoldingLogo } from "./HoldingLogo";

type Props = {
  fund: Fund;
  quote?: FundQuote;
  onClose: () => void;
};

function formatMoney(n: number) {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function FundDetail({ fund, quote, onClose }: Props) {
  const [selectedHolding, setSelectedHolding] = useState<Holding | null>(null);
  const price = quote?.price ?? fund.price;
  const priceHint = quote?.live
    ? `Yahoo Finance · ${quote.asOf}`
    : fund.priceAsOf;
  const premium = premiumToNav(price, fund.nav);
  const sectors = sectorsForFund(fund);
  const maxPct = Math.max(...fund.holdings.map((h) => h.percentage), 1);
  const company = selectedHolding
    ? getCompanyByHoldingName(selectedHolding.name)
    : null;

  useEffect(() => {
    setSelectedHolding(null);
  }, [fund.ticker]);

  return (
    <section className="fund-detail" aria-labelledby="fund-detail-title">
      <div className="fund-detail__header">
        <div className="fund-detail__identity">
          <FundLogo fund={fund} size={56} />
          <div>
            <p className="fund-detail__eyebrow">
              {fund.manager} · {fund.structure}
            </p>
            <h2 id="fund-detail-title">
              {fund.ticker}
              <span>{fund.name}</span>
            </h2>
          </div>
        </div>
        <button type="button" className="ghost-btn" onClick={onClose}>
          ← All funds
        </button>
      </div>

      <p className="fund-detail__desc">{fund.description}</p>

      <div className="stat-grid">
        <Stat
          label="Market price"
          value={formatMoney(price)}
          hint={
            quote?.changePercent != null
              ? `${quote.changePercent > 0 ? "+" : ""}${quote.changePercent.toFixed(2)}% day · ${priceHint}`
              : priceHint
          }
        />
        <Stat label="NAV / share" value={formatMoney(fund.nav)} hint={`As of ${fund.navDate}`} />
        <Stat
          label="Premium / discount"
          value={
            premium === null ? "—" : `${premium > 0 ? "+" : ""}${premium}%`
          }
          hint="Price vs NAV"
          tone={premium !== null && premium > 50 ? "warn" : undefined}
        />
        <Stat
          label="Expense ratio"
          value={`${fund.expenseRatio.toFixed(2)}%`}
          hint={`Mgmt fee ${fund.managementFee.toFixed(2)}%`}
        />
        <Stat label="AUM" value={fund.aum} hint={fund.exchange} />
        <Stat
          label="Inception / listing"
          value={fund.inception}
          hint={fund.status === "ipo_pending" ? "Expected" : "Listed"}
        />
      </div>

      {fund.expenseNote ? (
        <p className="fund-detail__note">{fund.expenseNote}</p>
      ) : null}

      <div className="fund-detail__split">
        <div className="holdings-panel">
          <div className="holdings-panel__header">
            <h3>Holdings</h3>
            <p>
              As of {fund.holdingsAsOf} · Click a company for details ·{" "}
              {fund.holdingsSource}
            </p>
          </div>
          <ul className="holdings-list">
            {fund.holdings.map((h) => {
              const selectable = isSelectableHolding(h.name);
              const active = selectedHolding?.name === h.name;
              return (
                <li key={`${h.name}-${h.sector}`}>
                  {selectable ? (
                    <button
                      type="button"
                      className={`holdings-list__btn${active ? " holdings-list__btn--active" : ""}`}
                      onClick={() =>
                        setSelectedHolding((prev) =>
                          prev?.name === h.name ? null : h,
                        )
                      }
                    >
                      <HoldingRow holding={h} maxPct={maxPct} clickable />
                    </button>
                  ) : (
                    <div className="holdings-list__static">
                      <HoldingRow holding={h} maxPct={maxPct} />
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {company && selectedHolding ? (
          <CompanyCard
            company={company}
            holdingPct={selectedHolding.percentage}
            sector={selectedHolding.sector}
            onBack={() => setSelectedHolding(null)}
          />
        ) : (
          <SectorPieChart
            sectors={sectors}
            title={`${fund.ticker} sectors`}
            subtitle="Hover a color for sectors — or click a holding for company details"
          />
        )}
      </div>

      <p className="fund-detail__disclaimer">
        Holdings and NAVs are compiled from fund websites and SEC filings and may lag
        current marks. Market prices from Yahoo Finance (refreshed about every minute)
        when available. Not investment advice.
      </p>
    </section>
  );
}

function HoldingRow({
  holding,
  maxPct,
  clickable,
}: {
  holding: Holding;
  maxPct: number;
  clickable?: boolean;
}) {
  const company = getCompanyByHoldingName(holding.name);

  return (
    <>
      <div className="holdings-list__row">
        <div className="holdings-list__identity">
          <HoldingLogo
            companyId={company?.id}
            name={holding.name}
          />
          <div>
            <strong>
              {holding.name}
              {clickable ? (
                <span className="holdings-list__hint">View</span>
              ) : null}
            </strong>
            <span>{holding.sector}</span>
          </div>
        </div>
        <em>{holding.percentage.toFixed(2)}%</em>
      </div>
      <div className="holdings-list__bar" aria-hidden>
        <span style={{ width: `${(holding.percentage / maxPct) * 100}%` }} />
      </div>
    </>
  );
}

function Stat({
  label,
  value,
  hint,
  tone,
}: {
  label: string;
  value: string;
  hint?: string;
  tone?: "warn";
}) {
  return (
    <div className={`stat${tone ? ` stat--${tone}` : ""}`}>
      <span>{label}</span>
      <strong>{value}</strong>
      {hint ? <small>{hint}</small> : null}
    </div>
  );
}
