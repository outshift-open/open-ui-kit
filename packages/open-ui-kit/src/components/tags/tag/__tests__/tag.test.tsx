/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { GeneralSize } from "@/common";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import { Tag } from "../components/tag";
import { TagBackgroundColorVariants, TagStatus } from "../types";
import { getTagStyle, selectTagStyle } from "../utils";

const renderTag = (
  props: Partial<React.ComponentProps<typeof Tag>> & {
    "data-testid"?: string;
    children?: React.ReactNode;
  } = {},
  dark = false,
) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
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

    it("lets consumer sx override internal styles", () => {
      renderTag({
        "data-testid": "tag",
        sx: { backgroundColor: "rgb(1, 2, 3)" },
      });
      expect(screen.getByTestId("tag")).toHaveStyle({
        backgroundColor: "rgb(1, 2, 3)",
      });
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
    it("maps light base tag tokens to the Figma CSS values", () => {
      expect(
        getTagStyle({
          clickable: false,
          color: TagBackgroundColorVariants.Primary,
          hasAvatar: false,
          size: GeneralSize.Small,
          theme: lightTheme,
        }),
      ).toEqual(
        expect.objectContaining({
          backgroundColor: "#e3eafa",
          borderRadius: "14px",
          color: "#3c4551",
          height: "20px",
        }),
      );
      expect(
        getTagStyle({
          clickable: false,
          color: TagBackgroundColorVariants.Primary,
          hasAvatar: false,
          size: GeneralSize.Large,
          theme: lightTheme,
        }),
      ).toEqual(
        expect.objectContaining({
          backgroundColor: "#e3eafa",
          borderRadius: "20px",
          color: "#3c4551",
          height: "32px",
        }),
      );
    });

    it("maps dark base tag tokens to the Figma CSS values", () => {
      expect(
        getTagStyle({
          clickable: false,
          color: TagBackgroundColorVariants.Primary,
          hasAvatar: false,
          size: GeneralSize.Small,
          theme: darkTheme,
        }),
      ).toEqual(
        expect.objectContaining({
          backgroundColor: "#31466e",
          borderRadius: "14px",
          color: "#e8e9ea",
          height: "20px",
        }),
      );
      expect(
        getTagStyle({
          clickable: true,
          color: TagBackgroundColorVariants.Primary,
          hasAvatar: false,
          size: GeneralSize.Medium,
          theme: darkTheme,
        }),
      ).toEqual(
        expect.objectContaining({
          "&:hover": {
            backgroundColor: "#0d274d",
          },
        }),
      );
    });

    it("maps status tag borders in light and dark modes", () => {
      expect(selectTagStyle(lightTheme)[TagStatus.Excellent]).toEqual(
        expect.objectContaining({
          backgroundColor: "#edfcff",
          border: "1px solid #edfcff",
          iconColor: "#17c7ff",
        }),
      );
      expect(selectTagStyle(darkTheme)[TagStatus.Excellent]).toEqual(
        expect.objectContaining({
          backgroundColor: "#1fd2ff19",
          border: "1px solid #17c7ff",
          iconColor: "#17c7ff",
        }),
      );
      expect(selectTagStyle(darkTheme)[TagStatus.Info]).toEqual(
        expect.objectContaining({
          backgroundColor: "#b76dff19",
          border: "1px solid #b76dff",
          iconColor: "#c080ff",
        }),
      );
    });

    it("renders status tags in dark mode without throwing", () => {
      expect(() =>
        renderTag({ status: TagStatus.Positive }, true),
      ).not.toThrow();
    });
  });
});
