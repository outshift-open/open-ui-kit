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

export function Bitbucket(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Bitbucket">
          <path
            id="Union"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.91673 3.8999C3.35046 3.8999 2.91969 4.39915 3.01266 4.94768L5.4535 19.3477C5.52707 19.7817 5.90947 20.0999 6.35756 20.0999H17.6392C18.0872 20.0999 18.4696 19.7818 18.5432 19.3479L20.9873 4.94787C21.0804 4.39929 20.6496 3.8999 20.0833 3.8999H3.91673ZM4.9984 5.6999L7.13413 18.2999H16.8628L18.2681 10.0199H15.913L15.0766 15.0218C15.0035 15.4593 14.6237 15.7799 14.1787 15.7799H9.82002C9.37496 15.7799 8.99515 15.4592 8.92207 15.0216L7.96258 9.2762C7.87023 8.72324 8.29809 8.21995 8.86052 8.21995H18.5736L19.0014 5.6999H4.9984ZM9.93486 10.0345L10.5913 13.9654H13.4076L14.0649 10.0345H9.93486Z"
            fill={props.fill ?? "currentColor"}
          />
        </g>
      </svg>
    </SvgIcon>
  );
}
