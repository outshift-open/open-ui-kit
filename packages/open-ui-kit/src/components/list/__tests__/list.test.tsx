/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { TextEncoder, TextDecoder } from "util";
Object.assign(global, { TextEncoder, TextDecoder });

class ResizeObserverMock {
  observe = jest.fn();
  unobserve = jest.fn();
  disconnect = jest.fn();
}

global.ResizeObserver = ResizeObserverMock;

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  ListSubheader,
} from "../components/list";

const renderList = (ui: React.ReactElement, dark = false) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      {ui}
    </ThemeProvider>,
  );

describe("List", () => {
  describe("rendering", () => {
    it("renders a list with items", () => {
      renderList(
        <List>
          <ListItem>
            <ListItemText primary="Item 1" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Item 2" />
          </ListItem>
        </List>,
      );
      expect(screen.getByText("Item 1")).toBeInTheDocument();
      expect(screen.getByText("Item 2")).toBeInTheDocument();
    });

    it("renders a subheader", () => {
      renderList(
        <List subheader={<ListSubheader>My List</ListSubheader>}>
          <ListItem>
            <ListItemText primary="Item" />
          </ListItem>
        </List>,
      );
      expect(screen.getByText("My List")).toBeInTheDocument();
    });

    it("renders secondary text in ListItemText", () => {
      renderList(
        <List>
          <ListItem>
            <ListItemText primary="Primary" secondary="Secondary" />
          </ListItem>
        </List>,
      );
      expect(screen.getByText("Secondary")).toBeInTheDocument();
    });

    it("renders an icon in ListItemIcon", () => {
      renderList(
        <List>
          <ListItem>
            <ListItemIcon>
              <span data-testid="icon">★</span>
            </ListItemIcon>
            <ListItemText primary="With icon" />
          </ListItem>
        </List>,
      );
      expect(screen.getByTestId("icon")).toBeInTheDocument();
    });
  });

  describe("interactions", () => {
    it("calls onClick when ListItemButton is clicked", () => {
      const onClick = jest.fn();
      renderList(
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={onClick}>
              <ListItemText primary="Click me" />
            </ListItemButton>
          </ListItem>
        </List>,
      );
      fireEvent.click(screen.getByText("Click me"));
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it("renders ListItemButton as disabled", () => {
      renderList(
        <List>
          <ListItem disablePadding>
            <ListItemButton disabled>
              <ListItemText primary="Disabled" />
            </ListItemButton>
          </ListItem>
        </List>,
      );
      expect(screen.getByRole("button", { name: /disabled/i })).toHaveClass(
        "Mui-disabled",
      );
    });
  });

  describe("token usage", () => {
    it("renders in light mode without error", () => {
      renderList(
        <List>
          <ListItem data-testid="light-item">
            <ListItemText primary="Light" />
          </ListItem>
        </List>,
      );

      expect(screen.getByTestId("light-item")).toHaveStyle({
        backgroundColor: "#fbfcfe",
        color: "#3c4551",
        minHeight: "40px",
      });
    });

    it("renders in dark mode without error", () => {
      renderList(
        <List>
          <ListItem data-testid="dark-item">
            <ListItemText primary="Dark" />
          </ListItem>
        </List>,
        true,
      );

      expect(screen.getByTestId("dark-item")).toHaveStyle({
        backgroundColor: "#183056",
        color: "#e8e9ea",
      });
    });

    it("maps selected ListItemButton to active tokens", () => {
      renderList(
        <List>
          <ListItem disablePadding>
            <ListItemButton selected data-testid="selected-item">
              <ListItemText primary="Selected" />
            </ListItemButton>
          </ListItem>
        </List>,
      );

      expect(screen.getByTestId("selected-item")).toHaveStyle({
        backgroundColor: "#e3eafa",
        color: "#00142b",
      });
    });

    it("maps dense list item sizing to the compact token size", () => {
      renderList(
        <List dense>
          <ListItem data-testid="dense-item">
            <ListItemText primary="Dense" />
          </ListItem>
        </List>,
      );

      expect(screen.getByTestId("dense-item")).toHaveStyle({
        minHeight: "36px",
      });
    });
  });
});
