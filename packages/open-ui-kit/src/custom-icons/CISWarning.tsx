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

export function CISWarning(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          d="M11.775 21.775c-.179 0-.358-.036-.537-.108a1.667 1.667 0 0 1-.49-.308l-8.557-8.557a1.666 1.666 0 0 1-.307-.49 1.422 1.422 0 0 1-.109-.537c0-.18.037-.361.109-.546.072-.185.175-.345.307-.481l8.557-8.557c.148-.145.312-.25.49-.317a1.535 1.535 0 0 1 1.084 0c.185.067.345.172.48.317l8.558 8.557c.144.136.25.296.316.48.066.186.1.368.1.547 0 .18-.034.358-.1.537a1.389 1.389 0 0 1-.316.49l-8.558 8.557a1.418 1.418 0 0 1-.48.307 1.492 1.492 0 0 1-.547.109Zm0-1.467 8.533-8.533-8.533-8.533-8.533 8.533 8.533 8.533Zm-.733-7.555h1.467V6.885h-1.467v5.868Zm.733 2.69a.704.704 0 0 0 .514-.22.704.704 0 0 0 .22-.514.704.704 0 0 0-.22-.514.704.704 0 0 0-.514-.22.704.704 0 0 0-.513.22.704.704 0 0 0-.22.514c0 .196.073.367.22.513.147.147.318.22.513.22Z"
        />
      </svg>
    </SvgIcon>
  );
}
