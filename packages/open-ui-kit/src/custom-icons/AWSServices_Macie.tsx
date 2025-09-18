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

export function AWSServicesMacie(props: SvgIconProps) {
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
          d="M17.47 12.35c-.5-.396-.921-.729-1.28-1.006.292-.606.61-1.248.826-1.573.653.678 2.084 2.982 2.599 4.232-.614-.439-1.491-1.134-2.145-1.653Zm-4.095 2.107c-.207-.185-.55-.618-.935-1.144l.008-.011c.499-.714 1.302-1.865 1.667-2.197.177.095.46.292.796.538-.472.987-1.206 2.5-1.536 2.814Zm-2.824-.274c-.178-.269-.41-.677-.57-.956-.57-1.004-.805-1.421-1.246-1.436-.302-.018-.577.186-1.7 1.189-.146.13-.318.284-.496.44.67-1.242 1.66-2.926 2.175-3.667.319.428.82 1.162 1.245 1.788.483.708.886 1.294 1.229 1.779-.23.326-.463.646-.637.863Zm9.86-.89c-.022-.047-2.295-4.656-3.437-4.656-.527 0-.877.55-1.62 2.079-.668-.482-1.002-.647-1.261-.656h-.026c-.502 0-.943.501-2.256 2.371-.354-.507-.705-1.022-.99-1.441-1.576-2.312-1.712-2.475-2.098-2.489L8.716 8.5c-.928 0-3.743 5.775-3.767 5.833-.085.21-.242.601.073.864.548.46 1.225-.154 2.712-1.482.287-.256.645-.576.893-.776.139.218.317.534.451.77.651 1.145.959 1.653 1.446 1.666.35.001.58-.192 1.297-1.185.793 1.05 1.144 1.31 1.502 1.31h.008c.751-.008 1.338-.993 2.412-3.222.373.29.751.589 1.074.845 2.738 2.173 3.338 2.616 3.824 2.102.315-.332.25-.874-.23-1.932Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
