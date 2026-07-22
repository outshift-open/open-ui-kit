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
import { Message, type MessageType } from "..";
import {
  getMessageActionStyles,
  getMessageCloseStyles,
  getMessageContentStyles,
  getMessageIconColor,
  getMessageIconStyles,
  getMessageRootStyles,
  getMessageStatusColor,
  getMessageTextStyles,
  getMessageTitleRowStyles,
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
        height: "auto",
        padding: "12px 16px",
        gap: "12px",
        background: lightTheme.palette.vars.baseBackgroundWeak,
        color: lightTheme.palette.vars.baseTextDefault,
        borderWidth: "1px 1px 1px 4px",
        borderRadius: "4px",
      });
      expect(
        getMessageRootStyles(lightTheme, "success", false, true),
      ).toMatchObject({
        width: "480px",
        height: "auto",
      });
      expect(getMessageContentStyles(true, false)).toMatchObject({
        flex: "1 1 auto",
        minWidth: 0,
        width: "stretch",
        gap: "4px",
      });
      expect(getMessageContentStyles(false, true)).toMatchObject({
        flex: "1 1 auto",
        minWidth: 0,
        width: "stretch",
        gap: "16px",
        paddingRight: "8px",
      });
      expect(getMessageTitleRowStyles()).toMatchObject({
        flex: "1 1 auto",
        width: "stretch",
        height: "24px",
        gap: "4px",
      });
      expect(getMessageIconStyles(lightTheme, "info")).toMatchObject({
        width: "24px",
        height: "24px",
        color: lightTheme.palette.vars.infoIconDefault,
      });
      expect(getMessageTitleStyles(lightTheme)).toMatchObject({
        color: lightTheme.palette.vars.baseTextStrong,
      });
      expect(getMessageTextStyles(lightTheme)).toMatchObject({
        color: lightTheme.palette.vars.baseTextDefault,
      });
      expect(getMessageActionStyles(lightTheme)).toMatchObject({
        fontFamily: lightTheme.typography.fontFamily,
        fontWeight: 600,
        fontSize: "14px",
        lineHeight: "125%",
        color: lightTheme.palette.vars.interactivePrimaryDefaultDefault,
      });
      expect(getMessageCloseStyles(lightTheme)).toMatchObject({
        color: lightTheme.palette.vars.controlIconDefault,
        width: "24px",
        height: "24px",
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
        getMessageRootStyles(darkTheme, "success", false, true),
      ).toMatchObject({
        width: "480px",
        height: "auto",
        background: darkTheme.palette.vars.baseBackgroundWeak,
      });
      expect(getMessageActionStyles(darkTheme)).toMatchObject({
        color: darkTheme.palette.vars.interactivePrimaryDefaultDefault,
      });
      expect(getMessageCloseStyles(darkTheme)).toMatchObject({
        color: darkTheme.palette.vars.controlIconDefault,
      });
    });
  });

  describe("layout width", () => {
    const types: MessageType[] = ["success", "error", "warning", "info"];

    it.each(types)(
      "keeps root width at 320px for %s regardless of title",
      (type) => {
        expect(getMessageRootStyles(lightTheme, type, false, false).width).toBe(
          "320px",
        );
        expect(getMessageRootStyles(lightTheme, type, true, false).width).toBe(
          "320px",
        );
      },
    );

    it.each(types)(
      "keeps root width at 480px for %s when an action is present",
      (type) => {
        expect(getMessageRootStyles(lightTheme, type, false, true).width).toBe(
          "480px",
        );
        expect(getMessageRootStyles(lightTheme, type, true, true).width).toBe(
          "480px",
        );
      },
    );

    it("lets content fill the root instead of using type-specific widths", () => {
      for (const type of types) {
        expect(getMessageContentStyles(true, false)).toEqual(
          expect.objectContaining({
            flex: "1 1 auto",
            minWidth: 0,
            width: "stretch",
          }),
        );
        expect(getMessageRootStyles(lightTheme, type, true, false)).toEqual(
          expect.objectContaining({
            width: "320px",
            height: "auto",
          }),
        );
      }
    });
  });
});
