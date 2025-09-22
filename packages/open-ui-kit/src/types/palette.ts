/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

export type Gradient = string;

export interface GradientsPalette {
  illustrations: {
    blue: Gradient;
    rainbow: Gradient;
    purple: Gradient;
    green: Gradient;
    lightBlue: Gradient;
    pink: Gradient;
  };
  primary: {
    default: Gradient;
    pressed: Gradient;
    hover: Gradient;
  };
  secondary: {
    default: Gradient;
    pressed: Gradient;
    hover: Gradient;
  };
  red: {
    default: Gradient;
    pressed: Gradient;
    hover: Gradient;
  };
  background: {
    light: Gradient;
    dark: Gradient;
  };
}
