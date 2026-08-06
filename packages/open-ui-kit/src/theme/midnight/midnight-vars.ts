/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { VarsType } from "@/types/vars";
import { darkVars } from "@/theme/dark/dark-vars";
import {
  surfaceDarkPalette,
  greyPalette,
  darkNavyPalette,
  electricBluePalette,
  surfaceDark900,
} from "@/theme/style/color-palette";

// Midnight is a dark-family theme. It shares most semantic tokens with the
// Dark theme, so it is composed as `darkVars` plus the tokens that Midnight
// redefines: deep "Dark Navy" surfaces, "Electric Blue" primary/interactive,
// and the associated border/background shifts. Values are mapped from the
// Figma "Accordion - Midnight" / Midnight token set.
export const midnightVars: VarsType = {
  ...darkVars,

  // Base — Dark Navy surfaces
  baseBackgroundStrong: darkNavyPalette[400], // #060a0f canvas
  baseBackgroundMedium: darkNavyPalette[200], // #0a141f
  baseBackgroundWeak: darkNavyPalette[100], // #1e293b
  baseBackgroundHover: darkNavyPalette[300], // #0f1623
  baseBorderDefault: surfaceDarkPalette[300], // #263b62
  baseBorderStrong: surfaceDarkPalette[100], // #3a4e77
  baseBorderMedium: surfaceDarkPalette[200], // #31466e
  baseBorderWeak: surfaceDarkPalette[500], // #0d274d

  // Control
  controlBackgroundDefault: darkNavyPalette[200],
  controlBackgroundWeak: darkNavyPalette[100],
  controlBackgroundMedium: darkNavyPalette[100],
  controlBackgroundDisabled: darkNavyPalette[200],
  controlBorderDefault: surfaceDarkPalette[100], // #3a4e77
  controlBorderStrong: surfaceDarkPalette[200], // #31466e
  controlBorderMedium: surfaceDarkPalette[300], // #263b62
  controlBorderWeak: surfaceDarkPalette[400], // #183056
  controlBorderHover: electricBluePalette[700], // #1469cc
  controlBorderActive: electricBluePalette[700],
  controlBorderDisabled: surfaceDarkPalette[400],
  controlIconHover: electricBluePalette[700],
  controlIconActive: electricBluePalette[700],

  // Interactive — Primary (Electric Blue)
  interactivePrimaryDefaultDefault: electricBluePalette[500], // #558bff
  interactivePrimaryDefaultHover: electricBluePalette[300], // #0ab6ff
  interactivePrimaryDefaultActive: electricBluePalette[700], // #1469cc
  interactivePrimaryDefaultDisabled: electricBluePalette["alpha40"],
  interactivePrimaryWeakDefault: darkNavyPalette[200],
  interactivePrimaryWeakHover: darkNavyPalette[100],
  interactivePrimaryWeakActive: darkNavyPalette[100],
  interactivePrimaryWeakDisabled: electricBluePalette["alpha10"],

  // Interactive — Secondary
  interactiveSecondaryDefaultDefault: greyPalette[50],
  interactiveSecondaryDefaultHover: greyPalette[0],
  interactiveSecondaryDefaultActive: greyPalette[100],
  interactiveSecondaryDefaultDisabled: greyPalette[0],
  interactiveSecondaryWeakDefault: darkNavyPalette[200],
  interactiveSecondaryWeakHover: darkNavyPalette[100],
  interactiveSecondaryWeakActive: greyPalette[800],
  interactiveSecondaryWeakDisabled: surfaceDarkPalette[900],

  // Interactive — Inverse
  interactiveInverseBackgroundDefault: greyPalette[200],
  interactiveInverseBackgroundHover: greyPalette[100],
  interactiveInverseBackgroundActive: greyPalette[200],
  interactiveInverseBackgroundDisabled: greyPalette[200],
  interactiveInverseTextHover: surfaceDarkPalette[600],
  interactiveInverseTextDisabled: surfaceDark900,

  // Excellent — Electric Blue
  excellentBackgroundDefault: electricBluePalette[700],
  excellentBackgroundWeak: electricBluePalette["alpha10"],
  excellentBackgroundDisabled: electricBluePalette["alpha40"],
  excellentBackgroundHover: electricBluePalette[500],
  excellentBackgroundActive: electricBluePalette[700],
  excellentTextDefault: electricBluePalette[300],
  excellentTextHover: electricBluePalette[300],
  excellentTextActive: electricBluePalette[300],
  excellentTextInDefault: electricBluePalette[300],
  excellentTextInDisabled: electricBluePalette["alpha10"],
  excellentBorderDefault: electricBluePalette[500],
  excellentBorderHover: electricBluePalette[300],
  excellentBorderActive: electricBluePalette[700],
  excellentBorderDisabled: electricBluePalette["alpha40"],
  excellentBorderWeak: electricBluePalette[500],
  excellentIconDefault: electricBluePalette[500],
  excellentIconHover: electricBluePalette[300],
  excellentIconActive: electricBluePalette[700],
  excellentIconDisabled: electricBluePalette["alpha40"],
  excellentIconInDefault: electricBluePalette[300],
  excellentIconInHover: electricBluePalette[300],
  excellentIconInActive: electricBluePalette[300],
  excellentIconInDisabled: electricBluePalette["alpha10"],

  // Brand — Electric Blue + Dark Navy
  brandIconPrimaryDefault: electricBluePalette[500],
  brandIconPrimaryStrong: electricBluePalette[700],
  brandIconPrimaryMedium: electricBluePalette[300],
  brandIconPrimaryWeak: electricBluePalette[300],
  // The Brand/Icon/Secondary ramp is not redefined for Midnight — the Figma
  // Midnight mode resolves it to the same Surface values the Dark theme uses
  // (Weak #e3eafa, Medium #c8d5f5, Default #4f628d), so it inherits from
  // `darkVars` rather than being overridden here.
  brandBackgroundPrimaryDefault: darkNavyPalette[200],
  brandBackgroundPrimaryWeak: darkNavyPalette[100],
  brandBackgroundPrimaryMedium: surfaceDarkPalette[400],
  brandBackgroundSecondaryDefault: darkNavyPalette[100],
  brandTextPrimary: electricBluePalette[500],
  brandTextSecondary: greyPalette[0],
};
