/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { createTheme } from "@mui/material";
import {
  ThemeMode,
  ThemeProvider,
  useTheme,
  useThemeMode,
} from "../theme-provider";
import { darkVars } from "@/theme/dark/dark-vars";
import { iocVars } from "@/theme/ioc/ioc-vars";
import { lightVars } from "@/theme/light/light-vars";

function ThemeProbe() {
  const theme = useTheme();
  const themeMode = useThemeMode();
  const { mode, setTheme } = themeMode;

  return (
    <div>
      <span data-testid="palette-mode">{theme.palette.mode}</span>
      <span data-testid="semantic-background">
        {theme.palette.vars.baseBackgroundStrong}
      </span>
      <span data-testid="context-mode">{mode}</span>
      <span data-testid="has-toggle-theme">
        {["toggle", "Theme"].join("") in themeMode ? "yes" : "no"}
      </span>
      <button onClick={() => setTheme(ThemeMode.IoC)} type="button">
        Use IoC theme
      </button>
      <button onClick={() => setTheme(ThemeMode.Light)} type="button">
        Use light theme
      </button>
      <button onClick={() => setTheme(ThemeMode.Dark)} type="button">
        Use dark theme
      </button>
    </div>
  );
}

describe("ThemeProvider", () => {
  it("uses light theme by default", () => {
    render(
      <ThemeProvider>
        <ThemeProbe />
      </ThemeProvider>,
    );

    expect(screen.getByTestId("palette-mode")).toHaveTextContent("light");
    expect(screen.getByTestId("context-mode")).toHaveTextContent("light");
    expect(screen.getByTestId("has-toggle-theme")).toHaveTextContent("no");
    expect(screen.getByTestId("semantic-background")).toHaveTextContent(
      lightVars.baseBackgroundStrong,
    );
  });

  it("defaultMode={ThemeMode.Dark} starts in dark mode", () => {
    render(
      <ThemeProvider defaultMode={ThemeMode.Dark}>
        <ThemeProbe />
      </ThemeProvider>,
    );

    expect(screen.getByTestId("palette-mode")).toHaveTextContent("dark");
    expect(screen.getByTestId("context-mode")).toHaveTextContent("dark");
    expect(screen.getByTestId("semantic-background")).toHaveTextContent(
      darkVars.baseBackgroundStrong,
    );
  });

  it("defaultMode={ThemeMode.IoC} starts with the IoC theme", () => {
    render(
      <ThemeProvider defaultMode={ThemeMode.IoC}>
        <ThemeProbe />
      </ThemeProvider>,
    );

    expect(screen.getByTestId("palette-mode")).toHaveTextContent("dark");
    expect(screen.getByTestId("context-mode")).toHaveTextContent("ioc");
    expect(screen.getByTestId("semantic-background")).toHaveTextContent(
      iocVars.baseBackgroundStrong,
    );
  });

  it("setTheme switches directly to the IoC theme", async () => {
    render(
      <ThemeProvider>
        <ThemeProbe />
      </ThemeProvider>,
    );

    expect(screen.getByTestId("context-mode")).toHaveTextContent("light");

    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: "Use IoC theme" }));
    });

    expect(screen.getByTestId("palette-mode")).toHaveTextContent("dark");
    expect(screen.getByTestId("context-mode")).toHaveTextContent("ioc");
    expect(screen.getByTestId("semantic-background")).toHaveTextContent(
      iocVars.baseBackgroundStrong,
    );
  });

  it("setTheme switches from IoC back to Open UI Kit light and dark themes", async () => {
    render(
      <ThemeProvider defaultMode={ThemeMode.IoC}>
        <ThemeProbe />
      </ThemeProvider>,
    );

    expect(screen.getByTestId("context-mode")).toHaveTextContent("ioc");

    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: "Use light theme" }));
    });

    expect(screen.getByTestId("palette-mode")).toHaveTextContent("light");
    expect(screen.getByTestId("context-mode")).toHaveTextContent("light");
    expect(screen.getByTestId("semantic-background")).toHaveTextContent(
      lightVars.baseBackgroundStrong,
    );

    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: "Use dark theme" }));
    });

    expect(screen.getByTestId("palette-mode")).toHaveTextContent("dark");
    expect(screen.getByTestId("context-mode")).toHaveTextContent("dark");
    expect(screen.getByTestId("semantic-background")).toHaveTextContent(
      darkVars.baseBackgroundStrong,
    );
  });

  it("setMode remains available for direct theme selection", async () => {
    function SetModeProbe() {
      const theme = useTheme();
      const { mode, setMode } = useThemeMode();

      return (
        <div>
          <span data-testid="context-mode">{mode}</span>
          <span data-testid="semantic-background">
            {theme.palette.vars.baseBackgroundStrong}
          </span>
          <button onClick={() => setMode(ThemeMode.IoC)} type="button">
            Set IoC mode
          </button>
        </div>
      );
    }

    render(
      <ThemeProvider>
        <SetModeProbe />
      </ThemeProvider>,
    );

    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: "Set IoC mode" }));
    });

    expect(screen.getByTestId("context-mode")).toHaveTextContent("ioc");
    expect(screen.getByTestId("semantic-background")).toHaveTextContent(
      iocVars.baseBackgroundStrong,
    );
  });

  it("customTheme prop overrides built-in theme", () => {
    const customTheme = createTheme({
      palette: {
        mode: "dark",
        vars: {
          ...lightVars,
          baseBackgroundStrong: "#123456",
        },
      },
    });

    render(
      <ThemeProvider customTheme={customTheme}>
        <ThemeProbe />
      </ThemeProvider>,
    );

    expect(screen.getByTestId("palette-mode")).toHaveTextContent("dark");
    expect(screen.getByTestId("semantic-background")).toHaveTextContent(
      "#123456",
    );
  });

  it("throws outside ThemeProvider", () => {
    const consoleError = jest
      .spyOn(console, "error")
      .mockImplementation(() => undefined);

    function BrokenConsumer() {
      useThemeMode();
      return null;
    }

    expect(() => render(<BrokenConsumer />)).toThrow(
      "useThemeMode must be used within ThemeProvider",
    );

    consoleError.mockRestore();
  });
});
