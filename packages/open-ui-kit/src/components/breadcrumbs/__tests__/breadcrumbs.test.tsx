/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { TextEncoder, TextDecoder } from "util";
Object.assign(global, { TextEncoder, TextDecoder });

import React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import GridViewIcon from "@mui/icons-material/GridView";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { darkVars } from "@/theme/dark/dark-vars";
import { lightVars } from "@/theme/light/light-vars";
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
      <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
        <Breadcrumbs {...props} />
      </ThemeProvider>
    </MemoryRouter>,
  );

const getRequiredElement = (container: HTMLElement, selector: string) => {
  const element = container.querySelector(selector);
  expect(element).toBeInTheDocument();
  return element as HTMLElement;
};

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
      expect(
        screen.getByLabelText("Show breadcrumb options"),
      ).toBeInTheDocument();
    });

    it("opens the collapsed breadcrumb menu with hidden middle items", () => {
      renderBreadcrumbs({
        items: items5,
        maximumNumberOfVisibleBreadcrumbs: 2,
      });

      fireEvent.click(screen.getByLabelText("Show breadcrumb options"));

      const menu = screen.getByRole("menu", {
        name: "Collapsed breadcrumb options",
      });
      expect(within(menu).getByText("Level 2 Page")).toBeInTheDocument();
      expect(within(menu).getByText("Level 3 Page")).toBeInTheDocument();
      expect(within(menu).getByText("Level 4 Page")).toBeInTheDocument();
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
    it("renders light links and separators with exact CSS token values", () => {
      const { container } = renderBreadcrumbs({ items: items3 });
      const firstLink = getRequiredElement(container, "a");
      const firstLabel = getRequiredElement(container, "a .MuiTypography-root");
      const separator = getRequiredElement(
        container,
        ".MuiBreadcrumbs-separator svg",
      );

      expect(lightVars.interactiveSecondaryDefaultDefault).toBe("#062242");
      expect(window.getComputedStyle(firstLink).color).toBe("rgb(6, 34, 66)");
      expect(window.getComputedStyle(separator).color).toBe("rgb(6, 34, 66)");
      expect(window.getComputedStyle(firstLabel).fontSize).toBe("14px");
      expect(window.getComputedStyle(firstLabel).fontWeight).toBe("600");
      expect(window.getComputedStyle(firstLabel).lineHeight).toBe("18px");
      expect(window.getComputedStyle(firstLabel).letterSpacing).toBe("0px");
    });

    it("renders 5-level breadcrumbs in light mode without throwing", () => {
      expect(() => renderBreadcrumbs({ items: items5 })).not.toThrow();
    });

    it("renders the light collapsed menu with exact CSS token values", () => {
      const { baseElement } = renderBreadcrumbs({
        items: items5,
        maximumNumberOfVisibleBreadcrumbs: 2,
      });

      fireEvent.click(screen.getByLabelText("Show breadcrumb options"));

      const paper = getRequiredElement(
        baseElement as HTMLElement,
        ".MuiPaper-root",
      );
      const item = getRequiredElement(
        baseElement as HTMLElement,
        ".MuiMenuItem-root",
      );
      const itemLink = getRequiredElement(item, "a");

      expect(lightVars.controlBackgroundWeak).toBe("#f5f8fd");
      expect(lightVars.controlBorderActive).toBe("#0051af");
      expect(window.getComputedStyle(paper).backgroundColor).toBe(
        "rgb(245, 248, 253)",
      );
      expect(window.getComputedStyle(paper).borderTopColor).toBe("#0051af");
      expect(window.getComputedStyle(itemLink).minHeight).toBe("40px");
      expect(window.getComputedStyle(itemLink).padding).toBe("8px 16px");
      expect(window.getComputedStyle(itemLink).color).toBe("rgb(60, 69, 81)");
    });
  });

  describe("dark theme token coverage", () => {
    it("renders dark links and separators with exact CSS token values", () => {
      const { container } = renderBreadcrumbs({ items: items3 }, true);
      const firstLink = getRequiredElement(container, "a");
      const separator = getRequiredElement(
        container,
        ".MuiBreadcrumbs-separator svg",
      );

      expect(darkVars.interactiveSecondaryDefaultDefault).toBe("#e8eefb");
      expect(window.getComputedStyle(firstLink).color).toBe(
        "rgb(232, 238, 251)",
      );
      expect(window.getComputedStyle(separator).color).toBe(
        "rgb(232, 238, 251)",
      );
    });

    it("renders 5-level breadcrumbs in dark mode without throwing", () => {
      expect(() => renderBreadcrumbs({ items: items5 }, true)).not.toThrow();
    });

    it("renders the dark collapsed menu with exact CSS token values", () => {
      const { baseElement } = renderBreadcrumbs(
        {
          items: items5,
          maximumNumberOfVisibleBreadcrumbs: 2,
        },
        true,
      );

      fireEvent.click(screen.getByLabelText("Show breadcrumb options"));

      const paper = getRequiredElement(
        baseElement as HTMLElement,
        ".MuiPaper-root",
      );
      const item = getRequiredElement(
        baseElement as HTMLElement,
        ".MuiMenuItem-root",
      );

      expect(darkVars.controlBackgroundWeak).toBe("#0d274d");
      expect(darkVars.controlBorderActive).toBe("#12c1ff");
      expect(window.getComputedStyle(paper).backgroundColor).toBe(
        "rgb(13, 39, 77)",
      );
      expect(window.getComputedStyle(paper).borderTopColor).toBe("#12c1ff");
      expect(window.getComputedStyle(item).color).toBe("rgb(232, 233, 234)");
    });
  });
});
