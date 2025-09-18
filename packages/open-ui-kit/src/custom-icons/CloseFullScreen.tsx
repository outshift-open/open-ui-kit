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

export const CloseFullScreen = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.329 14.8407L5.39948 19.7702C5.2463 19.9234 5.05135 20 4.81462 20C4.57789 20 4.38294 19.9234 4.22977 19.7702C4.07659 19.6171 4 19.4221 4 19.1854C4 18.9487 4.07659 18.7537 4.22977 18.6005L9.15927 13.671H6.15144C5.91471 13.671 5.71628 13.5909 5.55614 13.4308C5.396 13.2707 5.31593 13.0722 5.31593 12.8355C5.31593 12.5988 5.396 12.4003 5.55614 12.2402C5.71628 12.0801 5.91471 12 6.15144 12H11.1645C11.4012 12 11.5997 12.0801 11.7598 12.2402C11.9199 12.4003 12 12.5988 12 12.8355V17.8486C12 18.0853 11.9199 18.2837 11.7598 18.4439C11.5997 18.604 11.4012 18.6841 11.1645 18.6841C10.9278 18.6841 10.7293 18.604 10.5692 18.4439C10.4091 18.2837 10.329 18.0853 10.329 17.8486V14.8407ZM14.8407 10.329H17.8486C18.0853 10.329 18.2837 10.4091 18.4439 10.5692C18.604 10.7293 18.6841 10.9278 18.6841 11.1645C18.6841 11.4012 18.604 11.5997 18.4439 11.7598C18.2837 11.9199 18.0853 12 17.8486 12H12.8355C12.5988 12 12.4003 11.9199 12.2402 11.7598C12.0801 11.5997 12 11.4012 12 11.1645V6.15144C12 5.91471 12.0801 5.71628 12.2402 5.55614C12.4003 5.396 12.5988 5.31593 12.8355 5.31593C13.0722 5.31593 13.2707 5.396 13.4308 5.55614C13.5909 5.71628 13.671 5.91471 13.671 6.15144V9.15927L18.6005 4.22977C18.7537 4.07659 18.9487 4 19.1854 4C19.4221 4 19.6171 4.07659 19.7702 4.22977C19.9234 4.38294 20 4.57789 20 4.81462C20 5.05135 19.9234 5.2463 19.7702 5.39948L14.8407 10.329Z"
        fill={props.fill ?? "currentColor"}
      />
    </svg>
  </SvgIcon>
);
