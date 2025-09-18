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
