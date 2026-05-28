/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { ActionsDialog } from "../components/actions-dialog";

const noop = jest.fn();

const defaultProps = {
  open: true,
  confirmClicked: noop,
  hideModal: noop,
  mutationLoading: false,
  title: "Confirm Action",
  bodyText: "Are you sure you want to proceed?",
};

const wrap = (
  props: Partial<React.ComponentProps<typeof ActionsDialog>> = {},
  dark = false,
) =>
  render(
    <ThemeProvider defaultDarkMode={dark}>
      <ActionsDialog {...defaultProps} {...props} />
    </ThemeProvider>,
  );

describe("ActionsDialog", () => {
  describe("rendering", () => {
    it("renders without throwing", () => {
      expect(() => wrap()).not.toThrow();
    });

    it("renders title", () => {
      wrap();
      expect(screen.getByText("Confirm Action")).toBeInTheDocument();
    });

    it("renders body text", () => {
      wrap();
      expect(
        screen.getByText("Are you sure you want to proceed?"),
      ).toBeInTheDocument();
    });

    it("renders subtitle when provided", () => {
      wrap({ subTitle: "Please read carefully" });
      expect(screen.getByText("Please read carefully")).toBeInTheDocument();
    });

    it("does not render subtitle when not provided", () => {
      wrap();
      expect(
        screen.queryByText("Please read carefully"),
      ).not.toBeInTheDocument();
    });

    it("renders dismiss checkbox when includeDismissCheckbox is true", () => {
      wrap({ includeDismissCheckbox: true });
      expect(screen.getByRole("checkbox")).toBeInTheDocument();
    });

    it("does not render dismiss checkbox by default", () => {
      wrap();
      expect(screen.queryByRole("checkbox")).not.toBeInTheDocument();
    });

    it("renders comment input when commentSuggestions provided", () => {
      wrap({ commentSuggestions: ["Reason A", "Reason B"] });
      expect(screen.getByText("Reason A")).toBeInTheDocument();
    });

    it("renders Cancel and Confirm buttons", () => {
      wrap();
      expect(screen.getByText("Cancel")).toBeInTheDocument();
      expect(screen.getByText("Confirm")).toBeInTheDocument();
    });
  });

  describe("closed state", () => {
    it("does not render content when closed", () => {
      wrap({ open: false });
      expect(screen.queryByText("Confirm Action")).not.toBeInTheDocument();
    });
  });

  describe("light theme token coverage", () => {
    it("renders in light mode without throwing", () => {
      expect(() => wrap()).not.toThrow();
    });

    it("renders with comment suggestions in light mode without throwing", () => {
      expect(() => wrap({ commentSuggestions: ["Reason A"] })).not.toThrow();
    });
  });

  describe("dark theme token coverage", () => {
    it("renders in dark mode without throwing", () => {
      expect(() => wrap({}, true)).not.toThrow();
    });

    it("renders with dismiss checkbox in dark mode without throwing", () => {
      expect(() => wrap({ includeDismissCheckbox: true }, true)).not.toThrow();
    });
  });
});
