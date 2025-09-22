/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  StaticDateTimePicker as MuiStaticDateTimePicker,
  StaticDateTimePickerProps,
} from "@mui/x-date-pickers/StaticDateTimePicker";
import { useTheme } from "@mui/material";
import { Dayjs } from "dayjs";
import {
  getSharedSlotPropsDateTimePicker,
  getSharedStyle,
  getStaticPickerToolbarSlotProp,
} from "../styles";

export const StaticDateTimePicker = (
  props: StaticDateTimePickerProps<Dayjs>,
) => {
  const theme = useTheme();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiStaticDateTimePicker
        views={["year", "month", "day", "hours", "minutes"]}
        {...props}
        slotProps={{
          ...getSharedSlotPropsDateTimePicker(theme),
          toolbar: { sx: getStaticPickerToolbarSlotProp(theme) },
        }}
        sx={getSharedStyle(theme)}
      />
    </LocalizationProvider>
  );
};
