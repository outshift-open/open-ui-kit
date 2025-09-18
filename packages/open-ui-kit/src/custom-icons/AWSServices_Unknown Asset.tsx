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

export function AWSServicesUnknownAsset(props: SvgIconProps) {
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
          d="M12.623 13.42c.184 0 .327-.048.429-.145a.487.487 0 0 0 .167-.356V12.839a.726.726 0 0 1 .189-.48c.12-.135.295-.278.523-.428.339-.218.61-.445.813-.683.208-.242.312-.564.312-.966 0-.382-.101-.704-.305-.966a1.873 1.873 0 0 0-.813-.603 2.821 2.821 0 0 0-1.104-.21c-.586 0-1.068.118-1.445.356-.378.232-.618.508-.72.828a1.145 1.145 0 0 0-.058.356c0 .16.051.283.153.37.106.087.225.13.356.13a.576.576 0 0 0 .298-.072.865.865 0 0 0 .232-.21l.116-.146c.111-.198.252-.348.421-.45.175-.102.37-.153.589-.153.295 0 .532.078.712.233.179.15.268.35.268.603a.736.736 0 0 1-.225.552c-.145.14-.366.314-.66.523-.243.17-.446.355-.61.559-.16.203-.24.467-.24.792V12.853c0 .378.2.567.602.567Zm-.014 2.077c.213 0 .394-.07.544-.21a.677.677 0 0 0 .233-.523.677.677 0 0 0-.233-.523.769.769 0 0 0-.544-.21.769.769 0 0 0-.545.21.687.687 0 0 0-.225.523c0 .203.075.377.225.523.155.14.336.21.545.21Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M12.834 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0 1a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
