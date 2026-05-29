/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { TextEncoder, TextDecoder } from "util";
Object.assign(global, { TextEncoder, TextDecoder });

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import GridViewIcon from "@mui/icons-material/GridView";
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { Breadcrumbs } from "../components/breadcrumbs";
import { IconPosition } from "@/common";

const items3 = [
  { text: "Level 1 Page", link: "/level1" },
  { text: "Level 2 Page", link: "/level1/level2" },
  { text: "Level 3 Page", link: "/level1/level2/level3" },
];

const items5 = [
  { text: "Level 1 Page", link: "/level1" },
  { text: "Level 2 Page", link: "/level1/level2" },
  { text: "Level 3 Page", link: "/level1/level2/level3" },
  { text: "Level 4 Page", link: "/level1/level2/level3/level4" },
  { text: "Level 5 Page", link: "/level1/level2/level3/level4/level5" },
];

const renderBreadcrumbs = (
  props: React.ComponentProps<typeof Breadcrumbs>,
  dark = false,
) =>
  render(
    <MemoryRouter>
      <ThemeProvider defaultDarkMode={dark}>
        <Breadcrumbs {...props} />
      </ThemeProvider>
    </MemoryRouter>,
  );

describe("Breadcrumbs", () => {
  describe("rendering", () => {
    it("renders all item labels", () => {
      renderBreadcrumbs({ items: items3 });
      expect(screen.getByText("Level 1 Page")).toBeInTheDocument();
      expect(screen.getByText("Level 2 Page")).toBeInTheDocument();
      expect(screen.getByText("Level 3 Page")).toBeInTheDocument();
    });

    it("renders with a single item", () => {
      renderBreadcrumbs({ items: [{ text: "Level 1 Page", link: "/level1" }] });
      expect(screen.getByText("Level 1 Page")).toBeInTheDocument();
    });

    it("renders breadcrumb nav with aria-label", () => {
      renderBreadcrumbs({ items: items3 });
      expect(
        screen.getByRole("navigation", { name: "breadcrumb" }),
      ).toBeInTheDocument();
    });

    it("preserves pass-through MUI breadcrumb props", () => {
      renderBreadcrumbs({
        items: items3,
        "aria-label": "page trail",
        separator: "/",
      });

      expect(
        screen.getByRole("navigation", { name: "page trail" }),
      ).toBeInTheDocument();
      expect(screen.getAllByText("/")).toHaveLength(2);
    });

    it("merges collapsed icon slot props", () => {
      renderBreadcrumbs({
        items: items5,
        maximumNumberOfVisibleBreadcrumbs: 2,
        slotProps: {
          collapsedIcon: () => ({ "data-testid": "collapsed-icon" }),
        },
      });

      expect(screen.getByTestId("collapsed-icon")).toBeInTheDocument();
    });
  });

  describe("collapse / responsive behavior", () => {
    it("collapses when items exceed maximumNumberOfVisibleBreadcrumbs", () => {
      renderBreadcrumbs({
        items: items5,
        maximumNumberOfVisibleBreadcrumbs: 2,
      });
      expect(screen.getByText("Level 1 Page")).toBeInTheDocument();
      expect(screen.getByText("Level 5 Page")).toBeInTheDocument();
      expect(screen.queryByText("Level 3 Page")).not.toBeInTheDocument();
    });

    it("shows all items when count is within limit", () => {
      renderBreadcrumbs({
        items: items3,
        maximumNumberOfVisibleBreadcrumbs: 4,
      });
      items3.forEach(({ text }) =>
        expect(screen.getByText(text)).toBeInTheDocument(),
      );
    });
  });

  describe("with icons", () => {
    it("renders without throwing when items have icons", () => {
      const iconItems = [
        {
          text: "Level 1 Page",
          link: "/level1",
          Icon: GridViewIcon,
          iconPosition: IconPosition.LeftIcon,
        },
        {
          text: "Level 2 Page",
          link: "/level1/level2",
          Icon: GridViewIcon,
          iconPosition: IconPosition.LeftIcon,
        },
      ];
      expect(() => renderBreadcrumbs({ items: iconItems })).not.toThrow();
    });
  });

  describe("light theme token coverage", () => {
    it("renders in light mode without throwing", () => {
      expect(() => renderBreadcrumbs({ items: items3 })).not.toThrow();
    });

    it("renders 5-level breadcrumbs in light mode without throwing", () => {
      expect(() => renderBreadcrumbs({ items: items5 })).not.toThrow();
    });
  });

  describe("dark theme token coverage", () => {
    it("renders in dark mode without throwing", () => {
      expect(() => renderBreadcrumbs({ items: items3 }, true)).not.toThrow();
    });

    it("renders 5-level breadcrumbs in dark mode without throwing", () => {
      expect(() => renderBreadcrumbs({ items: items5 }, true)).not.toThrow();
    });
  });
});
