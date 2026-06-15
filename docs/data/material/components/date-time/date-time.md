---
productId: open-ui-kit-core
title: React Date Time component
githubLabel: 'component: date-time'
githubSource: packages/open-ui-kit/src/components/date-time
---

# Date Time

<p class="description">The Open UI Kit Date Time family lets users select dates, times, date-time values, date ranges, and static calendar values.</p>

{{"component": "@mui/internal-core-docs/ComponentLinkHeader"}}

## Introduction

Use Date Time components when users need to schedule events, filter by a period, or select a precise timestamp.
The components provide Open UI Kit field defaults, popper spacing, and calendar styling for date and time selection.

{{"demo": "DateTimeUsage.js", "bg": true}}

## Import

```tsx
import {
  DatePicker,
  DateRangePicker,
  DateTimePicker,
  StaticDatePicker,
  StaticDateTimePicker,
  TimePicker,
} from '@open-ui-kit/core';
```

## When to use

Use Date Time components when users need to choose dates, times, ranges, or scheduled moments.
They fit reports, filters, maintenance windows, scheduling flows, and audit views.

Use simpler text, menu, or preset controls when the value space is small and fixed.

## Anatomy

The family includes date, time, date-time, range, and static picker patterns.
Each picker should have a clear label, value, change handler, and validation message when needed.
Helper text should clarify timezone, allowed range, and format expectations.

## Date and time

Use `DateTimePicker` when the selected value needs both a calendar date and a time.
Open UI Kit formats the field as `MM/DD/YYYY HH:mm` by default.

{{"demo": "DateTimePickerDemo.js", "bg": true}}

## Date or time only

Use `DatePicker` for calendar-only values and `TimePicker` for time-only scheduling.

{{"demo": "DateTimeFamily.js", "bg": true}}

## Date ranges

Use `DateRangePicker` when users need to choose a start and end date.
The range picker stores its current values as strings and exposes setter callbacks.

{{"demo": "DateRangePickerDemo.js", "bg": true}}

## Static pickers

Use static pickers when the calendar itself is the primary interaction, such as scheduling panels or dense configuration flows.

{{"demo": "StaticDatePickerDemo.js", "bg": true}}

## Behavior notes

Decide whether values are local time, UTC, or domain-specific before wiring the picker.
Normalize values at the app boundary so API calls, saved filters, and display formatting stay consistent.
For filters, pair date changes with visible chips or result counts so users know the current query.

## Props

Date Time components extend the picker props and add Open UI Kit convenience props.

| Component | Key props | Description |
| --- | --- | --- |
| `DateTimePicker` | `label`, `value`, `defaultValue`, `onChange`, `textFieldStyles`, `popperSlotProps` | Selects date and time values. |
| `DatePicker` | `label`, `value`, `defaultValue`, `onChange`, `textFieldStyles`, `popperSlotProps` | Selects calendar dates. |
| `TimePicker` | `label`, `value`, `defaultValue`, `onChange`, `textFieldStyles`, `popperSlotProps` | Selects time values. |
| `DateRangePicker` | `startDate`, `endDate`, `setStartDate`, `setEndDate`, `textFieldProps`, `popoverProps` | Selects a date range with a custom range popover. |
| `StaticDatePicker` | Static date picker props | Renders an always-visible date picker. |
| `StaticDateTimePicker` | Static date-time picker props | Renders an always-visible date-time picker. |

## Accessibility

Provide a clear label or placeholder for every picker.
Use surrounding form labels when the field belongs to a larger form section.
For date ranges, make sure nearby text explains whether the range is inclusive and what timezone applies.

## Usage guidance

- Use date-time values for scheduled events and timestamp filters.
- Use date-only values for deadlines, birthdays, and business dates.
- Use time-only values for recurring daily settings.
- Use ranges for reporting windows and filters.
- Keep timezone expectations visible when time affects user outcomes.
