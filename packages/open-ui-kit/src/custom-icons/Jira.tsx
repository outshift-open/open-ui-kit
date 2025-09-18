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

export function Jira(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M21.6212 11.1604L12.6838 2.28053C12.2974 1.89665 11.6873 1.90675 11.2704 2.31084L2.37366 11.1604C1.87545 11.6554 1.87545 12.4534 2.37366 12.9484L11.1078 21.6262C11.3518 21.8687 11.6772 22 12.0025 22C12.3279 22 12.6533 21.8788 12.8973 21.6262L21.6314 12.9484C22.1296 12.4534 22.1194 11.6554 21.6212 11.1604ZM7.7219 12.0493L11.2704 15.575L11.484 15.8175C12.4194 16.8984 12.5617 18.4339 11.8907 19.6664L4.23436 12.0493L9.75545 6.56386C9.84696 7.47305 10.1622 8.35194 10.6909 9.10961L7.73207 12.0493H7.7219ZM13.4972 12.0493L11.9924 13.5445L10.4875 12.0493L11.9924 10.5542L13.4972 12.0493ZM16.2628 12.0493L12.7143 8.52368L12.5007 8.28123C11.5755 7.2003 11.423 5.66476 12.094 4.4323L19.7605 12.0493L14.2394 17.5348C14.1479 16.6256 13.8327 15.7366 13.304 14.9891L16.2628 12.0493Z"
          fill={props.fill ?? "currentColor"}
        />
      </svg>
    </SvgIcon>
  );
}
