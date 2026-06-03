/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { readFileSync } from "fs";
import { join } from "path";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { Accordion } from "../components/accordion";

const accordionStorySource = () =>
  readFileSync(join(__dirname, "../stories/accordion.stories.tsx"), "utf8");

const renderAccordion = (
  props: React.ComponentProps<typeof Accordion>,
  dark = false,
) =>
  render(
    <ThemeProvider defaultDarkMode={dark}>
      <Accordion {...props} />
    </ThemeProvider>,
  );

describe("Accordion", () => {
  describe("rendering", () => {
    it("renders the title", () => {
      renderAccordion({ title: "My Title", children: <p>Content</p> });
      expect(screen.getByText("My Title")).toBeInTheDocument();
    });

    it("renders the subTitle when provided", () => {
      renderAccordion({
        title: "Title",
        subTitle: "Sub",
        children: <p>Content</p>,
      });
      expect(screen.getByText("Sub")).toBeInTheDocument();
    });

    it("does not render a subTitle element when omitted", () => {
      renderAccordion({ title: "Title", children: <p>Content</p> });
      expect(screen.queryByText("Sub")).not.toBeInTheDocument();
    });

    it("renders children", () => {
      renderAccordion({ title: "Title", children: <p>Child content</p> });
      expect(screen.getByText("Child content")).toBeInTheDocument();
    });
  });

  describe("expand / collapse", () => {
    it("is collapsed by default", () => {
      renderAccordion({ title: "Title", children: <p>Content</p> });
      expect(screen.getByRole("button", { name: /title/i })).toHaveAttribute(
        "aria-expanded",
        "false",
      );
    });

    it("is expanded when defaultExpanded is true", () => {
      renderAccordion({
        title: "Title",
        defaultExpanded: true,
        children: <p>Content</p>,
      });
      expect(screen.getByRole("button", { name: /title/i })).toHaveAttribute(
        "aria-expanded",
        "true",
      );
    });

    it("expands on click", async () => {
      const user = userEvent.setup();
      renderAccordion({ title: "Title", children: <p>Content</p> });
      const button = screen.getByRole("button", { name: /title/i });
      await act(async () => {
        await user.click(button);
      });
      expect(button).toHaveAttribute("aria-expanded", "true");
    });

    it("collapses on second click", async () => {
      const user = userEvent.setup();
      renderAccordion({
        title: "Title",
        defaultExpanded: true,
        children: <p>Content</p>,
      });
      const button = screen.getByRole("button", { name: /title/i });
      await act(async () => {
        await user.click(button);
      });
      expect(button).toHaveAttribute("aria-expanded", "false");
    });

    it("calls onChange when toggled", async () => {
      const user = userEvent.setup();
      const onChange = jest.fn();
      renderAccordion({
        title: "Title",
        onChange,
        children: <p>Content</p>,
      });
      await act(async () => {
        await user.click(screen.getByRole("button", { name: /title/i }));
      });
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith(expect.anything(), true);
    });
  });

  describe("disabled state", () => {
    it("prevents expansion when disabled", async () => {
      const user = userEvent.setup({ pointerEventsCheck: 0 });
      renderAccordion({
        title: "Title",
        disabled: true,
        children: <p>Content</p>,
      });
      const button = screen.getByRole("button", { name: /title/i });
      await act(async () => {
        await user.click(button);
      });
      expect(button).toHaveAttribute("aria-expanded", "false");
    });

    it("marks the button as disabled", () => {
      renderAccordion({
        title: "Title",
        disabled: true,
        children: <p>Content</p>,
      });
      expect(screen.getByRole("button", { name: /title/i })).toBeDisabled();
    });
  });

  describe("keyboard interaction", () => {
    it("expands on Enter key", async () => {
      const user = userEvent.setup();
      renderAccordion({ title: "Title", children: <p>Content</p> });
      const button = screen.getByRole("button", { name: /title/i });
      await act(async () => {
        button.focus();
      });
      await act(async () => {
        await user.keyboard("{Enter}");
      });
      expect(button).toHaveAttribute("aria-expanded", "true");
    });

    it("expands on Space key", async () => {
      const user = userEvent.setup();
      renderAccordion({ title: "Title", children: <p>Content</p> });
      const button = screen.getByRole("button", { name: /title/i });
      await act(async () => {
        button.focus();
      });
      await act(async () => {
        await user.keyboard(" ");
      });
      expect(button).toHaveAttribute("aria-expanded", "true");
    });
  });

  describe("props", () => {
    it("renders with size large by default", () => {
      renderAccordion({ title: "Title", children: <p>Content</p> });
      // large variant uses H6 typography — rendered as h6 by MUI
      expect(screen.getByRole("heading", { level: 6 })).toBeInTheDocument();
    });

    it("uses the accordion CSS line-height for summary text sizes", () => {
      const { rerender } = render(
        <ThemeProvider>
          <Accordion title="Large title">
            <p>Content</p>
          </Accordion>
        </ThemeProvider>,
      );

      expect(screen.getByText("Large title")).toHaveStyle({
        lineHeight: "24px",
      });

      rerender(
        <ThemeProvider>
          <Accordion title="Medium title" size="medium">
            <p>Content</p>
          </Accordion>
        </ThemeProvider>,
      );

      expect(screen.getByText("Medium title")).toHaveStyle({
        lineHeight: "20px",
      });
    });

    it("does not render an h6 heading for size medium", () => {
      renderAccordion({
        title: "Title",
        size: "medium",
        children: <p>Content</p>,
      });
      expect(
        screen.queryByRole("heading", { level: 6 }),
      ).not.toBeInTheDocument();
    });

    it("passes extra props to the root accordion element", () => {
      renderAccordion({
        title: "Title",
        "data-testid": "my-accordion",
        children: <p>Content</p>,
      } as React.ComponentProps<typeof Accordion>);
      expect(screen.getByTestId("my-accordion")).toBeInTheDocument();
    });

    it("renders summary slots and action content", () => {
      renderAccordion({
        title: "Title",
        subTitle: "Text",
        titleSlot: <span>Title slot</span>,
        subTitleSlot: <span>Subtitle slot</span>,
        action: <span>Link</span>,
        endSlot: <span>End slot</span>,
        children: <p>Content</p>,
      });

      expect(screen.getByText("Title slot")).toBeInTheDocument();
      expect(screen.getByText("Subtitle slot")).toBeInTheDocument();
      expect(screen.getByText("Link")).toBeInTheDocument();
      expect(screen.getByText("End slot")).toBeInTheDocument();
    });

    it("renders start and end icons for both summary values", () => {
      renderAccordion({
        title: "Title",
        subTitle: "Text",
        titleStartIcon: <span data-testid="title-start-icon" />,
        titleEndIcon: <span data-testid="title-end-icon" />,
        subTitleStartIcon: <span data-testid="subtitle-start-icon" />,
        subTitleEndIcon: <span data-testid="subtitle-end-icon" />,
        children: <p>Content</p>,
      });

      expect(screen.getByTestId("title-start-icon")).toBeInTheDocument();
      expect(screen.getByTestId("title-end-icon")).toBeInTheDocument();
      expect(screen.getByTestId("subtitle-start-icon")).toBeInTheDocument();
      expect(screen.getByTestId("subtitle-end-icon")).toBeInTheDocument();
    });
  });

  describe("light theme token coverage", () => {
    it("renders large, medium, contained, disabled, and focused visual states in light mode", () => {
      expect(() =>
        renderAccordion({
          title: "Title",
          subTitle: "Text",
          size: "large",
          children: <p>Content</p>,
        }),
      ).not.toThrow();
      expect(() =>
        renderAccordion({
          title: "Title",
          subTitle: "Text",
          size: "medium",
          children: <p>Content</p>,
        }),
      ).not.toThrow();
      expect(() =>
        renderAccordion({
          title: "Title",
          subTitle: "Text",
          contained: true,
          disabled: true,
          children: <p>Content</p>,
        }),
      ).not.toThrow();
    });
  });

  describe("dark theme token coverage", () => {
    it("renders large, medium, contained, disabled, and slot states in dark mode", () => {
      expect(() =>
        renderAccordion(
          {
            title: "Title",
            subTitle: "Text",
            size: "large",
            titleSlot: <span>Title slot</span>,
            action: <span>Link</span>,
            children: <p>Content</p>,
          },
          true,
        ),
      ).not.toThrow();
      expect(() =>
        renderAccordion(
          {
            title: "Title",
            subTitle: "Text",
            size: "medium",
            contained: true,
            disabled: true,
            children: <p>Content</p>,
          },
          true,
        ),
      ).not.toThrow();
    });
  });

  describe("storybook api documentation", () => {
    it("documents the default state with args and controls", () => {
      const storySource = accordionStorySource();

      expect(storySource).toContain("argTypes:");
      expect(storySource).toContain("arrowPosition:");
      expect(storySource).toContain("contained:");
      expect(storySource).toContain("disabled:");
      expect(storySource).toContain("expanded:");
      expect(storySource).toContain("size:");
      expect(storySource).toMatch(/export const Default:[\s\S]*args:/);
    });
  });
});
