/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { AdapterDayjs } from "@mui/x-date-pickers/node/AdapterDayjs/index.js";
import { LocalizationProvider } from "@mui/x-date-pickers/node/LocalizationProvider/index.js";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/node/DatePicker/index.js";
import { useTheme } from "@mui/material";
import type { DatePickerProps } from "../types";
import {
  getDatePickerStyle,
  getSharedSlotPropsDateTimePicker,
  mergeSx,
} from "../styles";

export const DatePicker = ({
  label,
  textFieldStyles,
  popperSlotProps,
  ...props
}: DatePickerProps) => {
  const theme = useTheme();
  const sharedSlotProps = getSharedSlotPropsDateTimePicker(theme);
  const { slotProps, ...pickerProps } = props;
  const textFieldSlotProps =
    typeof slotProps?.textField === "function"
      ? undefined
      : slotProps?.textField;
  const actionBarSlotProps =
    typeof slotProps?.actionBar === "function"
      ? undefined
      : slotProps?.actionBar;
  const desktopPaperSlotProps =
    typeof slotProps?.desktopPaper === "function"
      ? undefined
      : slotProps?.desktopPaper;
  const popperSlotPropsFromProps =
    typeof slotProps?.popper === "function" ? undefined : slotProps?.popper;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiDatePicker
        views={["year", "month", "day"]}
        {...pickerProps}
        slotProps={{
          ...sharedSlotProps,
          ...slotProps,
          desktopPaper: {
            ...desktopPaperSlotProps,
            sx: mergeSx(getDatePickerStyle(theme), desktopPaperSlotProps?.sx),
          },
          textField: {
            ...textFieldSlotProps,
            placeholder: label,
            variant: "standard",
            size: "small",
            sx: mergeSx(
              {
                "& .MuiInputBase-root": { marginTop: 0, width: "220px" },
                "& .MuiInputAdornment-root": { paddingRight: "8px" },
              },
              textFieldStyles,
              textFieldSlotProps?.sx,
            ),
          },
          actionBar: {
            ...sharedSlotProps.actionBar,
            actions: ["cancel", "accept"],
            ...actionBarSlotProps,
            sx: mergeSx(sharedSlotProps.actionBar.sx, actionBarSlotProps?.sx),
          },
          popper: {
            modifiers: [{ name: "offset", options: { offset: [0, 12] } }],
            ...popperSlotProps,
            ...popperSlotPropsFromProps,
          },
        }}
      />
    </LocalizationProvider>
  );
};
