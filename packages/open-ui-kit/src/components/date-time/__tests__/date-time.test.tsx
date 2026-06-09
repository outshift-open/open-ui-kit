/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { DatePicker } from "../components/DatePicker";
import { TimePicker } from "../components/TimePicker";
import { DateTimePicker } from "../components/DateTimePicker";
import { DateRangePicker } from "../components/DateRangePicker";
import { StaticDatePicker } from "../components/StaticDatePicker";
import { StaticDateTimePicker } from "../components/StaticDateTimePicker";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import {
  getDateRangePickerStyles,
  getDatePickerStyle,
  getDateTimePickerStyle,
  getStaticDateTimePickerStyle,
  getStaticMonthPickerStyle,
  getSharedStyle,
  getTimePickerStyle,
} from "../styles";

const selectedStateSelector =
  "& .MuiMultiSectionDigitalClockSection-item.Mui-selected, & .MuiPickersDay-root.Mui-selected, & .MuiMonthCalendar-button.Mui-selected, & .MuiPickersMonth-monthButton.Mui-selected, & .MuiYearCalendar-button.Mui-selected, & .MuiPickersYear-yearButton.Mui-selected";

const wrap = (ui: React.ReactNode, dark = false) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      {ui}
    </ThemeProvider>,
  );

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

  it("preserves input onClick while opening the popover", () => {
    const onClick = jest.fn();
    const getPopoverVisibility = jest.fn();
    const { container } = wrap(
      <DateRangePicker
        startDate=""
        endDate=""
        setStartDate={noop}
        setEndDate={noop}
        getPopoverVisibility={getPopoverVisibility}
        inputFieldProps={{ onClick }}
      />,
    );

    const input = container.querySelector("input");
    expect(input).toBeInTheDocument();
    fireEvent.click(input as HTMLInputElement);

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(getPopoverVisibility).toHaveBeenCalledWith(true);
  });
});

