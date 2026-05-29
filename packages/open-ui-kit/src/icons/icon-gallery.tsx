/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";

interface IconTileProps {
  name: string;
  Icon: React.ComponentType<{ fill?: string; color?: string }>;
}

function IconTile({ name, Icon }: IconTileProps) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(name).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    });
  }

  return (
    <div
      onClick={handleCopy}
      title={`Click to copy: ${name}`}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        padding: "16px 8px 12px",
        width: 96,
        borderRadius: 8,
        cursor: "pointer",
        border: "1px solid transparent",
        transition: "background 0.1s, border-color 0.1s",
        background: copied ? "#e6f7f0" : "transparent",
        borderColor: copied ? "#a3d9bf" : "transparent",
      }}
      onMouseEnter={(e) => {
        if (!copied) {
          const el = e.currentTarget as HTMLDivElement;
          el.style.background = "rgba(128,128,128,0.07)";
          el.style.borderColor = "rgba(128,128,128,0.15)";
        }
      }}
      onMouseLeave={(e) => {
        if (!copied) {
          const el = e.currentTarget as HTMLDivElement;
          el.style.background = "transparent";
          el.style.borderColor = "transparent";
        }
      }}
    >
      <div
        style={{
          width: 24,
          height: 24,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Icon />
      </div>
      <span
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: 10,
          lineHeight: "13px",
          textAlign: "center",
          opacity: copied ? 1 : 0.5,
          color: copied ? "#1a7a4a" : "inherit",
          wordBreak: "break-word",
          maxWidth: "100%",
        }}
      >
        {copied ? "Copied!" : name}
      </span>
    </div>
  );
}

interface IconSectionProps {
  title: string;
  description?: string;
  icons: [string, React.ComponentType<{ fill?: string; color?: string }>][];
}

export function IconSection({ title, description, icons }: IconSectionProps) {
  return (
    <div style={{ marginBottom: 48 }}>
      <div
        style={{
          borderTop: "2px solid rgba(128,128,128,0.2)",
          paddingTop: 20,
          marginBottom: 16,
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
          <span
            style={{
              fontWeight: 400,
              fontSize: 13,
              opacity: 0.4,
              marginLeft: 10,
            }}
          >
            {icons.length} icons
          </span>
        </h2>
        {description && (
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 13,
              opacity: 0.5,
              margin: 0,
              lineHeight: "18px",
            }}
          >
            {description}
          </p>
        )}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
        {icons.map(([name, Icon]) => (
          <IconTile key={name} name={name} Icon={Icon} />
        ))}
      </div>
    </div>
  );
}

interface IconGalleryViewProps {
  allIcons: Record<
    string,
    React.ComponentType<{ fill?: string; color?: string }>
  >;
}

const CLOUD_PREFIXES = [
  "AWS",
  "Azure",
  "AZURE",
  "GCP",
  "Oracle",
  "OCI",
  "Kube",
  "KUB",
];

function isCloudIcon(name: string) {
  return CLOUD_PREFIXES.some((p) => name.startsWith(p));
}

export function IconGalleryView({ allIcons }: IconGalleryViewProps) {
  const [search, setSearch] = useState("");

  const entries = Object.entries(allIcons) as [
    string,
    React.ComponentType<{ fill?: string; color?: string }>,
  ][];

  const filtered = search
    ? entries.filter(([name]) =>
        name.toLowerCase().includes(search.toLowerCase()),
      )
    : null;

  const systemIcons = entries.filter(([name]) => !isCloudIcon(name));
  const cloudIcons = entries.filter(([name]) => isCloudIcon(name));

  return (
    <div>
      <div style={{ marginBottom: 40, position: "relative" }}>
        <input
          type="text"
          placeholder="Search icons…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "10px 16px",
            fontFamily: "Inter, sans-serif",
            fontSize: 14,
            borderRadius: 8,
            border: "1px solid rgba(128,128,128,0.3)",
            background: "transparent",
            outline: "none",
          }}
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            style={{
              position: "absolute",
              right: 12,
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: 16,
              opacity: 0.4,
              padding: 0,
              lineHeight: 1,
            }}
          >
            ✕
          </button>
        )}
      </div>

      {filtered ? (
        <IconSection
          title={`Search results for "${search}"`}
          icons={filtered}
        />
      ) : (
        <>
          <IconSection
            title="General System Icons"
            description="UI and navigation icons used across the product."
            icons={systemIcons}
          />
          <IconSection
            title="Feature & Cloud Icons"
            description="Cloud provider, service, and security feature icons."
            icons={cloudIcons}
          />
        </>
      )}
    </div>
  );
}
