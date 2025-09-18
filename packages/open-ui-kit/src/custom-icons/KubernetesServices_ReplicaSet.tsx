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

export function KubernetesServicesReplicaSet(props: SvgIconProps) {
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
          d="M9.837 4.726c0-.263.187-.476.417-.476h1.703v.952h-1.286v2.06h-.834V4.726Zm3.858-.476H17.1v.952h-3.406V4.25Zm5.144 0h1.703c.23 0 .417.213.417.476v2.536h-.834v-2.06h-1.286V4.25Zm2.12 6.181v2.537c0 .262-.186.475-.417.475H18.84v-.951h1.286v-2.06h.834ZM16.113 20.25H4.96v-1.112h11.154v1.112ZM8.816 17.628H7.422v-1.111h1.394v1.111Zm5.577 0h-2.788v-1.111h2.788v1.111Zm4.183 0h-1.394v-1.111h1.394v1.111ZM7.41 7.263c0-.262.187-.475.417-.475H9.53v.951H8.244V9.8H7.41V7.264Zm3.858-.475h3.406v.951h-3.406v-.951Zm5.144 0h1.703c.23 0 .418.213.418.475V9.8h-.835V7.74h-1.286v-.952Zm-8.168 6.181v2.06H9.53v.952H7.827c-.23 0-.417-.213-.417-.476V12.97h.834Zm10.288 0v2.536c0 .263-.186.476-.417.476h-1.703v-.952h1.286v-2.06h.834Zm-7.264 2.06h3.406v.952h-3.406v-.952Z"
          clipRule="evenodd"
        />
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M5.401 9.801H15.69v8.242H5.401V9.801Z"
          clipRule="evenodd"
        />
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M4.984 9.801c0-.262.187-.475.418-.475H15.69c.23 0 .417.213.417.475v8.242c0 .263-.187.476-.417.476H5.402c-.23 0-.418-.213-.418-.476V9.801Zm.835.476v7.29h9.453v-7.29H5.82Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
