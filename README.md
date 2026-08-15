# Holdco

Dashboard for publicly traded funds that hold private companies — **RVI**, **RVII**, **DXYZ**, **VCX**, and **ARKVX**.

## Features

- Fund cards with logos, expense ratios, NAV, market price (placeholder), and premium/discount to NAV
- Overview sector pie chart (hover for sector labels) before selecting a fund
- Fund detail view with full holdings by percentage, sourced from fund sites and SEC filings
- `/api/quotes` stub ready for a live price API

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Data notes

Holdings and NAVs are compiled from public disclosures (Robinhood, Destiny, Fundrise, ARK, SEC filings) and may lag current marks. Market prices are static placeholders until a quote API is connected.
