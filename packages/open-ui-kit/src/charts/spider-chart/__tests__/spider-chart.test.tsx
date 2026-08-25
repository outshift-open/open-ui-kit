/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import { midnightTheme } from "@/theme/midnight/midnight-theme";
import {
  blue500,
  blueAlpha40,
  lightAlphaOrange40,
  midnightGradientStops,
  night700,
  purpleAlpha40,
} from "@/theme/style/color-palette";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import CustomGradientRadar from "../components/custom-gradient-radar";
import { SpiderChart } from "../components/spider-chart";
import {
  getSpiderChartGradient,
  SPIDER_GRADIENT_DOT_RADIUS,
  SPIDER_GRADIENT_STROKE_WIDTH,
} from "../styles/spider-chart.styles";
import type {
  ExtendedDataPoint,
  RadarType,
  SpiderChartGradient,
} from "../types/spider-chart.types";

jest.mock("recharts", () => ({
  ResponsiveContainer: ({
    children,
    height,
    width,
  }: {
    children: ReactNode;
    height: string;
    width: string;
  }) => (
    <div
      data-height={height}
      data-testid="responsive-container"
      data-width={width}
    >
      {children}
    </div>
  ),
  RadarChart: ({
    children,
    data,
    outerRadius,
  }: {
    children: ReactNode;
    data: ExtendedDataPoint[];
    outerRadius: number;
  }) => (
    <div
      data-outer-radius={outerRadius}
      data-subjects={data.map((item) => item.subject).join(",")}
      data-testid="radar-chart"
    >
      {children}
    </div>
  ),
  Customized: ({
    component: Component,
    ...props
  }: {
    component: React.ElementType;
  }) => (
    <svg data-testid="customized-layer">
      <Component {...props} />
    </svg>
  ),
  Radar: ({
    color,
    dataKey,
    fill,
    name,
    shape,
    stroke,
    strokeWidth,
  }: {
    color: string;
    dataKey: string;
    fill: string;
    name: string;
    shape: unknown;
    stroke?: string;
    strokeWidth: number;
  }) => (
    <div
      data-color={color}
      data-data-key={dataKey}
      data-fill={fill}
      data-name={name}
      // Recharts clones the shape element with the Radar props, so the dot
      // geometry is asserted where it is authored: on the element.
      data-dot-radius={
        isValidElement(shape)
          ? String((shape.props as { dotRadius?: number }).dotRadius ?? "")
          : ""
      }
      data-dot-fill={
        isValidElement(shape)
          ? ((shape.props as { dotFill?: string }).dotFill ?? "")
          : ""
      }
      data-stroke={stroke ?? ""}
      data-stroke-width={strokeWidth}
      data-testid="radar-series"
    />
  ),
  Tooltip: ({
    content,
    cursor,
  }: {
    content: ReactNode;
    cursor: { fill: string; stroke: string };
  }) => (
    <div
      data-cursor-fill={cursor.fill}
      data-cursor-stroke={cursor.stroke}
      data-testid="tooltip"
    >
      {isValidElement(content)
        ? cloneElement(content as ReactElement, {
            active: true,
            payload: [{ payload: { subject: "Identity", variableA: 150 } }],
          })
        : content}
    </div>
  ),
  PolarRadiusAxis: ({
    axisLine,
    domain,
    tickCount,
  }: {
    axisLine: boolean;
    domain: [number, number];
    tickCount: number;
  }) => (
    <div
      data-axis-line={String(axisLine)}
      data-domain={JSON.stringify(domain)}
      data-testid="polar-radius-axis"
      data-tick-count={tickCount}
    />
  ),
}));

const data: ExtendedDataPoint[] = [
  { subject: "Runtime", variableA: 80, variableB: 120 },
  { subject: "Identity", variableA: 150, variableB: 96 },
  { subject: "Network", variableA: 60, variableB: 112 },
];

const radars: RadarType[] = [
  {
    name: "Exposure",
    dataKey: "variableA",
  },
];

