/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { GeneralSize } from "@/common";
import { Tag } from "../components/tag";
import { TagBackgroundColorVariants, TagStatus } from "../types";

const renderTag = (
  props: Partial<React.ComponentProps<typeof Tag>> & {
    children?: React.ReactNode;
  } = {},
  dark = false,
) =>
  render(
    <ThemeProvider defaultDarkMode={dark}>
      <Tag {...props}>{props.children ?? "Tag"}</Tag>
    </ThemeProvider>,
  );

describe("Tag", () => {
  describe("rendering", () => {
    it("renders label text", () => {
      renderTag();
      expect(screen.getByText("Tag")).toBeInTheDocument();
    });

    it("renders small size without throwing", () => {
      expect(() => renderTag({ size: GeneralSize.Small })).not.toThrow();
    });

    it("renders medium size without throwing", () => {
      expect(() => renderTag({ size: GeneralSize.Medium })).not.toThrow();
    });

    it("renders large size without throwing", () => {
      expect(() => renderTag({ size: GeneralSize.Large })).not.toThrow();
    });

    it("renders deletable when onDelete provided", () => {
      renderTag({ onDelete: jest.fn() });
      expect(screen.getByTestId("CancelIcon")).toBeInTheDocument();
    });

    it("renders disabled state without throwing", () => {
      expect(() => renderTag({ disabled: true })).not.toThrow();
    });
  });

  describe("interaction", () => {
    it("calls onClick when clicked", () => {
      const onClick = jest.fn();
      renderTag({ onClick });
      fireEvent.click(screen.getByText("Tag"));
      expect(onClick).toHaveBeenCalled();
    });

    it("calls onDelete when delete icon clicked", () => {
      const onDelete = jest.fn();
      renderTag({ onDelete });
      fireEvent.click(screen.getByTestId("CancelIcon"));
      expect(onDelete).toHaveBeenCalled();
    });
  });

  describe("variants", () => {
    it("renders outlined variant without throwing", () => {
      expect(() => renderTag({ variant: "outlined" })).not.toThrow();
    });

    const statuses = Object.values(TagStatus);
    statuses.forEach((status) => {
      it(`renders status "${status}" without throwing`, () => {
        expect(() => renderTag({ status })).not.toThrow();
      });
    });

    it("renders all color variants without throwing", () => {
      Object.values(TagBackgroundColorVariants).forEach((color) => {
        expect(() => renderTag({ color })).not.toThrow();
      });
    });
  });

  describe("token coverage", () => {
    it("renders light theme without throwing", () => {
      expect(() => renderTag()).not.toThrow();
    });

    it("renders dark theme without throwing", () => {
      expect(() => renderTag({}, true)).not.toThrow();
    });

    it("renders status tags in dark mode without throwing", () => {
      expect(() =>
        renderTag({ status: TagStatus.Positive }, true),
      ).not.toThrow();
    });
  });
});
