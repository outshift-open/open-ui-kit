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

import "./typography.css";
import "./types/theme";

export * from "./templates";
export * from "./components";
export * from "./charts";
export * as Icons from "./custom-icons";
export * from "./custom-illustrations";
export * from "./common";
export * from "./common/utils";
export { OS_LIGHT_COLORS } from "./theme/light/light-color-palette";
export { gradientsPalette } from "./theme/gradients";
export { ThemeProvider } from "./theme-provider/theme-provider";

export type { GradientsPalette, Gradient } from "./types/palette";
export type { ThemeProviderProps } from "./theme-provider/theme-provider";
export * from "./types/select-tree";
