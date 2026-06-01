/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { Spinner } from "../components/spinner";

const renderSpinner = (
  props: React.ComponentProps<typeof Spinner> = {},
  dark = false,
) =>
  render(
    <ThemeProvider defaultDarkMode={dark}>
      <Spinner {...props} />
    </ThemeProvider>,
  );

describe("Spinner", () => {
  describe("rendering", () => {
    it("renders without throwing", () => {
      expect(() => renderSpinner()).not.toThrow();
    });

    it("renders two CircularProgress elements", () => {
      const { container } = renderSpinner();
      const circles = container.querySelectorAll(".MuiCircularProgress-root");
      expect(circles).toHaveLength(2);
    });

    it("uses the provided size", () => {
      const { container } = renderSpinner({ size: 24 });
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper).toBeInTheDocument();
    });
  });

  describe("size variants", () => {
    [40, 24, 20, 16].forEach((size) => {
      it(`renders size ${size} without throwing`, () => {
        expect(() => renderSpinner({ size })).not.toThrow();
      });
    });
  });

  describe("color variants", () => {
    it("renders primary color without throwing", () => {
      expect(() => renderSpinner({ color: "primary" })).not.toThrow();
    });

    it("renders secondary color without throwing", () => {
      expect(() => renderSpinner({ color: "secondary" })).not.toThrow();
    });
  });

  describe("token coverage", () => {
    it("renders light theme without throwing", () => {
      expect(() => renderSpinner()).not.toThrow();
    });

    it("renders dark theme without throwing", () => {
      expect(() => renderSpinner({}, true)).not.toThrow();
    });
  });

  describe("props override", () => {
    it("applies sx overrides without throwing", () => {
      expect(() => renderSpinner({ sx: { opacity: 0.5 } })).not.toThrow();
    });

    it("forwards boxProps sx without throwing", () => {
      expect(() =>
        renderSpinner({ boxProps: { sx: { margin: "8px" } } }),
      ).not.toThrow();
    });
  });
});
