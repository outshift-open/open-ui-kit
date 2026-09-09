/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { baseGradientVars } from "@/theme/style/gradient-vars-base";
import { midnightGradientVars } from "@/theme/midnight/midnight-gradient-vars";
import { iocGradientVars } from "../ioc-gradient-vars";
import { iocTheme } from "../ioc-theme";

describe("IoC gradient vars", () => {
  it("implements the whole gradient contract", () => {
    expect(Object.keys(iocGradientVars).sort()).toEqual(
      Object.keys(baseGradientVars).sort(),
    );

    const empty = Object.entries(iocGradientVars)
      .filter(([, value]) => typeof value !== "string" || value.length === 0)
      .map(([key]) => key);

    expect(empty).toEqual([]);
  });

  it("is mounted on the IoC theme", () => {
    expect(iocTheme.palette.gradients).toEqual(iocGradientVars);
  });

  it("no longer serves the provisional base set", () => {
    expect(iocGradientVars).not.toEqual(baseGradientVars);
  });

  /*
   * IoC has no approved gradients of its own yet, so it resolves Midnight's.
   * The IoC-specific stops in `Proposed IoC.tokens.json` are exploratory and
   * must not be implemented from that file.
   *
   * Pinning the equality here means the first real divergence fails this test
   * and has to be added deliberately, rather than arriving as a silent edit.
   */
  it("matches Midnight until design delivers approved IoC gradients", () => {
    expect(iocGradientVars).toEqual(midnightGradientVars);
  });
});
