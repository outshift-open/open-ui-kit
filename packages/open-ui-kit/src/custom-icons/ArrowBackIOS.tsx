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

export function ArrowBackIOS(props: SvgIconProps) {
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
          d="M9.62716 12.0061L16.6039 18.9829C16.8412 19.2202 16.9559 19.4971 16.948 19.8135C16.9401 20.1299 16.8175 20.4067 16.5802 20.644C16.3429 20.8813 16.066 21 15.7496 21C15.4332 21 15.1564 20.8813 14.9191 20.644L7.61006 13.3588C7.42022 13.1689 7.27783 12.9553 7.18291 12.718C7.08799 12.4807 7.04053 12.2434 7.04053 12.0061C7.04053 11.7688 7.08799 11.5315 7.18291 11.2942C7.27783 11.0569 7.42022 10.8433 7.61006 10.6535L14.9191 3.34448C15.1564 3.10717 15.4372 2.99247 15.7615 3.00038C16.0858 3.00829 16.3666 3.1309 16.6039 3.36821C16.8412 3.60551 16.9599 3.88237 16.9599 4.19878C16.9599 4.51518 16.8412 4.79204 16.6039 5.02934L9.62716 12.0061Z"
          fill={props.fill ?? "currentColor"}
        />
      </svg>
    </SvgIcon>
  );
}
