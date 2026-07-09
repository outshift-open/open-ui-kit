/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  PopoverEdgeAlignment,
  PopoverHorizontalPlacement,
  PopoverPlacement,
  PopoverPlacementAlign,
  PopoverPlacementSide,
  PopoverSidePlacement,
  PopoverVerticalPlacement,
} from "../../types";
import { SIDE_CENTER_PLACEMENT, VERTICAL_CENTER_PLACEMENT } from "./constants";
import { getPlacementAlign, getPlacementSide } from "./parsing";

const placementSideToSidePlacement = (
  side: PopoverPlacementSide.Left | PopoverPlacementSide.Right,
): PopoverSidePlacement =>
  side === PopoverPlacementSide.Right
    ? PopoverSidePlacement.Right
    : PopoverSidePlacement.Left;

const formatVerticalPlacement = (
  side: PopoverPlacementSide.Top | PopoverPlacementSide.Bottom,
  align: PopoverPlacementAlign,
): PopoverPlacement => {
  if (align === PopoverPlacementAlign.Center) {
    return VERTICAL_CENTER_PLACEMENT[side];
  }
  return `${side}-${align}` as PopoverPlacement;
};

const formatSidePlacement = (
  side: PopoverSidePlacement,
  align: PopoverPlacementAlign,
): PopoverPlacement => {
  if (align === PopoverPlacementAlign.Center) {
    return SIDE_CENTER_PLACEMENT[side];
  }
  return `${side}-${align}` as PopoverPlacement;
};

const horizontalToPlacementAlign = (
  horizontal: PopoverHorizontalPlacement,
): PopoverPlacementAlign => {
  if (horizontal === PopoverHorizontalPlacement.Left) {
    return PopoverPlacementAlign.Start;
  }
  if (horizontal === PopoverHorizontalPlacement.Right) {
    return PopoverPlacementAlign.End;
  }
  return PopoverPlacementAlign.Center;
};

const edgeToPlacementAlign = (
  edge: PopoverEdgeAlignment,
): PopoverPlacementAlign => {
  if (edge === PopoverEdgeAlignment.Top) {
    return PopoverPlacementAlign.Start;
  }
  if (edge === PopoverEdgeAlignment.Bottom) {
    return PopoverPlacementAlign.End;
  }
  return PopoverPlacementAlign.Center;
};

export const placementForVerticalPlacement = (
  placement: PopoverPlacement,
  verticalPlacement: PopoverVerticalPlacement,
): PopoverPlacement => {
  const side = getPlacementSide(placement);
  if (
    side !== PopoverPlacementSide.Top &&
    side !== PopoverPlacementSide.Bottom
  ) {
    return placement;
  }

  const align = getPlacementAlign(placement);
  return verticalPlacement === PopoverVerticalPlacement.Above
    ? formatVerticalPlacement(PopoverPlacementSide.Top, align)
    : formatVerticalPlacement(PopoverPlacementSide.Bottom, align);
};

export const placementForHorizontalPlacement = (
  placement: PopoverPlacement,
  horizontal: PopoverHorizontalPlacement,
): PopoverPlacement => {
  const side = getPlacementSide(placement);
  if (
    side !== PopoverPlacementSide.Top &&
    side !== PopoverPlacementSide.Bottom
  ) {
    return placement;
  }

  return formatVerticalPlacement(
    side as PopoverPlacementSide.Top | PopoverPlacementSide.Bottom,
    horizontalToPlacementAlign(horizontal),
  );
};

export const placementForSidePlacement = (
  placement: PopoverPlacement,
  side: PopoverSidePlacement,
): PopoverPlacement => {
  const placementSide = getPlacementSide(placement);
  if (
    placementSide !== PopoverPlacementSide.Left &&
    placementSide !== PopoverPlacementSide.Right
  ) {
    return placement;
  }

  return formatSidePlacement(side, getPlacementAlign(placement));
};

export const placementForEdgeAlignment = (
  placement: PopoverPlacement,
  align: PopoverEdgeAlignment,
): PopoverPlacement => {
  const side = getPlacementSide(placement);
  if (
    side !== PopoverPlacementSide.Left &&
    side !== PopoverPlacementSide.Right
  ) {
    return placement;
  }

  return formatSidePlacement(
    placementSideToSidePlacement(side),
    edgeToPlacementAlign(align),
  );
};
