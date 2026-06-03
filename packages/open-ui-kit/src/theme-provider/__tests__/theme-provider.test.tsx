/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider, useTheme, useThemeMode } from "../theme-provider";

function ThemeProbe() {
  const theme = useTheme();
  const { isDarkMode, toggleTheme } = useThemeMode();

  return (
    <div>
      <span data-testid="palette-mode">{theme.palette.mode}</span>
      <span data-testid="semantic-background">
        {theme.palette.vars.baseBackgroundStrong}
      </span>
      <span data-testid="context-mode">{isDarkMode ? "dark" : "light"}</span>
      <button onClick={toggleTheme} type="button">
        Toggle theme
      </button>
    </div>
  );
}

describe("ThemeProvider", () => {
  it("uses the light theme by default", () => {
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

  it("supports dark mode and toggles between theme objects", async () => {
    render(
      <ThemeProvider defaultDarkMode>
        <ThemeProbe />
      </ThemeProvider>,
    );

    expect(screen.getByTestId("palette-mode")).toHaveTextContent("dark");
    expect(screen.getByTestId("context-mode")).toHaveTextContent("dark");
    expect(screen.getByTestId("semantic-background")).toHaveTextContent(
      "#00142b",
    );

    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: "Toggle theme" }));
    });

    expect(screen.getByTestId("palette-mode")).toHaveTextContent("light");
    expect(screen.getByTestId("context-mode")).toHaveTextContent("light");
    expect(screen.getByTestId("semantic-background")).toHaveTextContent(
      "#eff3fc",
    );
  });

  it("throws when theme mode context is consumed outside ThemeProvider", () => {
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
