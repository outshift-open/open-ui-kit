/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import type { ComponentProps, CSSProperties, ReactNode } from "react";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import {
  blue300,
  blue500,
  green500,
  greyAlpha40,
  lightOrange500,
  midnightGradientStops,
} from "@/theme/style/color-palette";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { GaugeChart } from "../gauge-chart";
import {
  barShadow,
  gaugeWrapper,
  getGaugeChartGradient,
  type GaugeChartGradient,
} from "../styles";
import type { ChartDataItem } from "../../common/types";

jest.mock("recharts", () => ({
  ResponsiveContainer: ({
    children,
    className,
    height,
    width,
  }: {
    children: ReactNode;
    className?: string;
    height: string;
    width: string;
  }) => (
    <div
      className={className}
      data-height={height}
      data-testid="responsive-container"
      data-width={width}
    >
      {children}
    </div>
  ),
  PieChart: ({
    children,
    height,
    width,
  }: {
    children: ReactNode;
    height: number;
    width: number;
  }) => (
    <svg data-height={height} data-testid="pie-chart" data-width={width}>
      {children}
    </svg>
  ),
  Pie: ({
    activeShape,
    children,
    data,
    dataKey,
    endAngle,
    innerRadius,
    outerRadius,
    startAngle,
    strokeWidth,
  }: {
    activeShape?: (props: Record<string, unknown>) => ReactNode;
    children?: ReactNode;
    data: Array<{ fill: string; value: number }>;
    dataKey: string;
    endAngle: number;
    innerRadius: number;
    outerRadius: number;
    startAngle: number;
    strokeWidth: number;
  }) => (
    <g
      data-background-fill={data[1]?.fill}
      data-background-value={data[1]?.value}
      data-data-key={dataKey}
      data-end-angle={endAngle}
      data-inner-radius={innerRadius}
      data-main-fill={data[0]?.fill}
      data-main-value={data[0]?.value}
      data-outer-radius={outerRadius}
      data-start-angle={startAngle}
      data-stroke-width={strokeWidth}
      data-testid="pie"
    >
      {/* Recharts resolves the sector's geometry against the chart box before
          handing it to `activeShape`; the mock stands in for that, centring
          the 132px gauge the way `cx`/`cy` of `50%` would. */}
      {activeShape?.({
        cx: 66,
        cy: 66,
        endAngle,
        fill: data[0]?.fill,
        innerRadius,
        outerRadius,
        startAngle,
      })}
      {children}
    </g>
  ),
  Cell: ({
    strokeLinecap,
    style,
  }: {
    strokeLinecap: string;
    style?: CSSProperties;
  }) => (
    <path
      data-stroke-linecap={strokeLinecap}
      data-testid="gauge-cell"
      style={style}
    />
  ),
}));

const data: ChartDataItem[] = [
  {
    name: "Score",
    value: 75,
    color: lightTheme.palette.vars.warningBackgroundDefault,
  },
];

const renderGauge = (
  dark = false,
  props: Partial<ComponentProps<typeof GaugeChart>> = {},
) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      <GaugeChart data={data} {...props} />
    </ThemeProvider>,
  );

