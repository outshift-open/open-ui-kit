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

export function CISInfo(props: SvgIconProps) {
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
          d="M12.225 2.225c.179 0 .358.036.537.109.178.072.342.174.49.307l8.557 8.557c.133.148.235.311.307.49.073.179.109.358.109.537 0 .18-.037.361-.109.546a1.418 1.418 0 0 1-.307.481l-8.558 8.557c-.147.145-.31.25-.49.317a1.534 1.534 0 0 1-1.083 0 1.21 1.21 0 0 1-.48-.317L2.64 13.252a1.21 1.21 0 0 1-.316-.48 1.535 1.535 0 0 1 0-1.083c.066-.18.172-.343.316-.49l8.558-8.558c.135-.133.295-.235.48-.307.185-.073.367-.109.547-.109Zm0 1.467-8.533 8.533 8.533 8.533 8.533-8.533-8.533-8.533Zm.733 7.555h-1.467v5.868h1.467v-5.868Zm-.733-2.69a.704.704 0 0 0-.514.22.704.704 0 0 0-.22.514c0 .196.074.367.22.514.147.146.318.22.514.22a.704.704 0 0 0 .513-.22.704.704 0 0 0 .22-.514.704.704 0 0 0-.22-.513.704.704 0 0 0-.513-.22Z"
        />
      </svg>
    </SvgIcon>
  );
}
