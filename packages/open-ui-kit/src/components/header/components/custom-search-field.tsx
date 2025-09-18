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

import { SearchField, SearchFieldProps } from "@/components";

export const CustomSearchField = (props: SearchFieldProps) => {
  const { placeholder, value, onChange } = props;
  return (
    <SearchField
      size="medium"
      variant="standard"
      placeholder={placeholder ?? "Search..."}
      value={value}
      onChange={onChange}
      sx={{
        padding: 0,
        "& .MuiInput-root": {
          width: "360px",
          height: "36px",
          borderRadius: "4px",
          marginTop: 0,
          border: "none",
          backgroundColor: (theme) => theme.palette.vars.baseBackgroundWeak,
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: (theme) => theme.palette.primary.main,
          },
        },
      }}
      {...props}
    />
  );
};
