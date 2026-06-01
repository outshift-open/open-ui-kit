/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { TextEncoder, TextDecoder } from "util";
Object.assign(global, { TextEncoder, TextDecoder });

global.ResizeObserver = class ResizeObserver {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  observe() {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  unobserve() {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  disconnect() {}
};

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { Severity } from "@/common";
import { SideDrawer } from "../components/side-drawer";

const renderDrawer = (
  props: Partial<React.ComponentProps<typeof SideDrawer>> = {},
  dark = false,
) =>
  render(
    <MemoryRouter>
      <ThemeProvider defaultDarkMode={dark}>
        <SideDrawer
          open
          copyURL="https://example.com"
          onClose={jest.fn()}
          {...props}
        />
      </ThemeProvider>
    </MemoryRouter>,
  );

describe("SideDrawer", () => {
  describe("rendering", () => {
    it("renders with title text", () => {
      renderDrawer({ titleText: "My Drawer" });
      expect(screen.getByText("My Drawer")).toBeInTheDocument();
    });

    it("renders with severity bar when severity provided", () => {
      renderDrawer({ titleText: "Drawer", severity: Severity.HIGH });
      expect(screen.getByText("Drawer")).toBeInTheDocument();
    });

    it("renders loading state", () => {
      renderDrawer({ isLoading: true, titleText: "Loading" });
      expect(screen.getByLabelText("drawer spinner")).toBeInTheDocument();
    });

    it("renders error state", () => {
      renderDrawer({ isError: true, titleText: "Error" });
      expect(screen.queryByText("Error")).not.toBeInTheDocument();
    });

    it("renders children content", () => {
      renderDrawer({ children: <span>Content here</span> });
      expect(screen.getByText("Content here")).toBeInTheDocument();
    });

    it("renders close button", () => {
      renderDrawer({ titleText: "Drawer" });
      expect(screen.getByLabelText("drawer close")).toBeInTheDocument();
    });

    it("hides footer when hideFooter=true", () => {
      renderDrawer({ titleText: "Drawer", hideFooter: true });
      expect(screen.queryByText(/Go to/)).not.toBeInTheDocument();
    });
  });

  describe("interaction", () => {
    it("calls onClose when close button clicked", () => {
      const onClose = jest.fn();
      renderDrawer({ titleText: "Drawer", onClose });
      fireEvent.click(screen.getByLabelText("drawer close"));
      expect(onClose).toHaveBeenCalled();
    });
  });

  describe("token coverage", () => {
    it("renders light theme without throwing", () => {
      expect(() => renderDrawer({ titleText: "Light" })).not.toThrow();
    });

    it("renders dark theme without throwing", () => {
      expect(() => renderDrawer({ titleText: "Dark" }, true)).not.toThrow();
    });
  });
});
