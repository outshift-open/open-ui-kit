/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";

interface GradientSwatchProps {
  name: string;
  value: string;
}

function GradientSwatch({ name, value }: GradientSwatchProps) {
  const [copied, setCopied] = useState(false);

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
        width: 280,
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
      <div
        style={{ background: value, height: 96, borderRadius: "8px 8px 0 0" }}
      />
      <div
        style={{
          padding: "10px 12px",
          borderTop: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <div
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: 12,
            lineHeight: "16px",
            marginBottom: 4,
            textTransform: "capitalize",
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontFamily: "'SF Mono', 'Fira Code', monospace",
            fontSize: 9,
            opacity: copied ? 1 : 0.5,
            lineHeight: "14px",
            wordBreak: "break-all",
            letterSpacing: "0.02em",
          }}
        >
          {copied ? "Copied!" : value}
        </div>
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
          {entries.length} tokens
        </span>
      </h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
        {entries.map(([name, value]) => (
          <GradientSwatch key={name} name={name} value={value} />
        ))}
      </div>
    </div>
  );
}
