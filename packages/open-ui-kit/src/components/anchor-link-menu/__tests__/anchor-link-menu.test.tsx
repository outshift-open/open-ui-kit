/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { AnchorLinkMenu } from "../components/anchor-link-menu";
import { AnchorLinkMenuItemComponent } from "../components/anchor-link-menu-item";
import { AnchorLinkMenuItem } from "../types";

const renderWithTheme = (ui: React.ReactElement, dark = false) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      {ui}
    </ThemeProvider>,
  );

const items: AnchorLinkMenuItem[] = [
  { id: "section-1", label: "Section 1" },
  { id: "section-2", label: "Section 2" },
  { id: "section-3", label: "Section 3" },
];

const itemsWithSubsections: AnchorLinkMenuItem[] = [
  { id: "section-1", label: "Section 1" },
  { id: "section-1-1", label: "Subsection 1.1", subsection: true },
  { id: "section-2", label: "Section 2" },
];

describe("AnchorLinkMenu", () => {
  describe("rendering", () => {
    it("renders all item labels", () => {
      renderWithTheme(<AnchorLinkMenu items={items} />);
      expect(screen.getByText("Section 1")).toBeInTheDocument();
      expect(screen.getByText("Section 2")).toBeInTheDocument();
      expect(screen.getByText("Section 3")).toBeInTheDocument();
    });

    it("renders title when provided", () => {
      renderWithTheme(<AnchorLinkMenu items={items} title="On this page" />);
      expect(screen.getByText("On this page")).toBeInTheDocument();
    });

    it("does not render title when not provided", () => {
      renderWithTheme(<AnchorLinkMenu items={items} />);
      expect(screen.queryByText("On this page")).not.toBeInTheDocument();
    });

    it("renders empty list without error", () => {
      renderWithTheme(<AnchorLinkMenu items={[]} />);
    });
  });

  describe("selection", () => {
    it("marks the selected item", () => {
      renderWithTheme(<AnchorLinkMenu items={items} selectedId="section-2" />);
      const selectedLabel = screen.getByText("Section 2");
      expect(selectedLabel).toBeInTheDocument();
      expect(screen.getByRole("button", { name: "Section 2" })).toHaveAttribute(
        "aria-current",
        "location",
      );
    });

    it("applies no selection when selectedId is not provided", () => {
      renderWithTheme(<AnchorLinkMenu items={items} />);
      expect(screen.getByText("Section 1")).toBeInTheDocument();
    });

    it("calls onSelect with item id when clicked", () => {
      const onSelect = jest.fn();
      renderWithTheme(<AnchorLinkMenu items={items} onSelect={onSelect} />);
      fireEvent.click(screen.getByRole("button", { name: "Section 2" }));
      expect(onSelect).toHaveBeenCalledWith("section-2");
    });

    it("does not throw when onSelect is not provided", () => {
      renderWithTheme(<AnchorLinkMenu items={items} />);
      expect(() =>
        fireEvent.click(screen.getByRole("button", { name: "Section 1" })),
      ).not.toThrow();
    });

    it("calls onSelect with correct id for each item", () => {
      const onSelect = jest.fn();
      renderWithTheme(<AnchorLinkMenu items={items} onSelect={onSelect} />);
      fireEvent.click(screen.getByRole("button", { name: "Section 3" }));
      expect(onSelect).toHaveBeenCalledWith("section-3");
    });
  });

  describe("subsections", () => {
    it("renders subsection items", () => {
      renderWithTheme(<AnchorLinkMenu items={itemsWithSubsections} />);
      expect(screen.getByText("Subsection 1.1")).toBeInTheDocument();
    });

    it("renders both top-level and subsection items", () => {
      renderWithTheme(<AnchorLinkMenu items={itemsWithSubsections} />);
      expect(screen.getByText("Section 1")).toBeInTheDocument();
      expect(screen.getByText("Subsection 1.1")).toBeInTheDocument();
      expect(screen.getByText("Section 2")).toBeInTheDocument();
    });
  });

  describe("variants", () => {
    it("renders rail variant by default", () => {
      const { container } = renderWithTheme(<AnchorLinkMenu items={items} />);
      expect(container.firstChild).toBeInTheDocument();
    });

    it("renders floating variant", () => {
      const { container } = renderWithTheme(
        <AnchorLinkMenu items={items} variant="floating" />,
      );
      expect(container.firstChild).toBeInTheDocument();
    });

    it("renders floating variant with title", () => {
      renderWithTheme(
        <AnchorLinkMenu items={items} variant="floating" title="Contents" />,
      );
      expect(screen.getByText("Contents")).toBeInTheDocument();
    });
  });

  describe("dark theme", () => {
    it("renders in dark theme without errors", () => {
      renderWithTheme(
        <AnchorLinkMenu
          items={items}
          selectedId="section-1"
          title="Contents"
          variant="floating"
        />,
        true,
      );
      expect(screen.getByText("Contents")).toBeInTheDocument();
      expect(screen.getByText("Section 1")).toBeInTheDocument();
    });

    it("renders dark rail variant without errors", () => {
      renderWithTheme(
        <AnchorLinkMenu
          items={itemsWithSubsections}
          selectedId="section-1-1"
        />,
        true,
      );
      expect(screen.getByText("Subsection 1.1")).toBeInTheDocument();
    });
  });
});

