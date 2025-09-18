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

export function Copy(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          d="M12.75 14.55h1.5v-3.3h3.3v-1.5h-3.3v-3.3h-1.5v3.3h-3.3v1.5h3.3v3.3ZM6.5 19c-.4 0-.75-.15-1.05-.45-.3-.3-.45-.65-.45-1.05v-14c0-.4.15-.75.45-1.05.3-.3.65-.45 1.05-.45h14c.4 0 .75.15 1.05.45.3.3.45.65.45 1.05v14c0 .4-.15.75-.45 1.05-.3.3-.65.45-1.05.45h-14Zm0-1.5h14v-14h-14v14Zm-3 4.5c-.4 0-.75-.15-1.05-.45-.3-.3-.45-.65-.45-1.05V5h1.5v15.5H19V22H3.5Z"
        />
      </svg> */}

      <svg
        width="16"
        height="18"
        viewBox="0 0 16 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={props.fill ?? "currentColor"}
          d="M5.91663 14.0001C5.45829 14.0001 5.06593 13.8369 4.73954 13.5105C4.41315 13.1841 4.24996 12.7917 4.24996 12.3334V2.33341C4.24996 1.87508 4.41315 1.48272 4.73954 1.15633C5.06593 0.829942 5.45829 0.666748 5.91663 0.666748H13.4166C13.875 0.666748 14.2673 0.829942 14.5937 1.15633C14.9201 1.48272 15.0833 1.87508 15.0833 2.33341V12.3334C15.0833 12.7917 14.9201 13.1841 14.5937 13.5105C14.2673 13.8369 13.875 14.0001 13.4166 14.0001H5.91663ZM5.91663 12.3334H13.4166V2.33341H5.91663V12.3334ZM2.58329 17.3334C2.12496 17.3334 1.7326 17.1702 1.40621 16.8438C1.07982 16.5174 0.916626 16.1251 0.916626 15.6667V4.83341C0.916626 4.5973 0.996487 4.39939 1.15621 4.23966C1.31593 4.07994 1.51385 4.00008 1.74996 4.00008C1.98607 4.00008 2.18399 4.07994 2.34371 4.23966C2.50343 4.39939 2.58329 4.5973 2.58329 4.83341V15.6667H10.9166C11.1527 15.6667 11.3507 15.7466 11.5104 15.9063C11.6701 16.0661 11.75 16.264 11.75 16.5001C11.75 16.7362 11.6701 16.9341 11.5104 17.0938C11.3507 17.2536 11.1527 17.3334 10.9166 17.3334H2.58329Z"
        />
      </svg>
    </SvgIcon>
  );
}
