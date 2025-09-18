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

export function Zombie(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          d="m10.9 18.022.337-.714h-.703l.367.714ZM12.664 18.179l.784-.871h-1.216l.432.87ZM17.662 5.8a.659.659 0 0 0-.129-.446.513.513 0 0 0-.746 0 .617.617 0 0 0-.216.397l-1.815 4.894-.03 3.345 1.052-.612.021-2.563L17.662 5.8ZM9.87 10.877l1.03-.21-1.095-5.742a.552.552 0 0 0-.141-.281.51.51 0 0 0-.574-.124.53.53 0 0 0-.238.2.532.532 0 0 0-.078.415l1.096 5.742ZM8.287 9.234 6.92 6.86a.677.677 0 0 1-.099-.233.772.772 0 0 0-.164-.384.417.417 0 0 0-.431-.138.48.48 0 0 0-.367.223.749.749 0 0 0-.103.532L7.23 9.266l-.393 3.483h1.048l.401-3.515ZM13.548 4.059a.583.583 0 0 0-.142-.393.513.513 0 0 0-.371-.165.485.485 0 0 0-.375.147.522.522 0 0 0-.164.384l-.143 6.506 1.048.027.147-6.506Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M8.688 17.192a1.34 1.34 0 0 1-.591-.51 1.41 1.41 0 0 1-.22-.763v-2.117h2.687l1.983 2.68 5.469-3.175-3.718 3.782c-.034.026-.07.05-.107.072l.38.58 1.551-.893 3.407-3.528-.966-.817a.846.846 0 0 0-.573-.223 1.153 1.153 0 0 0-.625.152l-1.587.946-2.972 1.733-1.725-2.385H6.83v3.251c-.004.327.055.652.173.956l1.294.969.392-.71Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="m5.195 19.764 1.212-.978.069-1.376.315-.299 1.56 1.068.855-1.577.508-.321.453.567.694 1.482.626-1.12.168-.148.242-.04.728 1.465 1.078-1.237.31.004.518.795 2.1-1.326.583.741.776 1.782L21 20.282 3 20.5l2.195-.737Z"
        />
      </svg>
    </SvgIcon>
  );
}
