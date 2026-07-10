/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import "@testing-library/jest-dom";
import { POPOVER_ARROW_HEIGHT } from "../placement/constants";
import {
  PopoverEdgeAlignment,
  PopoverHorizontalPlacement,
  PopoverPlacement,
  PopoverPlacementSide,
  PopoverSidePlacement,
  PopoverVerticalPlacement,
} from "../../types";
import {
  getHorizontalPreference,
  getOriginsForPlacement,
  getVerticalPreference,
  placementForEdgeAlignment,
  placementForHorizontalPlacement,
  placementForSidePlacement,
  placementForVerticalPlacement,
  resolveEdgeAlignment,
  resolveHorizontalPlacement,
  resolveSidePlacement,
  resolveVerticalPlacement,
} from "../placement";

describe("popover placement", () => {
  describe("resolveVerticalPlacement", () => {
    const popoverHeight = 120;

    it("keeps the preferred above placement when there is room", () => {
      expect(
        resolveVerticalPlacement({
          preferAbove: true,
          spaceAbove: 200,
          spaceBelow: 400,
          popoverHeight,
          hasArrow: true,
        }),
      ).toBe(PopoverVerticalPlacement.Above);
    });

    it("flips below when there is not enough room above", () => {
      expect(
        resolveVerticalPlacement({
          preferAbove: true,
          spaceAbove: 80,
          spaceBelow: 400,
          popoverHeight,
          hasArrow: true,
        }),
      ).toBe(PopoverVerticalPlacement.Below);
    });

    it("flips above when preferred below does not fit", () => {
      expect(
        resolveVerticalPlacement({
          preferAbove: false,
          spaceAbove: 400,
          spaceBelow: 80,
          popoverHeight,
          hasArrow: true,
        }),
      ).toBe(PopoverVerticalPlacement.Above);
    });

    it("accounts for arrow clearance in the fit check", () => {
      const required = popoverHeight + POPOVER_ARROW_HEIGHT + 16;

      expect(
        resolveVerticalPlacement({
          preferAbove: true,
          spaceAbove: required - 1,
          spaceBelow: required + 20,
          popoverHeight,
          hasArrow: true,
        }),
      ).toBe(PopoverVerticalPlacement.Below);
    });
  });

  describe("placementForVerticalPlacement", () => {
    it("maps top placements for above and bottom placements for below", () => {
      expect(
        placementForVerticalPlacement(
          PopoverPlacement.Top,
          PopoverVerticalPlacement.Above,
        ),
      ).toBe(PopoverPlacement.Top);
      expect(
        placementForVerticalPlacement(
          PopoverPlacement.Top,
          PopoverVerticalPlacement.Below,
        ),
      ).toBe(PopoverPlacement.Bottom);
      expect(
        placementForVerticalPlacement(
          PopoverPlacement.BottomStart,
          PopoverVerticalPlacement.Above,
        ),
      ).toBe(PopoverPlacement.TopStart);
    });
  });

  describe("getVerticalPreference", () => {
    it("detects above and below preferences from origins", () => {
      expect(
        getVerticalPreference(
          {
            vertical: PopoverPlacementSide.Top,
            horizontal: PopoverHorizontalPlacement.Center,
          },
          {
            vertical: PopoverPlacementSide.Bottom,
            horizontal: PopoverHorizontalPlacement.Center,
          },
        ),
      ).toBe(PopoverVerticalPlacement.Above);
      expect(
        getVerticalPreference(
          {
            vertical: PopoverPlacementSide.Bottom,
            horizontal: PopoverHorizontalPlacement.Center,
          },
          {
            vertical: PopoverPlacementSide.Top,
            horizontal: PopoverHorizontalPlacement.Center,
          },
        ),
      ).toBe(PopoverVerticalPlacement.Below);
    });
  });

  describe("resolveHorizontalPlacement", () => {
    const popoverWidth = 360;
    const anchorLeft = 24;
    const anchorWidth = 120;
    const anchorRight = anchorLeft + anchorWidth;
    const viewportWidth = 800;

    it("keeps center alignment when the popover fits", () => {
      expect(
        resolveHorizontalPlacement({
          preferHorizontal: PopoverHorizontalPlacement.Center,
          anchorLeft: 300,
          anchorRight: 420,
          anchorWidth: 120,
          popoverWidth,
          viewportWidth,
        }),
      ).toBe(PopoverHorizontalPlacement.Center);
    });

    it("aligns left when center would overflow the left edge", () => {
      expect(
        resolveHorizontalPlacement({
          preferHorizontal: PopoverHorizontalPlacement.Center,
          anchorLeft,
          anchorRight,
          anchorWidth,
          popoverWidth,
          viewportWidth,
        }),
      ).toBe(PopoverHorizontalPlacement.Left);
    });

    it("aligns right when center would overflow the right edge", () => {
      expect(
        resolveHorizontalPlacement({
          preferHorizontal: PopoverHorizontalPlacement.Center,
          anchorLeft: 700,
          anchorRight: 780,
          anchorWidth: 80,
          popoverWidth,
          viewportWidth,
        }),
      ).toBe(PopoverHorizontalPlacement.Right);
    });
  });

  describe("placementForHorizontalPlacement", () => {
    it("updates the placement to match horizontal alignment", () => {
      expect(
        placementForHorizontalPlacement(
          PopoverPlacement.Bottom,
          PopoverHorizontalPlacement.Left,
        ),
      ).toBe(PopoverPlacement.BottomStart);
      expect(
        placementForHorizontalPlacement(
          PopoverPlacement.TopEnd,
          PopoverHorizontalPlacement.Center,
        ),
      ).toBe(PopoverPlacement.Top);
    });
  });

  describe("getHorizontalPreference", () => {
    it("detects horizontal preferences from origins", () => {
      expect(
        getHorizontalPreference(
          {
            vertical: PopoverPlacementSide.Top,
            horizontal: PopoverHorizontalPlacement.Left,
          },
          {
            vertical: PopoverPlacementSide.Bottom,
            horizontal: PopoverHorizontalPlacement.Left,
          },
        ),
      ).toBe(PopoverHorizontalPlacement.Left);
      expect(
        getHorizontalPreference(
          {
            vertical: PopoverPlacementSide.Top,
            horizontal: PopoverHorizontalPlacement.Center,
          },
          {
            vertical: PopoverPlacementSide.Bottom,
            horizontal: PopoverHorizontalPlacement.Center,
          },
        ),
      ).toBe(PopoverHorizontalPlacement.Center);
    });
  });

  describe("getOriginsForPlacement", () => {
    it("maps vertical popover sides to anchor origins", () => {
      expect(getOriginsForPlacement(PopoverPlacement.Top)).toEqual({
        anchorOrigin: {
          vertical: PopoverPlacementSide.Top,
          horizontal: PopoverHorizontalPlacement.Center,
        },
        transformOrigin: {
          vertical: PopoverPlacementSide.Bottom,
          horizontal: PopoverHorizontalPlacement.Center,
        },
      });
      expect(getOriginsForPlacement(PopoverPlacement.BottomStart)).toEqual({
        anchorOrigin: {
          vertical: PopoverPlacementSide.Bottom,
          horizontal: PopoverHorizontalPlacement.Left,
        },
        transformOrigin: {
          vertical: PopoverPlacementSide.Top,
          horizontal: PopoverHorizontalPlacement.Left,
        },
      });
    });

    it("maps side placements to horizontal popover placement", () => {
      expect(getOriginsForPlacement(PopoverPlacement.LeftStart)).toEqual({
        anchorOrigin: {
          vertical: PopoverEdgeAlignment.Top,
          horizontal: PopoverPlacementSide.Left,
        },
        transformOrigin: {
          vertical: PopoverEdgeAlignment.Top,
          horizontal: PopoverPlacementSide.Right,
        },
      });
      expect(getOriginsForPlacement(PopoverPlacement.Left)).toEqual({
        anchorOrigin: {
          vertical: PopoverEdgeAlignment.Center,
          horizontal: PopoverPlacementSide.Left,
        },
        transformOrigin: {
          vertical: PopoverEdgeAlignment.Center,
          horizontal: PopoverPlacementSide.Right,
        },
      });
      expect(getOriginsForPlacement(PopoverPlacement.RightEnd)).toEqual({
        anchorOrigin: {
          vertical: PopoverEdgeAlignment.Bottom,
          horizontal: PopoverPlacementSide.Right,
        },
        transformOrigin: {
          vertical: PopoverEdgeAlignment.Bottom,
          horizontal: PopoverPlacementSide.Left,
        },
      });
    });
  });

  describe("resolveSidePlacement", () => {
    const popoverWidth = 228;

    it("keeps left-side placement when there is room to the left", () => {
      expect(
        resolveSidePlacement({
          preferSide: PopoverSidePlacement.Left,
          spaceLeft: 500,
          spaceRight: 400,
          popoverWidth,
          hasArrow: true,
        }),
      ).toBe(PopoverSidePlacement.Left);
    });

    it("flips to the right side when there is not enough room on the left", () => {
      expect(
        resolveSidePlacement({
          preferSide: PopoverSidePlacement.Left,
          spaceLeft: 80,
          spaceRight: 500,
          popoverWidth,
          hasArrow: true,
        }),
      ).toBe(PopoverSidePlacement.Right);
    });
  });

  describe("resolveEdgeAlignment", () => {
    const popoverHeight = 180;
    const anchorHeight = 32;

    it("keeps top alignment for left-start when the anchor is near the top", () => {
      expect(
        resolveEdgeAlignment({
          preferAlignment: PopoverEdgeAlignment.Top,
          anchorTop: 48,
          anchorBottom: 80,
          anchorHeight,
          popoverHeight,
          viewportHeight: 800,
        }),
      ).toBe(PopoverEdgeAlignment.Top);
    });

    it("does not flip top alignment when the popover fits below the anchor top", () => {
      expect(
        resolveEdgeAlignment({
          preferAlignment: PopoverEdgeAlignment.Top,
          anchorTop: 120,
          anchorBottom: 152,
          anchorHeight,
          popoverHeight,
          viewportHeight: 800,
        }),
      ).toBe(PopoverEdgeAlignment.Top);
    });
  });

  describe("placementForSidePlacement", () => {
    it("preserves edge alignment when flipping between left and right", () => {
      expect(
        placementForSidePlacement(
          PopoverPlacement.LeftStart,
          PopoverSidePlacement.Right,
        ),
      ).toBe(PopoverPlacement.RightStart);
      expect(
        placementForVerticalPlacement(
          PopoverPlacement.Left,
          PopoverVerticalPlacement.Above,
        ),
      ).toBe(PopoverPlacement.Left);
    });
  });

  describe("placementForEdgeAlignment", () => {
    it("updates side placement alignment along the edge", () => {
      expect(
        placementForEdgeAlignment(
          PopoverPlacement.Left,
          PopoverEdgeAlignment.Bottom,
        ),
      ).toBe(PopoverPlacement.LeftEnd);
    });
  });
});
