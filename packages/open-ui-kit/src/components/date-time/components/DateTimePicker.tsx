/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { AdapterDayjs } from "@mui/x-date-pickers/node/AdapterDayjs/index.js";
import { LocalizationProvider } from "@mui/x-date-pickers/node/LocalizationProvider/index.js";
import { DateTimePicker as MuiDateTimePicker } from "@mui/x-date-pickers/node/DateTimePicker/index.js";
import { useTheme } from "@mui/material";
import type { DateTimePickerProps } from "../types";
import {
  getDateTimePickerStyle,
  getSharedSlotPropsDateTimePicker,
  mergeSx,
} from "../styles";

export const DateTimePicker = ({
  label,
  textFieldStyles,
  popperSlotProps,
  ...props
}: DateTimePickerProps) => {
  const theme = useTheme();
  const sharedSlotProps = getSharedSlotPropsDateTimePicker(theme);
  const { slotProps, ...pickerProps } = props;
  const textFieldSlotProps =
    typeof slotProps?.textField === "function"
      ? undefined
      : slotProps?.textField;
  const desktopPaperSlotProps =
    typeof slotProps?.desktopPaper === "function"
      ? undefined
      : slotProps?.desktopPaper;
  const actionBarSlotProps =
    typeof slotProps?.actionBar === "function"
      ? undefined
      : slotProps?.actionBar;
  const popperSlotPropsFromProps =
    typeof slotProps?.popper === "function" ? undefined : slotProps?.popper;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiDateTimePicker
        views={["year", "month", "day", "hours", "minutes"]}
        format="MM/DD/YYYY HH:mm"
        {...pickerProps}
        slotProps={
          {
            ...sharedSlotProps,
            ...slotProps,
            desktopPaper: {
              ...desktopPaperSlotProps,
              sx: mergeSx(
                getDateTimePickerStyle(theme),
                desktopPaperSlotProps?.sx,
              ),
            },
            actionBar: {
              ...sharedSlotProps.actionBar,
              actions: ["cancel", "accept"],
              ...actionBarSlotProps,
              sx: mergeSx(sharedSlotProps.actionBar.sx, actionBarSlotProps?.sx),
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
            popper: {
              modifiers: [{ name: "offset", options: { offset: [0, 12] } }],
              ...popperSlotProps,
              ...popperSlotPropsFromProps,
            },
          } as DateTimePickerProps["slotProps"]
        }
      />
    </LocalizationProvider>
  );
};
