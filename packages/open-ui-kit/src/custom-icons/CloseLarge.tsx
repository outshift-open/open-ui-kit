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

export function CloseLarge(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 13.9163L5.29278 20.6236C5.04183 20.8745 4.72243 21 4.3346 21C3.94677 21 3.62738 20.8745 3.37643 20.6236C3.12548 20.3726 3 20.0532 3 19.6654C3 19.2776 3.12548 18.9582 3.37643 18.7072L10.0837 12L3.37643 5.29278C3.12548 5.04183 3 4.72243 3 4.3346C3 3.94677 3.12548 3.62738 3.37643 3.37643C3.62738 3.12548 3.94677 3 4.3346 3C4.72243 3 5.04183 3.12548 5.29278 3.37643L12 10.0837L18.7072 3.37643C18.9582 3.12548 19.2776 3 19.6654 3C20.0532 3 20.3726 3.12548 20.6236 3.37643C20.8745 3.62738 21 3.94677 21 4.3346C21 4.72243 20.8745 5.04183 20.6236 5.29278L13.9163 12L20.6236 18.7072C20.8745 18.9582 21 19.2776 21 19.6654C21 20.0532 20.8745 20.3726 20.6236 20.6236C20.3726 20.8745 20.0532 21 19.6654 21C19.2776 21 18.9582 20.8745 18.7072 20.6236L12 13.9163Z"
          fill={props.fill ?? "currentColor"}
        />
      </svg>
    </SvgIcon>
  );
}
