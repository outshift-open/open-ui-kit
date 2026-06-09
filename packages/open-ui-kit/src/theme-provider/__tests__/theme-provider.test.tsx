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
import { lightVars } from "@/theme/light/light-vars";

function ThemeProbe() {
  const theme = useTheme();
  const { mode, toggleTheme } = useThemeMode();

  return (
    <div>
      <span data-testid="palette-mode">{theme.palette.mode}</span>
      <span data-testid="semantic-background">
        {theme.palette.vars.baseBackgroundStrong}
      </span>
      <span data-testid="context-mode">{mode}</span>
      <button onClick={toggleTheme} type="button">
        Toggle theme
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
    expect(screen.getByTestId("semantic-background")).toHaveTextContent(
      "#eff3fc",
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
      "#00142b",
    );
  });

  it("toggleTheme switches mode between Light and Dark", async () => {
    render(
      <ThemeProvider>
        <ThemeProbe />
      </ThemeProvider>,
    );

    expect(screen.getByTestId("palette-mode")).toHaveTextContent("light");
    expect(screen.getByTestId("context-mode")).toHaveTextContent("light");

    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: "Toggle theme" }));
    });

    expect(screen.getByTestId("palette-mode")).toHaveTextContent("dark");
    expect(screen.getByTestId("context-mode")).toHaveTextContent("dark");
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
