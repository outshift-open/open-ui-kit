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

export function KubernetesServicesK8Service(props: SvgIconProps) {
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
          d="M8.786 15.578v3.389H3.959v-3.389h4.827Zm6.586 0v3.389h-4.826v-3.389h4.826Zm6.587 0v3.389h-4.827v-3.389h4.827ZM16.783 5.533v3.389h-3.385v2.887l6.144.002a.44.44 0 0 1 .427.338l.012.101v3.324h-.878v-2.886h-5.692v2.888h-.877l-.002-2.888H6.814v2.886h-.877V12.25a.44.44 0 0 1 .338-.428l.1-.011 6.131-.002V8.924h.013v-.002H9.136V5.533h7.648Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
