/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { PopoverOrigin } from "@mui/material";
import { useLayoutEffect, useRef, useState } from "react";
import { getPaperArrowOffset } from "../styles";
import type { PopoverProps } from "../types";
import {
  getEdgeAlignmentPreference,
  getHorizontalPreference,
  getOriginsForPlacement,
  getOriginsForVerticalPlacement,
  getPlacementSide,
  getSidePreference,
  getVerticalPreference,
  placementForEdgeAlignment,
  placementForHorizontalPlacement,
  placementForSidePlacement,
  placementForVerticalPlacement,
  resolveEdgeAlignment,
  resolveHorizontalPlacement,
  resolveSidePlacement,
  resolveVerticalPlacement,
} from "../utils/placement";
import { PopoverPlacementSide } from "../types";

const resolveAnchorRect = (anchorEl: PopoverProps["anchorEl"]) => {
  if (!anchorEl) return null;
  const resolved = typeof anchorEl === "function" ? anchorEl() : anchorEl;
  return resolved?.getBoundingClientRect?.() ?? null;
};

const resolvePlacementState = ({
  anchorOrigin,
  transformOrigin,
  placement,
}: {
  anchorOrigin: PopoverOrigin;
  transformOrigin: PopoverOrigin;
  placement?: PopoverProps["placement"];
}) => {
  if (placement) {
    const origins = getOriginsForPlacement(placement);
    return {
      anchorOrigin: origins.anchorOrigin,
      transformOrigin: origins.transformOrigin,
      placement,
    };
  }

  return { anchorOrigin, transformOrigin, placement };
};

type ResolvedPlacementState = ReturnType<typeof resolvePlacementState>;

const isSameResolvedState = (
  current: ResolvedPlacementState,
  next: ResolvedPlacementState,
) =>
  current.placement === next.placement &&
  current.anchorOrigin.vertical === next.anchorOrigin.vertical &&
  current.anchorOrigin.horizontal === next.anchorOrigin.horizontal &&
  current.transformOrigin.vertical === next.transformOrigin.vertical &&
  current.transformOrigin.horizontal === next.transformOrigin.horizontal;

const getPreferenceOrigins = ({
  anchorOrigin,
  transformOrigin,
  placement,
}: {
  anchorOrigin: PopoverOrigin;
  transformOrigin: PopoverOrigin;
  placement?: PopoverProps["placement"];
}) =>
  placement
    ? getOriginsForPlacement(placement)
    : { anchorOrigin, transformOrigin };

