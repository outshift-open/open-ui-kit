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
import { ActivityTimeline } from "../components/activity-timeline";
import { ActivityTimelineDot } from "../components/activity-timeline-dot";
import { getActivityTimelineDotStyle } from "../styles";
import { ActivityTimelineStepStatus } from "../types";
import { setStepColor } from "../utils/utils";

const renderWithTheme = (ui: React.ReactElement, dark = false) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      {ui}
    </ThemeProvider>,
  );

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
      const headings = screen.getAllByRole("heading", { level: 6 });
      expect(headings.length).toBe(3);
    });

    it("renders title inside an accordion when content is present", () => {
      renderWithTheme(<ActivityTimeline steps={stepsWithContent} />);
      const buttons = screen.getAllByRole("button");
      expect(buttons.length).toBe(2);
    });

    it("passes defaultExpanded to content accordions", () => {
      renderWithTheme(
        <ActivityTimeline
          steps={[
            {
              status: ActivityTimelineStepStatus.InProgress,
              title: "Expanded",
              content: <p>Expanded content</p>,
              defaultExpanded: true,
            },
          ]}
        />,
      );

      expect(screen.getByRole("button", { expanded: true })).toHaveTextContent(
        "Expanded",
      );
    });
  });

  describe("automaticProgress prop", () => {
    it("renders without automaticProgress by default", () => {
      renderWithTheme(<ActivityTimeline steps={steps} />);
      expect(screen.getByText("Step 1")).toBeInTheDocument();
    });

    it("renders with automaticProgress enabled", () => {
      renderWithTheme(<ActivityTimeline steps={steps} automaticProgress />);
      expect(screen.getByText("Step 1")).toBeInTheDocument();
      expect(screen.getByText("Step 2")).toBeInTheDocument();
      expect(screen.getByText("Step 3")).toBeInTheDocument();
    });

    it("renders a single automaticProgress step without invalid percentage math", () => {
      renderWithTheme(
        <ActivityTimeline
          automaticProgress
          steps={[
            { status: ActivityTimelineStepStatus.InProgress, title: "Only" },
          ]}
        />,
      );

      expect(screen.getByText("Only")).toBeInTheDocument();
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

  describe("step composition", () => {
    it("renders a title start icon for plain steps", () => {
      renderWithTheme(
        <ActivityTimeline
          steps={[
            {
              status: ActivityTimelineStepStatus.InProgress,
              title: "With icon",
              titleStartIcon: <span data-testid="title-icon" />,
            },
          ]}
        />,
      );

      expect(screen.getByTestId("title-icon")).toBeInTheDocument();
    });

    it("renders a title start icon for accordion steps", () => {
      renderWithTheme(
        <ActivityTimeline
          steps={[
            {
              status: ActivityTimelineStepStatus.InProgress,
              title: "With icon",
              titleStartIcon: <span data-testid="accordion-title-icon" />,
              content: <p>Content</p>,
            },
          ]}
        />,
      );

      expect(screen.getByTestId("accordion-title-icon")).toBeInTheDocument();
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

  describe("dark theme token coverage", () => {
    it("renders status steps in dark mode without throwing", () => {
      renderWithTheme(<ActivityTimeline steps={steps} />, true);

      expect(screen.getByText("Step 1")).toBeInTheDocument();
      expect(screen.getByText("Step 2")).toBeInTheDocument();
      expect(screen.getByText("Step 3")).toBeInTheDocument();
    });

    it("renders accordion content in dark mode without throwing", () => {
      renderWithTheme(<ActivityTimeline steps={stepsWithContent} />, true);

      expect(screen.getByText("Content 1")).toBeInTheDocument();
      expect(screen.getByText("Content 2")).toBeInTheDocument();
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

  it("renders zero percent as an in-progress dot state", () => {
    renderWithTheme(<ActivityTimelineDot percent={0} />);

    expect(
      screen.getByLabelText(ActivityTimelineStepStatus.InProgress),
    ).toBeInTheDocument();
  });

  it("renders DoneIcon for Complete status", () => {
    const { container } = renderWithTheme(
      <ActivityTimelineDot status={ActivityTimelineStepStatus.Complete} />,
    );
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
    const svgs = container.querySelectorAll("svg");
    expect(svgs).toHaveLength(2);
  });

  it("renders all status dots in dark mode without throwing", () => {
    Object.values(ActivityTimelineStepStatus).forEach((status) => {
      const { unmount } = renderWithTheme(
        <ActivityTimelineDot status={status} />,
        true,
      );
      unmount();
    });
  });

  describe("token mapping", () => {
    it("maps light status colors to the CSS reference tokens", () => {
      expect(
        getActivityTimelineDotStyle(
          ActivityTimelineStepStatus.InProgress,
          lightTheme,
        ),
      ).toMatchObject({
        background: "transparent",
        ringColor: "#d5dff7",
        color: "#fbab2c",
        percent: 67,
      });

      expect(
        getActivityTimelineDotStyle(
          ActivityTimelineStepStatus.Complete,
          lightTheme,
        ),
      ).toMatchObject({
        background: "#fbfcfe",
        ringColor: "#0051af",
        color: "#0051af",
        percent: 100,
      });
    });

    it("maps dark status colors to the CSS reference tokens", () => {
      expect(
        getActivityTimelineDotStyle(
          ActivityTimelineStepStatus.Error,
          darkTheme,
        ),
      ).toMatchObject({
        background: "#183056",
        ringColor: "#4f628d",
        color: "#cf496d",
        percent: 67,
      });

      expect(
        getActivityTimelineDotStyle(
          ActivityTimelineStepStatus.Neutral,
          darkTheme,
        ),
      ).toMatchObject({
        background: "transparent",
        ringColor: "#fb9f36",
        color: "#fb9f36",
        percent: 100,
      });
    });

    it("maps connector colors to status tokens", () => {
      expect(
        setStepColor(ActivityTimelineStepStatus.Inactive, lightTheme),
      ).toBe("#d5dff7");
      expect(setStepColor(ActivityTimelineStepStatus.Complete, darkTheme)).toBe(
        "#12c1ff",
      );
    });
  });
});
