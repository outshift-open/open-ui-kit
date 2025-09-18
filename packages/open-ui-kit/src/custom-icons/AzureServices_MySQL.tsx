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

export function AzureServicesMySQL(props: SvgIconProps) {
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
          d="M19.56 18.73V5.641c0-1.397-3.038-2.456-6.787-2.456-3.748 0-6.787 1.059-6.787 2.456V18.73c0 1.345 2.986 2.436 6.692 2.457h.095c3.749 0 6.788-1.059 6.788-2.457ZM17.983 5.44c0 .602-1.125 1.122-2.77 1.385-.804.145-1.621.206-2.44.182a12.092 12.092 0 0 1-4.118-.572l.05-.016c-.714-.268-1.141-.608-1.141-.979 0-.868 2.34-1.556 5.21-1.556 2.869 0 5.209.698 5.209 1.556Zm-1.79 8.938v-1.544h1.288v2.558a1.146 1.146 0 0 1-1.165 1.203h-2.52v-.947h2.255c.142-.02.246-.408.246-.408l-.246.124h-1.412a.874.874 0 0 1-.947-.844v-1.686h1.279v1.412a.37.37 0 0 0 .274.132h.948Zm-2.947-2.008v.464h-.019v2.624H12.11v-2.037l-.635 1.431c-.17.379-.341.625-.758.625a1.023 1.023 0 0 1-.947-.625l-.597-1.487v2.112H8.064v-3.136c0-.369.076-.587.408-.691.154-.057.318-.086.483-.085a.88.88 0 0 1 .815.55l.947 1.8.739-1.8a.89.89 0 0 1 .862-.55c.16.002.32.027.474.075a.663.663 0 0 1 .454.73Z"
          clipRule="evenodd"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M12.764 5.626a12 12 0 0 0-3.84.55 11.25 11.25 0 0 0 3.85.57 11.25 11.25 0 0 0 3.85-.57 12 12 0 0 0-3.86-.55Z"
        />
      </svg>
    </SvgIcon>
  );
}
