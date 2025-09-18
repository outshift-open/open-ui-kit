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

export function AWSServicesDataPipeline(props: SvgIconProps) {
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
          d="m20.694 18.009-1.073-.041v-6.932l1.09-.07-.017 7.043Zm-14.594 0-1.142-.041.018-7.008 1.114.006.054 7.04s-.014.003-.044.003Zm1.113-.995h11.284v-5H7.213v5Zm4.561-5.991h2.174V9.98h-2.174v1.042ZM9.464 8.99h6.721v-.98h-6.72v.98Zm2.31-1.972h2.174V5.99h-2.174v1.027Zm8.936 3.03h-1.124c-.641 0-1.089.377-1.089.918v.057H15.07V9.98h1.677c.312 0 .562-.222.562-.496v-1.97c0-.275-.25-.496-.562-.496H15.07V5.496c0-.274-.251-.496-.561-.496H11.21c-.31 0-.562.222-.562.496v1.523H8.903c-.312 0-.562.22-.562.495v1.971c0 .274.25.496.562.496h1.746v1.042H7.213v-.057c0-.569-.478-.998-1.113-.998H4.976c-.64 0-1.142.44-1.142.998v7.002c0 .637.438 1.032 1.142 1.032H6.1c.663 0 1.088-.39 1.107-.994h11.298c.02.568.474.994 1.081.994h1.124c.62 0 1.124-.462 1.124-1.032v-7.002c0-.532-.473-.919-1.124-.919Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
