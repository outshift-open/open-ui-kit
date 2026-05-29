/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";

export interface SwatchItem {
  token: string;
  value: string;
}

interface ColorPaletteSectionProps {
  title: string;
  swatches: SwatchItem[];
}

function isLight(hex: string): boolean {
  const c = hex.replace("#", "");
  const r = parseInt(c.substring(0, 2), 16);
  const g = parseInt(c.substring(2, 4), 16);
  const b = parseInt(c.substring(4, 6), 16);
  return r * 0.299 + g * 0.587 + b * 0.114 > 155;
}

function Swatch({ token, value }: SwatchItem) {
  const [copied, setCopied] = useState(false);
  const textColor = isLight(value) ? "#3C4551" : "#FFFFFF";

  function handleCopy() {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    });
  }

  return (
    <div
      onClick={handleCopy}
      title="Click to copy hex"
      style={{
        width: 200,
        flexShrink: 0,
        borderRadius: 8,
        overflow: "hidden",
        border: "1px solid rgba(0,0,0,0.07)",
        cursor: "pointer",
        transition: "transform 0.1s, box-shadow 0.1s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform =
          "translateY(-2px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 4px 12px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      <div style={{ background: value, height: 80 }} />
      <div
        style={{
          padding: "8px 10px 10px",
          background: value,
          borderTop: "1px solid rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: 11,
            color: textColor,
            lineHeight: "15px",
            marginBottom: 2,
          }}
        >
          {token}
        </div>
        <div
          style={{
            fontFamily: "'SF Mono', 'Fira Code', monospace",
            fontWeight: 400,
            fontSize: 10,
            color: textColor,
            opacity: copied ? 1 : 0.65,
            lineHeight: "14px",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
          }}
        >
          {copied ? "Copied!" : value}
        </div>
      </div>
    </div>
  );
}

export function ColorPaletteSection({
  title,
  swatches,
}: ColorPaletteSectionProps) {
  return (
    <div style={{ marginBottom: 56 }}>
      <h2
        style={{
          fontFamily: "'Sharp Sans', 'Sharp Sans No1', Inter, sans-serif",
          fontWeight: 700,
          fontSize: 20,
          marginBottom: 12,
          marginTop: 0,
          letterSpacing: "-0.01em",
        }}
      >
        {title}
        <span
          style={{
            fontWeight: 400,
            fontSize: 13,
            opacity: 0.45,
            marginLeft: 10,
          }}
        >
          {swatches.length} tokens
        </span>
      </h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
        {swatches.map((s) => (
          <Swatch key={s.token} token={s.token} value={s.value} />
        ))}
      </div>
    </div>
  );
}

export function paletteToSwatches(
  palette: Record<string | number, string>,
  prefix: string,
): SwatchItem[] {
  return Object.entries(palette).map(([key, value]) => ({
    token: `${prefix}-${key}`,
    value,
  }));
}
