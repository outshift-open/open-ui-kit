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

export function AWSCategoryUndefined(props: SvgIconProps) {
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
          d="M6.834 5.5h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-12a1 1 0 0 1 1-1Zm-2 1a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2v-12Zm8.249 7.457c-.116.11-.28.166-.49.166-.459 0-.689-.216-.689-.648v-.091c0-.37.092-.672.274-.905a3.39 3.39 0 0 1 .697-.639c.338-.238.59-.437.756-.598a.84.84 0 0 0 .257-.63.853.853 0 0 0-.307-.69c-.205-.176-.476-.265-.813-.265a1.31 1.31 0 0 0-.673.174 1.355 1.355 0 0 0-.481.515l-.133.166a.992.992 0 0 1-.266.24.66.66 0 0 1-.34.084.626.626 0 0 1-.407-.15.527.527 0 0 1-.174-.423 1.268 1.268 0 0 1 .066-.407c.117-.365.39-.68.822-.946.432-.271.982-.407 1.652-.407.46 0 .88.08 1.262.24.387.156.697.386.93.69.232.299.348.667.348 1.104 0 .46-.119.827-.357 1.104a4.217 4.217 0 0 1-.93.78c-.26.172-.459.335-.597.49a.83.83 0 0 0-.216.548v.091a.556.556 0 0 1-.191.407Zm.116 2.3a.878.878 0 0 1-.622.24.897.897 0 0 1-.623-.24.802.802 0 0 1-.257-.599c0-.237.086-.437.257-.597.172-.16.38-.24.623-.24s.45.08.622.24c.177.16.266.36.266.597a.774.774 0 0 1-.266.598Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
