/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { VarsType } from "@/types/vars";
import {
  iocControlBackgroundStickyColumn,
  iocGlowPrimary,
  iocGradientBrand,
  iocGradientPage,
  iocGradients,
  iocShape,
  iocSurfacePalette,
} from "../ioc-color-palette";
import { iocTheme } from "../ioc-theme";
import { iocVars } from "../ioc-vars";

const requireVarsType = (vars: VarsType) => vars;

describe("iocTheme", () => {
  it("exposes vars that satisfy VarsType", () => {
    expect(requireVarsType(iocVars)).toBe(iocVars);
  });

  it("attaches iocVars to the theme palette", () => {
    expect(iocTheme.palette.vars).toBe(iocVars);
  });

  it("keeps representative IoC tokens stable", () => {
    expect(iocVars.brandBlue).toBe("#00BCEB");
    expect(iocVars.baseBackgroundStrong).toBe("#07111F");
    expect(iocVars.baseTextStrong).toBe("rgba(255, 255, 255, 0.94)");
    expect(iocVars.baseBorderDefault).toBe("rgba(255, 255, 255, 0.09)");
  });

  it("exposes upstream IoC effect tokens outside VarsType", () => {
    expect(iocShape.borderRadiusLg).toBe("8px");
    expect(iocControlBackgroundStickyColumn).toBe("rgba(255, 255, 255, 0.1)");
    expect(iocGradientBrand).toBe(
      "linear-gradient(135deg, #1AC6F0 0%, #2B82F6 100%)",
    );
    expect(iocGradientPage).toContain("linear-gradient(160deg");
    expect(iocGradients.primary).toBe(
      "linear-gradient(180deg, #1AC6F0 0%, #00A0D1 100%)",
    );
    expect(iocGlowPrimary).toContain("#00BCEBCC");
    expect(iocSurfacePalette[400]).toBe("rgba(255, 255, 255, 0.12)");
  });
});