describe("DateTime picker styles", () => {
  it("uses light picker surface and selected-state tokens from CSS", () => {
    const styles = getSharedStyle(lightTheme) as Record<string, unknown>;

    expect(styles).toMatchObject({
      boxSizing: "border-box",
      width: "325px",
      height: "372px",
      border: `2px solid ${lightTheme.palette.vars.controlBorderActive}`,
      borderRadius: "8px",
      padding: "16px",
      backgroundColor: lightTheme.palette.vars.controlBackgroundWeak,
      backgroundImage: "none",
    });
    expect(styles["& .MuiPickersDay-root"]).toMatchObject({
      width: "32px",
      height: "32px",
      borderRadius: "999px",
      color: lightTheme.palette.vars.interactiveTextInDefault,
    });
    expect(styles[selectedStateSelector]).toMatchObject({
      backgroundColor: `${lightTheme.palette.vars.controlBackgroundDefault} !important`,
      border: `1px solid ${lightTheme.palette.vars.interactiveTertiaryActive} !important`,
      borderRadius: "4px",
    });
    expect(lightTheme.palette.vars.controlBackgroundWeak).toBe("#f5f8fd");
    expect(lightTheme.palette.vars.controlBorderActive).toBe("#0051af");
    expect(lightTheme.palette.vars.interactiveTertiaryActive).toBe("#fb962e");
  });

  it("uses dark picker surface and selected-state tokens from CSS", () => {
    const styles = getSharedStyle(darkTheme) as Record<string, unknown>;

    expect(styles).toMatchObject({
      border: `2px solid ${darkTheme.palette.vars.controlBorderActive}`,
      backgroundColor: darkTheme.palette.vars.controlBackgroundWeak,
      backgroundImage: "none",
    });
    expect(styles[selectedStateSelector]).toMatchObject({
      backgroundColor: `${darkTheme.palette.vars.controlBackgroundDefault} !important`,
      border: `1px solid ${darkTheme.palette.vars.interactiveTertiaryActive} !important`,
    });
    expect(darkTheme.palette.vars.controlBackgroundWeak).toBe("#0d274d");
    expect(darkTheme.palette.vars.controlBorderActive).toBe("#12c1ff");
    expect(darkTheme.palette.vars.interactiveTertiaryActive).toBe("#fb9f36");
  });

  it("uses DateRange popover and day grid tokens", () => {
    const styles = getDateRangePickerStyles(lightTheme);

    expect(styles.weekDayStyle).toMatchObject({
      width: "32px",
      height: "20px",
      margin: 0,
    });
    expect(styles.dayContainerStyle).toMatchObject({
      width: "32px",
      height: "32px",
      margin: "8px 0 0",
    });
    expect(styles.selectedDayStyle).toMatchObject({
      width: "32px",
      height: "32px",
      backgroundColor: lightTheme.palette.vars.controlBackgroundDefault,
      border: `1px solid ${lightTheme.palette.vars.interactiveTertiaryActive}`,
      borderRadius: "4px",
    });
    expect(styles.popover).toMatchObject({
      marginTop: "12px",
      "& .MuiPaper-root": {
        boxSizing: "border-box",
        width: "325px",
        height: "306px",
        overflow: "hidden",
        backgroundColor: lightTheme.palette.vars.controlBackgroundWeak,
        backgroundImage: "none",
        border: `2px solid ${lightTheme.palette.vars.controlBorderActive}`,
        borderRadius: "8px",
      },
    });
  });

  it("uses a shorter DatePicker calendar area when actions are shown", () => {
    const styles = getDatePickerStyle(lightTheme) as Record<string, unknown>;

    expect(styles).toMatchObject({
      width: "325px",
      height: "372px",
      backgroundColor: lightTheme.palette.vars.controlBackgroundWeak,
      border: `2px solid ${lightTheme.palette.vars.controlBorderActive}`,
    });
    expect(styles["& .MuiDateCalendar-root"]).toMatchObject({
      height: "296px",
    });
    expect(styles["& .MuiPickersLayout-actionBar"]).toMatchObject({
      width: "293px",
      height: "32px",
      marginTop: "12px",
      gap: "16px",
    });
  });

  it("uses the compact static Month picker surface from CSS", () => {
    const styles = getStaticMonthPickerStyle(darkTheme) as Record<
      string,
      unknown
    >;

    expect(styles).toMatchObject({
      width: "325px",
      height: "280px",
      gridTemplateRows: "0 204px 32px",
      backgroundColor: darkTheme.palette.vars.controlBackgroundWeak,
      border: `2px solid ${darkTheme.palette.vars.controlBorderActive}`,
    });
    expect(styles["& .MuiMonthCalendar-root"]).toMatchObject({
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "8px",
      width: "293px",
      height: "168px",
    });
    expect(
      styles["& .MuiMonthCalendar-button, & .MuiPickersMonth-monthButton"],
    ).toMatchObject({
      width: "92.33px",
      height: "32px",
      backgroundColor: `${darkTheme.palette.vars.controlBackgroundDefault} !important`,
      border: `1px solid ${darkTheme.palette.vars.interactiveSecondaryWeakDefault} !important`,
    });
  });

  it("uses compact TimePicker surface tokens from CSS", () => {
    const styles = getTimePickerStyle(lightTheme) as Record<string, unknown>;

    expect(styles).toMatchObject({
      width: "264px",
      height: "156px",
      backgroundColor: lightTheme.palette.vars.controlBackgroundWeak,
      border: `2px solid ${lightTheme.palette.vars.controlBorderActive}`,
      backgroundImage: "none",
    });
    expect(styles["& .MuiMultiSectionDigitalClock-root"]).toMatchObject({
      width: "232px",
      maxHeight: "80px",
      overflow: "hidden",
      borderBottom: 0,
      position: "relative",
    });
    expect(styles["& .MuiMultiSectionDigitalClockSection-root"]).toMatchObject({
      overflowY: "auto",
      overflowX: "hidden",
      scrollbarWidth: "none",
    });
    expect(styles["& .MuiMultiSectionDigitalClockSection-item"]).toMatchObject({
      minWidth: "69px",
      width: "69px",
      height: "60px",
      borderRadius: "8px",
      backgroundColor: lightTheme.palette.vars.controlBackgroundDefault,
      border: `1px solid ${lightTheme.palette.vars.interactiveSecondaryWeakDefault}`,
    });
    expect(styles["& .MuiMultiSectionDigitalClock-root::before"]).toMatchObject(
      {
        content: '":"',
        left: "69px",
        width: "24px",
        height: "60px",
        color: lightTheme.palette.vars.interactiveTextInDefault,
      },
    );
    expect(
      styles[
        "& .MuiMultiSectionDigitalClockSection-root:nth-of-type(3) .MuiMultiSectionDigitalClockSection-item"
      ],
    ).toMatchObject({
      width: "43px",
      height: "30px",
      minHeight: "30px",
      padding: "5px 10px",
    });
  });

  it("keeps the DateTime popper wide enough for date and time sections", () => {
    const styles = getDateTimePickerStyle(darkTheme) as Record<string, unknown>;

    expect(styles).toMatchObject({
      width: "558px",
      height: "412px",
      backgroundColor: darkTheme.palette.vars.controlBackgroundWeak,
      border: `2px solid ${darkTheme.palette.vars.controlBorderActive}`,
      backgroundImage: "none",
    });
    expect(styles["& .MuiPickersLayout-contentWrapper"]).toMatchObject({
      width: "526px",
      gridTemplateColumns: "293px 1px 232px",
    });
    expect(styles["& .MuiMultiSectionDigitalClock-root"]).toMatchObject({
      width: "232px",
      height: "80px",
      maxHeight: "80px",
    });
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

  it("uses a wider static landscape surface so content is not clipped", () => {
    const styles = getStaticDateTimePickerStyle(lightTheme) as Record<
      string,
      unknown
    >;

    expect(styles).toMatchObject({
      width: "459px",
      height: "450px",
      border: `2px solid ${lightTheme.palette.vars.controlBorderActive}`,
      backgroundColor: lightTheme.palette.vars.controlBackgroundWeak,
    });
    expect(styles["& .MuiDateTimePickerToolbar-root"]).toMatchObject({
      width: "132px",
      height: "384px",
      padding: "16px",
    });
    expect(styles["& .MuiDateTimePickerTabs-root"]).toMatchObject({
      display: "none",
    });
    expect(styles["& .MuiPickersLayout-actionBar"]).toMatchObject({
      width: "417px",
      height: "32px",
      padding: 0,
      gap: "16px",
    });
  });
});
