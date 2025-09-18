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
