/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { grey0, grey500, surfaceDark900 } from "@/theme/style/color-palette";

interface GradientSwatchProps {
  name: string;
  value: string;
}

function GradientSwatch({ name, value }: GradientSwatchProps) {
  const [copied, setCopied] = useState(false);
  const textColor =
    name === "light" || name === "gradient-bg-light" ? surfaceDark900 : grey0;

  function handleCopy() {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    });
  }

  return (
    <div
      onClick={handleCopy}
      title="Click to copy value"
      style={{
        width: "100%",
        maxWidth: 248,
        height: 50,
        flexShrink: 0,
        overflow: "hidden",
        boxSizing: "border-box",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        paddingLeft: 24,
        background: value,
        transition: "filter 0.12s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.filter = "brightness(0.98)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.filter = "none";
      }}
    >
      <div
        style={{
          color: textColor,
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          letterSpacing: 0,
          lineHeight: "20px",
        }}
      >
        {copied ? "Copied!" : name}
      </div>
    </div>
  );
}

interface GradientSectionProps {
  title: string;
  entries: [string, string][];
}

export function GradientSection({ title, entries }: GradientSectionProps) {
  return (
    <div style={{ width: "100%", maxWidth: 248 }}>
      <div
        role="heading"
        aria-level={3}
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          letterSpacing: 0,
          marginBottom: 18,
          marginTop: 0,
          lineHeight: "20px",
          color: grey500,
        }}
      >
        {title}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {entries.map(([name, value]) => (
          <GradientSwatch key={name} name={name} value={value} />
        ))}
      </div>
    </div>
  );
}
