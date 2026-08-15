"use client";

import { useState } from "react";
import type { Fund } from "@/data/funds";
import { fundLogoSrc } from "@/lib/logos";

type Props = {
  fund: Fund;
  size?: number;
};

export function FundLogo({ fund, size = 40 }: Props) {
  const src = fundLogoSrc(fund.id) ?? fundLogoSrc(fund.ticker);
  const [failed, setFailed] = useState(false);

  return (
    <div
      className="fund-logo"
      style={{
        width: size,
        height: size,
        background: failed || !src ? fund.logoColor : "rgba(255,255,255,0.06)",
        fontSize: size * 0.28,
      }}
      aria-hidden
    >
      {src && !failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt=""
          width={size}
          height={size}
          className="brand-logo-img"
          onError={() => setFailed(true)}
        />
      ) : (
        fund.ticker.slice(0, 3)
      )}
    </div>
  );
}
