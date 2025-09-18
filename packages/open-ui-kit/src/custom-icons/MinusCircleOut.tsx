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

import { SvgIconProps, SvgIcon } from "@mui/material";

export function MinusCircleOut(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.39853 11.0908C7.90148 11.0908 7.49854 11.4938 7.49854 11.9908C7.49854 12.4879 7.90148 12.8908 8.39853 12.8908H15.601C16.098 12.8908 16.501 12.4879 16.501 11.9908C16.501 11.4938 16.098 11.0908 15.601 11.0908H8.39853Z"
          fill="#E8E9EA"
        />

        <path
          d="M8.49 20.2913C9.585 20.7638 10.755 21 12 21C13.245 21 14.415 20.7638 15.51 20.2913C16.605 19.8188 17.5575 19.1775 18.3675 18.3675C19.1775 17.5575 19.8188 16.605 20.2913 15.51C20.7638 14.415 21 13.245 21 12C21 10.755 20.7638 9.585 20.2913 8.49C19.8188 7.395 19.1775 6.4425 18.3675 5.6325C17.5575 4.8225 16.605 4.18125 15.51 3.70875C14.415 3.23625 13.245 3 12 3C10.755 3 9.585 3.23625 8.49 3.70875C7.395 4.18125 6.4425 4.8225 5.6325 5.6325C4.8225 6.4425 4.18125 7.395 3.70875 8.49C3.23625 9.585 3 10.755 3 12C3 13.245 3.23625 14.415 3.70875 15.51C4.18125 16.605 4.8225 17.5575 5.6325 18.3675C6.4425 19.1775 7.395 19.8188 8.49 20.2913ZM17.1075 17.1075C15.7125 18.5025 14.01 19.2 12 19.2C9.99 19.2 8.2875 18.5025 6.8925 17.1075C5.4975 15.7125 4.8 14.01 4.8 12C4.8 9.99 5.4975 8.2875 6.8925 6.8925C8.2875 5.4975 9.99 4.8 12 4.8C14.01 4.8 15.7125 5.4975 17.1075 6.8925C18.5025 8.2875 19.2 9.99 19.2 12C19.2 14.01 18.5025 15.7125 17.1075 17.1075Z"
          fill={props.fill ?? "currentColor"}
        />
      </svg>
    </SvgIcon>
  );
}
