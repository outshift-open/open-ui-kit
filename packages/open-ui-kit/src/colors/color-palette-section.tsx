/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import {
  grey0,
  grey500,
  surfaceDark900,
  surfaceLight50,
  surfaceLight100,
} from "@/theme/style/color-palette";

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

function tokenTextColor(token: string, value: string): string {
  const suffix = token.split("-").pop() ?? "";
  const numericSuffix = Number(suffix.replace("%", ""));

  if (
    token.startsWith("green-") ||
    token.startsWith("light-blue-") ||
    token.startsWith("light-orange-") ||
    token.startsWith("yellow-")
  ) {
    return surfaceDark900;
  }

  if (token.startsWith("teal-") && numericSuffix >= 700) {
    return surfaceLight100;
  }

  if (token.startsWith("lavender-") && numericSuffix >= 700) {
    return grey0;
  }

  if (token.startsWith("pink-") && numericSuffix >= 600) {
    return surfaceLight100;
  }

  return isLight(value) ? surfaceDark900 : surfaceLight50;
}

function formatTokenKey(key: string, prefix: string) {
  if (key === "alpha40" || (prefix === "green" && key === "40")) {
    return "40%";
  }

  if (key === "alpha10" || (prefix === "green" && key === "10")) {
    return "10%";
  }

  return key;
}

function swatchOrder(key: string, prefix: string) {
  const alphaOrder = [
    "0",
    "50",
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "40",
    "10",
    "alpha40",
    "alpha10",
  ];
  const rampOrder = [
    "0",
    "10",
    "50",
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ];
  const order = prefix === "green" ? alphaOrder : rampOrder;

  const index = order.indexOf(key);
  return index === -1 ? order.length : index;
}

function Swatch({ token, value }: SwatchItem) {
  const [copied, setCopied] = useState(false);
  const textColor = tokenTextColor(token, value);

  function handleCopy() {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    });
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={`Copy ${token} ${value}`}
      title="Click to copy hex"
      style={{
        width: "100%",
        border: 0,
        height: 50,
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        paddingLeft: 24,
        overflow: "hidden",
        background: value,
        cursor: "pointer",
        transition: "filter 0.12s ease",
        appearance: "none",
        textAlign: "left",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.filter =
          "brightness(0.98)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.filter = "none";
      }}
    >
      <div>
        <div
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: 14,
            color: textColor,
            lineHeight: "20px",
          }}
        >
          {token}
        </div>
        <div
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: 11,
            color: textColor,
            opacity: copied ? 1 : 0.68,
            lineHeight: "14px",
            textTransform: "uppercase",
            letterSpacing: 0,
          }}
        >
          {copied ? "Copied!" : value}
        </div>
      </div>
    </button>
  );
}

export function ColorPaletteSection({
  title,
  swatches,
}: ColorPaletteSectionProps) {
  return (
    <div style={{ width: "100%", maxWidth: 248 }}>
      <div
        role="heading"
        aria-level={3}
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          marginBottom: 16,
          marginTop: 0,
          lineHeight: "20px",
          color: grey500,
        }}
      >
        {title}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
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
  return Object.entries(palette)
    .sort(
      ([left], [right]) =>
        swatchOrder(left, prefix) - swatchOrder(right, prefix),
    )
    .map(([key, value]) => ({
      token: `${prefix}-${formatTokenKey(key, prefix)}`,
      value,
    }));
}
