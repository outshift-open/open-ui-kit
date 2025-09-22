/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Virtuoso } from "react-virtuoso";
import { EmptyData } from "@/custom-illustrations";
import { SelectNode, SelectNodeListItem } from "./select-node";
import { useAutocompleteTreeContext } from "./autocomplete-tree-context";
import {
  Stack,
  SxProps,
  Theme,
  Typography,
  useAutocomplete,
} from "@mui/material";
import { defaultPopperContentStyles } from "../styles";
import { SearchField } from "@/components";

interface VirtualTreeListboxProps extends React.HTMLAttributes<HTMLElement> {
  ListboxProps?: ReturnType<
    ReturnType<typeof useAutocomplete>["getListboxProps"]
  > & {
    sx?: SxProps<Theme>;
  };
}

export const VirtualTreeListbox = React.forwardRef<
  HTMLDivElement,
  VirtualTreeListboxProps
>(function AutocompleteTreeListbox(props, ref) {
  const {
    isSearchFieldEnabled,
    isSelectAllEnabled,
    onSelectAllChange,
    searchPlaceholder,
    searchText,
    selectAllNode,
    setSearchText,
    virtualizationOverscanPx,
  } = useAutocompleteTreeContext();
  const list = React.Children.toArray(props.children);
  const totalHeight = Math.min(40 * list.length, 375);
  const sx = props.ListboxProps?.sx ?? {};
  const hasNoMatching = !list.length && !!searchText;

  return (
    <Stack
      ref={ref}
      sx={{
        ...defaultPopperContentStyles,
        padding: "8px 0",
        width: "100%",
        ...sx,
      }}
      direction="column"
    >
      {isSearchFieldEnabled && (
        <SearchField
          sx={{ padding: "10px 16px" }}
          onChangeCallback={setSearchText}
          placeholder={searchPlaceholder ?? "Search"}
          onClick={(event) => event.stopPropagation()}
        />
      )}
      {isSelectAllEnabled && selectAllNode && !hasNoMatching && (
        <SelectNodeListItem
          selectNodeElement={
            <SelectNode
              selectNode={selectAllNode}
              onCheckboxClick={onSelectAllChange}
              isSelectAllNode
            />
          }
          selectableLeavesCount={selectAllNode?.selectableLeavesCount}
          onClick={() => onSelectAllChange(!selectAllNode.isSelected)}
        />
      )}
      {hasNoMatching && (
        <Stack
          height="320px"
          justifyContent="center"
          alignItems="center"
          gap="16px"
        >
          <EmptyData />
          <Typography variant="h5">No matching results found</Typography>
        </Stack>
      )}
      {!hasNoMatching && (
        <Stack sx={{ height: `${totalHeight}px`, width: "100%" }}>
          <Virtuoso
            height={`${totalHeight}px`}
            width={"100%"}
            totalCount={list.length}
            style={{ flex: 1 }}
            overscan={virtualizationOverscanPx}
            itemContent={(index) => {
              return list[index];
            }}
          />
        </Stack>
      )}
    </Stack>
  );
});
