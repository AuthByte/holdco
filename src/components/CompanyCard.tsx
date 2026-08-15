"use client";

import { useState } from "react";
import type { CompanyProfile } from "@/data/companies";
import {
  formatHoldingValue,
  getCompanyFundExposures,
  type FundHoldingExposure,
} from "@/data/funds";
import { companyLogoSrc, fundLogoSrc } from "@/lib/logos";

type Props = {
  company: CompanyProfile;
  holdingPct?: number;
  sector?: string;
  onBack: () => void;
};

export function CompanyCard({ company, holdingPct, sector, onBack }: Props) {
  const src = companyLogoSrc(company.id);
  const [failed, setFailed] = useState(false);
  const exposures = getCompanyFundExposures(
    company.name,
    company.aliases ?? [],
  );
  const totalValue = exposures.reduce((sum, e) => sum + e.valueUsd, 0);

  return (
    <div className="company-card pie-panel">
      <div className="company-card__header">
        <div className="company-card__title-row">
          <div className="company-logo" aria-hidden>
            {src && !failed ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={src}
                alt=""
                width={48}
                height={48}
                className="brand-logo-img"
                onError={() => setFailed(true)}
              />
            ) : (
              <span>{company.name.slice(0, 1)}</span>
            )}
          </div>
          <div>
            <p className="company-card__eyebrow">Private company</p>
            <h2>{company.name}</h2>
            {sector ? <p className="company-card__sector">{sector}</p> : null}
          </div>
        </div>
        <button type="button" className="ghost-btn" onClick={onBack}>
          ← Sectors
        </button>
      </div>

      <p className="company-card__desc">{company.description}</p>

      <div className="company-card__stats">
        <div>
          <span>Founded</span>
          <strong>{company.founded}</strong>
        </div>
        <div>
          <span>Valuation</span>
          <strong>{company.valuation}</strong>
        </div>
        <div>
          <span>Latest round</span>
          <strong>{company.series}</strong>
        </div>
        {holdingPct !== undefined ? (
          <div>
            <span>This fund weight</span>
            <strong>{holdingPct.toFixed(2)}%</strong>
          </div>
        ) : null}
      </div>

      <div className="company-card__funds">
        <div className="company-card__funds-header">
          <h3>Fund holdings</h3>
          <p>
            {exposures.length} fund{exposures.length === 1 ? "" : "s"} · ~{" "}
            {formatHoldingValue(totalValue)} combined
          </p>
        </div>
        <ul className="company-fund-list">
          {exposures.map((e) => (
            <FundHoldingRow key={`${e.fundId}-${e.ticker}`} exposure={e} />
          ))}
        </ul>
      </div>

      <a
        className="company-card__link"
        href={company.website}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit website
        <span aria-hidden>↗</span>
      </a>

      <p className="company-card__note">
        Holding values use disclosed fair value when available (RVII), otherwise
        estimated from fund AUM × weight. Seed company valuations are often
        undisclosed; late-stage marks are from public reporting and may lag.
        Not investment advice.
      </p>
    </div>
  );
}

function FundHoldingRow({ exposure }: { exposure: FundHoldingExposure }) {
  const logo = fundLogoSrc(exposure.fundId) ?? fundLogoSrc(exposure.ticker);
  const [failed, setFailed] = useState(false);

  return (
    <li className="company-fund-list__item">
      <div className="company-fund-list__identity">
        <div className="company-fund-list__logo" aria-hidden>
          {logo && !failed ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={logo}
              alt=""
              width={28}
              height={28}
              className="brand-logo-img"
              onError={() => setFailed(true)}
            />
          ) : (
            <span>{exposure.ticker.slice(0, 2)}</span>
          )}
        </div>
        <div>
          <strong>{exposure.ticker}</strong>
          <span>{exposure.fundName}</span>
        </div>
      </div>
      <div className="company-fund-list__meta">
        <em>{formatHoldingValue(exposure.valueUsd)}</em>
        <span>
          {exposure.percentage.toFixed(2)}%
          {exposure.valueIsExact ? " · disclosed" : " · est."}
        </span>
      </div>
    </li>
  );
}
