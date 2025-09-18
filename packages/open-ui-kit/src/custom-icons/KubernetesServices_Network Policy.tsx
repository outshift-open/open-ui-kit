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

export function KubernetesServicesNetworkPolicy(props: SvgIconProps) {
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
          d="M12.048 4.25a7.335 7.335 0 0 0-7.332 7.332 7.335 7.335 0 0 0 7.332 7.332c.907 0 1.774-.172 2.576-.474v-1.727c0-.588.48-1.576 1.068-1.576v-1.602c0-.804 1.198-2.164 2.672-2.164.36 0 .702.073 1.016.202a7.335 7.335 0 0 0-7.332-7.323Zm1.466 2.566 2.566 2.566h-1.833v2.933h-1.466V9.382h-1.833l2.566-2.566ZM9.848 10.85h1.467v2.933h1.833l-2.567 2.566-2.566-2.566h1.833v-2.933Zm8.701 1.818c-1.046 0-1.896.85-1.896 1.896V15.7a.76.76 0 0 0-.757.758v3.035c0 .417.34.757.757.757h3.792a.76.76 0 0 0 .758-.758v-3.034a.76.76 0 0 0-.758-.757v-1.138c0-1.046-.85-1.896-1.896-1.896Zm0 .758c.63 0 1.137.509 1.137 1.138V15.7h-2.274v-1.137c0-.629.508-1.138 1.137-1.138Z"
        />
      </svg>
    </SvgIcon>
  );
}
