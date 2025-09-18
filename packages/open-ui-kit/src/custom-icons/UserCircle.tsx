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

export function UserCircle(props: SvgIconProps) {
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
          d="M5.55 17.625c1.05-.733 2.092-1.296 3.125-1.688A9.302 9.302 0 0 1 12 15.35c1.183 0 2.296.196 3.338.588 1.041.391 2.087.954 3.137 1.687.733-.9 1.254-1.808 1.563-2.725A9.036 9.036 0 0 0 20.5 12c0-2.417-.813-4.438-2.438-6.063C16.438 4.313 14.418 3.5 12 3.5c-2.417 0-4.438.813-6.063 2.438C4.313 7.563 3.5 9.582 3.5 12c0 1.017.158 1.983.475 2.9.317.917.842 1.825 1.575 2.725Zm6.445-4.875c-.963 0-1.774-.33-2.432-.992-.659-.662-.988-1.474-.988-2.438 0-.963.33-1.774.992-2.433.662-.658 1.474-.987 2.438-.987.963 0 1.774.33 2.432.992.659.662.988 1.474.988 2.438 0 .963-.33 1.774-.992 2.432-.662.659-1.474.988-2.438.988Zm.017 9.25a9.705 9.705 0 0 1-3.887-.788 10.144 10.144 0 0 1-3.188-2.15 10.162 10.162 0 0 1-2.15-3.181A9.68 9.68 0 0 1 2 11.993c0-1.379.263-2.672.788-3.88a10.183 10.183 0 0 1 2.15-3.175 10.162 10.162 0 0 1 3.181-2.15A9.68 9.68 0 0 1 12.007 2c1.379 0 2.672.263 3.88.788a10.183 10.183 0 0 1 3.175 2.15 10.18 10.18 0 0 1 2.15 3.175c.526 1.21.788 2.5.788 3.875s-.262 2.67-.788 3.887a10.143 10.143 0 0 1-2.15 3.188 10.18 10.18 0 0 1-3.175 2.15 9.622 9.622 0 0 1-3.875.787ZM12 20.5c.917 0 1.813-.133 2.688-.4.874-.267 1.737-.733 2.587-1.4-.85-.6-1.717-1.058-2.6-1.375A7.875 7.875 0 0 0 12 16.85c-.9 0-1.792.158-2.675.475-.883.317-1.75.775-2.6 1.375.85.667 1.713 1.133 2.588 1.4.874.267 1.77.4 2.687.4Zm0-9.25c.567 0 1.03-.18 1.387-.537.359-.359.538-.821.538-1.388s-.18-1.03-.538-1.387C13.03 7.579 12.567 7.4 12 7.4c-.567 0-1.03.18-1.387.537-.359.359-.538.821-.538 1.388s.18 1.03.538 1.388c.358.358.82.537 1.387.537Z"
        />
      </svg>
    </SvgIcon>
  );
}
