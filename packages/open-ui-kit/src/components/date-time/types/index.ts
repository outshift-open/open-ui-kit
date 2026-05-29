/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { DateTimePickerProps as MuiDateTimePickerProps } from "@mui/x-date-pickers/DateTimePicker";
import type { DatePickerProps as MuiDatePickerProps } from "@mui/x-date-pickers/DatePicker";
import type { TimePickerProps as MuiTimePickerProps } from "@mui/x-date-pickers/TimePicker";
import type { StaticDateTimePickerProps as MuiStaticDateTimePickerProps } from "@mui/x-date-pickers/StaticDateTimePicker";
import type { StaticDatePickerProps as MuiStaticDatePickerProps } from "@mui/x-date-pickers/StaticDatePicker";
import type { StaticTimePickerProps as MuiStaticTimePickerProps } from "@mui/x-date-pickers/StaticTimePicker";
import type { PopoverProps, Popper, SxProps } from "@mui/material";
import type { Dayjs } from "dayjs";
import type { SlotComponentProps } from "@mui/utils";
import type { PickerPopperProps } from "@mui/x-date-pickers/internals";
import type { InputFieldProps } from "@/components/input-field";

export interface DateTimePickerProps extends MuiDateTimePickerProps<Dayjs> {
  /** Placeholder text shown in the input when no value is selected. */
  label?: string;
  /** Additional styles merged into the picker input text field. */
  textFieldStyles?: SxProps;
  /** Extra popper slot props merged with the default 12px offset. */
  popperSlotProps?: SlotComponentProps<
    typeof Popper,
    unknown,
    PickerPopperProps
  >;
}

export interface DatePickerProps extends MuiDatePickerProps<Dayjs> {
  /** Placeholder text shown in the input when no value is selected. */
  label?: string;
  /** Additional styles merged into the picker input text field. */
  textFieldStyles?: SxProps;
  /** Extra popper slot props merged with the default 12px offset. */
  popperSlotProps?: SlotComponentProps<
    typeof Popper,
    unknown,
    PickerPopperProps
  >;
}

export interface TimePickerProps extends MuiTimePickerProps<Dayjs> {
  /** Placeholder text shown in the input when no value is selected. */
  label?: string;
  /** Additional styles merged into the picker input text field. */
  textFieldStyles?: SxProps;
  /** Extra popper slot props merged with the default 12px offset. */
  popperSlotProps?: SlotComponentProps<
    typeof Popper,
    unknown,
    PickerPopperProps
  >;
}

export interface DateRangePickerProps {
  /** Selected range start date formatted for display and comparison. */
  startDate: string;
  /** Selected range end date formatted for display and comparison. */
  endDate: string;
  /** Updates the selected range start date. */
  setStartDate: (startDate: string) => void;
  /** Updates the selected range end date. */
  setEndDate: (endDate: string) => void;
  /** Notifies consumers when the calendar popover opens or closes. */
  getPopoverVisibility?: (visibility: boolean) => void;
  /** Props forwarded to the trigger input field. */
  inputFieldProps?: InputFieldProps;
  /** Props forwarded to the calendar popover. */
  popoverProps?: PopoverProps;
}

export type StaticDateTimePickerProps = MuiStaticDateTimePickerProps<Dayjs>;
export type StaticDatePickerProps = MuiStaticDatePickerProps<Dayjs>;
export type StaticTimePickerProps = MuiStaticTimePickerProps<Dayjs>;
