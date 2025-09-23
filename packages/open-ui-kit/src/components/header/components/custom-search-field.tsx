/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
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
