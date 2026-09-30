/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import dayjs from "dayjs";
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { TimeWheel, type TimeWheelProps } from "../components/TimeWheel";

// jsdom has no scrolling; the wheel only needs these to exist.
beforeAll(() => {
  Element.prototype.scrollTo = jest.fn();
  Element.prototype.scrollBy = jest.fn();
});

const renderWheel = (props: Partial<TimeWheelProps> = {}) => {
  const onChange = jest.fn();
  render(
    <ThemeProvider>
      <TimeWheel
        value={dayjs("2025-08-14T09:30:00")}
        onChange={onChange}
        timeSteps={{ hours: 1, minutes: 5 }}
        {...props}
      />
    </ThemeProvider>,
  );
  return { onChange };
};

const announced = (name: string) =>
  within(screen.getByRole("listbox", { name }))
    .getAllByRole("option")
    .map((option) => option.textContent);

describe("TimeWheel", () => {
  it("repeats each list so it can turn continuously, announcing one copy", () => {
    renderWheel();
    const hours = screen.getByRole("listbox", { name: "Hours" });

    expect(hours.children).toHaveLength(12 * 7);
    expect(announced("Hours")).toEqual([
      "12",
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
    ]);
    expect(announced("Minutes")).toHaveLength(12);
  });

  it("marks the current hour and minute as selected", () => {
    renderWheel();

    expect(
      within(screen.getByRole("listbox", { name: "Hours" })).getByRole(
        "option",
        { selected: true },
      ),
    ).toHaveTextContent("09");
    expect(
      within(screen.getByRole("listbox", { name: "Minutes" })).getByRole(
        "option",
        { selected: true },
      ),
    ).toHaveTextContent("30");
  });

  it("selects a clicked entry, keeping the rest of the time", () => {
    const { onChange } = renderWheel();

    fireEvent.click(
      within(screen.getByRole("listbox", { name: "Minutes" })).getByRole(
        "option",
        { name: "45" },
      ),
    );

    const next = onChange.mock.calls[0][0];
    expect([next.hour(), next.minute()]).toEqual([9, 45]);
  });

  it("switches between AM and PM without changing the hour on the dial", () => {
    const { onChange } = renderWheel();

    fireEvent.click(screen.getByRole("option", { name: "PM" }));

    expect(onChange.mock.calls[0][0].hour()).toBe(21);
  });

  it("uses a 24-hour dial without the meridiem column when ampm is off", () => {
    renderWheel({ ampm: false });

    expect(announced("Hours")).toHaveLength(24);
    expect(screen.queryByRole("listbox", { name: "Meridiem" })).toBeNull();
  });

  it("disables entries outside minTime and maxTime", () => {
    const { onChange } = renderWheel({
      minTime: dayjs("2025-08-14T08:00:00"),
      maxTime: dayjs("2025-08-14T10:59:00"),
    });
    const hours = screen.getByRole("listbox", { name: "Hours" });
    const seven = within(hours).getByRole("option", { name: "07" });

    expect(seven).toHaveAttribute("aria-disabled", "true");
    expect(
      within(hours).getByRole("option", { name: "08" }),
    ).not.toHaveAttribute("aria-disabled");

    fireEvent.click(seven);
    expect(onChange).not.toHaveBeenCalled();
  });
});
