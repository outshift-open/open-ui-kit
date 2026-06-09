/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import { LoadingStates } from "..";
import {
  getLoadingStatesRootStyles,
  getLoadingStatesSkeletonSectionStyles,
  getLoadingStatesSpinnerSectionStyles,
  getSkeletonBaseColor,
  getSkeletonShapeStyles,
} from "../styles";

const renderLoadingStates = (
  props: React.ComponentProps<typeof LoadingStates> = {},
  dark = false,
) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      <LoadingStates {...props} />
    </ThemeProvider>,
  );

describe("LoadingStates", () => {
  it("renders spinner and skeleton sections by default", () => {
    renderLoadingStates();

    expect(
      screen.getByLabelText("Primary loading indicators"),
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("Secondary loading indicators"),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("progressbar")).toHaveLength(16);
  });

  it("can render only skeleton examples", () => {
    const { container } = renderLoadingStates({ showSpinner: false });

    expect(screen.queryByRole("progressbar")).not.toBeInTheDocument();
    expect(container.querySelectorAll(".MuiSkeleton-root")).toHaveLength(6);
  });

  it("can render only spinner examples", () => {
    const { container } = renderLoadingStates({ showSkeleton: false });

    expect(screen.getAllByRole("progressbar")).toHaveLength(16);
    expect(
      container.querySelector(".MuiSkeleton-root"),
    ).not.toBeInTheDocument();
  });

  it("uses expected layout spacing", () => {
    expect(getLoadingStatesRootStyles()).toMatchObject({
      display: "flex",
      gap: "52px",
    });
    expect(getLoadingStatesSpinnerSectionStyles()).toMatchObject({
      width: "290px",
      gap: "40px",
    });
    expect(getLoadingStatesSkeletonSectionStyles()).toMatchObject({
      gridTemplateColumns: "repeat(2, 210px)",
      columnGap: "252px",
    });
  });

  it("uses light theme skeleton tokens", () => {
    expect(getSkeletonBaseColor(lightTheme, "loading")).toBe(
      lightTheme.palette.vars.baseBackgroundWeak,
    );
    expect(getSkeletonBaseColor(lightTheme, "failure")).toBe(
      lightTheme.palette.vars.controlBorderWeak,
    );
    expect(getSkeletonShapeStyles(lightTheme, "loading", "8px")).toMatchObject({
      backgroundColor: lightTheme.palette.vars.baseBackgroundWeak,
      borderRadius: "8px",
    });
  });

  it("uses dark theme skeleton tokens", () => {
    expect(getSkeletonBaseColor(darkTheme, "loading")).toBe(
      darkTheme.palette.vars.baseBackgroundWeak,
    );
    expect(getSkeletonBaseColor(darkTheme, "failure")).toBe(
      darkTheme.palette.vars.controlBorderWeak,
    );
    expect(getSkeletonShapeStyles(darkTheme, "failure", "4px")).toMatchObject({
      backgroundColor: darkTheme.palette.vars.controlBorderWeak,
      borderRadius: "4px",
    });
  });

  it("allows consumer sx overrides", () => {
    const { container } = renderLoadingStates({
      sx: { gap: "12px" },
    });

    expect(container.firstChild).toBeInTheDocument();
  });
});
