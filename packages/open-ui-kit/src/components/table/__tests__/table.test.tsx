/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { TextEncoder, TextDecoder } from "util";
Object.assign(global, { TextEncoder, TextDecoder });

// material-react-table uses ResizeObserver internally — polyfill for jsdom
global.ResizeObserver = class ResizeObserver {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  observe() {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  unobserve() {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  disconnect() {}
};

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { Table } from "../components/table";
import {
  MRT_Column,
  MRT_ColumnDef,
  MRT_TableInstance,
} from "material-react-table";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import { tableComfortStyles, tableCompactStyles } from "../styles";

interface Row {
  id: string;
  name: string;
  value: string;
}

const columns: MRT_ColumnDef<Row>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "name", header: "Name" },
  { accessorKey: "value", header: "Value" },
];

const rows: Row[] = [
  { id: "1", name: "Alpha", value: "100" },
  { id: "2", name: "Beta", value: "200" },
  { id: "3", name: "Gamma", value: "300" },
];

type StyleObject = Record<string, unknown>;

const createColumn = (id: string, pinned = false) =>
  ({
    id,
    getIsPinned: () => pinned,
  }) as unknown as MRT_Column<Row>;

const createTable = (
  columnPinning: { left?: string[]; right?: string[] } = {},
) =>
  ({
    getState: () => ({ columnPinning }),
  }) as unknown as MRT_TableInstance<Row>;

const renderTable = (
  props: Partial<React.ComponentProps<typeof Table<Row>>> = {},
  dark = false,
) =>
  render(
    <MemoryRouter>
      <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
        <Table
          columns={columns}
          data={rows}
          isLoading={false}
          enableTopToolbar={false}
          {...props}
        />
      </ThemeProvider>
    </MemoryRouter>,
  );

describe("Table", () => {
  describe("rendering", () => {
    it("renders column headers", () => {
      renderTable();
      expect(screen.getByText("ID")).toBeInTheDocument();
      expect(screen.getByText("Name")).toBeInTheDocument();
      expect(screen.getByText("Value")).toBeInTheDocument();
    });

    it("renders row data", () => {
      renderTable();
      expect(screen.getByText("Alpha")).toBeInTheDocument();
      expect(screen.getByText("Beta")).toBeInTheDocument();
    });

    it("renders loading skeleton without throwing", () => {
      expect(() => renderTable({ isLoading: true })).not.toThrow();
    });

    it("renders empty state when data is empty", () => {
      expect(() => renderTable({ data: [] })).not.toThrow();
    });

    it("renders compact density without throwing", () => {
      expect(() => renderTable({ densityCompact: true })).not.toThrow();
    });

    it("renders with title", () => {
      renderTable({
        enableTopToolbar: true,
        title: { label: "My Table", count: 3 },
      });
      expect(screen.getByText("My Table")).toBeInTheDocument();
    });
  });

  describe("token coverage", () => {
    it("renders light theme without throwing", () => {
      expect(() => renderTable()).not.toThrow();
    });

    it("renders dark theme without throwing", () => {
      expect(() => renderTable({}, true)).not.toThrow();
    });

    it("renders compact dark theme without throwing", () => {
      expect(() => renderTable({ densityCompact: true }, true)).not.toThrow();
    });

    it("matches light table cell and footer tokens from the CSS spec", () => {
      const styles = tableComfortStyles(lightTheme);
      const column = createColumn("name");
      const table = createTable();
      const headerStyle = styles.columnHeaderStyle(
        column,
        table,
      ) as StyleObject;
      const bodyStyle = styles.bodyCellStyle(column, table) as StyleObject;
      const footerStyle = styles.tableBottomToolbarStyle as StyleObject;
      const footerBoxStyle = (footerStyle["> .MuiBox-root"] ??
        {}) as StyleObject;

      expect(headerStyle).toMatchObject({
        backgroundColor: lightTheme.palette.vars.controlBackgroundDefault,
        borderBottom: `1px solid ${lightTheme.palette.vars.controlBorderDefault}`,
        color: lightTheme.palette.vars.baseTextStrong,
        fontSize: "16px",
        fontWeight: 500,
        height: "40px",
        lineHeight: "24px",
        padding: "0px 16px",
      });
      expect(bodyStyle).toMatchObject({
        backgroundColor: lightTheme.palette.vars.controlBackgroundDefault,
        borderBottom: `1px solid ${lightTheme.palette.vars.controlBorderDefault}`,
        color: lightTheme.palette.vars.baseTextStrong,
        fontSize: "16px",
        height: "40px",
        lineHeight: "24px",
        padding: "0px 16px",
      });
      expect(footerStyle).toMatchObject({ minHeight: "32px" });
      expect(footerBoxStyle).toMatchObject({
        height: "32px",
        paddingBottom: 0,
        paddingTop: 0,
      });
      expect(lightTheme.palette.vars.controlBorderStrong).toBe("#c8d5f5");
    });

    it("matches dark compact table cell tokens from the CSS spec", () => {
      const styles = tableCompactStyles(darkTheme);
      const column = createColumn("name");
      const table = createTable();
      const headerStyle = styles.columnHeaderStyle(
        column,
        table,
      ) as StyleObject;
      const bodyStyle = styles.bodyCellStyle(column, table) as StyleObject;

      expect(headerStyle).toMatchObject({
        backgroundColor: darkTheme.palette.vars.controlBackgroundDefault,
        borderBottom: `1px solid ${darkTheme.palette.vars.controlBorderDefault}`,
        color: darkTheme.palette.vars.baseTextStrong,
        fontSize: "14px",
        fontWeight: 500,
        height: "32px",
        lineHeight: "20px",
        padding: "0px 16px",
        paddingBottom: "6px",
        paddingTop: "6px",
      });
      expect(bodyStyle).toMatchObject({
        backgroundColor: darkTheme.palette.vars.controlBackgroundDefault,
        borderBottom: `1px solid ${darkTheme.palette.vars.controlBorderDefault}`,
        color: darkTheme.palette.vars.baseTextStrong,
        fontSize: "14px",
        height: "32px",
        lineHeight: "20px",
        padding: "0px 16px",
      });
      expect(darkTheme.palette.vars.controlBorderStrong).toBe("#3a4e77");
    });

    it("uses medium background and edge borders for pinned columns", () => {
      const styles = tableComfortStyles(lightTheme);
      const leftPinnedStyle = styles.bodyCellStyle(
        createColumn("id", true),
        createTable({ left: ["id"] }),
      ) as StyleObject;
      const rightPinnedStyle = styles.bodyCellStyle(
        createColumn("value", true),
        createTable({ right: ["value"] }),
      ) as StyleObject;

      expect(leftPinnedStyle).toMatchObject({
        backgroundColor: lightTheme.palette.vars.controlBackgroundMedium,
        borderRight: `1px solid ${lightTheme.palette.vars.controlBorderDefault}`,
      });
      expect(rightPinnedStyle).toMatchObject({
        backgroundColor: lightTheme.palette.vars.controlBackgroundMedium,
        borderLeft: `1px solid ${lightTheme.palette.vars.controlBorderDefault}`,
      });
    });
  });
});
