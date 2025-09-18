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

export function AWSCategoryIdentitySecurity(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M12.303 17.813h1.062V7.188h-1.062v10.625ZM6.99 7.14v6.815c.016.178.468 5.278 5.844 5.982 5.375-.704 5.827-5.803 5.844-6.02l-.001-6.777-5.843-2.079L6.99 7.142ZM12.834 21a.456.456 0 0 1-.066-.004c-6.314-.778-6.834-6.927-6.84-6.99V6.789c0-.22.14-.418.351-.494l6.375-2.264a.54.54 0 0 1 .36 0l6.375 2.264a.526.526 0 0 1 .351.494v7.18c-.006.1-.526 6.25-6.84 7.027a.457.457 0 0 1-.066.004Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
