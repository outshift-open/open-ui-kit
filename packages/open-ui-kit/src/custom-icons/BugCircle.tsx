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

export function BugCircle(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Zm2.693-17.241.911-.912L14.757 5l-1.04 1.04a3.777 3.777 0 0 0-1.73-.417c-.624 0-1.213.15-1.732.417L9.215 5l-.847.847.912.912A3.782 3.782 0 0 0 8.229 8.89a2.199 2.199 0 0 0-1.612 1.817l-1.22-.812V8.618H4.2v1.918l2.396 1.597v.678H4v1.198h2.628c.023.208.058.412.104.613l-1.734 1.734V19h1.198v-2.148l.99-.989a5.39 5.39 0 0 0 9.601 0l.99.99V19h1.197v-2.644l-1.734-1.734c.046-.2.08-.405.104-.613h2.628V12.81h-2.595v-.678l2.396-1.597V8.618h-1.198v1.277l-1.22.812a2.199 2.199 0 0 0-1.612-1.817 3.782 3.782 0 0 0-1.05-2.131Zm-.18 2.059a2.596 2.596 0 0 0-5.053 0h5.052Zm-6.72 2.196c0-.551.447-.998.999-.998h2.595v7.544a4.194 4.194 0 0 1-3.594-4.15v-2.396Zm4.792 6.546v-7.544h2.596c.55 0 .998.447.998.998v2.396a4.194 4.194 0 0 1-3.594 4.15Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
