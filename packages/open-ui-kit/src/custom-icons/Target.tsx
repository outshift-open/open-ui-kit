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

export function Target(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        fill="none"
      >
        <path
          fill={props.fill ?? "#fff"}
          d="M14 12.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3.612 10A8.77 8.77 0 0 1 9.5 4.112v1.58A7.271 7.271 0 0 0 5.193 10h-1.58ZM3.612 15A8.769 8.769 0 0 0 9.5 20.888v-1.58A7.271 7.271 0 0 1 5.192 15h-1.58ZM18.808 15a7.271 7.271 0 0 1-4.308 4.308v1.58A8.769 8.769 0 0 0 20.388 15h-1.58ZM20.388 10A8.77 8.77 0 0 0 14.5 4.112v1.58A7.272 7.272 0 0 1 18.807 10h1.58ZM9.5 7.32A5.774 5.774 0 0 0 6.82 10h1.743c.261-.36.578-.676.937-.937V7.32ZM9.5 15.937A4.276 4.276 0 0 1 8.563 15H6.82A5.774 5.774 0 0 0 9.5 17.68v-1.743ZM14.5 17.68v-1.743c.36-.261.676-.578.937-.937h1.743a5.774 5.774 0 0 1-2.68 2.68ZM14.5 9.063V7.32A5.774 5.774 0 0 1 17.18 10h-1.743a4.274 4.274 0 0 0-.937-.937ZM11.25 15.5v7h1.5v-7h-1.5ZM11.25 9.5h1.5v-7h-1.5v7ZM9 11.75H2v1.5h7v-1.5ZM15 13.25h7v-1.5h-7v1.5Z"
        />
      </svg>
    </SvgIcon>
  );
}
