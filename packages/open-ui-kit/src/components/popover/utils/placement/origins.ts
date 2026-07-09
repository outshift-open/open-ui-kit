/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { PopoverOrigin } from "@mui/material";
import {
  PopoverEdgeAlignment,
  PopoverHorizontalPlacement,
  PopoverPlacement,
  PopoverPlacementAlign,
  PopoverPlacementSide,
  PopoverSidePlacement,
  PopoverVerticalPlacement,
} from "../../types";
import { getPlacementAlign, getPlacementSide } from "./parsing";

const toHorizontalOrigin = (
  align: PopoverPlacementAlign,
): PopoverOrigin["horizontal"] => {
  if (align === PopoverPlacementAlign.Start) {
    return PopoverHorizontalPlacement.Left;
  }
  if (align === PopoverPlacementAlign.End) {
    return PopoverHorizontalPlacement.Right;
  }
  return PopoverHorizontalPlacement.Center;
};

const toVerticalOrigin = (
  align: PopoverPlacementAlign,
): PopoverOrigin["vertical"] => {
  if (align === PopoverPlacementAlign.Start) {
    return PopoverEdgeAlignment.Top;
  }
  if (align === PopoverPlacementAlign.End) {
    return PopoverEdgeAlignment.Bottom;
  }
  return PopoverEdgeAlignment.Center;
};

export const getOriginsForPlacement = (
  placement: PopoverPlacement,
): {
  anchorOrigin: PopoverOrigin;
  transformOrigin: PopoverOrigin;
} => {
  const side = getPlacementSide(placement);
  const align = getPlacementAlign(placement);

  if (side === PopoverPlacementSide.Top) {
    const horizontal = toHorizontalOrigin(align);
    return {
      anchorOrigin: {
        vertical: PopoverPlacementSide.Top,
        horizontal,
      },
      transformOrigin: {
        vertical: PopoverPlacementSide.Bottom,
        horizontal,
      },
    };
  }

  if (side === PopoverPlacementSide.Bottom) {
    const horizontal = toHorizontalOrigin(align);
    return {
      anchorOrigin: {
        vertical: PopoverPlacementSide.Bottom,
        horizontal,
      },
      transformOrigin: {
        vertical: PopoverPlacementSide.Top,
        horizontal,
      },
    };
  }

  if (side === PopoverPlacementSide.Left) {
    const vertical = toVerticalOrigin(align);
    return {
      anchorOrigin: {
        vertical,
        horizontal: PopoverPlacementSide.Left,
      },
      transformOrigin: {
        vertical,
        horizontal: PopoverPlacementSide.Right,
      },
    };
  }

  const vertical = toVerticalOrigin(align);
  return {
    anchorOrigin: {
      vertical,
      horizontal: PopoverPlacementSide.Right,
    },
    transformOrigin: {
      vertical,
      horizontal: PopoverPlacementSide.Left,
    },
  };
};

export const getOriginsForVerticalPlacement = (
  placement: PopoverVerticalPlacement,
  horizontal: PopoverOrigin["horizontal"] = PopoverHorizontalPlacement.Center,
): {
  anchorOrigin: PopoverOrigin;
  transformOrigin: PopoverOrigin;
} => {
  if (placement === PopoverVerticalPlacement.Above) {
    return {
      anchorOrigin: {
        vertical: PopoverPlacementSide.Top,
        horizontal,
      },
      transformOrigin: {
        vertical: PopoverPlacementSide.Bottom,
        horizontal,
      },
    };
  }

  return {
    anchorOrigin: {
      vertical: PopoverPlacementSide.Bottom,
      horizontal,
    },
    transformOrigin: {
      vertical: PopoverPlacementSide.Top,
      horizontal,
    },
  };
};

export const getVerticalPreference = (
  anchorOrigin: PopoverOrigin,
  transformOrigin: PopoverOrigin,
): PopoverVerticalPlacement => {
  if (
    transformOrigin.vertical === PopoverPlacementSide.Bottom &&
    anchorOrigin.vertical === PopoverPlacementSide.Top
  ) {
    return PopoverVerticalPlacement.Above;
  }

  if (
    transformOrigin.vertical === PopoverPlacementSide.Top &&
    anchorOrigin.vertical === PopoverPlacementSide.Bottom
  ) {
    return PopoverVerticalPlacement.Below;
  }

  return PopoverVerticalPlacement.Above;
};

export const getHorizontalPreference = (
  anchorOrigin: PopoverOrigin,
  transformOrigin: PopoverOrigin,
): PopoverHorizontalPlacement => {
  const anchor = anchorOrigin.horizontal ?? PopoverHorizontalPlacement.Center;
  const transform =
    transformOrigin.horizontal ?? PopoverHorizontalPlacement.Center;

  if (
    anchor === PopoverHorizontalPlacement.Left &&
    transform === PopoverHorizontalPlacement.Left
  ) {
    return PopoverHorizontalPlacement.Left;
  }
  if (
    anchor === PopoverHorizontalPlacement.Right &&
    transform === PopoverHorizontalPlacement.Right
  ) {
    return PopoverHorizontalPlacement.Right;
  }
  return PopoverHorizontalPlacement.Center;
};

export const getSidePreference = (
  placement: PopoverPlacement,
): PopoverSidePlacement =>
  getPlacementSide(placement) === PopoverPlacementSide.Right
    ? PopoverSidePlacement.Right
    : PopoverSidePlacement.Left;

export const getEdgeAlignmentPreference = (
  placement: PopoverPlacement,
): PopoverEdgeAlignment => {
  const align = getPlacementAlign(placement);
  if (align === PopoverPlacementAlign.Start) {
    return PopoverEdgeAlignment.Top;
  }
  if (align === PopoverPlacementAlign.End) {
    return PopoverEdgeAlignment.Bottom;
  }
  return PopoverEdgeAlignment.Center;
};
