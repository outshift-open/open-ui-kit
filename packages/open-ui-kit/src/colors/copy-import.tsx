/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";

interface CopyImportProps {
  code: string;
}

export function CopyImport({ code }: CopyImportProps) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "6px 10px 6px 12px",
        borderRadius: 6,
        border: "1px solid rgba(128,128,128,0.2)",
        marginBottom: 48,
        maxWidth: "100%",
      }}
    >
      <span
        style={{
          fontFamily: "'SF Mono', 'Fira Code', monospace",
          fontSize: 12,
          opacity: 0.75,
          lineHeight: "18px",
          userSelect: "all",
        }}
      >
        {code}
      </span>
      <button
        onClick={handleCopy}
        title={copied ? "Copied!" : "Copy import"}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          padding: "3px 8px",
          borderRadius: 4,
          border: `1px solid ${copied ? "rgba(0,185,141,0.4)" : "rgba(128,128,128,0.35)"}`,
          background: copied ? "rgba(0,185,141,0.1)" : "rgba(128,128,128,0.06)",
          cursor: "pointer",
          fontSize: 11,
          fontFamily: "Inter, sans-serif",
          fontWeight: 500,
          color: copied ? "#00b98d" : "inherit",
          transition: "all 0.15s",
          whiteSpace: "nowrap",
          flexShrink: 0,
        }}
        onMouseEnter={(e) => {
          if (!copied) {
            (e.currentTarget as HTMLButtonElement).style.background =
              "rgba(128,128,128,0.12)";
            (e.currentTarget as HTMLButtonElement).style.borderColor =
              "rgba(128,128,128,0.5)";
          }
        }}
        onMouseLeave={(e) => {
          if (!copied) {
            (e.currentTarget as HTMLButtonElement).style.background =
              "rgba(128,128,128,0.06)";
            (e.currentTarget as HTMLButtonElement).style.borderColor =
              "rgba(128,128,128,0.35)";
          }
        }}
      >
        {copied ? (
          <>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 6l3 3 5-5"
                stroke="#00b98d"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Copied
          </>
        ) : (
          <>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <rect
                x="4.5"
                y="1.5"
                width="6"
                height="7.5"
                rx="1"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="M1.5 4.5H3v5.5a.5.5 0 0 0 .5.5H8v1.5H3a1.5 1.5 0 0 1-1.5-1.5V4.5Z"
                fill="currentColor"
                opacity="0.6"
              />
            </svg>
            Copy
          </>
        )}
      </button>
    </div>
  );
}
