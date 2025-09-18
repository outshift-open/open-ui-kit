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

export function RoundedCheckCircleOutline(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <circle
          cx="12.25"
          cy="12"
          r="9"
          fill={props.fill ?? "currentColor"}
          fillOpacity="0.1"
        />
        <path
          d="M10.99 13.62L9.055 11.685C8.89 11.52 8.68 11.4375 8.425 11.4375C8.17 11.4375 7.96 11.52 7.795 11.685C7.63 11.85 7.5475 12.06 7.5475 12.315C7.5475 12.57 7.63 12.78 7.795 12.945L10.36 15.51C10.54 15.69 10.75 15.78 10.99 15.78C11.23 15.78 11.44 15.69 11.62 15.51L16.705 10.425C16.87 10.26 16.9525 10.05 16.9525 9.795C16.9525 9.54 16.87 9.33 16.705 9.165C16.54 9 16.33 8.9175 16.075 8.9175C15.82 8.9175 15.61 9 15.445 9.165L10.99 13.62ZM12.25 21C11.005 21 9.835 20.7638 8.74 20.2913C7.645 19.8188 6.6925 19.1775 5.8825 18.3675C5.0725 17.5575 4.43125 16.605 3.95875 15.51C3.48625 14.415 3.25 13.245 3.25 12C3.25 10.755 3.48625 9.585 3.95875 8.49C4.43125 7.395 5.0725 6.4425 5.8825 5.6325C6.6925 4.8225 7.645 4.18125 8.74 3.70875C9.835 3.23625 11.005 3 12.25 3C13.495 3 14.665 3.23625 15.76 3.70875C16.855 4.18125 17.8075 4.8225 18.6175 5.6325C19.4275 6.4425 20.0688 7.395 20.5413 8.49C21.0138 9.585 21.25 10.755 21.25 12C21.25 13.245 21.0138 14.415 20.5413 15.51C20.0688 16.605 19.4275 17.5575 18.6175 18.3675C17.8075 19.1775 16.855 19.8188 15.76 20.2913C14.665 20.7638 13.495 21 12.25 21ZM12.25 19.2C14.26 19.2 15.9625 18.5025 17.3575 17.1075C18.7525 15.7125 19.45 14.01 19.45 12C19.45 9.99 18.7525 8.2875 17.3575 6.8925C15.9625 5.4975 14.26 4.8 12.25 4.8C10.24 4.8 8.5375 5.4975 7.1425 6.8925C5.7475 8.2875 5.05 9.99 5.05 12C5.05 14.01 5.7475 15.7125 7.1425 17.1075C8.5375 18.5025 10.24 19.2 12.25 19.2Z"
          fill={props.fill ?? "currentColor"}
        />
      </svg>
    </SvgIcon>
  );
}
