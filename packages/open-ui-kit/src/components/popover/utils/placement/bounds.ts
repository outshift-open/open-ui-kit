/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { PopoverEdgeAlignment, PopoverHorizontalPlacement } from "../../types";

export const getPopoverHorizontalBounds = ({
  anchorLeft,
  anchorRight,
  anchorWidth,
  popoverWidth,
  horizontal,
}: {
  anchorLeft: number;
  anchorRight: number;
  anchorWidth: number;
  popoverWidth: number;
  horizontal: PopoverHorizontalPlacement;
}) => {
  switch (horizontal) {
    case PopoverHorizontalPlacement.Left:
      return { left: anchorLeft, right: anchorLeft + popoverWidth };
    case PopoverHorizontalPlacement.Right:
      return { left: anchorRight - popoverWidth, right: anchorRight };
    default: {
      const center = anchorLeft + anchorWidth / 2;
      return {
        left: center - popoverWidth / 2,
        right: center + popoverWidth / 2,
      };
    }
  }
};

export const getPopoverVerticalBounds = ({
  anchorTop,
  anchorBottom,
  anchorHeight,
  popoverHeight,
  vertical,
}: {
  anchorTop: number;
  anchorBottom: number;
  anchorHeight: number;
  popoverHeight: number;
  vertical: PopoverEdgeAlignment;
}) => {
  switch (vertical) {
    case PopoverEdgeAlignment.Top:
      return { top: anchorTop, bottom: anchorTop + popoverHeight };
    case PopoverEdgeAlignment.Bottom:
      return { top: anchorBottom - popoverHeight, bottom: anchorBottom };
    default: {
      const center = anchorTop + anchorHeight / 2;
      return {
        top: center - popoverHeight / 2,
        bottom: center + popoverHeight / 2,
      };
    }
  }
};
