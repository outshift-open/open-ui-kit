/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker as MuiDateTimePicker } from "@mui/x-date-pickers/TimePicker";
import { useTheme } from "@mui/material";
import { TimePickerProps } from "../types";
import { getSharedSlotPropsDateTimePicker } from "../styles";

export const TimePicker = ({
  label,
  textFieldStyles,
  ...props
}: TimePickerProps) => {
  const theme = useTheme();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiDateTimePicker
        format="HH:mm"
        {...props}
        slotProps={{
          ...getSharedSlotPropsDateTimePicker(theme),
          textField: {
            placeholder: label,
            variant: "outlined",
            size: "small",
            sx: {
              "& .MuiInputBase-root": { marginTop: 0, width: "220px" },
              "& .MuiInputAdornment-root": {
                paddingRight: "8px",
              },
              ...textFieldStyles,
            },
          },
          popper: {
            modifiers: [
              {
                name: "offset",
                options: {
                  offset: [0, 12],
                },
              },
            ],
          },
        }}
      />
    </LocalizationProvider>
  );
};