describe("GaugeChart", () => {
  it("uses design tokens for light theme fill, background, dividers, and label", () => {
    expect(lightTheme.palette.vars.warningBackgroundDefault).toBe("#fbab2c");
    expect(lightTheme.palette.vars.controlIconDisabled).toBe("#c5c7cb");
    expect(lightTheme.palette.vars.inactiveBackgroundDefault).toBe("#59616b");
    expect(lightTheme.palette.vars.baseTextDefault).toBe("#3c4551");

    const { container } = renderGauge();

    expect(screen.getByTestId("pie")).toMatchObject({
      dataset: expect.objectContaining({
        mainFill: lightTheme.palette.vars.warningBackgroundDefault,
        backgroundFill: lightTheme.palette.vars.controlIconDisabled,
      }),
    });
    expect(container.querySelector("line")).toHaveAttribute(
      "stroke",
      lightTheme.palette.vars.inactiveBackgroundDefault,
    );
    expect(screen.getByText("75")).toHaveStyle({
      color: lightTheme.palette.vars.baseTextDefault,
    });
  });

  it("uses design tokens for dark theme fill, background, dividers, and label", () => {
    expect(darkTheme.palette.vars.warningBackgroundDefault).toBe("#fbaf45");
    expect(darkTheme.palette.vars.controlIconDisabled).toBe("#777d85");
    expect(darkTheme.palette.vars.inactiveBackgroundDefault).toBe("#e8e9ea");
    expect(darkTheme.palette.vars.baseTextDefault).toBe("#e8e9ea");

    const { container } = renderGauge(true, {
      data: [
        {
          name: "Score",
          value: 75,
          color: darkTheme.palette.vars.warningBackgroundDefault,
        },
      ],
    });

    expect(screen.getByTestId("pie")).toMatchObject({
      dataset: expect.objectContaining({
        mainFill: darkTheme.palette.vars.warningBackgroundDefault,
        backgroundFill: darkTheme.palette.vars.controlIconDisabled,
      }),
    });
    expect(container.querySelector("line")).toHaveAttribute(
      "stroke",
      darkTheme.palette.vars.inactiveBackgroundDefault,
    );
    expect(screen.getByText("75")).toHaveStyle({
      color: darkTheme.palette.vars.baseTextDefault,
    });
  });

  it("renders the design geometry and divider ticks", () => {
    const { container } = renderGauge();

    expect(screen.getByTestId("responsive-container")).toHaveAttribute(
      "data-width",
      "100%",
    );
    expect(screen.getByTestId("responsive-container")).toHaveAttribute(
      "data-height",
      "100%",
    );
    expect(screen.getByTestId("pie-chart")).toMatchObject({
      dataset: expect.objectContaining({
        width: "132",
        height: "132",
      }),
    });
    expect(screen.getByTestId("pie")).toMatchObject({
      dataset: expect.objectContaining({
        dataKey: "value",
        endAngle: "-60",
        innerRadius: "57",
        outerRadius: "66",
        startAngle: "240",
        strokeWidth: "0",
      }),
    });
    expect(container.querySelectorAll("line")).toHaveLength(51);
  });

  it("clamps the filled arc to maxValue", () => {
    renderGauge(false, {
      maxValue: 50,
      data: [
        {
          name: "Score",
          value: 75,
          color: lightTheme.palette.vars.negativeBackgroundDefault,
        },
      ],
    });

    expect(screen.getByTestId("pie")).toMatchObject({
      dataset: expect.objectContaining({
        mainValue: "100",
        backgroundValue: "0",
      }),
    });
  });

  it.each([
    [100, "successBackgroundDefault"],
    [76, "successBackgroundDefault"],
    [75, "warningBackgroundDefault"],
    [51, "warningBackgroundDefault"],
    [50, "severeWarningBorderDefault"],
    [26, "severeWarningBorderDefault"],
    [25, "negativeBackgroundDefault"],
    [0, "negativeBackgroundDefault"],
  ] as const)(
    "colors the arc from the value when no color is given (%i%% -> %s)",
    (value, token) => {
      renderGauge(false, { data: [{ name: "Score", value }] });

      expect(screen.getByTestId("pie")).toMatchObject({
        dataset: expect.objectContaining({
          mainFill: lightTheme.palette.vars[token],
        }),
      });
    },
  );

  it("bands the status ramp against maxValue rather than the raw value", () => {
    // 30/40 is 75%, the warning band; the raw 30 would band to severe warning.
    renderGauge(false, {
      maxValue: 40,
      data: [{ name: "Score", value: 30 }],
    });

    expect(screen.getByTestId("pie")).toMatchObject({
      dataset: expect.objectContaining({
        mainFill: lightTheme.palette.vars.warningBackgroundDefault,
      }),
    });
  });

  it("keeps an explicit data color ahead of the status ramp", () => {
    // 25% would band to negative if the item did not name a color.
    renderGauge(false, {
      data: [
        {
          name: "Score",
          value: 25,
          color: lightTheme.palette.vars.accentADefault,
        },
      ],
    });

    expect(screen.getByTestId("pie")).toMatchObject({
      dataset: expect.objectContaining({
        mainFill: lightTheme.palette.vars.accentADefault,
      }),
    });
  });

  it("applies token-aware shadow and custom sizing", () => {
    renderGauge(false, {
      styleProps: {
        customWidth: 160,
        customHeight: 160,
        textTop: "48%",
      },
    });

    expect(gaugeWrapper({ width: 160, height: 160 })).toMatchObject({
      width: "160px",
      height: "160px",
    });
    expect(
      barShadow(lightTheme, lightTheme.palette.vars.warningBackgroundDefault),
    ).toMatchObject({
      filter: expect.stringContaining(lightTheme.shadows[1]),
    });
    expect(screen.getByTestId("pie-chart")).toMatchObject({
      dataset: expect.objectContaining({
        width: "160",
        height: "160",
      }),
    });
    expect(screen.getByText("75")).toHaveStyle({ top: "48%" });
  });

  it("renders an optional custom label", () => {
    renderGauge(false, {
      customLabelComponent: <span>Good</span>,
    });

    expect(screen.getByText("Good")).toBeInTheDocument();
  });

  // Figma: `Gauge Chart` (274417:44466), one widget per `gradient-token`
  // swatch, with the paired `Solid` swatch as the glow.
  describe("gradient treatment", () => {
    const variants: [GaugeChartGradient, string, string, number, string][] = [
      [
        "amber",
        midnightGradientStops.gaugeArcAmber,
        midnightGradientStops.gaugeArcAmber,
        0.78,
        lightOrange500,
      ],
      [
        "teal",
        midnightGradientStops.gaugeArcTealStart,
        midnightGradientStops.gaugeArcTealEnd,
        1,
        green500,
      ],
      ["blue", midnightGradientStops.iconSubtractBlue, blue500, 1, blue300],
    ];

    it.each(variants)(
      "resolves the %s label to its arc stops and glow",
      (gradient, from, to, toOpacity, glow) => {
        expect(getGaugeChartGradient(gradient)).toEqual({
          from,
          to,
          toOpacity,
          glow,
        });
      },
    );

    it("rings the ramped arc over an equal-weight track with a glow behind", () => {
      const { container } = renderGauge(false, { variant: "teal" });

      // The gradient treatment drops the dividers, but stays on the same
      // PieChart wrapper and `Pie`s the default gauge uses.
      expect(container.querySelectorAll("line")).toHaveLength(0);
      expect(screen.getByTestId("pie-chart")).toBeInTheDocument();

      const [track, arc] = screen.getAllByTestId("pie");

      // The frame's 5.275px arc stroke, normalized from its 171.7px gauge to
      // the default 132px one, is shared by the track — one line weight
      // through the junction — and both rings are centred on a radius inset
      // so the stroke's outer edge clears the svg viewport by a pixel instead
      // of being shaved flat against it.
      const strokeThickness = (132 * 5.275) / 171.704;
      const arcRadius = (132 - strokeThickness) / 2 - 1;

      expect(track.dataset.mainFill).toBe(greyAlpha40);
      expect(Number(track.dataset.innerRadius)).toBeCloseTo(
        arcRadius - strokeThickness / 2,
        2,
      );
      expect(Number(track.dataset.outerRadius)).toBeCloseTo(
        arcRadius + strokeThickness / 2,
        2,
      );
      // The outer edge lands a pixel inside the 132px box on every side.
      expect(Number(track.dataset.outerRadius)).toBeCloseTo(132 / 2 - 1, 2);
      // The full 270° sweep: 225° clockwise to -45°.
      expect(Number(track.dataset.startAngle)).toBe(225);
      expect(Number(track.dataset.endAngle)).toBe(-45);

      const gradientDef = container.querySelector("linearGradient");
      expect(arc.dataset.mainFill).toBe(`url(#${gradientDef?.id})`);
      expect(Number(arc.dataset.innerRadius)).toBeCloseTo(
        arcRadius - strokeThickness / 2,
        2,
      );
      expect(Number(arc.dataset.outerRadius)).toBeCloseTo(
        arcRadius + strokeThickness / 2,
        2,
      );
      // 75 of 100 fills three quarters of the 270° sweep.
      expect(Number(arc.dataset.startAngle)).toBe(225);
      expect(Number(arc.dataset.endAngle)).toBeCloseTo(225 - 0.75 * 270, 2);

      // Each `Pie` paints its sector as a stroke down the middle of the ring,
      // so both ends carry a round cap and the thickness cannot drift.
      const point = (angle: number) => {
        const radian = (angle * Math.PI) / 180;
        return `${66 + arcRadius * Math.cos(radian)},${
          66 - arcRadius * Math.sin(radian)
        }`;
      };
      // Swept clockwise (`sweep-flag` 1) from 225°, taking the large arc past
      // a half turn.
      const expectedPath = (sweep: number) =>
        `M${point(225)}A${arcRadius},${arcRadius},0,${
          sweep > 180 ? 1 : 0
        },1,${point(225 - sweep)}`;

      const trackPath = track.querySelector("path") as SVGPathElement;
      const arcPath = arc.querySelector("path") as SVGPathElement;

      expect(trackPath).toHaveAttribute("d", expectedPath(270));
      expect(trackPath).toHaveAttribute("stroke", greyAlpha40);
      expect(trackPath).toHaveAttribute("stroke-linecap", "round");
      expect(Number(trackPath.getAttribute("stroke-width"))).toBeCloseTo(
        strokeThickness,
        2,
      );

      expect(arcPath).toHaveAttribute("d", expectedPath(0.75 * 270));
      expect(arcPath).toHaveAttribute("stroke", `url(#${gradientDef?.id})`);
      expect(arcPath).toHaveAttribute("stroke-linecap", "round");
      expect(Number(arcPath.getAttribute("stroke-width"))).toBeCloseTo(
        strokeThickness,
        2,
      );

      const stopElements = gradientDef?.querySelectorAll("stop");
      expect(stopElements?.[0]).toHaveAttribute(
        "stop-color",
        midnightGradientStops.gaugeArcTealStart,
      );
      expect(stopElements?.[1]).toHaveAttribute(
        "stop-color",
        midnightGradientStops.gaugeArcTealEnd,
      );

      const glow = container.querySelector("svg")
        ?.previousElementSibling as HTMLElement;
      expect(glow).toHaveStyle({ background: green500 });
      expect(glow.style.filter).toContain("blur");
    });

    it("renders the value with a muted % suffix", () => {
      renderGauge(false, { variant: "amber" });

      expect(screen.getByText("75")).toBeInTheDocument();
      expect(screen.getByText("%")).toBeInTheDocument();
    });

    it("drops the value arc at zero without dropping the track", () => {
      const { container } = renderGauge(false, {
        variant: "blue",
        data: [{ name: "Score", value: 0, color: "#000" }],
      });

      // A zero sweep would otherwise leave a lone round cap sitting at 225°.
      const pies = screen.getAllByTestId("pie");
      expect(pies).toHaveLength(1);
      expect(pies[0].dataset.mainFill).toBe(greyAlpha40);
      expect(container.querySelectorAll("path")).toHaveLength(1);
    });
  });
});