describe("AnchorLinkMenuItemComponent", () => {
  it("renders label", () => {
    renderWithTheme(<AnchorLinkMenuItemComponent label="My Item" />);
    expect(screen.getByRole("button", { name: "My Item" })).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const onClick = jest.fn();
    renderWithTheme(
      <AnchorLinkMenuItemComponent label="My Item" onClick={onClick} />,
    );
    fireEvent.click(screen.getByRole("button", { name: "My Item" }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("renders as selected", () => {
    const { container } = renderWithTheme(
      <AnchorLinkMenuItemComponent label="My Item" selected />,
    );
    expect(screen.getByRole("button", { name: "My Item" })).toHaveAttribute(
      "aria-current",
      "location",
    );
    expect(container.querySelector(".anchor-bar-selected")).toBeInTheDocument();
  });

  it("does not add the selected bar class to inactive items", () => {
    const { container } = renderWithTheme(
      <AnchorLinkMenuItemComponent label="My Item" />,
    );
    expect(
      container.querySelector(".anchor-bar-selected"),
    ).not.toBeInTheDocument();
  });

  it("renders as subsection", () => {
    renderWithTheme(
      <AnchorLinkMenuItemComponent label="Sub Item" subsection />,
    );
    expect(screen.getByText("Sub Item")).toBeInTheDocument();
  });

  it("renders selected subsection", () => {
    renderWithTheme(
      <AnchorLinkMenuItemComponent label="Sub Item" selected subsection />,
    );
    expect(screen.getByText("Sub Item")).toBeInTheDocument();
  });

  it("does not throw when onClick is not provided", () => {
    renderWithTheme(<AnchorLinkMenuItemComponent label="My Item" />);
    expect(() =>
      fireEvent.click(screen.getByRole("button", { name: "My Item" })),
    ).not.toThrow();
  });

  describe("token mapping", () => {
    it("maps light colors to the CSS reference tokens", () => {
      expect(lightTheme.palette.vars.interactivePrimaryDefaultDefault).toBe(
        "#187adc",
      );
      expect(lightTheme.palette.vars.interactivePrimaryDefaultHover).toBe(
        "#79b9ff",
      );
      expect(lightTheme.palette.vars.interactivePrimaryDefaultActive).toBe(
        "#0051af",
      );
      expect(lightTheme.palette.vars.interactivePrimaryWeakDefault).toBe(
        "#e8f1ff",
      );
      expect(lightTheme.shadows[4]).toBe(
        "0px 4px 12px rgba(200, 213, 245, 0.7)",
      );
    });

    it("maps dark colors to the CSS reference tokens", () => {
      expect(darkTheme.palette.vars.interactivePrimaryDefaultDefault).toBe(
        "#1bcdff",
      );
      expect(darkTheme.palette.vars.interactivePrimaryDefaultHover).toBe(
        "#62e0ff",
      );
      expect(darkTheme.palette.vars.interactivePrimaryDefaultActive).toBe(
        "#12c1ff",
      );
      expect(darkTheme.palette.vars.interactivePrimaryWeakDefault).toBe(
        "#062242",
      );
      expect(darkTheme.shadows[4]).toBe("0px 4px 12px rgba(6, 34, 66, 0.7)");
    });
  });
});
