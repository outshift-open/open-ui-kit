/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

export const indicatorBadgeValueStyles = (
  color: string,
  isActive?: boolean,
) => ({
  backgroundColor: color,
  height: 3,
  width: 6,
  borderRadius: 1,
  opacity: isActive ? 1 : 0.4,
});
