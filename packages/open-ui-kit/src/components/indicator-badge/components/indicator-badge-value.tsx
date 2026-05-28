/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { IndicatorBadgeValueBar } from "./elements";

export interface IndicatorBadgeValueProps {
  color: string;
  isActive?: boolean;
}

export const IndicatorBadgeValue = ({
  color,
  isActive,
}: IndicatorBadgeValueProps): JSX.Element => {
  return (
    <IndicatorBadgeValueBar
      badgeColor={color}
      data-testid="indicator-badge-bar"
      isActive={isActive}
    />
  );
};
