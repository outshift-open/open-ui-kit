/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

export type IndicatorBadgeValue = 0 | 1 | 2 | 3 | 4;

export interface IndicatorBadgeValueProps {
  /** Token-resolved color used by the segmented bars. */
  color: string;
  /** Whether this individual segment is filled. */
  isActive?: boolean;
}

export interface IndicatorBadgeProps
  extends Pick<IndicatorBadgeValueProps, "color"> {
  /** Segmented indicator value. Values fill from bottom to top. */
  value: IndicatorBadgeValue;
}
