/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ImageGrid } from "@/custom-icons";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { midnightTheme } from "@/theme/midnight/midnight-theme";
import { Button } from "../components/button";

const renderButton = (
  props: React.ComponentProps<typeof Button>,
  dark = false,
) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
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

    it("forwards ref to the underlying button element", () => {
      const ref = React.createRef<HTMLButtonElement>();
      renderButton({ children: "Click me", ref });
      expect(ref.current).toBe(
        screen.getByRole("button", { name: "Click me" }),
      );
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

    it("renders gradient variant without throwing", () => {
      expect(() =>
        renderButton({ variant: "gradient", children: "Gradient" }),
      ).not.toThrow();
    });

    it("renders outlined variant without throwing", () => {
      expect(() =>
        renderButton({ variant: "outlined", children: "Outlined" }),
      ).not.toThrow();
    });

    it("renders gradientOutlined variant without throwing", () => {
      expect(() =>
        renderButton({
          variant: "gradientOutlined",
          children: "Gradient Outlined",
        }),
      ).not.toThrow();
    });

    it("renders tertariary variant without throwing", () => {
      expect(() =>
        renderButton({ variant: "tertariary", children: "Tertiary" }),
      ).not.toThrow();
    });

    it("applies the MUI variant class for the gradient variants", () => {
      const { getByRole, unmount } = renderButton({
        variant: "gradient",
        children: "Gradient",
      });
      expect(getByRole("button").className).toContain("MuiButton-gradient");
      unmount();

      const ring = renderButton({
        variant: "gradientOutlined",
        children: "Gradient Outlined",
      });
      expect(ring.getByRole("button").className).toContain(
        "MuiButton-gradientOutlined",
      );
      ring.unmount();
    });
  });

  // The button gradients are deliberately shared across every theme rather than
  // overridden per theme, so the variants must look the same everywhere.
  describe("gradient variants render on every theme", () => {
    const GRADIENT_VARIANTS = ["gradient", "gradientOutlined"] as const;
    const MODES = [
      ThemeMode.Light,
      ThemeMode.Dark,
      ThemeMode.IoC,
      ThemeMode.Midnight,
    ];

    const renderIn = (
      mode: ThemeMode,
      variant: (typeof GRADIENT_VARIANTS)[number],
    ) =>
      render(
        <ThemeProvider defaultMode={mode}>
          <Button variant={variant}>Gradient</Button>
        </ThemeProvider>,
      );

    it("paints a gradient fill on every theme", () => {
      for (const mode of MODES) {
        const { getByRole, unmount } = renderIn(mode, "gradient");
        const background = getComputedStyle(getByRole("button")).background;
        expect({
          mode,
          gradient: background.includes("linear-gradient"),
        }).toEqual({ mode, gradient: true });
        unmount();
      }
    });

    it("stays visible on every theme", () => {
      for (const mode of MODES) {
        for (const variant of GRADIENT_VARIANTS) {
          const { getByRole, unmount } = renderIn(mode, variant);
          const display = getComputedStyle(getByRole("button")).display;
          expect({ mode, variant, hidden: display === "none" }).toEqual({
            mode,
            variant,
            hidden: false,
          });
          unmount();
        }
      }
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

    it("grows width with label text and wraps only when constrained", () => {
      renderButton({ size: "medium", children: "bottom-center" });

      expect(screen.getByRole("button", { name: "bottom-center" })).toHaveStyle(
        {
          width: "max-content",
          maxWidth: "100%",
          minHeight: "32px",
          height: "auto",
        },
      );
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

  // Figma: `Icon Button AI` (274421:47620), the `Button - Dictation` control.
  describe("icon-only gradient variant (Icon Button AI)", () => {
    it("carries both classes the treatment is keyed on", () => {
      renderButton({ variant: "gradient", children: <ImageGrid /> });

      const button = screen.getByRole("button");
      // The style hangs off `.MuiButton-gradient.OuiButton-iconOnly`, so a
      // gradient button only picks it up once it is also detected icon-only.
      expect(button).toHaveClass("MuiButton-gradient");
      expect(button).toHaveClass("OuiButton-iconOnly");
    });

    it("does not apply to a gradient button with a label", () => {
      renderButton({ variant: "gradient", children: "Save" });

      expect(screen.getByRole("button")).not.toHaveClass("OuiButton-iconOnly");
    });

    it("renders on every theme without throwing", () => {
      for (const mode of [
        ThemeMode.Light,
        ThemeMode.Dark,
        ThemeMode.Midnight,
        ThemeMode.IoC,
      ]) {
        expect(() =>
          render(
            <ThemeProvider defaultMode={mode}>
              <Button variant="gradient">
                <ImageGrid />
              </Button>
            </ThemeProvider>,
          ),
        ).not.toThrow();
      }
    });

    it("resolves to the icon-button tokens, not the primary fill", () => {
      // Both already existed in the theme; the variant introduces no new
      // gradient, it just reaches for the icon-button pair instead.
      const g = midnightTheme.palette.gradients;

      expect(g.gradientIconButtonBlue).toBe(
        "linear-gradient(180deg, #043abc 0%, #113ca1 54.12%, #011d62 120.67%)",
      );
      expect(g.gradientIconButtonBlueGlow).toBe(
        "linear-gradient(90deg, #3974ff 0%, rgba(57, 116, 255, 0) 100%)",
      );
      expect(g.gradientIconButtonBlue).not.toBe(
        g.gradientGlobalButtonPrimaryFill,
      );
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
