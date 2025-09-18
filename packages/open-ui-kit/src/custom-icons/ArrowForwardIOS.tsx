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

export function ArrowForwardIOS(props: SvgIconProps) {
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
          d="M14.3644 12.0057L7.39676 5.03814C7.15976 4.80115 7.04522 4.5207 7.05312 4.19681C7.06102 3.87292 7.18346 3.59248 7.42046 3.35549C7.65745 3.1185 7.93789 3 8.26178 3C8.58567 3 8.86611 3.1185 9.10311 3.35549L16.3788 10.6549C16.5684 10.8445 16.7106 11.0578 16.8054 11.2948C16.9002 11.5317 16.9476 11.7687 16.9476 12.0057C16.9476 12.2427 16.9002 12.4797 16.8054 12.7167C16.7106 12.9537 16.5684 13.167 16.3788 13.3566L9.07941 20.656C8.84241 20.893 8.56592 21.0075 8.24993 20.9996C7.93394 20.9917 7.65745 20.8693 7.42046 20.6323C7.18346 20.3953 7.06497 20.1148 7.06497 19.791C7.06497 19.4671 7.18346 19.1866 7.42046 18.9496L14.3644 12.0057Z"
          fill={props.fill ?? "currentColor"}
        />
      </svg>
    </SvgIcon>
  );
}
