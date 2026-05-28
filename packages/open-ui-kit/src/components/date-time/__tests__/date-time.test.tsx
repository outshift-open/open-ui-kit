/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { DatePicker } from "../components/DatePicker";
import { TimePicker } from "../components/TimePicker";
import { DateTimePicker } from "../components/DateTimePicker";
import { DateRangePicker } from "../components/DateRangePicker";
import { StaticDatePicker } from "../components/StaticDatePicker";
import { StaticDateTimePicker } from "../components/StaticDateTimePicker";

const wrap = (ui: React.ReactNode, dark = false) =>
  render(<ThemeProvider defaultDarkMode={dark}>{ui}</ThemeProvider>);

describe("DatePicker", () => {
  it("renders without throwing", () => {
    expect(() => wrap(<DatePicker />)).not.toThrow();
  });

  it("renders in dark mode without throwing", () => {
    expect(() => wrap(<DatePicker />, true)).not.toThrow();
  });

  it("renders with label without throwing", () => {
    expect(() => wrap(<DatePicker label="Select date" />)).not.toThrow();
  });
});

describe("TimePicker", () => {
  it("renders without throwing", () => {
    expect(() => wrap(<TimePicker />)).not.toThrow();
  });

  it("renders in dark mode without throwing", () => {
    expect(() => wrap(<TimePicker />, true)).not.toThrow();
  });

  it("renders with label without throwing", () => {
    expect(() => wrap(<TimePicker label="Select time" />)).not.toThrow();
  });
});

describe("DateTimePicker", () => {
  it("renders without throwing", () => {
    expect(() => wrap(<DateTimePicker />)).not.toThrow();
  });

  it("renders in dark mode without throwing", () => {
    expect(() => wrap(<DateTimePicker />, true)).not.toThrow();
  });
});

describe("DateRangePicker", () => {
  const noop = jest.fn();

  it("renders without throwing", () => {
    expect(() =>
      wrap(
        <DateRangePicker
          startDate=""
          endDate=""
          setStartDate={noop}
          setEndDate={noop}
        />,
      ),
    ).not.toThrow();
  });

  it("renders in dark mode without throwing", () => {
    expect(() =>
      wrap(
        <DateRangePicker
          startDate=""
          endDate=""
          setStartDate={noop}
          setEndDate={noop}
        />,
        true,
      ),
    ).not.toThrow();
  });

  it("renders with start date without throwing", () => {
    expect(() =>
      wrap(
        <DateRangePicker
          startDate="1/1/2025"
          endDate=""
          setStartDate={noop}
          setEndDate={noop}
        />,
      ),
    ).not.toThrow();
  });

  it("renders with start and end date without throwing", () => {
    expect(() =>
      wrap(
        <DateRangePicker
          startDate="1/1/2025"
          endDate="1/31/2025"
          setStartDate={noop}
          setEndDate={noop}
        />,
      ),
    ).not.toThrow();
  });
});

describe("StaticDatePicker", () => {
  it("renders without throwing", () => {
    expect(() => wrap(<StaticDatePicker />)).not.toThrow();
  });

  it("renders in dark mode without throwing", () => {
    expect(() => wrap(<StaticDatePicker />, true)).not.toThrow();
  });
});

describe("StaticDateTimePicker", () => {
  it("renders without throwing", () => {
    expect(() => wrap(<StaticDateTimePicker />)).not.toThrow();
  });

  it("renders in dark mode without throwing", () => {
    expect(() => wrap(<StaticDateTimePicker />, true)).not.toThrow();
  });
});
