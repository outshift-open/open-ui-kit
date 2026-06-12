/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { AdapterDayjs } from "@mui/x-date-pickers/node/AdapterDayjs/index.js";
import { LocalizationProvider } from "@mui/x-date-pickers/node/LocalizationProvider/index.js";
import { TimePicker as MuiDateTimePicker } from "@mui/x-date-pickers/node/TimePicker/index.js";
import { useTheme } from "@mui/material";
import type { TimePickerProps } from "../types";
import {
  getSharedSlotPropsDateTimePicker,
  getTimePickerStyle,
  mergeSx,
} from "../styles";

export const TimePicker = ({
  label,
  textFieldStyles,
  popperSlotProps,
  ...props
}: TimePickerProps) => {
  const theme = useTheme();
  const sharedSlotProps = getSharedSlotPropsDateTimePicker(theme);
  const { slotProps, ...pickerProps } = props;
  const textFieldSlotProps =
    typeof slotProps?.textField === "function"
      ? undefined
      : slotProps?.textField;
  const popperSlotPropsFromProps =
    typeof slotProps?.popper === "function" ? undefined : slotProps?.popper;
  const desktopPaperSlotProps =
    typeof slotProps?.desktopPaper === "function"
      ? undefined
      : slotProps?.desktopPaper;
  const actionBarSlotProps =
    typeof slotProps?.actionBar === "function"
      ? undefined
      : slotProps?.actionBar;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiDateTimePicker
        format="HH:mm"
        {...pickerProps}
        slotProps={
          {
            ...sharedSlotProps,
            ...slotProps,
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
            desktopPaper: {
              ...sharedSlotProps.desktopPaper,
              ...desktopPaperSlotProps,
              sx: mergeSx(getTimePickerStyle(theme), desktopPaperSlotProps?.sx),
            },
            actionBar: {
              ...sharedSlotProps.actionBar,
              ...actionBarSlotProps,
              actions: actionBarSlotProps?.actions ?? ["cancel", "accept"],
              sx: mergeSx(sharedSlotProps.actionBar.sx, actionBarSlotProps?.sx),
            },
          } as TimePickerProps["slotProps"]
        }
      />
    </LocalizationProvider>
  );
};
