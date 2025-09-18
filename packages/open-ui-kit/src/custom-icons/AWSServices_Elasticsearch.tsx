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

export function AWSServicesElasticsearch(props: SvgIconProps) {
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
          d="M13.827 7.973c.186-.062.383-.095.584-.095V8.88a.757.757 0 0 0-.478.16.508.508 0 0 1-.78-.189c-.372-.852-.982-1.271-1.866-1.281-.67.019-1.044.355-1.236.634-.262.381-.292.804-.21 1.034a.503.503 0 0 1-.446.672c-.542.03-.934.177-1.17.44-.26.29-.252.64-.252.643-.008.296-.033.956 1.34 1.026.019 0 .04.004.061.007H13.9v1.003H9.362a.472.472 0 0 1-.083-.007c-2.152-.118-2.333-1.45-2.312-2.019a1.979 1.979 0 0 1 .506-1.321c.322-.358.765-.595 1.321-.707 0-.451.148-.933.426-1.337.458-.667 1.19-1.047 2.06-1.072 1.121.014 1.988.497 2.547 1.406Zm5.76 10.784a.848.848 0 0 1-1.16.004l-3.89-3.96a6.05 6.05 0 0 0 1.143-1.14l3.908 3.937a.82.82 0 0 1 0 1.159ZM5.841 10.02c0-2.766 2.26-5.017 5.037-5.017 2.778 0 5.037 2.25 5.037 5.017 0 2.766-2.26 5.017-5.037 5.017s-5.037-2.25-5.037-5.017Zm14.462 6.872-4.066-4.097c.436-.83.686-1.774.686-2.775 0-3.32-2.711-6.02-6.045-6.02-3.332 0-6.044 2.7-6.044 6.02 0 3.32 2.712 6.02 6.044 6.02 1.008 0 1.957-.25 2.793-.686l4.04 4.112c.345.344.804.534 1.294.534a1.822 1.822 0 0 0 1.299-3.108Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
