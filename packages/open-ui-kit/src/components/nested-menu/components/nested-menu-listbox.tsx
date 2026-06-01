/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Stack, useTheme } from "@mui/material";
import { Virtuoso } from "react-virtuoso";
import { EmptyState } from "@/components/empty-state";
import { SearchInput } from "@/components/search-input";
import { SelectNode } from "./select-node";
import { SelectNodeListItem } from "./select-node-list-item";
import { defaultPopperContentStyle } from "../styles";
import { AugmentedSelectNodeType } from "@/types";
import { buildNodeLabelElement } from "../utils/utils";

interface NestedMenuListboxProps {
  children?: React.ReactNode[];
  isIconAllowed?: boolean;
  isSearchFieldEnabled?: boolean;
  onSelectAllChange?: (isSelected: boolean) => void;
  searchPlaceholder?: string;
  searchText?: string;
  selectAllNode: AugmentedSelectNodeType;
  setSearchText?: (text: string) => void;
  virtualizationOverscanPx?: number;
}

export const NestedMenuListbox = ({
  children = [],
  isIconAllowed,
  isSearchFieldEnabled = true,
  onSelectAllChange,
  searchPlaceholder = "Search",
  searchText = "",
  selectAllNode,
  setSearchText,
  virtualizationOverscanPx = 800,
}: NestedMenuListboxProps) => {
  const theme = useTheme();

  const optionlist = React.Children.toArray(children);
  const totalHeight = Math.min(40 * optionlist.length, 375);
  const hasNoMatching = !optionlist.length && !!searchText;
  const nodeLabel = buildNodeLabelElement(selectAllNode, searchText, theme);
  return (
    <Stack
      sx={{
        ...defaultPopperContentStyle,
        padding: "8px 0",
        width: "100%",
        minWidth: "200px",
      }}
      direction="column"
    >
      {isSearchFieldEnabled && (
        <SearchInput
          sx={{ padding: "8px 16px" }}
          onChangeCallback={(text: string) => setSearchText?.(text)}
          placeholder={searchPlaceholder}
          onClick={(event: React.MouseEvent<HTMLInputElement>) =>
            event.stopPropagation()
          }
        />
      )}
      {onSelectAllChange && !hasNoMatching && (
        <SelectNodeListItem
          isLeaf={true}
          selectNodeElement={
            <SelectNode
              nodeLabel={nodeLabel}
              isIconAllowed={isIconAllowed}
              isLeaf={true}
              isParentNode
              isSelectAllNode
              selectableLeavesCount={selectAllNode?.selectableLeavesCount}
              nestLevel={selectAllNode?.nestLevel}
              nodeIcon={selectAllNode.icon}
              onCheckboxClick={onSelectAllChange}
              selectedLeavesCount={selectAllNode?.selectedLeavesCount}
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
          sx={{ padding: "0px 16px 16px 10px !important" }}
        >
          <EmptyState
            title="No matching results found"
            description="Try changing your search term or clear the search field."
          />
        </Stack>
      )}
      {!hasNoMatching && (
        <Stack sx={{ height: `${totalHeight}px`, width: "100%" }}>
          <Virtuoso
            height={`${totalHeight}px`}
            width={"100%"}
            totalCount={optionlist.length}
            style={{ flex: 1 }}
            overscan={virtualizationOverscanPx}
            itemContent={(index) => {
              return optionlist[index];
            }}
          />
        </Stack>
      )}
    </Stack>
  );
};
