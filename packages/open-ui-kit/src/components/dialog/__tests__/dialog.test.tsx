/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "@/theme-provider/theme-provider";
import {
  Dialog,
  DialogTitle,
  DialogSubtitle,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "..";
import { Button } from "@mui/material";

const wrap = (ui: React.ReactNode, dark = false) =>
  render(<ThemeProvider defaultDarkMode={dark}>{ui}</ThemeProvider>);

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
              <Button>Cancel</Button>
              <Button>Action</Button>
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
  });

  describe("light theme token coverage", () => {
    it("renders full dialog in light mode without throwing", () => {
      expect(() =>
        wrap(
          <Dialog open>
            <DialogTitle>Title</DialogTitle>
            <DialogContent>
              <DialogContentText>Body</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button>OK</Button>
            </DialogActions>
          </Dialog>,
        ),
      ).not.toThrow();
    });
  });

  describe("dark theme token coverage", () => {
    it("renders full dialog in dark mode without throwing", () => {
      expect(() =>
        wrap(
          <Dialog open>
            <DialogTitle>Title</DialogTitle>
            <DialogContent>
              <DialogContentText>Body</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button>OK</Button>
            </DialogActions>
          </Dialog>,
          true,
        ),
      ).not.toThrow();
    });
  });
});
