/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { AdapterDayjs } from "@mui/x-date-pickers/node/AdapterDayjs/index.js";
import { LocalizationProvider } from "@mui/x-date-pickers/node/LocalizationProvider/index.js";
import { StaticDatePicker as MuiStaticDatePicker } from "@mui/x-date-pickers/node/StaticDatePicker/index.js";
import { useTheme } from "@mui/material";
import {
  getDatePickerStyle,
  getSharedSlotPropsDateTimePicker,
  getStaticMonthPickerStyle,
  getStaticPickerToolbarSlotProp,
  mergeSx,
} from "../styles";
import type { StaticDatePickerProps } from "../types";

export const StaticDatePicker = (props: StaticDatePickerProps) => {
  const theme = useTheme();
  const { slotProps, sx, views, ...pickerProps } = props;
  const toolbarSlotProps =
    typeof slotProps?.toolbar === "function" ? undefined : slotProps?.toolbar;
  const actionBarSlotProps =
    typeof slotProps?.actionBar === "function"
      ? undefined
      : slotProps?.actionBar;
  const resolvedViews = views ?? ["year", "month", "day"];
  const staticStyle = resolvedViews.includes("day")
    ? getDatePickerStyle(theme)
    : getStaticMonthPickerStyle(theme);
  const sharedSlotProps = getSharedSlotPropsDateTimePicker(theme);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiStaticDatePicker
        views={resolvedViews}
        {...pickerProps}
        slotProps={
          {
            ...sharedSlotProps,
            ...slotProps,
            toolbar: {
              ...toolbarSlotProps,
              sx: mergeSx(
                getStaticPickerToolbarSlotProp(theme),
                toolbarSlotProps?.sx,
              ),
            },
            actionBar: {
              ...sharedSlotProps.actionBar,
              actions: ["cancel", "accept"],
              ...actionBarSlotProps,
              sx: mergeSx(sharedSlotProps.actionBar.sx, actionBarSlotProps?.sx),
            },
          } as StaticDatePickerProps["slotProps"]
        }
        sx={mergeSx(staticStyle, sx) as StaticDatePickerProps["sx"]}
      />
    </LocalizationProvider>
  );
};
