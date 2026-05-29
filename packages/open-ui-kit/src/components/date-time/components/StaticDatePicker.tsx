/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker as MuiStaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { useTheme } from "@mui/material";
import {
  getSharedSlotPropsDateTimePicker,
  getSharedStyle,
  getStaticPickerToolbarSlotProp,
  mergeSx,
} from "../styles";
import type { StaticDatePickerProps } from "../types";

export const StaticDatePicker = (props: StaticDatePickerProps) => {
  const theme = useTheme();
  const { slotProps, sx, ...pickerProps } = props;
  const toolbarSlotProps =
    typeof slotProps?.toolbar === "function" ? undefined : slotProps?.toolbar;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiStaticDatePicker
        views={["year", "month", "day"]}
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
          } as StaticDatePickerProps["slotProps"]
        }
        sx={mergeSx(getSharedStyle(theme), sx) as StaticDatePickerProps["sx"]}
      />
    </LocalizationProvider>
  );
};
