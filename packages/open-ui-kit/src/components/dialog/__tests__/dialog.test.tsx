/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { lightTheme } from "@/theme/light/light-theme";
import { darkTheme } from "@/theme/dark/dark-theme";
import {
  darkModeCardLifted,
  lightModeCardLifted,
} from "@/theme/style/color-palette";
import {
  Dialog,
  DialogTitle,
  DialogSubtitle,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "..";
import { Button } from "@/components/button";

const wrap = (ui: React.ReactNode, dark = false) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      {ui}
    </ThemeProvider>,
  );

describe("Dialog", () => {
  describe("rendering", () => {
    it("renders when open without throwing", () => {
      expect(() =>
        wrap(
          <Dialog open>
            <DialogTitle>Dialog title</DialogTitle>
            <DialogSubtitle>Dialog subtitle</DialogSubtitle>
            <DialogContent>
              <DialogContentText>Content</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button variant="tertariary">Cancel</Button>
              <Button variant="primary">Action</Button>
            </DialogActions>
          </Dialog>,
        ),
      ).not.toThrow();
    });

    it("does not render content when closed", () => {
      wrap(
        <Dialog open={false}>
          <DialogTitle>Hidden title</DialogTitle>
        </Dialog>,
      );
      expect(screen.queryByText("Hidden title")).not.toBeInTheDocument();
    });

    it("renders title text when open", () => {
      wrap(
        <Dialog open>
          <DialogTitle>My Title</DialogTitle>
        </Dialog>,
      );
      expect(screen.getByText("My Title")).toBeInTheDocument();
    });

    it("renders subtitle text when open", () => {
      wrap(
        <Dialog open>
          <DialogSubtitle>My Subtitle</DialogSubtitle>
        </Dialog>,
      );
      expect(screen.getByText("My Subtitle")).toBeInTheDocument();
    });

    it("uses the small dialog paper class and title line-height by default", () => {
      wrap(
        <Dialog open>
          <DialogTitle>Dialog title</DialogTitle>
          <DialogContent>
            <DialogContentText>Content</DialogContentText>
          </DialogContent>
        </Dialog>,
      );

      expect(document.querySelector(".MuiDialog-paper")).toHaveClass(
        "MuiDialog-paperWidthSm",
      );
      expect(screen.getByText("Dialog title")).toHaveStyle({
        lineHeight: "30px",
      });
    });
  });

  describe("light theme token coverage", () => {
    it("uses the Dialog CSS reference tokens in light mode", () => {
      expect(lightTheme.palette.vars.controlBackgroundDefault).toBe("#fbfcfe");
      expect(lightTheme.palette.vars.baseTextStrong).toBe("#00142b");
      expect(lightTheme.palette.vars.baseTextDefault).toBe("#3c4551");
      expect(lightTheme.palette.vars.interactivePrimaryDefaultDefault).toBe(
        "#187adc",
      );
      expect(lightTheme.shadows[1]).toBe(lightModeCardLifted);
    });
  });

  describe("dark theme token coverage", () => {
    it("uses the Dialog CSS reference tokens in dark mode", () => {
      expect(darkTheme.palette.vars.controlBackgroundDefault).toBe("#183056");
      expect(darkTheme.palette.vars.baseTextStrong).toBe("#ffffff");
      expect(darkTheme.palette.vars.baseTextDefault).toBe("#e8e9ea");
      expect(darkTheme.palette.vars.interactivePrimaryDefaultDefault).toBe(
        "#1bcdff",
      );
      expect(darkTheme.shadows[1]).toBe(darkModeCardLifted);
    });
  });
});
