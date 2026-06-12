/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { render, screen } from "@testing-library/react";
import { act } from "react";
import "@testing-library/jest-dom";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { lightTheme } from "@/theme/light/light-theme";
import { darkTheme } from "@/theme/dark/dark-theme";
import {
  darkModeCardLifted,
  lightModeCardLifted,
} from "@/theme/style/color-palette";
import { ActionsDialog } from "../components/actions-dialog";
import { styles } from "../styles";
import type { ActionsDialogProps } from "../types";

const noop = jest.fn();

const defaultProps = {
  open: true,
  confirmClicked: noop,
  hideModal: noop,
  mutationLoading: false,
  title: "Confirm Action",
  bodyText: "Are you sure you want to proceed?",
};

const wrap = (props: Partial<ActionsDialogProps> = {}, dark = false) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      <ActionsDialog {...defaultProps} {...props} />
    </ThemeProvider>,
  );

describe("ActionsDialog", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("rendering", () => {
    it("renders without throwing", () => {
      expect(() => wrap()).not.toThrow();
    });

    it("renders title", () => {
      wrap();
      expect(screen.getByText("Confirm Action")).toBeInTheDocument();
    });

    it("renders body text", () => {
      wrap();
      expect(
        screen.getByText("Are you sure you want to proceed?"),
      ).toBeInTheDocument();
    });

    it("renders subtitle when provided", () => {
      wrap({ subTitle: "Please read carefully" });
      expect(screen.getByText("Please read carefully")).toBeInTheDocument();
    });

    it("does not render subtitle when not provided", () => {
      wrap();
      expect(
        screen.queryByText("Please read carefully"),
      ).not.toBeInTheDocument();
    });

    it("renders dismiss checkbox when includeDismissCheckbox is true", () => {
      wrap({ includeDismissCheckbox: true });
      expect(screen.getByRole("checkbox")).toBeInTheDocument();
    });

    it("does not render dismiss checkbox by default", () => {
      wrap();
      expect(screen.queryByRole("checkbox")).not.toBeInTheDocument();
    });

    it("renders comment input when commentSuggestions provided", () => {
      wrap({ commentSuggestions: ["Reason A", "Reason B"] });
      expect(screen.getByText("Reason A")).toBeInTheDocument();
      expect(
        screen.getByPlaceholderText(
          "Inform your teammates of the rationale behind this action",
        ),
      ).toBeInTheDocument();
    });

    it("renders Cancel and Confirm buttons", () => {
      wrap();
      expect(screen.getByText("Cancel")).toBeInTheDocument();
      expect(screen.getByText("Confirm")).toBeInTheDocument();
    });
  });

  describe("closed state", () => {
    it("does not render content when closed", () => {
      wrap({ open: false });
      expect(screen.queryByText("Confirm Action")).not.toBeInTheDocument();
    });
  });

  describe("behavior", () => {
    it("calls confirm with the dismiss state and empty comment when no comment is required", async () => {
      const confirmClicked = jest.fn();

      wrap({
        confirmClicked,
        includeDismissCheckbox: true,
      });

      const dismissCheckbox = screen.getByRole("checkbox") as HTMLInputElement;
      dismissCheckbox.checked = true;
      await act(async () => {
        (
          screen.getByRole("button", { name: "Confirm" }) as HTMLButtonElement
        ).click();
      });

      expect(confirmClicked).toHaveBeenCalledWith(true, "");
    });

    it("requires a comment before confirming when comment suggestions are shown", async () => {
      const confirmClicked = jest.fn();

      wrap({
        confirmClicked,
        commentSuggestions: ["Reason A", "Reason B"],
      });

      await act(async () => {
        (
          screen.getByRole("button", { name: "Confirm" }) as HTMLButtonElement
        ).click();
      });

      expect(confirmClicked).not.toHaveBeenCalled();
      expect(screen.getByText("This field is required")).toBeInTheDocument();
    });

    it("closes and fires closeClicked when cancel is clicked", async () => {
      const hideModal = jest.fn();
      const closeClicked = jest.fn();

      wrap({ hideModal, closeClicked });

      await act(async () => {
        (
          screen.getByRole("button", { name: "Cancel" }) as HTMLButtonElement
        ).click();
      });

      expect(hideModal).toHaveBeenCalledTimes(1);
      expect(closeClicked).toHaveBeenCalledTimes(1);
    });
  });

  describe("light theme token coverage", () => {
    it("uses the Dialog CSS reference tokens in light mode", () => {
      expect(styles.styledPaper).toEqual({
        width: "480px",
        maxWidth: "calc(100vw - 80px)",
      });
      expect(styles.styledBody).toMatchObject({
        gap: "16px",
        width: "100%",
      });
      expect(
        (styles.styledBodyText(lightTheme) as { color: string }).color,
      ).toBe(lightTheme.palette.vars.baseTextDefault);
      expect(lightTheme.palette.vars.controlBackgroundDefault).toBe("#fbfcfe");
      expect(lightTheme.palette.vars.baseTextStrong).toBe("#00142b");
      expect(lightTheme.palette.vars.baseTextDefault).toBe("#3c4551");
      expect(lightTheme.palette.vars.interactivePrimaryDefaultDefault).toBe(
        "#187adc",
      );
      expect(lightTheme.shadows[1]).toBe(lightModeCardLifted);
    });

    it("renders with comment suggestions in light mode without throwing", () => {
      expect(() => wrap({ commentSuggestions: ["Reason A"] })).not.toThrow();
    });
  });

  describe("dark theme token coverage", () => {
    it("uses the Dialog CSS reference tokens in dark mode", () => {
      expect(
        (styles.styledBodyText(darkTheme) as { color: string }).color,
      ).toBe(darkTheme.palette.vars.baseTextDefault);
      expect(darkTheme.palette.vars.controlBackgroundDefault).toBe("#183056");
      expect(darkTheme.palette.vars.baseTextStrong).toBe("#ffffff");
      expect(darkTheme.palette.vars.baseTextDefault).toBe("#e8e9ea");
      expect(darkTheme.palette.vars.interactivePrimaryDefaultDefault).toBe(
        "#1bcdff",
      );
      expect(darkTheme.shadows[1]).toBe(darkModeCardLifted);
    });

    it("renders with dismiss checkbox in dark mode without throwing", () => {
      expect(() => wrap({ includeDismissCheckbox: true }, true)).not.toThrow();
    });
  });
});
