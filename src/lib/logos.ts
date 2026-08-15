import logoManifest from "@/data/logo-manifest.json";

export function fundLogoSrc(tickerOrId: string): string | null {
  const key = tickerOrId.toLowerCase();
  return logoManifest.funds[key as keyof typeof logoManifest.funds] ?? null;
}

export function companyLogoSrc(companyId: string): string | null {
  return (
    logoManifest.companies[companyId as keyof typeof logoManifest.companies] ??
    null
  );
}
