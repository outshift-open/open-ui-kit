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

export function ManageColumns(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.5 18.8933C2.5 19.344 2.66721 19.7358 2.99705 20.0644C3.32689 20.393 3.72003 20.5595 4.17207 20.5595H19.8224C20.2758 20.5595 20.6702 20.3931 21.0012 20.0646C21.3321 19.736 21.5 19.3441 21.5 18.8933V5.11238C21.5 4.66019 21.3322 4.26707 21.0013 3.93738C20.6704 3.60768 20.2759 3.44067 19.8224 3.44067H4.17207C3.71992 3.44067 3.32675 3.60776 2.99693 3.93749C2.66713 4.26721 2.5 4.6603 2.5 5.11238V18.8933ZM4.26613 5.20644H8.37602V18.7993H4.26613V5.20644ZM9.95384 5.20644H14.0406V18.7993H9.95384V5.20644ZM15.6184 5.20644H19.7283V18.7993H15.6184V5.20644Z"
          fill={props.fill ?? "currentColor"}
        />
      </svg>
    </SvgIcon>
  );
}
