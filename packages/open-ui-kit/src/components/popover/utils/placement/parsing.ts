/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  PopoverArrowAxisAlign,
  PopoverPlacement,
  PopoverPlacementAlign,
  PopoverPlacementSide,
} from "../../types";
import { CENTER_PLACEMENTS, OPPOSITE_PLACEMENT_SIDE } from "./constants";

export const getOppositePlacementSide = (
  side: PopoverPlacementSide,
): PopoverPlacementSide => OPPOSITE_PLACEMENT_SIDE[side];

export const getPlacementSide = (
  placement: PopoverPlacement,
): PopoverPlacementSide => placement.split("-")[0] as PopoverPlacementSide;

export const getPlacementAlign = (
  placement: PopoverPlacement,
): PopoverPlacementAlign => {
  if (CENTER_PLACEMENTS.has(placement)) {
    return PopoverPlacementAlign.Center;
  }
  if (placement.endsWith(`-${PopoverPlacementAlign.Start}`)) {
    return PopoverPlacementAlign.Start;
  }
  return PopoverPlacementAlign.End;
};

/** Arrow offset axis for styles: start/end map to physical edges in LTR. */
export const getArrowAxisAlign = (
  placement: PopoverPlacement,
): PopoverArrowAxisAlign => {
  const side = getPlacementSide(placement);
  const align = getPlacementAlign(placement);

  if (
    side === PopoverPlacementSide.Top ||
    side === PopoverPlacementSide.Bottom
  ) {
    if (align === PopoverPlacementAlign.Start) {
      return PopoverArrowAxisAlign.Left;
    }
    if (align === PopoverPlacementAlign.End) {
      return PopoverArrowAxisAlign.Right;
    }
    return PopoverArrowAxisAlign.Center;
  }

  if (align === PopoverPlacementAlign.Start) {
    return PopoverArrowAxisAlign.Top;
  }
  if (align === PopoverPlacementAlign.End) {
    return PopoverArrowAxisAlign.Bottom;
  }
  return PopoverArrowAxisAlign.Center;
};
