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

export function ImageValid(props: SvgIconProps) {
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
          d="M12.18 17c.36-1.5 1.25-2.84 2.5-3.75l-.72-.96-2.75 3.54-1.96-2.36L6.5 17h5.68ZM5 5v14h7.03c.06.7.21 1.38.47 2H5c-.53 0-1.04-.21-1.41-.59C3.21 20.04 3 19.53 3 19V5c0-1.1.9-2 2-2h14c.53 0 1.04.21 1.41.59.38.37.59.88.59 1.41v7.5c-.62-.26-1.3-.41-2-.47V5H5Zm12.75 17L15 19l1.16-1.16 1.59 1.59 3.59-3.59 1.16 1.41L17.75 22Z"
        />
      </svg>
    </SvgIcon>
  );
}
