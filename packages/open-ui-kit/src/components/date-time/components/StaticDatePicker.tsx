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
