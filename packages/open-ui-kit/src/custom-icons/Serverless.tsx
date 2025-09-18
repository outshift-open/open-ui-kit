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

export function Serverless(props: SvgIconProps) {
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
          d="M6.275 20c-1.467 0-2.713-.513-3.738-1.538C1.514 17.437 1 16.192 1 14.725c0-1.3.417-2.442 1.25-3.425.833-.983 1.892-1.575 3.175-1.775.333-1.617 1.117-2.938 2.35-3.963s2.658-1.537 4.275-1.537c1.867 0 3.442.68 4.725 2.037C18.058 7.421 18.7 9.05 18.7 10.95v.6c1.2-.033 2.217.354 3.05 1.162.833.809 1.25 1.83 1.25 3.063 0 1.15-.417 2.142-1.25 2.975-.833.833-1.825 1.25-2.975 1.25h-12.5Zm0-1.5h12.5c.75 0 1.392-.267 1.925-.8.533-.533.8-1.175.8-1.925s-.267-1.392-.8-1.925a2.624 2.624 0 0 0-1.925-.8H17.2v-2.1c0-1.517-.508-2.8-1.525-3.85-1.017-1.05-2.258-1.575-3.725-1.575S9.238 6.05 8.213 7.1c-1.025 1.05-1.538 2.333-1.538 3.85H6.2c-1.033 0-1.908.362-2.625 1.087-.717.725-1.075 1.621-1.075 2.688 0 1.05.367 1.942 1.1 2.675.733.733 1.625 1.1 2.675 1.1Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M7.55 13.777a.754.754 0 0 0-.54.212.682.682 0 0 0-.222.513c0 .2.074.371.223.511.149.14.33.21.542.21.213 0 .393-.07.54-.212a.682.682 0 0 0 .222-.513.675.675 0 0 0-.223-.511.764.764 0 0 0-.542-.21ZM5.52 12h9.884c.153 0 .29.06.413.18.122.121.183.258.183.413v3.814c0 .193-.061.34-.183.441a.63.63 0 0 1-.413.152H5.596a.622.622 0 0 1-.42-.152c-.117-.1-.176-.248-.176-.44v-3.815a.64.64 0 0 1 .145-.412A.458.458 0 0 1 5.52 12Zm.397.867v3.266h9.167v-3.266H5.917Z"
        />
      </svg>
    </SvgIcon>
  );
}
