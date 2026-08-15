"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import type { SectorWeight } from "@/data/funds";
import { colorForSector } from "@/data/funds";

type Props = {
  sectors: SectorWeight[];
  title?: string;
  subtitle?: string;
};

function SectorTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: Array<{ name: string; value: number; payload: SectorWeight }>;
}) {
  if (!active || !payload?.length) return null;
  const item = payload[0];
  return (
    <div className="sector-tooltip">
      <div className="sector-tooltip__name">{item.name}</div>
      <div className="sector-tooltip__value">{item.value.toFixed(1)}% of portfolio</div>
    </div>
  );
}

export function SectorPieChart({
  sectors,
  title = "Sector exposure",
  subtitle = "Hover a slice to see the sector",
}: Props) {
  const data = sectors.map((s) => ({
    name: s.name,
    value: s.percentage,
  }));

  return (
    <div className="pie-panel">
      <div className="pie-panel__header">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div className="pie-panel__body">
        <div className="pie-panel__chart">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius="52%"
                outerRadius="82%"
                paddingAngle={1.5}
                stroke="none"
                animationDuration={700}
                animationBegin={80}
              >
                {data.map((entry, i) => (
                  <Cell
                    key={entry.name}
                    fill={colorForSector(entry.name, i)}
                    className="pie-slice"
                  />
                ))}
              </Pie>
              <Tooltip content={<SectorTooltip />} />
            </PieChart>
          </ResponsiveContainer>
          <div className="pie-panel__center">
            <span>{sectors.length}</span>
            <small>sectors</small>
          </div>
        </div>
        <ul className="pie-legend">
          {sectors.map((s, i) => (
            <li key={s.name}>
              <span
                className="pie-legend__swatch"
                style={{ background: colorForSector(s.name, i) }}
              />
              <span className="pie-legend__name">{s.name}</span>
              <span className="pie-legend__pct">{s.percentage.toFixed(1)}%</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
