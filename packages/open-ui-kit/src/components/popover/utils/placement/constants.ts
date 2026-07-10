/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  PopoverPlacement,
  PopoverPlacementSide,
  PopoverSidePlacement,
} from "../../types";

export const VIEWPORT_MARGIN = 16;
export const POPOVER_ARROW_HEIGHT = 8;
export const POPOVER_ARROW_WIDTH = POPOVER_ARROW_HEIGHT;

export const CENTER_PLACEMENTS = new Set<PopoverPlacement>([
  PopoverPlacement.Top,
  PopoverPlacement.Bottom,
  PopoverPlacement.Left,
  PopoverPlacement.Right,
]);

export const OPPOSITE_PLACEMENT_SIDE: Record<
  PopoverPlacementSide,
  PopoverPlacementSide
> = {
  [PopoverPlacementSide.Top]: PopoverPlacementSide.Bottom,
  [PopoverPlacementSide.Bottom]: PopoverPlacementSide.Top,
  [PopoverPlacementSide.Left]: PopoverPlacementSide.Right,
  [PopoverPlacementSide.Right]: PopoverPlacementSide.Left,
};

export const VERTICAL_CENTER_PLACEMENT: Record<
  PopoverPlacementSide.Top | PopoverPlacementSide.Bottom,
  PopoverPlacement
> = {
  [PopoverPlacementSide.Top]: PopoverPlacement.Top,
  [PopoverPlacementSide.Bottom]: PopoverPlacement.Bottom,
};

export const SIDE_CENTER_PLACEMENT: Record<
  PopoverSidePlacement,
  PopoverPlacement
> = {
  [PopoverSidePlacement.Left]: PopoverPlacement.Left,
  [PopoverSidePlacement.Right]: PopoverPlacement.Right,
};
