/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { ActivityTimeline } from "../components/activity-timeline";
import { ActivityTimelineDot } from "../components/activity-timeline-dot";
import { ActivityTimelineStepStatus } from "../types";

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider>{ui}</ThemeProvider>);

const steps = [
  { status: ActivityTimelineStepStatus.InProgress, title: "Step 1" },
  { status: ActivityTimelineStepStatus.Inactive, title: "Step 2" },
  { status: ActivityTimelineStepStatus.Complete, title: "Step 3" },
];

const stepsWithContent = [
  {
    status: ActivityTimelineStepStatus.InProgress,
    title: "Step 1",
    content: <p>Content 1</p>,
  },
  {
    status: ActivityTimelineStepStatus.Inactive,
    title: "Step 2",
    subTitle: "Sub 2",
    content: <p>Content 2</p>,
  },
];

describe("ActivityTimeline", () => {
  describe("rendering", () => {
    it("renders all step titles", () => {
      renderWithTheme(<ActivityTimeline steps={steps} />);
      expect(screen.getByText("Step 1")).toBeInTheDocument();
      expect(screen.getByText("Step 2")).toBeInTheDocument();
      expect(screen.getByText("Step 3")).toBeInTheDocument();
    });

    it("renders content inside an accordion when provided", () => {
      renderWithTheme(<ActivityTimeline steps={stepsWithContent} />);
      expect(screen.getByText("Content 1")).toBeInTheDocument();
      expect(screen.getByText("Content 2")).toBeInTheDocument();
    });

    it("renders subTitle when provided with content", () => {
      renderWithTheme(<ActivityTimeline steps={stepsWithContent} />);
      expect(screen.getByText("Sub 2")).toBeInTheDocument();
    });

    it("renders title as plain text when no content", () => {
      renderWithTheme(<ActivityTimeline steps={steps} />);
      // no accordion — titles rendered as h6
      const headings = screen.getAllByRole("heading", { level: 6 });
      expect(headings.length).toBe(3);
    });

    it("renders title inside an accordion when content is present", () => {
      renderWithTheme(<ActivityTimeline steps={stepsWithContent} />);
      // accordion summary buttons contain the titles
      const buttons = screen.getAllByRole("button");
      expect(buttons.length).toBe(2);
    });
  });

  describe("automaticProgress prop", () => {
    it("renders without automaticProgress by default", () => {
      renderWithTheme(<ActivityTimeline steps={steps} />);
      // just verify it renders without errors
      expect(screen.getByText("Step 1")).toBeInTheDocument();
    });

    it("renders with automaticProgress enabled", () => {
      renderWithTheme(<ActivityTimeline steps={steps} automaticProgress />);
      expect(screen.getByText("Step 1")).toBeInTheDocument();
      expect(screen.getByText("Step 2")).toBeInTheDocument();
      expect(screen.getByText("Step 3")).toBeInTheDocument();
    });
  });

  describe("size prop", () => {
    it("renders h6 titles by default (large)", () => {
      renderWithTheme(<ActivityTimeline steps={steps} />);
      const headings = screen.getAllByRole("heading", { level: 6 });
      expect(headings).toHaveLength(steps.length);
    });

    it("renders body2 titles for medium size", () => {
      renderWithTheme(<ActivityTimeline steps={steps} size="medium" />);
      expect(
        screen.queryByRole("heading", { level: 6 }),
      ).not.toBeInTheDocument();
      expect(screen.getByText("Step 1")).toBeInTheDocument();
      expect(screen.getByText("Step 2")).toBeInTheDocument();
    });

    it("passes size to accordion for medium", () => {
      renderWithTheme(
        <ActivityTimeline steps={stepsWithContent} size="medium" />,
      );
      const buttons = screen.getAllByRole("button");
      expect(buttons.length).toBe(2);
    });
  });

  describe("step count", () => {
    it("renders the correct number of steps", () => {
      renderWithTheme(<ActivityTimeline steps={steps} />);
      const headings = screen.getAllByRole("heading", { level: 6 });
      expect(headings).toHaveLength(steps.length);
    });

    it("renders a single step without a connector", () => {
      renderWithTheme(
        <ActivityTimeline
          steps={[
            { status: ActivityTimelineStepStatus.Complete, title: "Only" },
          ]}
        />,
      );
      expect(screen.getByText("Only")).toBeInTheDocument();
    });
  });
});

describe("ActivityTimelineDot", () => {
  it("renders without errors for all statuses", () => {
    const statuses = Object.values(ActivityTimelineStepStatus);
    statuses.forEach((status) => {
      const { unmount } = renderWithTheme(
        <ActivityTimelineDot status={status} />,
      );
      unmount();
    });
  });

  it("renders with a percent value", () => {
    const { container } = renderWithTheme(<ActivityTimelineDot percent={50} />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders DoneIcon for Complete status", () => {
    const { container } = renderWithTheme(
      <ActivityTimelineDot status={ActivityTimelineStepStatus.Complete} />,
    );
    // MUI DoneIcon renders an SVG
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("renders CloseIcon for Error status", () => {
    const { container } = renderWithTheme(
      <ActivityTimelineDot status={ActivityTimelineStepStatus.Error} />,
    );
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("does not render icons when automaticProgress is true", () => {
    const { container } = renderWithTheme(
      <ActivityTimelineDot
        status={ActivityTimelineStepStatus.Complete}
        automaticProgress
      />,
    );
    // Only CircularProgress SVGs, no DoneIcon
    const svgs = container.querySelectorAll("svg");
    // 2 CircularProgress elements = 2 SVGs, no extra icon SVG
    expect(svgs).toHaveLength(2);
  });
});
