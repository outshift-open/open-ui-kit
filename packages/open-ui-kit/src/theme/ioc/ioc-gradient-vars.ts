/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { GradientVarsType } from "@/types/gradient-vars";
import { midnightGradientVars } from "@/theme/midnight/midnight-gradient-vars";

/*
 * IoC gradients.
 *
 * IoC used to fall back to `baseGradientVars`, the provisional placeholder set,
 * so Card, Input, Toast and Icon Button rendered approximations rather than
 * design values. It now resolves Midnight's gradients, which are design
 * approved and are what IoC should show today.
 *
 * All 46 keys are inherited, none overridden. `Proposed IoC.tokens.json` does
 * carry a few IoC-specific gradient stops, but design has confirmed those are
 * exploratory rather than approved, so they are deliberately NOT implemented
 * here. Do not lift gradient values out of that file.
 *
 * This module is the seam for when approved IoC gradients arrive: they go in as
 * overrides below the spread, exactly as `midnight-gradient-vars.ts` overrides
 * the base set. Until then the two themes are intentionally identical, and
 * `ioc-gradient-vars.test.ts` asserts that, so the day they diverge is a
 * deliberate change someone had to make on purpose.
 */
export const iocGradientVars: GradientVarsType = {
  ...midnightGradientVars,
};
