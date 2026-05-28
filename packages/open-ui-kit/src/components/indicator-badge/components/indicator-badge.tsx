/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  IndicatorBadgeValue,
  IndicatorBadgeValueProps,
} from "./indicator-badge-value";
import {
  IndicatorBadgeBackdrop,
  IndicatorBadgeContainer,
  IndicatorBadgeValueStack,
} from "./elements";

const INDICATOR_BADGE_VALUES_COUNT = 4;

export interface IndicatorBadgeProps
  extends Pick<IndicatorBadgeValueProps, "color"> {
  value: 0 | 1 | 2 | 3 | 4;
}

export const IndicatorBadge = ({
  color,
  value,
}: IndicatorBadgeProps): JSX.Element => {
  return (
    <IndicatorBadgeContainer
      aria-label={`Indicator badge value ${value} of ${INDICATOR_BADGE_VALUES_COUNT}`}
      role="img"
    >
      <IndicatorBadgeBackdrop badgeColor={color} />
      <IndicatorBadgeValueStack>
        {Array.from({ length: INDICATOR_BADGE_VALUES_COUNT }).map((n, i) => (
          <IndicatorBadgeValue
            key={i}
            color={color}
            isActive={value > INDICATOR_BADGE_VALUES_COUNT - (i + 1)}
          />
        ))}
      </IndicatorBadgeValueStack>
    </IndicatorBadgeContainer>
  );
};
