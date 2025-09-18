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

export function AWSServicesCertificateManager(props: SvgIconProps) {
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
          d="m10.89 10.81.846.835a.497.497 0 0 1 .136.467l-.165.722.872-.518a.504.504 0 0 1 .525.008l.727.465-.15-.682a.504.504 0 0 1 .15-.477l.907-.829-1.146-.186a.505.505 0 0 1-.375-.286l-.386-.847-.396.85a.5.5 0 0 1-.371.284l-1.175.194Zm-.418 2.94.362-1.589-1.346-1.328a.498.498 0 0 1 .268-.85l1.884-.312.741-1.595a.498.498 0 0 1 .455-.29c.197 0 .373.116.454.293l.726 1.59 1.9.31a.5.5 0 0 1 .258.863l-1.453 1.331.348 1.577a.5.5 0 0 1-.758.53l-1.485-.946-1.612.957a.504.504 0 0 1-.55-.026.5.5 0 0 1-.192-.516Zm9.345-7.677V5H5.834v1.072h13.982Zm1.017 13.425a.505.505 0 0 1-.5.5h-2.496v-1h1.994l-.014-11.925H5.835V19h9V20h-9.5a.5.5 0 0 1-.501-.5v-15a.5.5 0 0 1 .5-.5h14.982a.5.5 0 0 1 .5.5l.018 14.998ZM7.831 18.016h2.001v-1H7.831v1Zm4.003.013h4.002v-1.001h-4.002v1ZM7.83 16.02h2.001v-1H7.831v1Zm4.003 0h6.004v-1h-6.004v1Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
