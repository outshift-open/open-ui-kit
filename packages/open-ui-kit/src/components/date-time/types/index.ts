/*
 * Copyright 2025 Open UI Kit Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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
