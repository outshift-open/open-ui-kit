/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { GradientsPalette } from "@/types/palette";
import {
  blue700,
  blue900,
  gradientStopColors,
  night700,
  orange300,
  purple800,
  red500,
  red800,
  red900,
  sunset50,
  surfaceDark500,
  surfaceDark700,
  surfaceDark900,
  surfaceLight100,
  surfaceLight500,
} from "./color-palette";

export const gradientsIllustrationsBlue = `linear-gradient(79.41deg, ${gradientStopColors.illustrationBlueStart} 7.87%, ${gradientStopColors.illustrationBlueMiddle} 50.07%, ${gradientStopColors.illustrationBlueEnd} 92.13%)`;
export const gradientsIllustrationsRainbow = `linear-gradient(270deg, ${gradientStopColors.illustrationRainbowRed} 0%, ${gradientStopColors.illustrationRainbowOrange} 20%, ${gradientStopColors.illustrationRainbowYellow} 40%, ${gradientStopColors.illustrationRainbowGreen} 60%, ${gradientStopColors.illustrationRainbowTeal} 80%, ${gradientStopColors.illustrationPurpleStart} 100%)`;
export const gradientsIllustrationsPurple = `linear-gradient(79.3deg, ${gradientStopColors.illustrationPurpleStart} 7.94%, ${gradientStopColors.illustrationPurpleMiddle} 49.88%, ${gradientStopColors.illustrationRainbowTeal} 92.06%)`;
export const gradientsIllustrationsGreen = `linear-gradient(79.41deg, ${gradientStopColors.illustrationGreenStart} 7.87%, ${gradientStopColors.illustrationGreenMiddle} 49.67%, ${gradientStopColors.illustrationGreenEnd} 92.13%)`;
export const gradientsIllustrationsLightBlue = `linear-gradient(259.41deg, ${gradientStopColors.illustrationLightBlueStart} 7.87%, ${gradientStopColors.illustrationLightBlueMiddle} 50%, ${gradientStopColors.illustrationLightBlueEnd} 92.13%)`;
export const gradientsIllustrationsPink = `linear-gradient(244.41deg, ${gradientStopColors.illustrationPinkStart} 16.19%, ${gradientStopColors.illustrationPinkEnd} 49.98%, ${gradientStopColors.illustrationPinkEnd} 83.81%)`;
export const gradientsIllustrationsOrange = `linear-gradient(270deg, ${gradientStopColors.illustrationOrangeStart} 0%, ${gradientStopColors.illustrationOrangeEnd} 100%)`;
export const gradientsPrimaryDefault = `linear-gradient(225.09deg, ${gradientStopColors.primaryOrange} 0%, ${gradientStopColors.primaryPurple} 75%, ${surfaceDark500} 100%)`;
export const gradientsPrimaryPressed = `linear-gradient(124.96deg, ${surfaceDark500} 15.43%, ${gradientStopColors.primaryPurple} 32.77%, ${gradientStopColors.primaryOrange} 97.61%)`;
export const gradientsPrimaryHover = `linear-gradient(225.09deg, ${orange300} 0%, ${purple800} 75%, ${night700} 100%)`;
export const gradientsSecondaryDefault = `linear-gradient(225.09deg, ${gradientStopColors.secondaryBlueWeak} 0%, ${blue900} 65%, ${gradientStopColors.secondaryBlueStrong} 100%)`;
export const gradientsSecondaryPressed = `linear-gradient(124.96deg, ${gradientStopColors.secondaryBlueStrong} 15.43%, ${blue900} 32.77%, ${gradientStopColors.secondaryBlueWeak} 97.61%)`;
export const gradientsSecondaryHover = `linear-gradient(225.09deg, ${gradientStopColors.secondaryBlueHoverWeak} 0%, ${blue700} 65%, ${blue900} 100%)`;
export const gradientsRedDefault = `linear-gradient(225.09deg, ${gradientStopColors.illustrationPinkStart} 0%, ${red800} 75%, ${red900} 100%)`;
export const gradientsRedPressed = `linear-gradient(124.96deg, ${red900} 15.43%, ${red800} 32.77%, ${gradientStopColors.illustrationPinkStart} 97.61%)`;
export const gradientsRedHover = `linear-gradient(225.09deg, ${sunset50} 0%, ${red500} 75%, ${red800} 100%)`;
export const gradientsBackgroundLight = `radial-gradient(100% 204.08% at 0% 100%, ${surfaceLight500} 0%, ${surfaceLight100} 48.71%, ${surfaceLight100} 100%)`;
export const gradientsBackgroundDark = `radial-gradient(100% 204.08% at 0% 100%, ${surfaceDark500} 0%, ${surfaceDark700} 20.08%, ${surfaceDark900} 100%)`;

export const gradientsPalette: GradientsPalette = {
  illustrations: {
    blue: gradientsIllustrationsBlue,
    rainbow: gradientsIllustrationsRainbow,
    purple: gradientsIllustrationsPurple,
    green: gradientsIllustrationsGreen,
    lightBlue: gradientsIllustrationsLightBlue,
    pink: gradientsIllustrationsPink,
    orange: gradientsIllustrationsOrange,
  },
  primary: {
    default: gradientsPrimaryDefault,
    pressed: gradientsPrimaryPressed,
    hover: gradientsPrimaryHover,
  },
  secondary: {
    default: gradientsSecondaryDefault,
    pressed: gradientsSecondaryPressed,
    hover: gradientsSecondaryHover,
  },
  red: {
    default: gradientsRedDefault,
    pressed: gradientsRedPressed,
    hover: gradientsRedHover,
  },
  background: {
    light: gradientsBackgroundLight,
    dark: gradientsBackgroundDark,
  },
};
