"use client";

import { useState } from "react";
import { companyLogoSrc } from "@/lib/logos";

type Props = {
  companyId?: string;
  name: string;
};

export function HoldingLogo({ companyId, name }: Props) {
  const src = companyId ? companyLogoSrc(companyId) : null;
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className="holding-logo holding-logo--empty" aria-hidden>
        {name.slice(0, 1)}
      </div>
    );
  }

  return (
    <div className="holding-logo" aria-hidden>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        width={28}
        height={28}
        className="brand-logo-img"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
