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

export function AzureServicesDefender(props: SvgIconProps) {
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
          d="M13.015 21.117c1.274-.79 7.124-4.688 7.124-9.529v-5.82a.463.463 0 0 0-.452-.462c-2.418-.063-3.255-.658-4.02-1.201-.676-.48-1.295-.92-2.894-.92-1.598 0-2.218.44-2.893.92-.765.543-1.603 1.138-4.02 1.201a.463.463 0 0 0-.453.463v5.82c0 4.84 5.85 8.738 7.124 9.528a.46.46 0 0 0 .484 0ZM11.801 6.872a1.08 1.08 0 0 0-.555-.184 1.073 1.073 0 0 0-.55 2.037 1.08 1.08 0 0 0 .85.065l1.118 1.59a1.302 1.302 0 0 0-.316.645l-3.298.272a.865.865 0 1 0 .091.555l3.228-.268a1.3 1.3 0 0 0 .324.577l-.795 1.32a.874.874 0 0 0-.096-.005h-.009a.866.866 0 0 0-.871.859v.013a.871.871 0 1 0 1.48-.628l.752-1.252a1.3 1.3 0 0 0 .877.025l1.045 1.828a.994.994 0 0 0-.302.696v.024a1.01 1.01 0 1 0 1.015-1h-.006a.993.993 0 0 0-.217.02l-1.056-1.849.037-.035a1.3 1.3 0 0 0 .123-1.697 1.28 1.28 0 0 0-1.56-.428l-1.104-1.57a1.081 1.081 0 0 0-.205-1.61Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
