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

export function AzureServicesAzureDataFactory(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="none"
      >
        <path
          fill="#EBEBF0"
          fillRule="evenodd"
          d="M8.773 7.047c-2.211 0-4-.65-4-1.487v14.052a.527.527 0 0 0 .537.536h14.927a.527.527 0 0 0 .536-.536v-9.75a.133.133 0 0 0-.08-.124.132.132 0 0 0-.146.029l-3.774 3.774v-3.68a.132.132 0 0 0-.226-.094l-3.774 3.774V5.56c0 .838-1.788 1.487-4 1.487Zm2.137 8.819H9.3a.264.264 0 0 0-.263.263v1.61c0 .145.118.263.264.263h1.609a.264.264 0 0 0 .264-.263v-1.61a.264.264 0 0 0-.264-.263Zm2.099 0h1.61c.145 0 .263.118.263.263v1.61a.264.264 0 0 1-.264.263h-1.61a.264.264 0 0 1-.263-.263v-1.61c0-.145.118-.263.264-.263Zm3.708 0h1.61c.145 0 .263.118.263.263v1.61a.263.263 0 0 1-.264.263h-1.61a.264.264 0 0 1-.263-.263v-1.61c0-.145.118-.263.264-.263Z"
          clipRule="evenodd"
        />
        <path
          fill="#E8E9EA"
          fillRule="evenodd"
          d="M12.773 5.635c0 .8-1.788 1.45-4 1.45-2.211 0-4-.612-4-1.45 0-.837 1.789-1.411 4-1.411 2.212 0 4 .649 4 1.411Zm-.94-.084c0 .517-1.375.94-3.069.94s-3.068-.404-3.068-.94c0-.537 1.43-.913 3.077-.913 1.648 0 3.06.404 3.06.913Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
