import * as React from "react";
import {
  AnchorLinkMenu,
  type AnchorLinkMenuItem,
  ThemeProvider,
} from "@open-ui-kit/core";

const items: AnchorLinkMenuItem[] = [
  { id: "overview", label: "Overview" },
  { id: "overview-install", label: "Install", subsection: true },
  { id: "overview-theme", label: "Theme", subsection: true },
  { id: "components", label: "Components" },
  { id: "components-inputs", label: "Inputs", subsection: true },
  { id: "components-feedback", label: "Feedback", subsection: true },
  { id: "release", label: "Release notes" },
];

export default function AnchorLinkMenuSubsections() {
  return (
    <ThemeProvider>
      <div style={{ width: 260 }}>
        <AnchorLinkMenu
          items={items}
          selectedId="components-feedback"
          title="Contents"
        />
      </div>
    </ThemeProvider>
  );
}
