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

export function AWSServicesEventSourceMapping(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          d="M21.451 17.41H4.217a.383.383 0 0 1-.383-.383V6.973a.383.383 0 0 1 .383-.383h17.234a.383.383 0 0 1 .383.383v10.054a.383.383 0 0 1-.383.383ZM4.6 16.644h16.468V7.356H4.6v9.288Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M11.065 8.05h-.766v7.897h.766V8.05ZM13.217 8.05h-.766v7.897h.766V8.05ZM15.373 8.05h-.766v7.897h.766V8.05ZM7.089 13.867a.383.383 0 0 1-.323-.176.382.382 0 0 1-.06-.207v-2.972a.383.383 0 0 1 .628-.295l1.785 1.486a.382.382 0 0 1 0 .59l-1.785 1.486a.383.383 0 0 1-.245.088Zm.383-2.535v1.332l.8-.666-.8-.666ZM18.579 13.867a.383.383 0 0 1-.245-.088l-1.785-1.486a.383.383 0 0 1 0-.59l1.785-1.486a.382.382 0 0 1 .628.295v2.972a.382.382 0 0 1-.383.383Zm-1.184-1.869.8.667v-1.333l-.8.666Z"
        />
      </svg>
    </SvgIcon>
  );
}
