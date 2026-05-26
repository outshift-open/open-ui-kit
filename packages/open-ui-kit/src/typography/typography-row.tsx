/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";

interface TypographyVariant {
  token: string;
  label: string;
  fontFamily: string;
  fontWeight: number | string;
  fontSize: string;
  lineHeight: string;
  letterSpacing?: string;
  sample?: string;
}

interface TypographyRowProps {
  variant: TypographyVariant;
}

function MetaCell({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ minWidth: 90 }}>
      <div
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          fontSize: 10,
          lineHeight: "14px",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          opacity: 0.45,
          marginBottom: 2,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: "'SF Mono', 'Fira Code', monospace",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "16px",
          opacity: 0.75,
        }}
      >
        {value}
      </div>
    </div>
  );
}

function TypographyRow({ variant }: TypographyRowProps) {
  const [copied, setCopied] = useState(false);

  const {
    token,
    label,
    fontFamily,
    fontWeight,
    fontSize,
    lineHeight,
    letterSpacing,
    sample,
  } = variant;

  const sampleText = sample ?? label;

  const sampleStyle: React.CSSProperties = {
    fontFamily,
    fontWeight: fontWeight as number,
    fontSize,
    lineHeight,
    letterSpacing: letterSpacing ?? "normal",
    margin: 0,
    flex: "1 1 260px",
    minWidth: 0,
    wordBreak: "break-word",
  };

  function handleCopy() {
    navigator.clipboard.writeText(token).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    });
  }

  const shortFamily = fontFamily.split(",")[0].replace(/'/g, "").trim();
  const weightLabel = String(fontWeight);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 32,
        padding: "20px 0",
        borderBottom: "1px solid rgba(128,128,128,0.12)",
        flexWrap: "wrap",
      }}
    >
      <p style={sampleStyle}>{sampleText}</p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 24,
          flexShrink: 0,
          flexWrap: "wrap",
        }}
      >
        <MetaCell label="Token" value={token} />
        <MetaCell label="Family" value={shortFamily} />
        <MetaCell label="Weight" value={weightLabel} />
        <MetaCell label="Size" value={fontSize} />
        <MetaCell label="Line" value={lineHeight} />
        {letterSpacing && <MetaCell label="Tracking" value={letterSpacing} />}
        <button
          onClick={handleCopy}
          title="Copy token name"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 11,
            fontWeight: 500,
            padding: "4px 10px",
            borderRadius: 4,
            border: "1px solid rgba(128,128,128,0.25)",
            background: copied ? "#e6f7f0" : "transparent",
            color: copied ? "#1a7a4a" : "inherit",
            cursor: "pointer",
            transition: "all 0.1s",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => {
            if (!copied) {
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "rgba(128,128,128,0.5)";
            }
          }}
          onMouseLeave={(e) => {
            if (!copied) {
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "rgba(128,128,128,0.25)";
            }
          }}
        >
          {copied ? "Copied!" : "Copy token"}
        </button>
      </div>
    </div>
  );
}

interface TypographySectionProps {
  title: string;
  description?: string;
  variants: TypographyVariant[];
}

export function TypographySection({
  title,
  description,
  variants,
}: TypographySectionProps) {
  return (
    <div style={{ marginBottom: 56 }}>
      <div
        style={{
          borderTop: "2px solid rgba(128,128,128,0.2)",
          paddingTop: 20,
          marginBottom: 4,
        }}
      >
        <h2
          style={{
            fontFamily: "'Sharp Sans', 'Sharp Sans No1', Inter, sans-serif",
            fontWeight: 700,
            fontSize: 20,
            margin: "0 0 4px",
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </h2>
        {description && (
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 13,
              lineHeight: "18px",
              opacity: 0.5,
              margin: "0 0 4px",
            }}
          >
            {description}
          </p>
        )}
      </div>
      {variants.map((v) => (
        <TypographyRow key={v.token} variant={v} />
      ))}
    </div>
  );
}

export type { TypographyVariant };
