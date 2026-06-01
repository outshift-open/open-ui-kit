/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { Severity } from "@/common";
import { SeverityBadge } from "../components/severity-badge";

const renderBadge = (
  props: React.ComponentProps<typeof SeverityBadge> = {},
  dark = false,
) =>
  render(
    <ThemeProvider defaultDarkMode={dark}>
      <SeverityBadge {...props} />
    </ThemeProvider>,
  );

describe("SeverityBadge", () => {
  describe("by severity", () => {
    Object.values(Severity).forEach((severity) => {
      it(`renders severity "${severity}" without throwing`, () => {
        expect(() => renderBadge({ severity })).not.toThrow();
      });
    });
  });

  describe("by value", () => {
    it("renders with value 90 without throwing", () => {
      expect(() => renderBadge({ value: 90 })).not.toThrow();
    });

    it("renders with value 20 without throwing", () => {
      expect(() => renderBadge({ value: 20 })).not.toThrow();
    });

    it("renders without value without throwing", () => {
      expect(() => renderBadge()).not.toThrow();
    });
  });

  describe("token coverage", () => {
    it("renders light theme without throwing", () => {
      expect(() => renderBadge({ severity: Severity.HIGH })).not.toThrow();
    });

    it("renders dark theme without throwing", () => {
      expect(() =>
        renderBadge({ severity: Severity.HIGH }, true),
      ).not.toThrow();
    });
  });
});
