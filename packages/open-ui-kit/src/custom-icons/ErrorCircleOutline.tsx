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

export function ErrorCircleOutline(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="9"
          fill={props.fill ?? "currentColor"}
          fillOpacity="0.1"
        />
        <path
          d="M12 16.5C12.255 16.5 12.4688 16.4138 12.6413 16.2413C12.8138 16.0688 12.9 15.855 12.9 15.6C12.9 15.345 12.8138 15.1313 12.6413 14.9588C12.4688 14.7863 12.255 14.7 12 14.7C11.745 14.7 11.5312 14.7863 11.3588 14.9588C11.1863 15.1313 11.1 15.345 11.1 15.6C11.1 15.855 11.1863 16.0688 11.3588 16.2413C11.5312 16.4138 11.745 16.5 12 16.5ZM12 12.9C12.255 12.9 12.4688 12.8138 12.6413 12.6413C12.8138 12.4688 12.9 12.255 12.9 12V8.4C12.9 8.145 12.8138 7.93125 12.6413 7.75875C12.4688 7.58625 12.255 7.5 12 7.5C11.745 7.5 11.5312 7.58625 11.3588 7.75875C11.1863 7.93125 11.1 8.145 11.1 8.4V12C11.1 12.255 11.1863 12.4688 11.3588 12.6413C11.5312 12.8138 11.745 12.9 12 12.9ZM12 21C10.755 21 9.585 20.7638 8.49 20.2913C7.395 19.8188 6.4425 19.1775 5.6325 18.3675C4.8225 17.5575 4.18125 16.605 3.70875 15.51C3.23625 14.415 3 13.245 3 12C3 10.755 3.23625 9.585 3.70875 8.49C4.18125 7.395 4.8225 6.4425 5.6325 5.6325C6.4425 4.8225 7.395 4.18125 8.49 3.70875C9.585 3.23625 10.755 3 12 3C13.245 3 14.415 3.23625 15.51 3.70875C16.605 4.18125 17.5575 4.8225 18.3675 5.6325C19.1775 6.4425 19.8188 7.395 20.2913 8.49C20.7638 9.585 21 10.755 21 12C21 13.245 20.7638 14.415 20.2913 15.51C19.8188 16.605 19.1775 17.5575 18.3675 18.3675C17.5575 19.1775 16.605 19.8188 15.51 20.2913C14.415 20.7638 13.245 21 12 21ZM12 19.2C14.01 19.2 15.7125 18.5025 17.1075 17.1075C18.5025 15.7125 19.2 14.01 19.2 12C19.2 9.99 18.5025 8.2875 17.1075 6.8925C15.7125 5.4975 14.01 4.8 12 4.8C9.99 4.8 8.2875 5.4975 6.8925 6.8925C5.4975 8.2875 4.8 9.99 4.8 12C4.8 14.01 5.4975 15.7125 6.8925 17.1075C8.2875 18.5025 9.99 19.2 12 19.2Z"
          fill={props.fill ?? "currentColor"}
        />
      </svg>
    </SvgIcon>
  );
}
