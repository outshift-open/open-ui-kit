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

export function AWSServicesBackup(props: SvgIconProps) {
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
          d="M12.798 8.966a3.67 3.67 0 0 1 3.666 3.668 3.67 3.67 0 0 1-3.666 3.666 3.682 3.682 0 0 1-3.438-2.394l1.066-.396a2.541 2.541 0 0 0 2.372 1.652 2.53 2.53 0 0 0 2.528-2.529 2.532 2.532 0 0 0-2.528-2.529c-.673 0-1.287.284-1.75.736h1.75v1.138H9.953a.57.57 0 0 1-.57-.57v-2.82h1.139V9.77a3.657 3.657 0 0 1 2.276-.804Zm4.713 9.896H8.157l-2.111-8.39 6.752-5.186 6.824 5.224-2.111 8.352Zm3.1-9.029-7.467-5.716a.57.57 0 0 0-.693 0l-7.395 5.68a.572.572 0 0 0-.205.59l2.31 9.183a.57.57 0 0 0 .553.43h10.24c.26 0 .488-.176.551-.43l2.311-9.145a.568.568 0 0 0-.206-.592Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
