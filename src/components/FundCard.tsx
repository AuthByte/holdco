import type { Fund } from "@/data/funds";
import { premiumToNav } from "@/data/funds";
import type { FundQuote } from "@/hooks/useFundQuotes";
import { FundLogo } from "./FundLogo";

type Props = {
  fund: Fund;
  quote?: FundQuote;
  selected?: boolean;
  onSelect: (ticker: string) => void;
};

function formatMoney(n: number) {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function FundCard({ fund, quote, selected, onSelect }: Props) {
  const price = quote?.price ?? fund.price;
  const premium = premiumToNav(price, fund.nav);
  const pending = fund.status === "ipo_pending";
  const changePct = quote?.changePercent;

  return (
    <button
      type="button"
      className={`fund-card${selected ? " fund-card--selected" : ""}${pending ? " fund-card--pending" : ""}`}
      onClick={() => onSelect(fund.ticker)}
      aria-pressed={selected}
    >
      <div className="fund-card__top">
        <FundLogo fund={fund} size={44} />
        <div className="fund-card__identity">
          <div className="fund-card__ticker-row">
            <span className="fund-card__ticker">{fund.ticker}</span>
            {pending ? (
              <span className="fund-card__badge">IPO pending</span>
            ) : fund.exchange.toLowerCase().includes("interval") ? (
              <span className="fund-card__badge fund-card__badge--muted">
                Interval
              </span>
            ) : (
              <span className="fund-card__exchange">{fund.exchange}</span>
            )}
          </div>
          <div className="fund-card__name">{fund.name}</div>
        </div>
      </div>

      <div className="fund-card__metrics">
        <div>
          <span className="label">
            Price
            {quote?.live ? (
              <em className="label-live" title={quote.asOf}>
                live
              </em>
            ) : null}
          </span>
          <strong>{formatMoney(price)}</strong>
          {changePct != null ? (
            <small
              className={
                changePct > 0
                  ? "text-premium"
                  : changePct < 0
                    ? "text-discount"
                    : undefined
              }
            >
              {changePct > 0 ? "+" : ""}
              {changePct.toFixed(2)}%
            </small>
          ) : null}
        </div>
        <div>
          <span className="label">NAV</span>
          <strong>{formatMoney(fund.nav)}</strong>
        </div>
        <div>
          <span className="label">Expense</span>
          <strong>{fund.expenseRatio.toFixed(2)}%</strong>
        </div>
        <div>
          <span className="label">Premium</span>
          <strong
            className={
              premium !== null && premium > 0
                ? "text-premium"
                : premium !== null && premium < 0
                  ? "text-discount"
                  : undefined
            }
          >
            {premium === null
              ? "—"
              : `${premium > 0 ? "+" : ""}${premium}%`}
          </strong>
        </div>
      </div>

      <div className="fund-card__footer">
        <span>{fund.aum} AUM</span>
        <span className="fund-card__cta">{selected ? "Viewing" : "Holdings →"}</span>
      </div>
    </button>
  );
}
