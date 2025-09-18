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

export function AzureServicesAzureAppConfiguration(props: SvgIconProps) {
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
          d="M21.131 11.328a3.746 3.746 0 0 0-3.26-3.608 4.73 4.73 0 0 0-4.879-4.531 4.89 4.89 0 0 0-4.66 3.17 4.452 4.452 0 0 0-3.916 4.303 4.552 4.552 0 0 0 4.71 4.372c.136.01.272.01.408 0h7.622c.066.01.133.01.2 0a3.796 3.796 0 0 0 3.775-3.706Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M11.919 18.284v.596l-.666.239-.11.417.299.587v.08l-.418.417-.695-.318-.398.169-.209.626v.089h-.586l-.258-.715-.408-.17-.596.299h-.08l-.417-.418.318-.685-.169-.408-.626-.209h-.09v-.616l.686-.298.17-.407-.299-.587v-.08l.437-.377.666.378.447-.199.2-.606h.585l.259.666.407.109.597-.298h.08l.228.229.188.188v.07l-.308.616.16.408.606.208Zm-2.504 1.14a.842.842 0 1 0 0-1.685.842.842 0 0 0 0 1.685Z"
          clipRule="evenodd"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M21.003 15.541V14.38l-.06-.05-1.212-.418-.308-.794.616-1.193.06-.13-.368-.397-.438-.467-.159.08-1.162.596-.795-.229-.507-1.292h-1.153l-.06.06-.397 1.183-.815.308L12.903 11l-.815.815.08.159.606 1.152-.328.796-1.401.506v1.163l.169.05 1.232.407.328.845-.636 1.341.815.825.159-.07 1.163-.596.795.328.507 1.402h1.172v-.249l.408-1.232.785-.328 1.361.626.815-.815-.08-.159-.566-1.073.229-.815 1.302-.537Zm-4.88 1.074a1.63 1.63 0 1 1 1.62-1.64 1.64 1.64 0 0 1-1.62 1.64Z"
        />
      </svg>
    </SvgIcon>
  );
}
