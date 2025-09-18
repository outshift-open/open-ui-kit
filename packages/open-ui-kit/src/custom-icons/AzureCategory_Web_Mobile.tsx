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

export function AzureCategoryWebMobile(props: SvgIconProps) {
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
          d="M6.329 18.697h9.147a1.785 1.785 0 0 1-.252-.472 2.18 2.18 0 0 1-.122-.541c0-.099-.003-.2-.007-.302v-.31h-8.6c-.284 0-.5-.07-.649-.21-.144-.141-.216-.357-.216-.648V8.53c0-.29.072-.506.216-.647.149-.14.365-.21.648-.21h11.453c.283 0 .5.07.648.21.154.136.23.35.23.64v.148h1.657v-.33c0-.741-.201-1.308-.605-1.702-.403-.394-.991-.59-1.764-.59H6.329c-.769 0-1.357.196-1.765.59-.403.389-.605.956-.605 1.701v8.058c0 .746.202 1.315.605 1.709.408.394.996.59 1.765.59Zm3.248-2.18h5.496v-.71H9.577a.367.367 0 0 0-.266.105.338.338 0 0 0-.101.253c0 .108.033.195.1.26.073.061.162.092.267.092Zm7.722 2.18h3.328c.412 0 .736-.115.972-.345.24-.23.36-.544.36-.942V10.8c0-.398-.12-.712-.36-.942-.236-.23-.56-.344-.973-.344H17.3c-.423 0-.757.114-1.002.344-.244.225-.367.537-.367.935v6.617c0 .398.123.712.367.942.245.23.58.345 1.002.345Zm.151-1.168c-.125 0-.22-.032-.288-.098-.063-.061-.094-.152-.094-.274v-6.11c0-.122.031-.214.094-.275.067-.065.163-.098.288-.098h.569c.029 0 .043.014.043.042v.07c0 .117.036.214.108.289a.396.396 0 0 0 .288.112h.973a.387.387 0 0 0 .396-.4v-.071c0-.028.014-.042.043-.042h.576c.12 0 .212.033.274.098.063.066.094.16.094.281v6.104a.382.382 0 0 1-.094.274c-.062.066-.154.098-.274.098H17.45Zm.576-.372h1.837c.168 0 .252-.082.252-.247a.213.213 0 0 0-.072-.168.247.247 0 0 0-.18-.07h-1.837c-.168 0-.252.08-.252.238 0 .165.084.247.252.247Z"
        />
      </svg>
    </SvgIcon>
  );
}
