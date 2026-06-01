/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { IndicatorBadgeValue } from "./indicator-badge-value";
import {
  IndicatorBadgeBackdrop,
  IndicatorBadgeContainer,
  IndicatorBadgeValueStack,
} from "./elements";
import { INDICATOR_BADGE_VALUES_COUNT } from "../styles";
import type { IndicatorBadgeProps } from "../types";

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
