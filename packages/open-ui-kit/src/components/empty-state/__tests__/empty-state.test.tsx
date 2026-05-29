/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { EmptyState } from "../components/empty-state";
import { GeneralSize } from "@/common";

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
