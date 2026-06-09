/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import type { ComponentProps } from "react";
import { GeneralSize } from "@/common";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { Tags } from "../components/tags";
import type { SelectNodeType } from "@/components/nested-menu";

class ResizeObserverMock {
  observe = jest.fn();
  unobserve = jest.fn();
  disconnect = jest.fn();
}

global.ResizeObserver = ResizeObserverMock;

const items = [
  {
    isSelectable: true,
    nodeKey: "aws",
    value: "AWS",
  },
  {
    isSelectable: true,
    nodeKey: "azure",
    value: "Azure",
  },
  {
    isSelectable: true,
    nodeKey: "gcp",
    value: "Google Cloud",
  },
] satisfies SelectNodeType[];

const renderTags = (
  props: Partial<ComponentProps<typeof Tags>> = {},
  dark = false,
) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      <Tags items={items} {...props} />
    </ThemeProvider>,
  );

describe("Tags", () => {
  it("renders nothing for an empty item list", () => {
    const { container } = renderTags({ items: [] });

    expect(container).toBeEmptyDOMElement();
  });

  it("renders all tags by default when showOnlyFirst is false", () => {
    renderTags({ showOnlyFirst: false });

    expect(screen.getByText("AWS")).toBeInTheDocument();
    expect(screen.getByText("Azure")).toBeInTheDocument();
    expect(screen.getByText("Google Cloud")).toBeInTheDocument();
  });

  it("renders the first tag plus remaining count when showOnlyFirst is true", () => {
    renderTags({ showOnlyFirst: true });

    expect(screen.getByText("AWS")).toBeInTheDocument();
    expect(screen.getByText("+2")).toBeInTheDocument();
    expect(screen.queryByText("Azure")).not.toBeInTheDocument();
  });

  it("collapses tags past maxTooltipTags into a remaining count", () => {
    renderTags({ maxTooltipTags: 2, showOnlyFirst: false });

    expect(screen.getByText("AWS")).toBeInTheDocument();
    expect(screen.getByText("Azure")).toBeInTheDocument();
    expect(screen.getByText("+1")).toBeInTheDocument();
    expect(screen.queryByText("Google Cloud")).not.toBeInTheDocument();
  });

  it("calls handleDelete with the deleted node and index", () => {
    const handleDelete = jest.fn();
    renderTags({ handleDelete, showOnlyFirst: false });

    fireEvent.click(screen.getAllByTestId("CancelIcon")[1]);

    expect(handleDelete).toHaveBeenCalledWith(expect.anything(), items[1], 1);
  });

  it("renders custom labels and supports dark mode", () => {
    renderTags(
      {
        customizeLabel: (node) => `${node.value} tag`,
        showOnlyFirst: false,
        size: GeneralSize.Medium,
      },
      true,
    );

    expect(screen.getByText("AWS tag")).toBeInTheDocument();
    expect(screen.getByText("Azure tag")).toBeInTheDocument();
  });
});
