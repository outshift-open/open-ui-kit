/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  StaticDatePicker as MuiStaticDatePicker,
  StaticDatePickerProps,
} from "@mui/x-date-pickers/StaticDatePicker";
import { useTheme } from "@mui/material";
import { Dayjs } from "dayjs";
import {
  getSharedSlotPropsDateTimePicker,
  getSharedStyle,
  getStaticPickerToolbarSlotProp,
} from "../styles";

export const StaticDatePicker = (props: StaticDatePickerProps<Dayjs>) => {
  const theme = useTheme();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiStaticDatePicker
        views={["year", "month", "day"]}
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
