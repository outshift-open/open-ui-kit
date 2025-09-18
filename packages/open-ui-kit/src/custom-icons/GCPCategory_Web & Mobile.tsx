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

export function GCPCategoryWebMobile(props: SvgIconProps) {
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
          d="M6.104 18.94h9.148a1.783 1.783 0 0 1-.252-.472 2.18 2.18 0 0 1-.123-.541c0-.099-.002-.2-.007-.302v-.31h-8.6c-.284 0-.5-.07-.648-.21-.145-.141-.217-.357-.217-.648V8.772c0-.29.072-.506.217-.647.148-.14.364-.21.648-.21h11.452c.284 0 .5.07.649.21.153.136.23.35.23.64v.148h1.657v-.33c0-.741-.202-1.308-.605-1.702-.404-.394-.992-.59-1.765-.59H6.104c-.768 0-1.356.196-1.765.59-.403.389-.605.956-.605 1.701v8.058c0 .745.202 1.315.605 1.709.409.393.997.59 1.765.59Zm3.249-2.18h5.495v-.711H9.353a.367.367 0 0 0-.267.106.338.338 0 0 0-.1.253c0 .108.033.195.1.26.072.061.161.092.267.092Zm7.721 2.18h3.328c.413 0 .737-.116.972-.345.24-.23.36-.544.36-.942v-6.61c0-.398-.12-.712-.36-.942-.235-.23-.56-.344-.972-.344h-3.328c-.423 0-.756.114-1.001.344-.245.225-.367.537-.367.935v6.617c0 .398.122.712.367.942.245.23.578.344 1.001.344Zm.151-1.168c-.125 0-.22-.033-.288-.098-.062-.061-.093-.153-.093-.274v-6.11c0-.122.03-.214.093-.275.067-.066.163-.098.288-.098h.57c.028 0 .043.014.043.042v.07c0 .117.036.213.108.289a.396.396 0 0 0 .288.112h.972a.387.387 0 0 0 .396-.4v-.071c0-.028.015-.042.043-.042h.577c.12 0 .211.033.273.098.063.066.094.16.094.281V17.4a.382.382 0 0 1-.093.274c-.063.065-.154.098-.274.098h-2.997Zm.577-.372h1.836c.168 0 .252-.082.252-.247a.213.213 0 0 0-.072-.168.247.247 0 0 0-.18-.07h-1.836c-.168 0-.253.079-.253.238 0 .165.085.247.253.247Z"
        />
      </svg>
    </SvgIcon>
  );
}
