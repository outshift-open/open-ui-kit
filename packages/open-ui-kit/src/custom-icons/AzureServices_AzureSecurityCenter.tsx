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

export function AzureServicesAzureSecurityCenter(props: SvgIconProps) {
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
          d="M20.272 11.59c0 4.838-5.956 8.733-7.252 9.527a.476.476 0 0 1-.493 0c-1.296-.791-7.252-4.686-7.252-9.528V5.767a.466.466 0 0 1 .46-.464c2.461-.064 3.314-.658 4.093-1.2.688-.479 1.318-.917 2.946-.917 1.627 0 2.258.438 2.945.917.78.542 1.632 1.136 4.093 1.2a.466.466 0 0 1 .46.46v5.826Zm-4.91-.824h.432a.347.347 0 0 1 .345.338v3.898a.348.348 0 0 1-.345.339h-6.04a.348.348 0 0 1-.346-.339v-3.898a.347.347 0 0 1 .345-.338h.44V9.264a2.759 2.759 0 0 1 .74-1.914 2.495 2.495 0 0 1 3.688 0c.48.522.745 1.206.741 1.915v1.5Zm-3.965 0h2.757l.005-1.525a1.53 1.53 0 0 0-.273-.837 1.474 1.474 0 0 0-.162-.212 1.27 1.27 0 0 0-1.893 0c-.274.28-.43.656-.434 1.048v1.526Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
