/*
 * Copyright 2025 Open UI Kit Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { GradientsPalette } from "@/types/palette";

export const gradientsIllustrationsBlue =
  "linear-gradient(79.41deg, #214694 0%, #3169a8 50%, #56bad5 100%)";
export const gradientsIllustrationsRainbow =
  "linear-gradient(270deg, #ba4d5f 0%, #df875d 20%, #eab069 40%, #8cbdac 60%, #58c0d0 80%, #834dd7 100%)";
export const gradientsIllustrationsPurple =
  "linear-gradient(79.3deg, #834dd7 0%, #7670d5 50%, #58c0d0 100%)";
export const gradientsIllustrationsGreen =
  "linear-gradient(79.58deg, #1ac1e5 0%, #4cc9b2 50%, #a7d755 100%)";
export const gradientsIllustrationsLightBlue =
  "linear-gradient(259.41deg, #00dff0 0%, #00aff0 50%, #006df0 100%)";
export const gradientsIllustrationsPink =
  "linear-gradient(244.41deg, #e09e89 0%, #c0328a 50%, #c0328a 100%)";
export const gradientsPrimaryDefault =
  "linear-gradient(225.09deg, #ff6d2e 0%, #341686 75%, #0d274d 100%)";
export const gradientsPrimaryPressed =
  "linear-gradient(124.96deg, #0d274d 0%, #341686 20%, #ff6d2e 95%)";
export const gradientsPrimaryHover =
  "linear-gradient(225.09deg, #f69377 0%, #5300a4 75%, #1c2b7f 100%)";
export const gradientsSecondaryDefault =
  "linear-gradient(225.09deg, #80a8d7 0%, #002786 65%, #021d60 100%)";
export const gradientsSecondaryPressed =
  "linear-gradient(124.96deg, #021d60 0%, #002786 20%, #80a8d7 95%)";
export const gradientsSecondaryHover =
  "linear-gradient(225.09deg, #b3cbe7 0%, #00409f 65%, #002786 100%)";
export const gradientsRedDefault =
  "linear-gradient(225.09deg, #e09e89 0%, #b11939 75%, #a40f29 100%)";
export const gradientsRedPressed =
  "linear-gradient(124.96deg, #a40f29 0%, #b11939 20%, #e09e89 95%)";
export const gradientsRedHover =
  "linear-gradient(225.09deg, #f9cdac 0%, #c62953 75%, #b11939 100%)";
export const gradientsBackgroundLight =
  "radial-gradient(221.49% 141.42% at 0% 100%, #dee6f9 0%, #f5f8fd 48.71%, #f5f8fd 100%)";
export const gradientsBackgroundDark =
  "radial-gradient(221.49% 141.42% at 0% 100%, #0d274d 0%, #001c3b 20.08%, #00142b 100%)";

export const gradientsPalette: GradientsPalette = {
  illustrations: {
    blue: gradientsIllustrationsBlue,
    rainbow: gradientsIllustrationsRainbow,
    purple: gradientsIllustrationsPurple,
    green: gradientsIllustrationsGreen,
    lightBlue: gradientsIllustrationsLightBlue,
    pink: gradientsIllustrationsPink,
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
