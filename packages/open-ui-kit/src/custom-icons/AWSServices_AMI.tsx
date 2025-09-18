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

export function AWSServicesAMI(props: SvgIconProps) {
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
          d="M15.108 17.043h3.087V13h-3.087v4.042Zm-7.635 0h3.087V13H7.473v4.042Zm3.818 0h3.087V13h-3.087v4.042Zm7.27-4.772H7.107a.365.365 0 0 0-.365.365v4.772c0 .201.163.365.365.365H18.56a.365.365 0 0 0 .365-.365v-4.772a.365.365 0 0 0-.365-.365Zm-3.453-1.909h3.087V7.276h-3.087v3.088Zm-7.635 0h3.087V7.276H7.473v3.088Zm3.818 0h3.087V7.276h-3.087v3.088Zm7.27-3.817H7.107a.365.365 0 0 0-.365.365v3.817c0 .202.163.366.365.366H18.56a.365.365 0 0 0 .365-.366V6.91a.365.365 0 0 0-.365-.365Zm1.543 11.101c0 .895-.729 1.624-1.624 1.624H7.188a1.626 1.626 0 0 1-1.624-1.624V6.354c0-.896.728-1.624 1.624-1.624H18.48c.895 0 1.624.728 1.624 1.624v11.292ZM18.48 4H7.188a2.357 2.357 0 0 0-2.354 2.354v11.292A2.357 2.357 0 0 0 7.188 20H18.48a2.357 2.357 0 0 0 2.354-2.354V6.354A2.356 2.356 0 0 0 18.48 4Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
