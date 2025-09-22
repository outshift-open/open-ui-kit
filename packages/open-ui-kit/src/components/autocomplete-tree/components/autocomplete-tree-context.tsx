/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, ReactNode } from "react";
import { AugmentedSelectNodeType } from "@/types";
import { EMPTY_FUNCTION } from "@/common";

interface AutocompleteTreeContextType {
  searchPlaceholder: string | null;
  searchText: string;
  setSearchText: (text: string) => void;
  selectAllNode?: AugmentedSelectNodeType;
  isSearchFieldEnabled?: boolean;
  isSelectAllEnabled: boolean;
  onSelectAllChange: (checked: boolean) => void;
  parentSelectOnly: boolean;
  virtualizationOverscanPx: number;
}

const AutocompleteTreeContext = createContext<
  AutocompleteTreeContextType | undefined
>(undefined);

export const useAutocompleteTreeContext = (): AutocompleteTreeContextType => {
  const context = useContext(AutocompleteTreeContext);
  if (!context) {
    throw new Error(
      "useAutocompleteTreeContext must be used within a AutocompleteTreeProvider",
    );
  }
  return context;
};

interface AutocompleteTreeProviderProps {
  children: ReactNode;
  isSearchFieldEnabled?: boolean;
  isSelectAllEnabled: boolean;
  onSelectAllChange: (checked: boolean) => void;
  parentSelectOnly?: boolean;
  searchPlaceholder?: string | null;
  searchText?: string;
  selectAllNode?: AugmentedSelectNodeType;
  setSearchText?: (newSearchText: string) => void;
  virtualizationOverscanPx?: number;
}

export const AutocompleteTreeProvider: React.FC<
  AutocompleteTreeProviderProps
> = ({
  children,
  isSearchFieldEnabled,
  isSelectAllEnabled,
  onSelectAllChange,
  parentSelectOnly = false,
  searchPlaceholder = null,
  searchText = "",
  selectAllNode,
  setSearchText = EMPTY_FUNCTION,
  virtualizationOverscanPx = 800,
}) => {
  return (
    <AutocompleteTreeContext.Provider
      value={{
        isSearchFieldEnabled,
        isSelectAllEnabled,
        onSelectAllChange,
        parentSelectOnly,
        searchPlaceholder,
        searchText,
        selectAllNode,
        setSearchText,
        virtualizationOverscanPx,
      }}
    >
      {children}
    </AutocompleteTreeContext.Provider>
  );
};
