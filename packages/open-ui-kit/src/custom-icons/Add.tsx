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

export const Add = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          d="M21 17.238h-2.842v-2.857h-1.895v2.857h-2.842v1.905h2.842V22h1.895v-2.857H21M4.895 2A1.9 1.9 0 0 0 3 3.905v15.238c0 1.057.843 1.905 1.895 1.905h7.399a5.755 5.755 0 0 1-.692-1.905H4.895V3.905h6.631v4.762h4.737v3.885c.313-.047.635-.076.947-.076.323 0 .635.029.948.076V7.714L12.474 2m-5.685 9.524v1.905h7.58v-1.905m-7.58 3.81v1.904h4.737v-1.905H6.79Z"
        />
      </svg>
    </SvgIcon>
  );
};
