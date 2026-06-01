/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { Toast } from "../components/toast";

const renderToast = (
  props: Partial<React.ComponentProps<typeof Toast>> = {},
  dark = false,
) =>
  render(
    <ThemeProvider defaultDarkMode={dark}>
      <Toast id="test" title="Test title" {...props} />
    </ThemeProvider>,
  );

describe("Toast", () => {
  describe("rendering", () => {
    it("renders title", () => {
      renderToast();
      expect(screen.getByText("Test title")).toBeInTheDocument();
    });

    it("renders description", () => {
      renderToast({ description: "Test description" });
      expect(screen.getByText("Test description")).toBeInTheDocument();
    });

    it("renders close button by default", () => {
      renderToast();
      expect(screen.getByLabelText("close")).toBeInTheDocument();
    });

    it("does not render close button when showCloseButton=false", () => {
      renderToast({ showCloseButton: false });
      expect(screen.queryByLabelText("close")).not.toBeInTheDocument();
    });

    it("renders action button", () => {
      renderToast({ action: { label: "Undo", onClick: jest.fn() } });
      expect(screen.getByText("Undo")).toBeInTheDocument();
    });

    it("renders without title", () => {
      renderToast({ title: undefined, description: "Just a message" });
      expect(screen.getByText("Just a message")).toBeInTheDocument();
    });
  });

  describe("types", () => {
    const types = ["default", "success", "error", "warning", "info"] as const;
    types.forEach((type) => {
      it(`renders type "${type}" without throwing`, () => {
        expect(() => renderToast({ type })).not.toThrow();
      });
    });
  });

  describe("interaction", () => {
    it("hides toast when close button is clicked (useNativeClose)", () => {
      renderToast({ useNativeClose: true });
      fireEvent.click(screen.getByLabelText("close"));
      expect(screen.queryByText("Test title")).not.toBeInTheDocument();
    });

    it("calls action onClick when action button is clicked", () => {
      const onClick = jest.fn();
      renderToast({ action: { label: "Act", onClick } });
      fireEvent.click(screen.getByText("Act"));
      expect(onClick).toHaveBeenCalled();
    });
  });

  describe("token coverage", () => {
    it("renders light theme without throwing", () => {
      expect(() => renderToast()).not.toThrow();
    });

    it("renders dark theme without throwing", () => {
      expect(() => renderToast({}, true)).not.toThrow();
    });
  });
});
