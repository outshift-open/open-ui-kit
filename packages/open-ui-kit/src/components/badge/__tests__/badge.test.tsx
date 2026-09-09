/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Mail, Star } from "@mui/icons-material";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { darkVars } from "@/theme/dark/dark-vars";
import { lightVars } from "@/theme/light/light-vars";
import { Badge } from "../components/badge";
import { BADGE_SHAPES, BADGE_SIZES, BADGE_TYPES } from "../styles";

const renderBadge = (props: React.ComponentProps<typeof Badge>, dark = false) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      <Badge {...props} />
    </ThemeProvider>,
  );

const getRequiredElement = (container: HTMLElement, selector: string) => {
  const element = container.querySelector(selector);
  expect(element).toBeInTheDocument();
  return element as HTMLElement;
};

describe("Badge", () => {
  describe("rendering", () => {
    it("renders badge content", () => {
      renderBadge({ content: "5" });
      expect(screen.getByText("5")).toBeInTheDocument();
    });

    it("renders with default type when type is omitted", () => {
      renderBadge({ content: "1" });
      expect(screen.getByText("1")).toBeInTheDocument();
    });

    it("renders all type variants without error", () => {
      BADGE_TYPES.forEach((type) => {
        const { unmount } = renderBadge({ content: "1", type });
        expect(screen.getByText("1")).toBeInTheDocument();
        unmount();
      });
    });
  });

  describe("notification mode", () => {
    it("renders notification content on the badge", () => {
      renderBadge({
        content: <Mail aria-label="mail" />,
        notificationContent: 3,
      });
      expect(screen.getByText("3")).toBeInTheDocument();
    });

    it("renders child content in notification mode", () => {
      renderBadge({
        content: <Mail aria-label="mail" />,
        notificationContent: 1,
      });
      expect(screen.getByLabelText("mail")).toBeInTheDocument();
    });

    it("does not render in notification mode when notificationContent is null", () => {
      renderBadge({ content: "1", notificationContent: null });
      expect(screen.getByText("1")).toBeInTheDocument();
    });
  });

  describe("light theme token coverage", () => {
    it("renders default badge with exact CSS token values", () => {
      const { container } = renderBadge({ content: "1", type: "default" });
      const badge = getRequiredElement(container, ".MuiBadge-root");
      expect(lightVars.controlBackgroundMedium).toBe("#e3eafa");
      expect(lightVars.baseTextDark).toBe("#00142b");
      expect(window.getComputedStyle(badge).backgroundColor).toBe(
        "rgb(227, 234, 250)",
      );
      expect(window.getComputedStyle(badge).color).toBe("rgb(0, 20, 43)");
    });

    it("renders light theme status colors from tokens", () => {
      const { container } = renderBadge({ content: "1", type: "excellent" });
      const badge = getRequiredElement(container, ".MuiBadge-root");
      expect(lightVars.excellentBackgroundDefault).toBe("#17c7ff");
      expect(lightVars.excellentTextInDefault).toBe("#edfcff");
      expect(window.getComputedStyle(badge).backgroundColor).toBe(
        "rgb(23, 199, 255)",
      );
      expect(window.getComputedStyle(badge).color).toBe("rgb(237, 252, 255)");
    });

    it("uses strong text for light warning and moderate badges", () => {
      const { container } = renderBadge({ content: "1", type: "moderate" });
      const badge = getRequiredElement(container, ".MuiBadge-root");
      expect(lightVars.moderateBackgroundDefault).toBe("#ffe351");
      expect(window.getComputedStyle(badge).backgroundColor).toBe(
        "rgb(255, 227, 81)",
      );
      expect(window.getComputedStyle(badge).color).toBe("rgb(0, 20, 43)");
    });
  });

  describe("dark theme token coverage", () => {
    it("renders default badge with exact dark CSS token values", () => {
      const { container } = renderBadge(
        { content: "1", type: "default" },
        true,
      );
      const badge = getRequiredElement(container, ".MuiBadge-root");
      expect(darkVars.controlBackgroundMedium).toBe("#31466e");
      expect(darkVars.baseTextStrong).toBe("#ffffff");
      expect(window.getComputedStyle(badge).backgroundColor).toBe(
        "rgb(49, 70, 110)",
      );
      expect(window.getComputedStyle(badge).color).toBe("rgb(255, 255, 255)");
    });

    it("renders dark theme status colors from tokens", () => {
      const { container } = renderBadge(
        { content: "1", type: "success" },
        true,
      );
      const badge = getRequiredElement(container, ".MuiBadge-root");
      expect(darkVars.successBackgroundDefault).toBe("#00b98d");
      expect(darkVars.successTextInDefault).toBe("#ebfbf7");
      expect(window.getComputedStyle(badge).backgroundColor).toBe(
        "rgb(0, 185, 141)",
      );
      expect(window.getComputedStyle(badge).color).toBe("rgb(235, 251, 247)");
    });

    it("renders all types in dark mode without throwing", () => {
      BADGE_TYPES.forEach((type) => {
        expect(() => renderBadge({ content: "1", type }, true)).not.toThrow();
      });
    });
  });

  describe("notification mode styles", () => {
    it("uses the CSS-sized child icon and notification bubble", () => {
      const { container } = renderBadge({
        content: <Mail aria-label="mail" />,
        notificationContent: 3,
        type: "info",
      });
      const root = getRequiredElement(container, ".MuiBadge-root");
      const icon = screen.getByLabelText("mail");
      const bubble = getRequiredElement(container, ".MuiBadge-badge");
      expect(window.getComputedStyle(root).width).toBe("24px");
      expect(window.getComputedStyle(root).height).toBe("24px");
      expect(window.getComputedStyle(icon).width).toBe("24px");
      expect(window.getComputedStyle(icon).height).toBe("24px");
      expect(window.getComputedStyle(icon).color).toBe("rgb(24, 122, 220)");
      expect(window.getComputedStyle(bubble).backgroundColor).toBe(
        "rgb(156, 78, 234)",
      );
    });
  });

  describe("props passthrough", () => {
    it("applies custom styleBadge sx prop", () => {
      const { container } = renderBadge({
        content: "1",
        styleBadge: { opacity: 0.5 },
      });
      expect(container.querySelector(".MuiBadge-root")).toBeInTheDocument();
    });

    it("applies custom styleContent sx prop without throwing", () => {
      expect(() =>
        renderBadge({ content: "1", styleContent: { fontWeight: 700 } }),
      ).not.toThrow();
    });
  });
  describe("shape variant", () => {
    it("renders each shape", () => {
      BADGE_SHAPES.forEach((shape) => {
        const { container, unmount } = renderBadge({ shape });
        getRequiredElement(container, `[data-shape="${shape}"]`);
        unmount();
      });
    });

    it("renders no label when content is omitted", () => {
      const { container } = renderBadge({ shape: "circle" });
      expect(
        container.querySelector(".MuiTypography-root"),
      ).not.toBeInTheDocument();
      expect(
        container.querySelector("[data-shape-label]"),
      ).not.toBeInTheDocument();
    });

    it("renders content as a label beside the marker", () => {
      const { container } = renderBadge({
        shape: "circle",
        content: "Excellent",
      });
      const root = getRequiredElement(container, "[data-shape-label]");
      const marker = getRequiredElement(container, '[data-shape="circle"]');
      const label = screen.getByText("Excellent");

      expect(root).toContainElement(marker);
      expect(root).toContainElement(label);
      // The marker precedes the label, per the Spark Badge/Basic frame.
      expect(marker.compareDocumentPosition(label)).toBe(
        Node.DOCUMENT_POSITION_FOLLOWING,
      );
    });

    it("labels a zero content value rather than dropping it", () => {
      renderBadge({ shape: "circle", content: 0 });
      expect(screen.getByText("0")).toBeInTheDocument();
    });

    it("spaces the label 8px after the marker", () => {
      const { container } = renderBadge({ shape: "circle", content: "Info" });
      const root = getRequiredElement(container, "[data-shape-label]");
      const style = window.getComputedStyle(root);
      expect(style.gap).toBe("8px");
      expect(style.alignItems).toBe("center");
    });

    it("colors the label with the page text token in both modes", () => {
      renderBadge({ shape: "circle", content: "Light" });
      expect(lightVars.baseTextStrong).toBe("#00142b");
      expect(window.getComputedStyle(screen.getByText("Light")).color).toBe(
        "rgb(0, 20, 43)",
      );

      renderBadge({ shape: "circle", content: "Dark" }, true);
      expect(darkVars.baseTextStrong).toBe("#ffffff");
      expect(window.getComputedStyle(screen.getByText("Dark")).color).toBe(
        "rgb(255, 255, 255)",
      );
    });

    it("keeps the marker size when a label is present", () => {
      const { container } = renderBadge({
        shape: "circle",
        content: "Excellent",
      });
      const marker = getRequiredElement(container, '[data-shape="circle"]');
      expect(window.getComputedStyle(marker).width).toBe("8px");
      expect(window.getComputedStyle(marker).height).toBe("8px");
    });

    it("ignores notificationContent", () => {
      renderBadge({ shape: "circle", notificationContent: 3 });
      expect(screen.queryByText("3")).not.toBeInTheDocument();
    });

    it("does not render a MuiBadge root when a label is present", () => {
      const { container } = renderBadge({ shape: "dash", content: "Inactive" });
      expect(container.querySelector(".MuiBadge-root")).not.toBeInTheDocument();
    });

    it("does not render a MuiBadge root", () => {
      const { container } = renderBadge({ shape: "dash" });
      expect(container.querySelector(".MuiBadge-root")).not.toBeInTheDocument();
    });

    it("defaults to the medium size", () => {
      const { container } = renderBadge({ shape: "circle" });
      const marker = getRequiredElement(container, '[data-shape="circle"]');
      expect(marker.getAttribute("data-size")).toBe("medium");
      expect(window.getComputedStyle(marker).width).toBe("8px");
    });

    it("scales the circle across all three sizes", () => {
      const expected: Record<string, string> = {
        small: "6px",
        medium: "8px",
        large: "12px",
      };
      BADGE_SIZES.forEach((size) => {
        const { container, unmount } = renderBadge({ shape: "circle", size });
        const marker = getRequiredElement(container, '[data-shape="circle"]');
        expect(window.getComputedStyle(marker).width).toBe(expected[size]);
        expect(window.getComputedStyle(marker).height).toBe(expected[size]);
        unmount();
      });
    });

    it("keeps the dash 2px tall at every size", () => {
      BADGE_SIZES.forEach((size) => {
        const { container, unmount } = renderBadge({ shape: "dash", size });
        const marker = getRequiredElement(container, '[data-shape="dash"]');
        expect(window.getComputedStyle(marker).height).toBe("2px");
        unmount();
      });
    });

    it("renders the small size smaller than the medium size", () => {
      const { container: small } = renderBadge({
        shape: "circle",
        size: "small",
      });
      const { container: medium } = renderBadge({
        shape: "circle",
        size: "medium",
      });
      expect(
        window.getComputedStyle(
          getRequiredElement(small, '[data-shape="circle"]'),
        ).width,
      ).toBe("6px");
      expect(
        window.getComputedStyle(
          getRequiredElement(medium, '[data-shape="circle"]'),
        ).width,
      ).toBe("8px");
    });

    it("rounds the circle and squares off the triangles", () => {
      const { container: circle } = renderBadge({ shape: "circle" });
      const { container: triangle } = renderBadge({ shape: "triangleUp" });
      expect(
        window.getComputedStyle(
          getRequiredElement(circle, '[data-shape="circle"]'),
        ).borderRadius,
      ).toBe("50%");
      expect(
        window.getComputedStyle(
          getRequiredElement(triangle, '[data-shape="triangleUp"]'),
        ).borderRadius,
      ).not.toBe("50%");
    });

    it("draws both triangles on the 8x8 box from the design", () => {
      (["triangleUp", "triangleDown"] as const).forEach((shape) => {
        const { container, unmount } = renderBadge({ shape });
        const styles = window.getComputedStyle(
          getRequiredElement(container, `[data-shape="${shape}"]`),
        );
        expect(styles.width).toBe("8px");
        expect(styles.height).toBe("8px");
        unmount();
      });
    });

    it("points the two triangles in opposite directions", () => {
      const { container: up } = renderBadge({ shape: "triangleUp" });
      const { container: down } = renderBadge({ shape: "triangleDown" });
      const upClip = window.getComputedStyle(
        getRequiredElement(up, '[data-shape="triangleUp"]'),
      ).clipPath;
      const downClip = window.getComputedStyle(
        getRequiredElement(down, '[data-shape="triangleDown"]'),
      ).clipPath;
      expect(upClip).not.toBe(downClip);
      expect(upClip).toContain("50% 0%");
      expect(downClip).toContain("50% 100%");
    });

    it("renders the dash as a 2px rule with rounded caps", () => {
      const { container } = renderBadge({ shape: "dash" });
      const styles = window.getComputedStyle(
        getRequiredElement(container, '[data-shape="dash"]'),
      );
      expect(styles.height).toBe("2px");
      expect(styles.borderRadius).toBe("1px");
    });

    it("paints the shape with the type background token", () => {
      const { container } = renderBadge({ shape: "circle", type: "error" });
      const marker = getRequiredElement(container, '[data-shape="circle"]');
      expect(lightVars.negativeBackgroundDefault).toBe("#c0244c");
      expect(window.getComputedStyle(marker).backgroundColor).toBe(
        "rgb(192, 36, 76)",
      );
    });

    it("renders every shape and size combination in both themes", () => {
      BADGE_SHAPES.forEach((shape) => {
        BADGE_SIZES.forEach((size) => {
          expect(() => renderBadge({ shape, size })).not.toThrow();
          expect(() => renderBadge({ shape, size }, true)).not.toThrow();
        });
      });
    });

    it("applies styleBadge overrides to the shape", () => {
      const { container } = renderBadge({
        shape: "dash",
        styleBadge: { opacity: 0.5 },
      });
      const marker = getRequiredElement(container, '[data-shape="dash"]');
      expect(window.getComputedStyle(marker).opacity).toBe("0.5");
    });
  });
  describe("icon slot", () => {
    it("renders the icon alongside the content", () => {
      renderBadge({ content: "1", icon: <Star aria-label="star" /> });
      expect(screen.getByLabelText("star")).toBeInTheDocument();
      expect(screen.getByText("1")).toBeInTheDocument();
    });

    it("renders no icon slot when icon is omitted", () => {
      const { container } = renderBadge({ content: "1" });
      expect(container.querySelector("svg")).not.toBeInTheDocument();
    });

    it("pins the icon box to the badge height", () => {
      const { container } = renderBadge({
        content: "1",
        icon: <Star aria-label="star" />,
      });
      const slot = screen.getByLabelText("star").parentElement as HTMLElement;
      expect(window.getComputedStyle(slot).width).toBe("16px");
      expect(window.getComputedStyle(slot).height).toBe("16px");
      expect(
        window.getComputedStyle(
          container.querySelector(".MuiBadge-root") as HTMLElement,
        ).height,
      ).toBe("16px");
    });

    it("paints the icon and content white", () => {
      const { container } = renderBadge({
        content: "1",
        type: "excellent",
        icon: <Star aria-label="star" />,
      });
      const root = getRequiredElement(container, ".MuiBadge-root");
      const slot = screen.getByLabelText("star").parentElement as HTMLElement;
      expect(window.getComputedStyle(root).color).toBe("rgb(255, 255, 255)");
      expect(window.getComputedStyle(slot).color).toBe("inherit");
    });

    it("keeps the icon badge white in dark mode too", () => {
      const { container } = renderBadge(
        { content: "1", type: "moderate", icon: <Star /> },
        true,
      );
      const root = getRequiredElement(container, ".MuiBadge-root");
      expect(window.getComputedStyle(root).color).toBe("rgb(255, 255, 255)");
    });

    it("leaves the type text colour alone when there is no icon", () => {
      const { container } = renderBadge({ content: "1", type: "excellent" });
      const root = getRequiredElement(container, ".MuiBadge-root");
      expect(lightVars.excellentTextInDefault).toBe("#edfcff");
      expect(window.getComputedStyle(root).color).toBe("rgb(237, 252, 255)");
    });

    it("ignores the icon in shape mode", () => {
      renderBadge({ shape: "circle", icon: <Star aria-label="star" /> });
      expect(screen.queryByLabelText("star")).not.toBeInTheDocument();
    });

    it("renders an icon badge for every type", () => {
      BADGE_TYPES.forEach((type) => {
        expect(() =>
          renderBadge({ content: "1", type, icon: <Star /> }),
        ).not.toThrow();
      });
    });
  });
});
