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
import { grey50 } from "../theme/dark/dark-color-palette";

export function CdrIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.64378 13.3289C8.35038 2.58795 23.0684 2.56259 26.3883 11.9994C26.5843 12.5567 27.1535 12.8915 27.7358 12.7921C28.3181 12.6926 28.744 12.1879 28.744 11.5972V4.78168C28.744 4.11221 28.2013 3.56949 27.5318 3.56949C26.8623 3.56949 26.3196 4.11221 26.3196 4.78168V7.11755C19.9867 -0.173889 6.16197 1.35077 3.29289 12.7365C3.12931 13.3857 3.52296 14.0445 4.17214 14.2081C4.82132 14.3717 5.4802 13.9781 5.64378 13.3289ZM26.3562 18.6698C23.6496 29.4107 8.93162 29.4361 5.6117 19.9993C5.41566 19.442 4.84647 19.1072 4.26416 19.2066C3.68185 19.3061 3.25602 19.8108 3.25602 20.4015V27.217C3.25602 27.8865 3.79874 28.4292 4.46821 28.4292C5.13768 28.4292 5.6804 27.8865 5.6804 27.217V24.8811C12.0133 32.1726 25.838 30.6479 28.7071 19.2622C28.8707 18.613 28.477 17.9542 27.8279 17.7906C27.1787 17.627 26.5198 18.0206 26.3562 18.6698Z"
          fill={grey50}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.1678 19.4104L15.4404 21.8515C15.7869 22.0495 16.213 22.0495 16.5596 21.8515L20.8322 19.4104C21.1793 19.2121 21.3962 18.8434 21.3962 18.4411V13.5589C21.3962 13.1566 21.1793 12.7879 20.8322 12.5896L16.5596 10.1485C16.213 9.95051 15.7869 9.95051 15.4404 10.1485L11.1678 12.5896C10.8207 12.7879 10.6038 13.1566 10.6038 13.5589V18.4411C10.6038 18.8434 10.8207 19.2121 11.1678 19.4104ZM17.6652 16C17.6652 16.9014 16.9251 17.642 16 17.642C15.0748 17.642 14.3348 16.9014 14.3348 16C14.3348 15.0986 15.0748 14.358 16 14.358C16.9251 14.358 17.6652 15.0986 17.6652 16Z"
          fill={grey50}
        />
      </svg>
    </SvgIcon>
  );
}
