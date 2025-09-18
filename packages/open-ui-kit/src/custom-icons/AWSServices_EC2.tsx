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

export function AWSServicesEC2(props: SvgIconProps) {
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
          fillRule="evenodd"
          d="M15.834 9h-5v5h5V9Zm1 0h1v1h-1v1h1v1h-1v1h1v1h-1v.308a.694.694 0 0 1-.692.692h-.308v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-.308a.694.694 0 0 1-.692-.692V14h-1v-1h1v-1h-1v-1h1v-1h-1V9h1v-.308c0-.381.311-.692.692-.692h.308V7h1v1h1V7h1v1h1V7h1v1h.308c.381 0 .692.311.692.692V9Zm-4 10h-7v-6h2v-1h-2.2c-.442 0-.8.342-.8.762v6.457c0 .431.351.781.781.781h7.419c.442 0 .8-.342.8-.762V17h-1v2Zm8-14.219v7.438a.782.782 0 0 1-.781.781h-1.219v-1h1V5h-7v1h-1V4.781c0-.431.351-.781.781-.781h7.438c.43 0 .781.35.781.781Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
