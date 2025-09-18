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

export function StarOutline(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
        <path
          d="M7.24057 14.4475L10 12.7821L12.7594 14.4694L12.0367 11.314L14.4677 9.21044L11.2702 8.92558L10 5.94552L8.72978 8.90367L5.53234 9.18853L7.96327 11.314L7.24057 14.4475ZM10 14.8419L6.36455 17.0331C6.20395 17.1354 6.03605 17.1792 5.86085 17.1646C5.68565 17.15 5.53234 17.0915 5.40094 16.9893C5.26954 16.887 5.16734 16.7592 5.09434 16.6058C5.02134 16.4524 5.00674 16.2808 5.05054 16.0909L6.01415 11.9495L2.79481 9.16662C2.64881 9.03514 2.55756 8.88541 2.52106 8.71742C2.48456 8.54942 2.49551 8.38508 2.55391 8.22439C2.61231 8.0637 2.69991 7.93223 2.81671 7.82997C2.93351 7.72771 3.09412 7.66198 3.29852 7.63276L7.54717 7.26025L9.18969 3.35988C9.26269 3.18458 9.37584 3.05311 9.52914 2.96546C9.68245 2.87781 9.8394 2.83398 10 2.83398C10.1606 2.83398 10.3176 2.87781 10.4709 2.96546C10.6242 3.05311 10.7373 3.18458 10.8103 3.35988L12.4528 7.26025L16.7015 7.63276C16.9059 7.66198 17.0665 7.72771 17.1833 7.82997C17.3001 7.93223 17.3877 8.0637 17.4461 8.22439C17.5045 8.38508 17.5154 8.54942 17.4789 8.71742C17.4424 8.88541 17.3512 9.03514 17.2052 9.16662L13.9858 11.9495L14.9495 16.0909C14.9933 16.2808 14.9787 16.4524 14.9057 16.6058C14.8327 16.7592 14.7305 16.887 14.5991 16.9893C14.4677 17.0915 14.3144 17.15 14.1392 17.1646C13.9639 17.1792 13.796 17.1354 13.6354 17.0331L10 14.8419Z"
          fill={props.fill ?? "currentColor"}
        />
      </svg>
    </SvgIcon>
  );
}
