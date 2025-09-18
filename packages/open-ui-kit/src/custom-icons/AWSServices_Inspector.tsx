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

import { SvgIcon, SvgIconProps } from "@mui/material";

export function AWSServicesInspector(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M19.636 18.265a.687.687 0 0 1-.958.05l-3.353-2.992c.336-.3.638-.633.902-.998l3.359 2.994a.668.668 0 0 1 .05.946Zm-8.025-9.639a.802.802 0 0 1-.805-.796c0-.44.36-.797.805-.797.443 0 .805.358.805.797a.803.803 0 0 1-.805.796Zm-.66 2.696c.808 0 1.465.65 1.465 1.448 0 .799-.657 1.448-1.465 1.448-.807 0-1.463-.65-1.463-1.448 0-.798.656-1.448 1.463-1.448Zm-5.091-.604c0-2.87 2.359-5.203 5.259-5.203 2.9 0 5.259 2.333 5.259 5.202 0 .712-.146 1.39-.41 2.008l-2.568-.37a2.459 2.459 0 0 0-1.276-1.744V9.559a1.81 1.81 0 0 0 1.318-1.729c0-.998-.822-1.811-1.831-1.811-1.01 0-1.831.813-1.831 1.811 0 .82.56 1.509 1.318 1.729v.763c-.05-.002-.096-.014-.147-.014-.72 0-1.365.31-1.82.795l-.591-.591c.245-.377.39-.822.39-1.303 0-.826-.419-1.587-1.121-2.033l-.555.853c.408.26.651.7.651 1.18 0 .774-.637 1.404-1.419 1.404v1.015c.49 0 .948-.148 1.33-.395l.78.777a2.43 2.43 0 0 0-.134.76c0 1.358 1.117 2.463 2.49 2.463a2.484 2.484 0 0 0 2.406-1.86l2.079.3a5.268 5.268 0 0 1-4.318 2.245c-2.9 0-5.26-2.332-5.26-5.2Zm14.413 5.847-3.512-3.128a6.113 6.113 0 0 0 .642-2.72c0-3.428-2.82-6.217-6.284-6.217-3.465 0-6.285 2.79-6.285 6.217 0 3.428 2.82 6.217 6.285 6.217a6.288 6.288 0 0 0 3.378-.984l3.495 3.119c.325.289.732.431 1.139.431.466 0 .931-.188 1.267-.556.627-.69.57-1.757-.125-2.38Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
