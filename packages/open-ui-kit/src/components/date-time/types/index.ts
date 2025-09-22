/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { DateTimePickerProps as MuiDateTimePickerProps } from "@mui/x-date-pickers/DateTimePicker";
import { DatePickerProps as MuiDatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { TimePickerProps as MuiTimePickerProps } from "@mui/x-date-pickers/TimePicker";
import { StaticDateTimePickerProps } from "@mui/x-date-pickers/StaticDateTimePicker";
import { StaticDatePickerProps } from "@mui/x-date-pickers/StaticDatePicker";
import { StaticTimePickerProps } from "@mui/x-date-pickers/StaticTimePicker";
import { SxProps, Popper } from "@mui/material";
import { Dayjs } from "dayjs";
import { SlotComponentProps } from "@mui/utils";
import { PickerPopperProps } from "@mui/x-date-pickers/internals";

export interface DateTimePickerProps extends MuiDateTimePickerProps<Dayjs> {
  label?: string;
  textFieldStyles?: SxProps;
  popperSlotProps?: SlotComponentProps<
    typeof Popper,
    unknown,
    PickerPopperProps
  >;
}

export interface DatePickerProps extends MuiDatePickerProps<Dayjs> {
  label?: string;
  textFieldStyles?: SxProps;
  popperSlotProps?: SlotComponentProps<
    typeof Popper,
    unknown,
    PickerPopperProps
  >;
}

export interface TimePickerProps extends MuiTimePickerProps<Dayjs> {
  label?: string;
  textFieldStyles?: SxProps;
  popperSlotProps?: SlotComponentProps<
    typeof Popper,
    unknown,
    PickerPopperProps
  >;
}

export type {
  StaticDateTimePickerProps,
  StaticDatePickerProps,
  StaticTimePickerProps,
};
