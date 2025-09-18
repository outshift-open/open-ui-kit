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

export function AWSServicesDynamoDB(props: SvgIconProps) {
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
          d="m14.721 13.063 1.035-3.446a.504.504 0 0 0-.484-.65h-.7l1.013-2.021h2.529l-.792 2.367a.504.504 0 0 0 .071.455c.094.132.247.21.41.21h.627l-3.709 3.085ZM20.304 9.3a.506.506 0 0 0-.476-.333h-1.323l.791-2.367a.506.506 0 0 0-.48-.665h-3.544a.506.506 0 0 0-.453.279l-1.518 3.032a.505.505 0 0 0 .452.732h.839l-1.324 4.404a.505.505 0 0 0 .81.533l6.074-5.054a.506.506 0 0 0 .152-.561Zm-5.135 8.328c0 .462-1.557 1.361-4.412 1.361-2.853 0-4.41-.899-4.41-1.36v-1.067c1.036.617 2.73.933 4.41.933 1.681 0 3.375-.316 4.412-.933v1.066Zm0-2.504c0 .461-1.557 1.36-4.412 1.36-2.853 0-4.41-.899-4.41-1.36 0-.097.073-.21.199-.329 1 .522 2.535.829 4.212.829l1.57-.032V14.58l-1.57.032c-1.653 0-3.177-.324-3.978-.845-.27-.178-.433-.37-.434-.516v-1.066c1.037.617 2.73.934 4.412.934.266 0 1.41-.08 1.768-.106l.021-.509-.093-.5c-.344.024-1.441.104-1.697.104-2.853 0-4.41-.9-4.41-1.361 0-.1.078-.22.212-.342.794.35 2.347.745 6.093.79l.012-1.01c-3.05-.037-4.986-.304-5.884-.795-.27-.178-.433-.37-.434-.516V7.81c1.037.617 2.73.933 4.412.933.078 0 2.057-.036 2.135-.04l-.044-1.01c-.107.005-1.996.04-2.091.04-2.854 0-4.412-.9-4.412-1.362 0-.461 1.558-1.36 4.412-1.36 1.32 0 2.576.207 3.443.57l.392-.933C13.59 4.23 12.23 4 10.758 4c-2.695 0-5.423.814-5.424 2.37V8.88s.092.58.4.926c-.312.348-.4.687-.4.94v2.516c.001.247.092.58.398.925-.31.346-.398.684-.398.936v2.51C5.339 19.187 8.066 20 10.758 20c2.695 0 5.423-.814 5.423-2.37v-2.506H15.17Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
