/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  PopoverEdgeAlignment,
  PopoverHorizontalPlacement,
  PopoverSidePlacement,
  PopoverVerticalPlacement,
} from "../../types";
import {
  POPOVER_ARROW_HEIGHT,
  POPOVER_ARROW_WIDTH,
  VIEWPORT_MARGIN,
} from "./constants";
import { getPopoverHorizontalBounds, getPopoverVerticalBounds } from "./bounds";

export const resolveVerticalPlacement = ({
  preferAbove,
  spaceAbove,
  spaceBelow,
  popoverHeight,
  hasArrow,
  margin = VIEWPORT_MARGIN,
}: {
  preferAbove: boolean;
  spaceAbove: number;
  spaceBelow: number;
  popoverHeight: number;
  hasArrow: boolean;
  margin?: number;
}): PopoverVerticalPlacement => {
  const clearance = hasArrow ? POPOVER_ARROW_HEIGHT : 0;
  const required = popoverHeight + clearance;
  const aboveRoom = spaceAbove - margin;
  const belowRoom = spaceBelow - margin;
  const fitsAbove = aboveRoom >= required;
  const fitsBelow = belowRoom >= required;

  if (preferAbove && fitsAbove) return PopoverVerticalPlacement.Above;
  if (!preferAbove && fitsBelow) return PopoverVerticalPlacement.Below;
  if (fitsAbove && !fitsBelow) return PopoverVerticalPlacement.Above;
  if (fitsBelow && !fitsAbove) return PopoverVerticalPlacement.Below;

  return aboveRoom >= belowRoom
    ? PopoverVerticalPlacement.Above
    : PopoverVerticalPlacement.Below;
};

export const resolveHorizontalPlacement = ({
  preferHorizontal,
  anchorLeft,
  anchorRight,
  anchorWidth,
  popoverWidth,
  margin = VIEWPORT_MARGIN,
  viewportWidth,
}: {
  preferHorizontal: PopoverHorizontalPlacement;
  anchorLeft: number;
  anchorRight: number;
  anchorWidth: number;
  popoverWidth: number;
  margin?: number;
  viewportWidth: number;
}): PopoverHorizontalPlacement => {
  const fits = (horizontal: PopoverHorizontalPlacement) => {
    const { left, right } = getPopoverHorizontalBounds({
      anchorLeft,
      anchorRight,
      anchorWidth,
      popoverWidth,
      horizontal,
    });
    return left >= margin && right <= viewportWidth - margin;
  };

  if (fits(preferHorizontal)) return preferHorizontal;

  const alternatives: PopoverHorizontalPlacement[] = (() => {
    if (preferHorizontal === PopoverHorizontalPlacement.Center) {
      const { left } = getPopoverHorizontalBounds({
        anchorLeft,
        anchorRight,
        anchorWidth,
        popoverWidth,
        horizontal: PopoverHorizontalPlacement.Center,
      });
      return left < margin
        ? [PopoverHorizontalPlacement.Left, PopoverHorizontalPlacement.Right]
        : [PopoverHorizontalPlacement.Right, PopoverHorizontalPlacement.Left];
    }
    if (preferHorizontal === PopoverHorizontalPlacement.Left) {
      return [
        PopoverHorizontalPlacement.Right,
        PopoverHorizontalPlacement.Center,
      ];
    }
    return [PopoverHorizontalPlacement.Left, PopoverHorizontalPlacement.Center];
  })();

  for (const horizontal of alternatives) {
    if (fits(horizontal)) return horizontal;
  }

  const overflow = (horizontal: PopoverHorizontalPlacement) => {
    const { left, right } = getPopoverHorizontalBounds({
      anchorLeft,
      anchorRight,
      anchorWidth,
      popoverWidth,
      horizontal,
    });
    const leftOverflow = Math.max(0, margin - left);
    const rightOverflow = Math.max(0, right - (viewportWidth - margin));
    return leftOverflow + rightOverflow;
  };

  const all: PopoverHorizontalPlacement[] = [
    PopoverHorizontalPlacement.Left,
    PopoverHorizontalPlacement.Center,
    PopoverHorizontalPlacement.Right,
  ];
  return all.reduce((best, current) =>
    overflow(current) < overflow(best) ? current : best,
  );
};

