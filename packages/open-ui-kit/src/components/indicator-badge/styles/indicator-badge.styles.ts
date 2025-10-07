/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

export const indicatorBadgeValueContainerStyles = {
  container: {
    height: 24,
    width: 24,
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export const indicatorBadgeBackdropStyles = (color: string) => ({
  backgroundColor: color,
  borderRadius: 1,
  height: "inherit",
  opacity: 0.1,
  width: "inherit",
});
