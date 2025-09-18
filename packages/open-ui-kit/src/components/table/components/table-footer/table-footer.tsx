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

import {
  Divider,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { selectButtonStyles } from "./styles";

interface FooterProps {
  selectedValue: number;
  totalCount: number;
  options: Array<number>;
  onChange: (num: number) => void;
  pageIndex: number;
}

export const TableFooter = ({
  selectedValue,
  totalCount,
  options,
  onChange,
  pageIndex,
}: FooterProps) => {
  const firstResultIndex = pageIndex * selectedValue + 1;
  const lastResultIndex = Math.min(
    firstResultIndex + selectedValue - 1,
    totalCount,
  );
  return (
    <Stack
      display="flex"
      direction="row"
      alignItems="center"
      height={34}
      minWidth="fit-content"
      spacing={"12px"}
    >
      <Typography variant="subtitle2">
        Showing {firstResultIndex} - {lastResultIndex} of {totalCount} results
      </Typography>
      <Divider
        orientation="vertical"
        sx={{ height: "20px", borderWidth: "1px" }}
      />
      <Stack flexDirection="row" alignItems="center">
        <Typography variant="subtitle2">Rows per page</Typography>
        <Select
          MenuProps={{
            anchorOrigin: {
              vertical: "top",
              horizontal: "right",
            },
            transformOrigin: {
              vertical: "bottom",
              horizontal: "right",
            },
            PaperProps: {
              sx: { marginTop: "-4px" },
            },
          }}
          displayEmpty
          value={selectedValue}
          onChange={(event) => onChange(Number(event.target.value))}
          sx={selectButtonStyles}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            return <Typography variant="subtitle2">{selected}</Typography>;
          }}
        >
          {options.map((name) => (
            <MenuItem key={name} value={name}>
              <Typography variant="subtitle2">{name}</Typography>
            </MenuItem>
          ))}
        </Select>
      </Stack>
    </Stack>
  );
};
