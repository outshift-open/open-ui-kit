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

export function Recon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M7.75 20.5a5.752 5.752 0 0 1-5.735-6.172 5.754 5.754 0 0 1 4.336-5.157 5.752 5.752 0 0 1 11.298 0A5.75 5.75 0 0 1 16.25 20.5h-8.5Zm-1.035-9.873.93-.233.18-.943a4.252 4.252 0 0 1 5.356-3.285 4.988 4.988 0 0 1-1.674 4.628c-.94.17-1.713.818-2.06 1.682A6.481 6.481 0 0 0 7 12a6.473 6.473 0 0 0-2.988.726 4.257 4.257 0 0 1 2.703-2.1Zm6.594.454a2.75 2.75 0 0 1 1.397 2.911 5.49 5.49 0 0 0 4.654-2.14 4.244 4.244 0 0 0-2.075-1.225l-.93-.233-.18-.943A4.243 4.243 0 0 0 14.75 7.01a6.473 6.473 0 0 1-1.44 4.072Zm6.893 2.103a6.982 6.982 0 0 1-6.237 2.24 2.76 2.76 0 0 1-.365.313A9.476 9.476 0 0 1 11.866 19h4.384a4.25 4.25 0 0 0 3.952-5.816Zm-10.894.88a2.752 2.752 0 0 0 2.507 2.18A8.023 8.023 0 0 1 9.792 19H7.75a4.25 4.25 0 0 1-4.246-4.074A4.984 4.984 0 0 1 7 13.5c.832 0 1.617.203 2.308.563Zm3.942-.564a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
