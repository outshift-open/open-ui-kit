/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import { NestedMenuListbox } from "../components/nested-menu-listbox";
import { SelectNode } from "../components/select-node";
import { AugmentedSelectNodeType } from "@/components/nested-menu";
import {
  getNestedMenuPopoverPaperStyles,
  getNestedMenuTriggerButtonStyles,
  selectNodeStyle,
} from "../styles";

const wrap = (ui: React.ReactNode, dark = false) =>
  render(<ThemeProvider defaultDarkMode={dark}>{ui}</ThemeProvider>);

const mockSelectAllNode: AugmentedSelectNodeType = {
  value: "all",
  nodeKey: "all",
  isSelected: false,
  isExpanded: false,
  isSelectable: true,
  nestLevel: 0,
  selectableLeavesCount: 10,
  selectedLeavesCount: 0,
  childNodes: [],
  parentNode: null,
};
const noop = jest.fn();

describe("NestedMenu", () => {
  describe("NestedMenuListbox", () => {
    it("renders without throwing", () => {
      expect(() =>
        wrap(
          <NestedMenuListbox
            selectAllNode={mockSelectAllNode}
            searchText=""
            setSearchText={noop}
            isIconAllowed={false}
            isSearchFieldEnabled={false}
          >
            {[<div key="1">child</div>]}
          </NestedMenuListbox>,
        ),
      ).not.toThrow();
    });

    it("renders with search field without throwing", () => {
      expect(() =>
        wrap(
          <NestedMenuListbox
            selectAllNode={mockSelectAllNode}
            searchText=""
            setSearchText={noop}
            isIconAllowed={false}
            isSearchFieldEnabled={true}
          >
            {[<div key="1">child</div>]}
          </NestedMenuListbox>,
        ),
      ).not.toThrow();
    });

    it("renders in dark mode without throwing", () => {
      expect(() =>
        wrap(
          <NestedMenuListbox
            selectAllNode={mockSelectAllNode}
            searchText=""
            setSearchText={noop}
            isIconAllowed={false}
            isSearchFieldEnabled={true}
          >
            {[<div key="1">child</div>]}
          </NestedMenuListbox>,
          true,
        ),
      ).not.toThrow();
    });
  });

  describe("SelectNode", () => {
    const baseProps = {
      nodeLabel: <span>Item</span>,
      isExpanded: false,
      isIconAllowed: false,
      isLeaf: true,
      isParentNode: false,
      isSelectable: true,
      isSelected: false,
      selectableLeavesCount: 0,
      nestLevel: 0,
      nodeIcon: undefined,
      onCheckboxClick: noop,
      onExpand: noop,
      parentSelectOnly: false,
      selectedLeavesCount: 0,
    };

    it("renders leaf node without throwing", () => {
      expect(() => wrap(<SelectNode {...baseProps} />)).not.toThrow();
    });

    it("renders parent node without throwing", () => {
      expect(() =>
        wrap(<SelectNode {...baseProps} isLeaf={false} isParentNode={true} />),
      ).not.toThrow();
    });

    it("renders selected node without throwing", () => {
      expect(() =>
        wrap(<SelectNode {...baseProps} isSelected={true} />),
      ).not.toThrow();
    });

    it("renders in dark mode without throwing", () => {
      expect(() => wrap(<SelectNode {...baseProps} />, true)).not.toThrow();
    });
  });

  describe("token styles", () => {
    it("uses light nested menu tokens", () => {
      expect(getNestedMenuPopoverPaperStyles(lightTheme)).toMatchObject({
        width: "480px",
        maxHeight: "375px",
        backgroundColor: lightTheme.palette.vars.controlBackgroundWeak,
        border: `2px solid ${lightTheme.palette.vars.controlBorderActive}`,
      });
      expect(getNestedMenuTriggerButtonStyles(lightTheme)).toMatchObject({
        color: lightTheme.palette.vars.baseTextWeak,
      });
    });

    it("uses dark nested menu tokens", () => {
      expect(getNestedMenuPopoverPaperStyles(darkTheme)).toMatchObject({
        backgroundColor: darkTheme.palette.vars.controlBackgroundWeak,
        border: `2px solid ${darkTheme.palette.vars.controlBorderActive}`,
      });
      expect(getNestedMenuTriggerButtonStyles(darkTheme)).toMatchObject({
        color: darkTheme.palette.vars.baseTextWeak,
      });
    });

    it("uses expected nesting offset", () => {
      expect(selectNodeStyle(2)).toMatchObject({
        marginLeft: "64px",
        gap: "8px",
      });
    });
  });
});
