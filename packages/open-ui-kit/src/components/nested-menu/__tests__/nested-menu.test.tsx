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
import { lightModeCardSubtle } from "@/theme/style/color-palette";
import { NestedMenu } from "../components/nested-menu";
import { NestedMenuListbox } from "../components/nested-menu-listbox";
import { SelectNode } from "../components/select-node";
import { AugmentedSelectNodeType } from "@/components/nested-menu";
import {
  defaultPopperContentStyle,
  getNestedMenuRowsMaxHeight,
  getNestedMenuPopoverPaperStyles,
  getNestedMenuTriggerButtonStyles,
  selectNodeStyle,
} from "../styles";
import { buildNodeLabelElement } from "../utils/utils";

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
  describe("trigger", () => {
    it("does not render the text trigger as an icon-only button", () => {
      const { getByRole } = wrap(
        <NestedMenu
          buttonContent="Select"
          flattenedTreeOptions={[]}
          isIconAllowed={false}
          isSearchFieldEnabled={false}
          onSelectAllChange={noop}
          searchText=""
          selectAllNode={mockSelectAllNode}
          setSearchText={noop}
          toggleExpand={noop}
          updateCheckbox={noop}
        />,
      );

      expect(getByRole("button", { name: "Select" })).not.toHaveClass(
        "OuiButton-iconOnly",
      );
    });
  });

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
        maxHeight: "472px",
        backgroundColor: lightTheme.palette.vars.controlBackgroundWeak,
        border: `2px solid ${lightTheme.palette.vars.controlBorderActive}`,
        boxShadow: lightModeCardSubtle,
        padding: "8px 0px",
        borderRadius: "4px",
        "& .MuiTextField-root": {
          boxSizing: "border-box",
          padding: "8px 16px",
          width: "100%",
        },
      });
      expect(getNestedMenuTriggerButtonStyles(lightTheme)).toMatchObject({
        color: lightTheme.palette.vars.baseTextWeak,
      });
      expect(defaultPopperContentStyle).toMatchObject({
        width: "480px",
        maxHeight: "456px",
      });
      expect(getNestedMenuRowsMaxHeight()).toBe("400px");
      expect(lightTheme.palette.vars.controlBackgroundWeak).toBe("#f5f8fd");
      expect(lightTheme.palette.vars.controlBorderActive).toBe("#0051af");
      expect(lightTheme.palette.vars.baseTextWeak).toBe("#777d85");
    });

    it("uses dark nested menu tokens", () => {
      expect(getNestedMenuPopoverPaperStyles(darkTheme)).toMatchObject({
        backgroundColor: darkTheme.palette.vars.controlBackgroundWeak,
        border: `2px solid ${darkTheme.palette.vars.controlBorderActive}`,
        boxShadow: lightModeCardSubtle,
      });
      expect(getNestedMenuTriggerButtonStyles(darkTheme)).toMatchObject({
        color: darkTheme.palette.vars.baseTextWeak,
      });
      expect(darkTheme.palette.vars.controlBackgroundWeak).toBe("#0d274d");
      expect(darkTheme.palette.vars.controlBorderActive).toBe("#12c1ff");
      expect(darkTheme.palette.vars.baseTextDefault).toBe("#e8e9ea");
      expect(darkTheme.palette.vars.baseTextWeak).toBe("#9ea2a8");
    });

    it("uses expected nesting offset", () => {
      expect(selectNodeStyle(2)).toMatchObject({
        marginLeft: "64px",
        gap: "8px",
      });
    });

    it("uses body1 typography for selectable labels", () => {
      expect(buildNodeLabelElement(mockSelectAllNode, "", lightTheme)).toEqual(
        expect.objectContaining({
          props: expect.objectContaining({
            variant: "body1",
          }),
        }),
      );
    });
  });
});
