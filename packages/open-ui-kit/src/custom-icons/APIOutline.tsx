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

export function APIOutline(props: SvgIconProps) {
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
          d="M13.637 12.852a.2.2 0 0 0-.277 0l-1.633 1.633L9.51 12.27l1.637-1.638a.2.2 0 0 0 0-.277l-.89-.891a.2.2 0 0 0-.278 0L8.346 11.1l-1.055-1.055a.183.183 0 0 0-.14-.055c-.051 0-.102.02-.141.055l-2.493 2.501a4.906 4.906 0 0 0-.598 6.217l-1.864 1.864a.2.2 0 0 0 0 .278l1.04 1.04c.038.038.09.054.14.054.05 0 .101-.02.14-.055l1.865-1.868c.824.563 1.785.84 2.747.84a4.881 4.881 0 0 0 3.47-1.438l2.497-2.497a.2.2 0 0 0 0-.277l-1.055-1.055 1.637-1.638a.2.2 0 0 0 0-.277l-.899-.883Zm-3.36 5.455c-.606.61-1.43.95-2.29.95a3.21 3.21 0 0 1-2.29-.95 3.226 3.226 0 0 1-.95-2.29c0-.867.336-1.676.95-2.29l1.457-1.457 4.58 4.58-1.457 1.457ZM21.945 3.094l-1.04-1.04a.194.194 0 0 0-.14-.054c-.05 0-.102.02-.14.055L18.76 3.923a4.862 4.862 0 0 0-2.747-.84 4.881 4.881 0 0 0-3.47 1.438l-2.497 2.497a.2.2 0 0 0 0 .277l6.659 6.659c.039.039.09.055.14.055.051 0 .102-.02.141-.055l2.497-2.497a4.91 4.91 0 0 0 .594-6.217l1.868-1.868a.194.194 0 0 0 0-.278Zm-3.642 7.183-1.457 1.457-4.58-4.58 1.457-1.457c.61-.61 1.427-.95 2.29-.95a3.21 3.21 0 0 1 2.29.95c.61.61.95 1.426.95 2.29 0 .867-.34 1.676-.95 2.29Z"
        />
      </svg>
    </SvgIcon>
  );
}
