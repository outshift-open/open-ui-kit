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

import { GeneralSize } from "@/common";

enum LinkStackGap {
  small = "6px",
  medium = "5px",
  large = "4px",
}

export const linkStackStyle = (size: GeneralSize) => ({
  gap: LinkStackGap[size],
  flexDirection: "row",
  alignItems: "center",
  border: "none",
});

export const iconStyle = {
  [GeneralSize.Large]: { width: "24px", height: "24px" },
  [GeneralSize.Medium]: { width: "20px", height: "20px" },
  [GeneralSize.Small]: { width: "16px", height: "16px" },
};
