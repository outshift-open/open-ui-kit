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

export function ClockPending(props: SvgIconProps) {
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
          d="M12.9 11.973V8.73301C12.9 8.47801 12.8138 8.26426 12.6413 8.09176C12.4688 7.91926 12.255 7.83301 12 7.83301C11.745 7.83301 11.5312 7.91926 11.3588 8.09176C11.1863 8.26426 11.1 8.47801 11.1 8.73301V12.3105C11.1 12.4305 11.1225 12.5468 11.1675 12.6593C11.2125 12.7718 11.28 12.873 11.37 12.963L14.34 15.933C14.505 16.098 14.715 16.1805 14.97 16.1805C15.225 16.1805 15.435 16.098 15.6 15.933C15.765 15.768 15.8475 15.558 15.8475 15.303C15.8475 15.048 15.765 14.838 15.6 14.673L12.9 11.973ZM12 21.333C10.755 21.333 9.585 21.0968 8.49 20.6243C7.395 20.1518 6.4425 19.5105 5.6325 18.7005C4.8225 17.8905 4.18125 16.938 3.70875 15.843C3.23625 14.748 3 13.578 3 12.333C3 11.088 3.23625 9.91801 3.70875 8.82301C4.18125 7.72801 4.8225 6.77551 5.6325 5.96551C6.4425 5.15551 7.395 4.51426 8.49 4.04176C9.585 3.56926 10.755 3.33301 12 3.33301C13.245 3.33301 14.415 3.56926 15.51 4.04176C16.605 4.51426 17.5575 5.15551 18.3675 5.96551C19.1775 6.77551 19.8188 7.72801 20.2913 8.82301C20.7638 9.91801 21 11.088 21 12.333C21 13.578 20.7638 14.748 20.2913 15.843C19.8188 16.938 19.1775 17.8905 18.3675 18.7005C17.5575 19.5105 16.605 20.1518 15.51 20.6243C14.415 21.0968 13.245 21.333 12 21.333ZM12 19.533C13.995 19.533 15.6938 18.8318 17.0963 17.4293C18.4988 16.0268 19.2 14.328 19.2 12.333C19.2 10.338 18.4988 8.63926 17.0963 7.23676C15.6938 5.83426 13.995 5.13301 12 5.13301C10.005 5.13301 8.30625 5.83426 6.90375 7.23676C5.50125 8.63926 4.8 10.338 4.8 12.333C4.8 14.328 5.50125 16.0268 6.90375 17.4293C8.30625 18.8318 10.005 19.533 12 19.533Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
