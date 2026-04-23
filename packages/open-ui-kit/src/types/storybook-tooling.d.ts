/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

declare module "storycap" {
  /** Storybook decorator for screenshot capture (no bundled TypeScript types). */
  export const withScreenshot: (...args: unknown[]) => unknown;
}