export const resolveSidePlacement = ({
  preferSide,
  spaceLeft,
  spaceRight,
  popoverWidth,
  hasArrow,
  margin = VIEWPORT_MARGIN,
}: {
  preferSide: PopoverSidePlacement;
  spaceLeft: number;
  spaceRight: number;
  popoverWidth: number;
  hasArrow: boolean;
  margin?: number;
}): PopoverSidePlacement => {
  const clearance = hasArrow ? POPOVER_ARROW_WIDTH : 0;
  const required = popoverWidth + clearance;
  const leftRoom = spaceLeft - margin;
  const rightRoom = spaceRight - margin;
  const fitsLeft = leftRoom >= required;
  const fitsRight = rightRoom >= required;

  if (preferSide === PopoverSidePlacement.Left && fitsLeft) {
    return PopoverSidePlacement.Left;
  }
  if (preferSide === PopoverSidePlacement.Right && fitsRight) {
    return PopoverSidePlacement.Right;
  }
  if (fitsLeft && !fitsRight) return PopoverSidePlacement.Left;
  if (fitsRight && !fitsLeft) return PopoverSidePlacement.Right;

  return leftRoom >= rightRoom
    ? PopoverSidePlacement.Left
    : PopoverSidePlacement.Right;
};

export const resolveEdgeAlignment = ({
  preferAlignment,
  anchorTop,
  anchorBottom,
  anchorHeight,
  popoverHeight,
  margin = VIEWPORT_MARGIN,
  viewportHeight,
}: {
  preferAlignment: PopoverEdgeAlignment;
  anchorTop: number;
  anchorBottom: number;
  anchorHeight: number;
  popoverHeight: number;
  margin?: number;
  viewportHeight: number;
}): PopoverEdgeAlignment => {
  const fits = (vertical: PopoverEdgeAlignment) => {
    const { top, bottom } = getPopoverVerticalBounds({
      anchorTop,
      anchorBottom,
      anchorHeight,
      popoverHeight,
      vertical,
    });
    return top >= margin && bottom <= viewportHeight - margin;
  };

  if (fits(preferAlignment)) return preferAlignment;

  const alternatives: PopoverEdgeAlignment[] = (() => {
    if (preferAlignment === PopoverEdgeAlignment.Center) {
      const { top } = getPopoverVerticalBounds({
        anchorTop,
        anchorBottom,
        anchorHeight,
        popoverHeight,
        vertical: PopoverEdgeAlignment.Center,
      });
      return top < margin
        ? [PopoverEdgeAlignment.Top, PopoverEdgeAlignment.Bottom]
        : [PopoverEdgeAlignment.Bottom, PopoverEdgeAlignment.Top];
    }
    if (preferAlignment === PopoverEdgeAlignment.Top) {
      return [PopoverEdgeAlignment.Bottom, PopoverEdgeAlignment.Center];
    }
    return [PopoverEdgeAlignment.Top, PopoverEdgeAlignment.Center];
  })();

  for (const vertical of alternatives) {
    if (fits(vertical)) return vertical;
  }

  const overflow = (vertical: PopoverEdgeAlignment) => {
    const { top, bottom } = getPopoverVerticalBounds({
      anchorTop,
      anchorBottom,
      anchorHeight,
      popoverHeight,
      vertical,
    });
    const topOverflow = Math.max(0, margin - top);
    const bottomOverflow = Math.max(0, bottom - (viewportHeight - margin));
    return topOverflow + bottomOverflow;
  };

  const all: PopoverEdgeAlignment[] = [
    PopoverEdgeAlignment.Top,
    PopoverEdgeAlignment.Center,
    PopoverEdgeAlignment.Bottom,
  ];
  return all.reduce((best, current) =>
    overflow(current) < overflow(best) ? current : best,
  );
};
