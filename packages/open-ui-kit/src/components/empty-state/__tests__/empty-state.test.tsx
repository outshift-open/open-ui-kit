/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { EmptyState } from "..";
import { GeneralSize } from "@/common";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";

const wrap = (ui: React.ReactNode, dark = false) =>
  render(<ThemeProvider defaultDarkMode={dark}>{ui}</ThemeProvider>);
const noop = jest.fn();

describe("EmptyState", () => {
  describe("variants", () => {
    it("renders info variant without throwing", () => {
      expect(() => wrap(<EmptyState variant="info" />)).not.toThrow();
    });

    it("renders positive variant without throwing", () => {
      expect(() => wrap(<EmptyState variant="positive" />)).not.toThrow();
    });

    it("renders warning variant without throwing", () => {
      expect(() => wrap(<EmptyState variant="warning" />)).not.toThrow();
    });

    it("renders negative variant without throwing", () => {
      expect(() => wrap(<EmptyState variant="negative" />)).not.toThrow();
    });
  });

  describe("sizes", () => {
    it("renders large size without throwing", () => {
      expect(() =>
        wrap(
          <EmptyState
            size={GeneralSize.Large}
            title="Heading"
            description="Description"
          />,
        ),
      ).not.toThrow();
    });

    it("renders medium size without throwing", () => {
      expect(() =>
        wrap(
          <EmptyState
            size={GeneralSize.Medium}
            title="Heading"
            description="No matches found"
          />,
        ),
      ).not.toThrow();
    });

    it("renders small size without throwing", () => {
      expect(() =>
        wrap(
          <EmptyState
            size={GeneralSize.Small}
            description="No matches found"
          />,
        ),
      ).not.toThrow();
    });

    it("does not render title in small size", () => {
      wrap(
        <EmptyState
          size={GeneralSize.Small}
          title="Should not appear"
          description="No matches found"
        />,
      );
      expect(screen.queryByText("Should not appear")).not.toBeInTheDocument();
    });

    it("uses the CSS padding for small column and small row layouts", () => {
      const { container: columnContainer } = wrap(
        <EmptyState size={GeneralSize.Small} description="No matches found" />,
      );
      expect(columnContainer.firstChild).toHaveStyle({
        padding: "4px 12px 8px",
      });

      const { container: rowContainer } = wrap(
        <EmptyState
          direction="row"
          size={GeneralSize.Small}
          description="No matches found"
        />,
      );
      expect(rowContainer.firstChild).toHaveStyle({ padding: "0px" });
    });

    it("uses the CSS typography for the medium heading", () => {
      wrap(
        <EmptyState
          size={GeneralSize.Medium}
          title="Heading"
          description="No matches found"
        />,
      );

      expect(screen.getByText("Heading")).toHaveStyle({
        fontSize: "16px",
        lineHeight: "22px",
      });
    });
  });

  describe("directions", () => {
    it("renders column direction without throwing", () => {
      expect(() =>
        wrap(<EmptyState direction="column" title="Heading" />),
      ).not.toThrow();
    });

    it("renders row direction without throwing", () => {
      expect(() =>
        wrap(<EmptyState direction="row" title="Heading" />),
      ).not.toThrow();
    });
  });

  describe("content", () => {
    it("renders title", () => {
      wrap(<EmptyState title="My Title" />);
      expect(screen.getByText("My Title")).toBeInTheDocument();
    });

    it("renders description", () => {
      wrap(<EmptyState description="My description" />);
      expect(screen.getByText("My description")).toBeInTheDocument();
    });

    it("can hide the illustration for text-only empty states", () => {
      const { container } = wrap(
        <EmptyState hideIllustration description="No content yet" />,
      );

      expect(screen.getByText("No content yet")).toBeInTheDocument();
      expect(container.querySelector("svg")).not.toBeInTheDocument();
    });

    it("renders action button when actionCallback and actionTitle provided", () => {
      wrap(
        <EmptyState
          title="Heading"
          actionCallback={noop}
          actionTitle="Refresh"
        />,
      );
      expect(screen.getByText("Refresh")).toBeInTheDocument();
    });

    it("renders primary and secondary actions when both are provided", () => {
      wrap(
        <EmptyState
          title="Heading"
          actionCallback={noop}
          actionTitle="button-link"
          secondaryActionCallback={noop}
          secondaryActionTitle="secondary button-link"
        />,
      );

      expect(screen.getByText("button-link")).toBeInTheDocument();
      expect(screen.getByText("secondary button-link")).toBeInTheDocument();
      expect(
        screen.getByText("secondary button-link").closest("button"),
      ).toHaveClass("MuiButton-secondary");
    });

    it("does not render action button in small size", () => {
      wrap(
        <EmptyState
          size={GeneralSize.Small}
          actionCallback={noop}
          actionTitle="Refresh"
        />,
      );
      expect(screen.queryByText("Refresh")).not.toBeInTheDocument();
    });

    it("does not render secondary action button in small size", () => {
      wrap(
        <EmptyState
          size={GeneralSize.Small}
          secondaryActionCallback={noop}
          secondaryActionTitle="Secondary"
        />,
      );
      expect(screen.queryByText("Secondary")).not.toBeInTheDocument();
    });
  });

  describe("token usage", () => {
    it("uses light text tokens for title and description", () => {
      wrap(<EmptyState title="Heading" description="No matches found" />);

      expect(screen.getByText("Heading")).toHaveStyle({
        color: "rgb(0, 20, 43)",
      });
      expect(screen.getByText("No matches found")).toHaveStyle({
        color: "rgb(89, 97, 107)",
      });
    });

    it("uses dark text tokens for title and description", () => {
      wrap(<EmptyState title="Heading" description="No matches found" />, true);

      expect(screen.getByText("Heading")).toHaveStyle({
        color: "rgb(255, 255, 255)",
      });
      expect(screen.getByText("No matches found")).toHaveStyle({
        color: "rgb(197, 199, 203)",
      });
    });

    it("uses light illustration accent tokens", () => {
      const { container } = wrap(<EmptyState variant="info" />);
      expect(container.querySelector("svg")).toHaveStyle({
        "--empty-state-illustration-accent":
          lightTheme.palette.vars.infoBackgroundDefault,
      });
    });

    it("uses dark illustration accent tokens", () => {
      const { container } = wrap(<EmptyState variant="negative" />, true);
      expect(container.querySelector("svg")).toHaveStyle({
        "--empty-state-illustration-accent":
          darkTheme.palette.vars.negativeIconDefault,
      });
    });
  });

  describe("dark mode", () => {
    it("renders in dark mode without throwing", () => {
      expect(() =>
        wrap(
          <EmptyState
            title="Heading"
            description="Description"
            actionCallback={noop}
            actionTitle="Refresh"
          />,
          true,
        ),
      ).not.toThrow();
    });
  });
});
