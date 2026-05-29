/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import GridViewIcon from "@mui/icons-material/GridView";
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

    it("does not fire onClick when disabled", async () => {
      const onClick = jest.fn();
      renderButton({ children: "Disabled", disabled: true, onClick });
      await userEvent.click(screen.getByRole("button"), {
        pointerEventsCheck: 0,
      });
      expect(onClick).not.toHaveBeenCalled();
    });
  });

  describe("click behavior", () => {
    it("fires onClick when clicked", async () => {
      const onClick = jest.fn();
      renderButton({ children: "Click me", onClick });
      await userEvent.click(screen.getByRole("button"));
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("with icons", () => {
    it("renders with startIcon without throwing", () => {
      expect(() =>
        renderButton({
          variant: "primary",
          startIcon: <GridViewIcon />,
          children: "Icon",
        }),
      ).not.toThrow();
    });

    it("renders with endIcon without throwing", () => {
      expect(() =>
        renderButton({
          variant: "primary",
          endIcon: <GridViewIcon />,
          children: "Icon",
        }),
      ).not.toThrow();
    });

    it("renders icon-only without throwing", () => {
      expect(() =>
        renderButton({ variant: "primary", children: <GridViewIcon /> }),
      ).not.toThrow();
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
