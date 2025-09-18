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

export function AWSCategoryNetworking(props: SvgIconProps) {
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
          d="M19.584 17.563a1.126 1.126 0 0 1-2.25 0 1.126 1.126 0 0 1 2.25 0Zm-5.625 1.687a1.126 1.126 0 0 1-2.25 0 1.126 1.126 0 0 1 2.25 0Zm-6.75-.562a1.126 1.126 0 0 1 0-2.25 1.126 1.126 0 0 1 0 2.25Zm0-9.078c.004-.269.117-1.605 1.925-1.605.31 0 .562-.252.562-.563 0-.9.243-1.597.722-2.074.737-.735 1.826-.742 1.853-.742.862 0 2.362.187 2.726 1.442a.562.562 0 0 0 .665.391c.524-.118 1.003-.017 1.28.276.215.226.276.543.177.895a.563.563 0 0 0 .54.718c1.42 0 1.925.692 1.925 1.34 0 .816-.412 1.687-1.57 1.687h-8.88c-1.025 0-1.925-.826-1.925-1.765Zm10.805 2.89c1.588 0 2.695-1.156 2.695-2.812 0-1.097-.754-2.203-2.418-2.426a1.933 1.933 0 0 0-.531-1.301c-.453-.48-1.123-.714-1.86-.67-.56-1.145-1.852-1.79-3.62-1.79-.079-.005-1.565-.008-2.646 1.058-.6.593-.948 1.382-1.04 2.352-1.97.246-2.51 1.826-2.51 2.695 0 1.57 1.396 2.894 3.05 2.894h2.342l-3.13 3.131a2.234 2.234 0 0 0-1.137-.318c-1.24 0-2.25 1.009-2.25 2.25 0 1.24 1.01 2.25 2.25 2.25s2.25-1.01 2.25-2.25c0-.417-.12-.801-.319-1.137l3.131-3.13v3.784a2.248 2.248 0 0 0-1.687 2.17c0 1.24 1.009 2.25 2.25 2.25 1.24 0 2.25-1.01 2.25-2.25 0-1.045-.72-1.92-1.688-2.17v-3.784l3.131 3.13c-.198.336-.318.72-.318 1.137 0 1.24 1.009 2.25 2.25 2.25 1.24 0 2.25-1.01 2.25-2.25 0-1.241-1.01-2.25-2.25-2.25-.417 0-.801.121-1.137.318l-3.13-3.13h3.822Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