export const useResolvedPopoverPlacement = ({
  open,
  anchorEl,
  anchorOrigin,
  transformOrigin,
  placement,
}: {
  open: boolean;
  anchorEl: PopoverProps["anchorEl"];
  anchorOrigin: PopoverOrigin;
  transformOrigin: PopoverOrigin;
  placement?: PopoverProps["placement"];
}) => {
  const paperRef = useRef<HTMLDivElement>(null);
  const [resolved, setResolved] = useState(() =>
    resolvePlacementState({ anchorOrigin, transformOrigin, placement }),
  );
  const updateResolved = (next: ResolvedPlacementState) => {
    setResolved((current) =>
      isSameResolvedState(current, next) ? current : next,
    );
  };

  useLayoutEffect(() => {
    if (!open) {
      updateResolved(
        resolvePlacementState({ anchorOrigin, transformOrigin, placement }),
      );
      return;
    }

    const anchorRect = resolveAnchorRect(anchorEl);
    if (!anchorRect) return;

    const {
      anchorOrigin: preferenceAnchorOrigin,
      transformOrigin: preferenceTransformOrigin,
    } = getPreferenceOrigins({ anchorOrigin, transformOrigin, placement });

    const measure = () => {
      const paper = paperRef.current;
      if (!paper) return;

      if (placement) {
        const placementSide = getPlacementSide(placement);

        if (
          placementSide === PopoverPlacementSide.Top ||
          placementSide === PopoverPlacementSide.Bottom
        ) {
          const preferAbove =
            getVerticalPreference(
              preferenceAnchorOrigin,
              preferenceTransformOrigin,
            ) === "above";
          const preferHorizontal = getHorizontalPreference(
            preferenceAnchorOrigin,
            preferenceTransformOrigin,
          );
          const verticalPlacement = resolveVerticalPlacement({
            preferAbove,
            spaceAbove: anchorRect.top,
            spaceBelow: window.innerHeight - anchorRect.bottom,
            popoverHeight: paper.offsetHeight,
            hasArrow: true,
          });
          const horizontalPlacement = resolveHorizontalPlacement({
            preferHorizontal,
            anchorLeft: anchorRect.left,
            anchorRight: anchorRect.right,
            anchorWidth: anchorRect.width,
            popoverWidth: paper.offsetWidth,
            viewportWidth: window.innerWidth,
          });
          const nextPlacement = placementForHorizontalPlacement(
            placementForVerticalPlacement(placement, verticalPlacement),
            horizontalPlacement,
          );
          const origins = getOriginsForPlacement(nextPlacement);
          updateResolved({
            anchorOrigin: origins.anchorOrigin,
            transformOrigin: origins.transformOrigin,
            placement: nextPlacement,
          });
          return;
        }

        const preferSide = getSidePreference(placement);
        const preferAlignment = getEdgeAlignmentPreference(placement);
        const sidePlacement = resolveSidePlacement({
          preferSide,
          spaceLeft: anchorRect.left,
          spaceRight: window.innerWidth - anchorRect.right,
          popoverWidth: paper.offsetWidth,
          hasArrow: true,
        });
        const edgeAlignment = resolveEdgeAlignment({
          preferAlignment,
          anchorTop: anchorRect.top,
          anchorBottom: anchorRect.bottom,
          anchorHeight: anchorRect.height,
          popoverHeight: paper.offsetHeight,
          viewportHeight: window.innerHeight,
        });
        const nextPlacement = placementForEdgeAlignment(
          placementForSidePlacement(placement, sidePlacement),
          edgeAlignment,
        );
        const origins = getOriginsForPlacement(nextPlacement);
        updateResolved({
          anchorOrigin: origins.anchorOrigin,
          transformOrigin: origins.transformOrigin,
          placement: nextPlacement,
        });
        return;
      }

      const preferAbove =
        getVerticalPreference(
          preferenceAnchorOrigin,
          preferenceTransformOrigin,
        ) === "above";
      const verticalPlacement = resolveVerticalPlacement({
        preferAbove,
        spaceAbove: anchorRect.top,
        spaceBelow: window.innerHeight - anchorRect.bottom,
        popoverHeight: paper.offsetHeight,
        hasArrow: false,
      });
      const horizontalPlacement = resolveHorizontalPlacement({
        preferHorizontal: getHorizontalPreference(
          preferenceAnchorOrigin,
          preferenceTransformOrigin,
        ),
        anchorLeft: anchorRect.left,
        anchorRight: anchorRect.right,
        anchorWidth: anchorRect.width,
        popoverWidth: paper.offsetWidth,
        viewportWidth: window.innerWidth,
      });
      const origins = getOriginsForVerticalPlacement(
        verticalPlacement,
        horizontalPlacement,
      );
      updateResolved({
        anchorOrigin: origins.anchorOrigin,
        transformOrigin: origins.transformOrigin,
        placement,
      });
    };

    const frame = requestAnimationFrame(measure);
    return () => cancelAnimationFrame(frame);
  }, [open, anchorEl, anchorOrigin, transformOrigin, placement]);

  const paperOffsetSx = getPaperArrowOffset(
    resolved.placement,
    resolved.anchorOrigin,
    resolved.transformOrigin,
  );

  return {
    paperRef,
    anchorOrigin: resolved.anchorOrigin,
    transformOrigin: resolved.transformOrigin,
    placement: resolved.placement,
    paperOffsetSx,
  };
};
