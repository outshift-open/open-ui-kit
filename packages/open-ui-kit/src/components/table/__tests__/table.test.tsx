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
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { Table } from "../components/table";
import { MRT_ColumnDef } from "material-react-table";

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

const renderTable = (
  props: Partial<React.ComponentProps<typeof Table<Row>>> = {},
  dark = false,
) =>
  render(
    <MemoryRouter>
      <ThemeProvider defaultDarkMode={dark}>
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
  });
});
