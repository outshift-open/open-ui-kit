/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDateTimePicker as MuiStaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";
import { useTheme } from "@mui/material";
import {
  getStaticDateTimePickerStyle,
  getSharedSlotPropsDateTimePicker,
  getStaticPickerToolbarSlotProp,
  mergeSx,
} from "../styles";
import type { StaticDateTimePickerProps } from "../types";

export const StaticDateTimePicker = (props: StaticDateTimePickerProps) => {
  const theme = useTheme();
  const { slotProps, sx, ...pickerProps } = props;
  const toolbarSlotProps =
    typeof slotProps?.toolbar === "function" ? undefined : slotProps?.toolbar;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiStaticDateTimePicker
        views={["year", "month", "day", "hours", "minutes"]}
        {...pickerProps}
        slotProps={
          {
            ...getSharedSlotPropsDateTimePicker(theme),
            ...slotProps,
            toolbar: {
              ...toolbarSlotProps,
              sx: mergeSx(
                getStaticPickerToolbarSlotProp(theme),
                toolbarSlotProps?.sx,
              ),
            },
          } as StaticDateTimePickerProps["slotProps"]
        }
        sx={
          mergeSx(
            getStaticDateTimePickerStyle(theme),
            sx,
          ) as StaticDateTimePickerProps["sx"]
        }
      />
    </LocalizationProvider>
  );
};
