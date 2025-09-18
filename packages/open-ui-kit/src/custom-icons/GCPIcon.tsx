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

export function GCPIcon(props: SvgIconProps) {
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
          d="M14.9708 8.36615L16.5355 6.80148L16.6398 6.14266C13.7885 3.55002 9.2561 3.844 6.68582 6.75606C5.97187 7.56487 5.4422 8.57322 5.15976 9.61448L5.72015 9.53552L8.84941 9.01949L9.091 8.77241C10.483 7.24368 12.8366 7.03802 14.4438 8.33873L14.9708 8.36615Z"
          fill={props.fill ?? "#EA4335"}
        />
        <path
          d="M18.7644 9.56835C18.4048 8.24394 17.6664 7.05334 16.6398 6.14258L14.4438 8.33858C15.3711 9.09627 15.8993 10.2377 15.8767 11.4349V11.8247C16.956 11.8247 17.8311 12.6998 17.8311 13.7792C17.8311 14.8586 16.956 15.7117 15.8767 15.7117H11.9623L11.578 16.1289V18.4731L11.9623 18.841H15.8767C18.6842 18.8628 20.978 16.6265 20.9999 13.8189C21.0131 12.1172 20.174 10.5218 18.7644 9.56835Z"
          fill={props.fill ?? "#4285F4"}
        />
        <path
          d="M8.0534 18.8411H11.9623V15.7118H8.0534C7.77489 15.7117 7.50517 15.6519 7.25191 15.5361L6.69735 15.7063L5.12172 17.271L4.98447 17.8035C5.86808 18.4707 6.94619 18.8459 8.0534 18.8411Z"
          fill={props.fill ?? "#34A853"}
        />
        <path
          d="M8.05341 8.68997C5.24576 8.70671 2.98339 10.9964 3.00012 13.8039C3.00947 15.3718 3.74171 16.8476 4.98448 17.8034L7.25192 15.536C6.26818 15.0916 5.83105 13.9339 6.27549 12.9502C6.71987 11.9665 7.87763 11.5294 8.86123 11.9738C9.29471 12.1696 9.64184 12.5168 9.83767 12.9502L12.1051 10.6828C11.1403 9.42165 9.64128 8.68428 8.05341 8.68997Z"
          fill={props.fill ?? "#FBBC05"}
        />
      </svg>
    </SvgIcon>
  );
}
