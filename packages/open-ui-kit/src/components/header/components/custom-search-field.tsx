/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SearchInput, SearchInputProps } from "@/components/search-input";
import { getCustomSearchInputStyles } from "../styles";

export const CustomSearchInput = (props: SearchInputProps) => {
  const { placeholder, sx, ...rest } = props;
  return (
    <SearchInput
      size="medium"
      variant="standard"
      {...rest}
      placeholder={placeholder ?? "Search..."}
      sx={[
        (theme) => getCustomSearchInputStyles(theme),
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    />
  );
};
