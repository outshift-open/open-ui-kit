/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import { Message } from "..";
import {
  getMessageIconColor,
  getMessageRootStyles,
  getMessageStatusColor,
  getMessageTextStyles,
  getMessageTitleStyles,
} from "../styles";

const wrap = (ui: React.ReactNode, dark = false) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      {ui}
    </ThemeProvider>,
  );

describe("Message", () => {
  it("renders message content", () => {
    wrap(<Message>Success action message</Message>);

    expect(screen.getByText("Success action message")).toBeInTheDocument();
  });

  it("renders title and action", () => {
    wrap(
      <Message title="Title" actionLabel="button-link">
        Success action message in two lines Success action message in two lines
      </Message>,
    );

    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "button-link" }),
    ).toBeInTheDocument();
  });

  it("calls action and close handlers", () => {
    const onActionClick = jest.fn();
    const onClose = jest.fn();

    wrap(
      <Message
        actionLabel="button-link"
        onActionClick={onActionClick}
        onClose={onClose}
      >
        Success action message
      </Message>,
    );

    fireEvent.click(screen.getByRole("button", { name: "button-link" }));
    fireEvent.click(screen.getByRole("button", { name: "Close message" }));

    expect(onActionClick).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("hides the close button", () => {
    wrap(<Message hideClose>Success action message</Message>);

    expect(
      screen.queryByRole("button", { name: "Close message" }),
    ).not.toBeInTheDocument();
  });

  describe("light theme token coverage", () => {
    it("uses light status tokens", () => {
      expect(getMessageStatusColor(lightTheme, "success")).toBe(
        lightTheme.palette.vars.successBorderDefault,
      );
      expect(getMessageStatusColor(lightTheme, "error")).toBe(
        lightTheme.palette.vars.negativeBorderDefault,
      );
      expect(getMessageStatusColor(lightTheme, "warning")).toBe(
        lightTheme.palette.vars.warningBorderDefault,
      );
      expect(getMessageStatusColor(lightTheme, "info")).toBe(
        lightTheme.palette.vars.infoBorderDefault,
      );
      expect(getMessageIconColor(lightTheme, "success")).toBe(
        lightTheme.palette.vars.successIconDefault,
      );
      expect(getMessageIconColor(lightTheme, "error")).toBe(
        lightTheme.palette.vars.negativeIconDefault,
      );
      expect(getMessageIconColor(lightTheme, "warning")).toBe(
        lightTheme.palette.vars.warningIconDefault,
      );
      expect(getMessageIconColor(lightTheme, "info")).toBe(
        lightTheme.palette.vars.infoIconDefault,
      );
    });

    it("uses light layout and text tokens", () => {
      expect(
        getMessageRootStyles(lightTheme, "success", false, false),
      ).toMatchObject({
        width: "320px",
        minHeight: "48px",
        padding: "12px 16px",
        gap: "12px",
        background: lightTheme.palette.vars.baseBackgroundWeak,
        color: lightTheme.palette.vars.baseTextDefault,
        borderWidth: "1px 1px 1px 4px",
        borderRadius: "4px",
      });
      expect(getMessageRootStyles(lightTheme, "warning", true, false)).toEqual(
        expect.objectContaining({ width: "317px" }),
      );
      expect(getMessageRootStyles(lightTheme, "info", true, false)).toEqual(
        expect.objectContaining({ width: "341px" }),
      );
      expect(getMessageTitleStyles(lightTheme)).toMatchObject({
        color: lightTheme.palette.vars.baseTextStrong,
      });
      expect(getMessageTextStyles(lightTheme)).toMatchObject({
        color: lightTheme.palette.vars.baseTextDefault,
      });
    });
  });

  describe("dark theme token coverage", () => {
    it("uses dark status tokens", () => {
      expect(getMessageStatusColor(darkTheme, "success")).toBe(
        darkTheme.palette.vars.successBorderDefault,
      );
      expect(getMessageStatusColor(darkTheme, "error")).toBe(
        darkTheme.palette.vars.negativeBorderDefault,
      );
      expect(getMessageStatusColor(darkTheme, "warning")).toBe(
        darkTheme.palette.vars.warningBorderDefault,
      );
      expect(getMessageStatusColor(darkTheme, "info")).toBe(
        darkTheme.palette.vars.infoBorderDefault,
      );
      expect(getMessageIconColor(darkTheme, "success")).toBe(
        darkTheme.palette.vars.successIconDefault,
      );
      expect(getMessageIconColor(darkTheme, "error")).toBe(
        darkTheme.palette.vars.negativeIconDefault,
      );
      expect(getMessageIconColor(darkTheme, "warning")).toBe(
        darkTheme.palette.vars.warningIconDefault,
      );
      expect(getMessageIconColor(darkTheme, "info")).toBe(
        darkTheme.palette.vars.infoIconDefault,
      );
    });

    it("uses dark layout tokens", () => {
      expect(
        getMessageRootStyles(darkTheme, "info", true, false),
      ).toMatchObject({
        width: "341px",
        minHeight: "92px",
        background: darkTheme.palette.vars.baseBackgroundWeak,
        color: darkTheme.palette.vars.baseTextDefault,
      });
    });
  });
});