const renderSpiderChart = (
  dark = false,
  props: Partial<React.ComponentProps<typeof SpiderChart>> = {},
) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      <SpiderChart data={data} radars={radars} {...props} />
    </ThemeProvider>,
  );

describe("SpiderChart", () => {
  it("uses tokenized default radar colors in light mode", () => {
    renderSpiderChart();

    expect(screen.getByTestId("responsive-container")).toHaveAttribute(
      "data-width",
      "100%",
    );
    expect(screen.getByTestId("radar-series")).toMatchObject({
      dataset: expect.objectContaining({
        fill: lightTheme.palette.vars.neutralBackgroundWeak,
        color: `conic-gradient(${lightTheme.palette.vars.accentJDefault} 0deg, ${lightTheme.palette.vars.accentGDefault} 180deg, ${lightTheme.palette.vars.accentADefault} 360deg)`,
        strokeWidth: "0",
      }),
    });
  });

  it("uses tokenized default radar colors in dark mode", () => {
    renderSpiderChart(true);

    expect(screen.getByTestId("radar-series")).toMatchObject({
      dataset: expect.objectContaining({
        fill: darkTheme.palette.vars.neutralBackgroundWeak,
        color: `conic-gradient(${darkTheme.palette.vars.accentJDefault} 0deg, ${darkTheme.palette.vars.accentGDefault} 180deg, ${darkTheme.palette.vars.accentADefault} 360deg)`,
      }),
    });
  });

  it("sorts rendered data without mutating consumer data", () => {
    const originalSubjects = data.map((item) => item.subject).join(",");

    renderSpiderChart();

    expect(screen.getByTestId("radar-chart")).toHaveAttribute(
      "data-subjects",
      "Identity,Network,Runtime",
    );
    expect(data.map((item) => item.subject).join(",")).toBe(originalSubjects);
  });

  it("lets consumer radar color props win", () => {
    const customRadars: RadarType[] = [
      {
        name: "Coverage",
        dataKey: "variableB",
        fill: lightTheme.palette.vars.successBackgroundWeak,
        background: `conic-gradient(${lightTheme.palette.vars.successBackgroundDefault} 0deg, ${lightTheme.palette.vars.warningBackgroundDefault} 360deg)`,
      },
    ];

    renderSpiderChart(false, { radars: customRadars });

    expect(screen.getByTestId("radar-series")).toMatchObject({
      dataset: expect.objectContaining({
        dataKey: "variableB",
        fill: lightTheme.palette.vars.successBackgroundWeak,
        color: customRadars[0].background,
      }),
    });
  });

  it("hides the tooltip when requested and renders custom tooltip content", () => {
    const { rerender } = renderSpiderChart(false, { showTooltip: false });

    expect(screen.queryByTestId("tooltip")).not.toBeInTheDocument();

    rerender(
      <ThemeProvider defaultMode={ThemeMode.Light}>
        <SpiderChart
          data={data}
          radars={radars}
          tooltipContent={(dataPoint) => (
            <span>{dataPoint.subject} custom tooltip</span>
          )}
        />
      </ThemeProvider>,
    );

    const tooltipText = screen.getByText("Identity custom tooltip");
    const tooltipShell = tooltipText.closest("div");

    expect(tooltipText).toBeInTheDocument();
    expect(tooltipShell).toHaveStyle({
      backgroundColor: lightTheme.palette.vars.inactiveBackgroundActive,
      color: lightTheme.palette.vars.baseTextInverse,
    });
  });

  // Figma: `Spider Chart` (274417:44533), one widget per `gradient-token`
  // swatch. Stroke and dot colors are the widget's own data polygon and
  // vertex rings.
  describe("gradient treatment", () => {
    const variants: [SpiderChartGradient, string, string, string, string][] = [
      [
        "pinkPurple",
        midnightTheme.palette.gradients.gradientDataVizPinkPurple,
        midnightTheme.palette.vars.infoBorderDefault,
        purpleAlpha40,
        midnightTheme.palette.vars.infoBorderDefault,
      ],
      [
        "cyanBlue",
        midnightTheme.palette.gradients.gradientDataVizCyanBlue,
        midnightTheme.palette.vars.accentHDefault,
        blueAlpha40,
        midnightTheme.palette.vars.accentHDefault,
      ],
      [
        "orangeGold",
        midnightTheme.palette.gradients.gradientDataVizOrangeGold,
        midnightTheme.palette.vars.warningBorderDefault,
        lightAlphaOrange40,
        midnightTheme.palette.vars.warningBorderDefault,
      ],
      [
        "blueDark",
        midnightTheme.palette.gradients.gradientDataVizBlueDark,
        midnightTheme.palette.vars.interactivePrimaryDefaultActive,
        "rgba(185, 171, 239, 0.76)",
        // The one variant whose dot rings diverge from the outline color: the
        // frame rings them a step lighter (558BFF against the outline's
        // 1469CC in Midnight).
        midnightTheme.palette.vars.interactivePrimaryDefaultDefault,
      ],
    ];

    it.each(variants)(
      "resolves the %s label to its theme gradient and accents",
      (gradient, background, stroke, dotFill, dotStroke) => {
        expect(getSpiderChartGradient(midnightTheme, gradient)).toEqual({
          background,
          stroke,
          dotFill,
          dotStroke,
        });
      },
    );

    it("fills, outlines and dots the radar from the named ramp", () => {
      renderSpiderChart(false, {
        radars: [
          {
            name: "Concierge Agent",
            dataKey: "variableA",
            gradient: "cyanBlue",
          },
        ],
      });

      expect(screen.getByTestId("radar-series")).toMatchObject({
        dataset: expect.objectContaining({
          color: lightTheme.palette.gradients.gradientDataVizCyanBlue,
          stroke: lightTheme.palette.vars.accentHDefault,
          strokeWidth: String(SPIDER_GRADIENT_STROKE_WIDTH),
          dotRadius: String(SPIDER_GRADIENT_DOT_RADIUS),
          dotFill: blueAlpha40,
        }),
      });
    });

    it("lets explicit background, stroke and dot props win over the ramp", () => {
      renderSpiderChart(false, {
        radars: [
          {
            name: "Coverage",
            dataKey: "variableA",
            gradient: "cyanBlue",
            background: "linear-gradient(90deg, red 0%, blue 100%)",
            stroke: "#ff0000",
            dot: false,
          },
        ],
      });

      expect(screen.getByTestId("radar-series")).toMatchObject({
        dataset: expect.objectContaining({
          color: "linear-gradient(90deg, red 0%, blue 100%)",
          stroke: "#ff0000",
          dotRadius: "0",
        }),
      });
    });

    it("leaves radars without a gradient unstroked and undotted", () => {
      renderSpiderChart();

      expect(screen.getByTestId("radar-series")).toMatchObject({
        dataset: expect.objectContaining({
          stroke: "",
          strokeWidth: "0",
          dotRadius: "",
        }),
      });
    });
  });

  // The suite mocks recharts, so the shape never renders through `Radar`.
  describe("gradient radar shape", () => {
    const points = [
      { x: 0, y: 0 },
      { x: 10, y: 0 },
      { x: 10, y: 10 },
    ];
    const path = "M0 0 L10 0 L10 10Z";

    const renderShape = (
      props: Partial<React.ComponentProps<typeof CustomGradientRadar>> = {},
    ) =>
      render(
        <CustomGradientRadar
          points={points}
          color={midnightTheme.palette.gradients.gradientDataVizCyanBlue}
          stroke={night700}
          strokeWidth={SPIDER_GRADIENT_STROKE_WIDTH}
          dotRadius={SPIDER_GRADIENT_DOT_RADIUS}
          dotFill={blueAlpha40}
          {...props}
        />,
      );

    it("clips the ramp to the polygon, outlines it and rings each vertex", () => {
      const { container } = renderShape();

      const clip = container.querySelector("clipPath");
      expect(clip?.querySelector("path")).toHaveAttribute("d", path);

      const foreignObject = container.querySelector("foreignObject");
      expect(foreignObject).toHaveAttribute(
        "clip-path",
        `url(#${clip?.getAttribute("id")})`,
      );
      // The ramp spans the polygon's bounding box, matching Figma's
      // object-bounding-box gradient fill.
      expect(foreignObject).toHaveAttribute("x", "0");
      expect(foreignObject).toHaveAttribute("y", "0");
      expect(foreignObject).toHaveAttribute("width", "10");
      expect(foreignObject).toHaveAttribute("height", "10");
      expect(foreignObject?.querySelector("div")).toHaveStyle({
        background: midnightTheme.palette.gradients.gradientDataVizCyanBlue,
      });

      const outline = container.querySelector("svg > path");
      expect(outline).toHaveAttribute("d", path);
      expect(outline).toHaveAttribute("stroke", night700);
      expect(outline).toHaveAttribute(
        "stroke-width",
        String(SPIDER_GRADIENT_STROKE_WIDTH),
      );
      expect(outline).toHaveAttribute("fill", "none");

      const dots = container.querySelectorAll("circle");
      expect(dots).toHaveLength(points.length);
      expect(dots[0]).toHaveAttribute("cx", "0");
      expect(dots[0]).toHaveAttribute("cy", "0");
      expect(dots[0]).toHaveAttribute("r", String(SPIDER_GRADIENT_DOT_RADIUS));
      expect(dots[0]).toHaveAttribute("fill", blueAlpha40);
      expect(dots[0]).toHaveAttribute("stroke", night700);
      expect(dots[0]).toHaveAttribute(
        "stroke-width",
        String(SPIDER_GRADIENT_STROKE_WIDTH),
      );
    });

    it("falls back to solid outline-colored dots without a dotFill", () => {
      const { container } = renderShape({ dotFill: undefined });

      expect(container.querySelector("circle")).toHaveAttribute(
        "fill",
        night700,
      );
    });

    // Blue-dark rings its dots in the ramp's 3B82F6 stop, not the outline
    // color.
    it("lets dotStroke diverge from the outline color", () => {
      const { container } = renderShape({
        stroke: blue500,
        dotStroke: midnightGradientStops.dataVizBlue,
      });

      expect(container.querySelector("svg > path")).toHaveAttribute(
        "stroke",
        blue500,
      );
      expect(container.querySelector("circle")).toHaveAttribute(
        "stroke",
        midnightGradientStops.dataVizBlue,
      );
    });

    it("keeps the outline but drops the dots at a zero radius", () => {
      const { container } = renderShape({ dotRadius: 0 });

      expect(container.querySelector("svg > path")).toBeInTheDocument();
      expect(container.querySelectorAll("circle")).toHaveLength(0);
    });

    it("renders nothing without points", () => {
      const { container } = renderShape({ points: [] });

      expect(container).toBeEmptyDOMElement();
    });

    // Four gradient radars share one page in the Figma frame, so a constant
    // clip id would let them resolve each other's polygon.
    it("gives each instance its own clip id", () => {
      const { container } = render(
        <>
          <CustomGradientRadar points={points} color="red" />
          <CustomGradientRadar points={points} color="blue" />
        </>,
      );

      const ids = [...container.querySelectorAll("clipPath")].map((clip) =>
        clip.getAttribute("id"),
      );

      expect(ids).toHaveLength(2);
      expect(new Set(ids).size).toBe(2);
      expect(ids.every((id) => id && !id.includes(":"))).toBe(true);
    });
  });

  it("uses a safe domain when data has no numeric values", () => {
    renderSpiderChart(false, {
      data: [{ subject: "Empty" }],
      radars,
    });

    expect(screen.getByTestId("polar-radius-axis")).toHaveAttribute(
      "data-domain",
      JSON.stringify([0, 0]),
    );
  });
});
