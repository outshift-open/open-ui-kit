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

export function WarningQuestion(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="m12.97 3.257 9.901 17.65c.285.508.082 1.139-.455 1.409a1.15 1.15 0 0 1-.515.121H2.099c-.607 0-1.099-.466-1.099-1.041 0-.17.044-.338.129-.489l9.9-17.65c.285-.508.95-.7 1.487-.43.193.097.352.247.455.43Zm-2.192 13.077c0-.614.074-1.098.22-1.452.145-.355.381-.663.709-.923a4.57 4.57 0 0 0 .746-.715c.17-.216.256-.454.256-.715 0-.633-.288-.95-.862-.95a.82.82 0 0 0-.644.276c-.164.185-.25.434-.258.75H8.702c.01-.84.287-1.495.836-1.962.548-.468 1.317-.703 2.308-.703.987 0 1.75.216 2.293.65.541.432.812 1.046.812 1.844 0 .349-.073.666-.219.952-.146.284-.381.577-.704.875l-.762.674c-.217.198-.368.4-.451.608-.084.208-.13.472-.14.79h-1.897Zm-.272 1.914c0-.31.118-.566.355-.766v.001c.236-.2.533-.3.886-.3.354 0 .65.1.885.3a.954.954 0 0 1 .356.765c0 .31-.119.566-.356.766-.236.199-.531.3-.885.3s-.65-.101-.886-.3a.957.957 0 0 1-.355-.766Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
