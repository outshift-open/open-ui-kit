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

export function OracleServicesNetworkSecurityGroup(props: SvgIconProps) {
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
          stroke="#E8E9EA"
          strokeWidth=".05"
          d="m12.248 21.875.01.023h.001l.004-.003.014-.006.056-.027a24.275 24.275 0 0 0 .971-.498c.629-.34 1.466-.826 2.303-1.411.837-.586 1.675-1.271 2.305-2.01.628-.739 1.051-1.533 1.051-2.336V6.195h-.025c-2.417 0-4.086-.417-5.15-.917-.531-.25-.911-.52-1.158-.77-.248-.25-.357-.474-.357-.633h-.05c0 .179-.12.413-.38.666-.258.253-.652.52-1.193.765-1.082.489-2.75.885-5.088.885h-.025v9.393c0 .803.422 1.6 1.05 2.34.629.74 1.467 1.43 2.303 2.017a24.227 24.227 0 0 0 3.272 1.92l.056.028.014.006.004.002.011-.022Zm0 0 .01.023-.01.005-.011-.005.01-.023Zm1.225-15.95c1.508.645 3.13.979 4.77.981v5.481H12.61V5.42c.271.194.56.363.863.504Zm-2.51.04a5.7 5.7 0 0 0 .945-.528v6.95H6.256V6.906a12.44 12.44 0 0 0 4.707-.941ZM9.287 19.334c-.98-.69-1.739-1.367-2.252-2.003-.513-.637-.779-1.23-.779-1.747v-2.482h5.634v7.806c-.9-.47-1.769-.996-2.603-1.574Zm8.957-3.75c0 .518-.267 1.11-.782 1.747-.514.636-1.274 1.314-2.254 2.003a24.11 24.11 0 0 1-2.598 1.574v-7.806h5.634v2.482Z"
        />
      </svg>
    </SvgIcon>
  );
}
