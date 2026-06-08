/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ImageGrid } from "@/custom-icons";
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { Button } from "../components/button";

const renderButton = (
  props: React.ComponentProps<typeof Button>,
  dark = false,
) =>
  render(
    <ThemeProvider defaultDarkMode={dark}>
      <Button {...props} />
    </ThemeProvider>,
  );

describe("Button", () => {
  describe("rendering", () => {
    it("renders label text", () => {
      renderButton({ children: "Click me" });
      expect(
        screen.getByRole("button", { name: "Click me" }),
      ).toBeInTheDocument();
    });

    it("renders as a button element by default", () => {
      renderButton({ children: "Click me" });
      expect(screen.getByRole("button")).toBeInTheDocument();
    });
  });

  describe("variants", () => {
    it("renders primary variant without throwing", () => {
      expect(() =>
        renderButton({ variant: "primary", children: "Primary" }),
      ).not.toThrow();
    });

    it("renders secondary variant without throwing", () => {
      expect(() =>
        renderButton({ variant: "secondary", children: "Secondary" }),
      ).not.toThrow();
    });

    it("renders outlined variant without throwing", () => {
      expect(() =>
        renderButton({ variant: "outlined", children: "Outlined" }),
      ).not.toThrow();
    });

    it("renders tertariary variant without throwing", () => {
      expect(() =>
        renderButton({ variant: "tertariary", children: "Tertiary" }),
      ).not.toThrow();
    });
  });

  describe("sizes", () => {
    it("renders small size without throwing", () => {
      expect(() =>
        renderButton({ size: "small", children: "Small" }),
      ).not.toThrow();
    });

    it("renders medium size without throwing", () => {
      expect(() =>
        renderButton({ size: "medium", children: "Medium" }),
      ).not.toThrow();
    });

    it("renders large size without throwing", () => {
      expect(() =>
        renderButton({ size: "large", children: "Large" }),
      ).not.toThrow();
    });

    it("matches the CSS-specified typography and padding for size and icon states", () => {
      const { rerender } = render(
        <ThemeProvider>
          <Button size="medium">Medium</Button>
        </ThemeProvider>,
      );

      const mediumButton = screen.getByRole("button", { name: "Medium" });
      expect(window.getComputedStyle(mediumButton).lineHeight).toBe("125%");
      expect(mediumButton).toHaveStyle({
        paddingBottom: "7px",
        paddingLeft: "16px",
        paddingRight: "16px",
        paddingTop: "7px",
      });

      rerender(
        <ThemeProvider>
          <Button size="small">Small</Button>
        </ThemeProvider>,
      );

      const smallButton = screen.getByRole("button", { name: "Small" });
      expect(window.getComputedStyle(smallButton).lineHeight).toBe("125%");
      expect(smallButton).toHaveStyle({
        paddingBottom: "3px",
        paddingLeft: "12px",
        paddingRight: "12px",
        paddingTop: "3px",
      });

      rerender(
        <ThemeProvider>
          <Button size="large" startIcon={<ImageGrid />}>
            Large icon
          </Button>
        </ThemeProvider>,
      );

      expect(screen.getByRole("button", { name: "Large icon" })).toHaveStyle({
        paddingBottom: "8px",
        paddingLeft: "16px",
        paddingRight: "16px",
        paddingTop: "8px",
      });
    });
  });

  describe("negative color", () => {
    it("renders primary negative without throwing", () => {
      expect(() =>
        renderButton({
          variant: "primary",
          color: "negative",
          children: "Delete",
        }),
      ).not.toThrow();
    });

    it("renders outlined negative without throwing", () => {
      expect(() =>
        renderButton({
          variant: "outlined",
          color: "negative",
          children: "Delete",
        }),
      ).not.toThrow();
    });

    it("renders tertariary negative without throwing", () => {
      expect(() =>
        renderButton({
          variant: "tertariary",
          color: "negative",
          children: "Delete",
        }),
      ).not.toThrow();
    });
  });

  describe("disabled state", () => {
    it("is disabled when disabled prop is set", () => {
      renderButton({ children: "Disabled", disabled: true });
      expect(screen.getByRole("button")).toBeDisabled();
    });

    it("does not fire onClick when disabled", () => {
      const onClick = jest.fn();
      renderButton({ children: "Disabled", disabled: true, onClick });
      fireEvent.click(screen.getByRole("button"));
      expect(onClick).not.toHaveBeenCalled();
    });
  });

  describe("click behavior", () => {
    it("fires onClick when clicked", () => {
      const onClick = jest.fn();
      renderButton({ children: "Click me", onClick });
      fireEvent.click(screen.getByRole("button"));
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("with icons", () => {
    it("renders with startIcon without throwing", () => {
      expect(() =>
        renderButton({
          variant: "primary",
          startIcon: <ImageGrid />,
          children: "Icon",
        }),
      ).not.toThrow();
    });

    it("renders with endIcon without throwing", () => {
      expect(() =>
        renderButton({
          variant: "primary",
          endIcon: <ImageGrid />,
          children: "Icon",
        }),
      ).not.toThrow();
    });

    it("renders icon-only without throwing", () => {
      expect(() =>
        renderButton({ variant: "primary", children: <ImageGrid /> }),
      ).not.toThrow();
    });

    it("only applies icon-only sizing to icon-like children", () => {
      const { rerender } = render(
        <ThemeProvider>
          <Button variant="primary">
            <span>Wrapped label</span>
          </Button>
        </ThemeProvider>,
      );

      expect(
        screen.getByRole("button", { name: "Wrapped label" }),
      ).not.toHaveClass("OuiButton-iconOnly");

      rerender(
        <ThemeProvider>
          <Button variant="primary">
            <ImageGrid />
          </Button>
        </ThemeProvider>,
      );

      expect(screen.getByRole("button")).toHaveClass("OuiButton-iconOnly");
    });
  });

  describe("light theme token coverage", () => {
    it("renders all variants in light mode without throwing", () => {
      const variants = [
        "primary",
        "secondary",
        "outlined",
        "tertariary",
      ] as const;
      variants.forEach((variant) => {
        expect(() =>
          renderButton({ variant, children: variant }),
        ).not.toThrow();
      });
    });
  });

  describe("dark theme token coverage", () => {
    it("renders all variants in dark mode without throwing", () => {
      const variants = [
        "primary",
        "secondary",
        "outlined",
        "tertariary",
      ] as const;
      variants.forEach((variant) => {
        expect(() =>
          renderButton({ variant, children: variant }, true),
        ).not.toThrow();
      });
    });

    it("renders negative color in dark mode without throwing", () => {
      expect(() =>
        renderButton(
          { variant: "primary", color: "negative", children: "Delete" },
          true,
        ),
      ).not.toThrow();
    });
  });
});
