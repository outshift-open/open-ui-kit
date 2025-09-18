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

export function InfoBold(props: SvgIconProps) {
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
          d="M12.002 3c.482 0 .894.172 1.236.515.341.343.512.755.512 1.237 0 .482-.172.894-.515 1.236a1.691 1.691 0 0 1-1.237.512 1.68 1.68 0 0 1-1.236-.515 1.69 1.69 0 0 1-.512-1.237c0-.482.172-.894.515-1.236A1.691 1.691 0 0 1 12.002 3Zm1.748 6v12h-3.5V9h3.5Z"
        />
      </svg>
    </SvgIcon>
  );
}
