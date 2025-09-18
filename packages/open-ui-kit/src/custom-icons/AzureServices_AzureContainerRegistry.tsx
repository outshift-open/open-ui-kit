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

export function AzureServicesAzureContainerRegistry(props: SvgIconProps) {
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
          d="m11.22 10.697 2.57-1.56 7.199 2.71a3.636 3.636 0 0 0-1.036-1.832l-.01-.05a4.162 4.162 0 0 0-2.203-1.111 4.872 4.872 0 0 0-5.06-4.664 5.032 5.032 0 0 0-4.804 3.265A4.586 4.586 0 0 0 3.848 11.9 4.694 4.694 0 0 0 8.7 16.405h2.52v-5.708Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="m13.84 9.686-2.123 1.29v3.95l2.133-.993-.01-4.247Zm-1.399 4.178-.357.208v-2.808l.357-.188v2.788Zm.705-3.195-.367.238v2.729l.367-.199V10.67ZM13.84 9.686l.01 4.247 7.85 1.668v-2.958l-7.86-2.957Zm3.583 4.307.714.198V11.88l-.714-.248v2.362Zm-.715-2.59-.714-.258v2.47l.714.2v-2.412Zm2.144 2.977.694.188.02-2.202-.714-.239v2.253Zm-4.277-1.131.714.178v-2.51l-.714-.238v2.57Zm6.41-.397-.714-.248v2.153l.714.199v-2.104ZM21.7 18.627l-7.84 1.559-2.143-1.33V15.61l2.188-1.005 7.795 1.432v2.59Zm-9.308.218-.318-.158v-2.74l.318-.148v3.046Zm.764-3.423-.01.005v-.005h.01Zm-.01.005v3.825l-.367-.188V15.61l.367-.183Zm1.429 3.785V15.69l.714.09v3.313l-.714.12Zm2.133-.357-.714.13v-3.117l.714.11v2.877Zm.715-.109v-2.699l.714.09v2.48l-.714.13Zm2.133-.377-.704.129v-2.272l.704.109v2.034Zm1.449-.228-.734.129v-1.866l.684.09.05 1.647Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
