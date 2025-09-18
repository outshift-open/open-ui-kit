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

export function IACSecurity(props: SvgIconProps) {
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
          d="m10.52 9.424.96 1.152L9.171 12.5l2.309 1.924-.96 1.152L6.828 12.5l3.692-3.076ZM12.52 14.424l.96 1.152 3.692-3.076-3.692-3.076-.96 1.152 2.309 1.924-2.309 1.924Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M20 5.5v5.95c0 2.533-.75 4.863-2.25 6.988S14.333 21.916 12 22.5c-2.333-.583-4.25-1.938-5.75-4.063S4 13.983 4 11.45V5.5l8-3 8 3Zm-8 15.445c-1.794-.533-3.296-1.632-4.525-3.372C6.15 15.693 5.5 13.665 5.5 11.45V6.54L12 4.101l6.5 2.438v4.91c0 2.215-.649 4.243-1.976 6.123-1.228 1.74-2.73 2.839-4.524 3.372Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
