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

export const Warning = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        width="224"
        height="224"
        viewBox="0 0 224 224"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M178.242 148.562L124.678 55.9371C123.396 53.7094 121.549 51.859 119.324 50.5724C117.098 49.2858 114.573 48.6083 112.003 48.6083C109.433 48.6083 106.908 49.2858 104.682 50.5724C102.457 51.859 100.61 53.7094 99.3281 55.9371L45.764 148.562C44.4628 150.778 43.7713 153.3 43.7597 155.87C43.7481 158.44 44.4168 160.967 45.6979 163.195C46.979 165.423 48.827 167.273 51.054 168.556C53.2811 169.839 55.808 170.509 58.3781 170.5H165.628C168.198 170.509 170.725 169.839 172.952 168.556C175.179 167.273 177.027 165.423 178.308 163.195C179.589 160.967 180.258 158.44 180.246 155.87C180.235 153.3 179.543 150.778 178.242 148.562Z"
          fill="url(#paint0_linear_23096_18852)"
        />
        <path
          d="M105.176 119.15V89.575C105.176 87.7649 105.895 86.0289 107.175 84.749C108.455 83.4691 110.191 82.75 112.001 82.75C113.811 82.75 115.547 83.4691 116.827 84.749C118.107 86.0289 118.826 87.7649 118.826 89.575V119.15C118.826 120.96 118.107 122.696 116.827 123.976C115.547 125.256 113.811 125.975 112.001 125.975C110.191 125.975 108.455 125.256 107.175 123.976C105.895 122.696 105.176 120.96 105.176 119.15ZM121.101 141.9C121.101 143.7 120.567 145.459 119.567 146.956C118.567 148.452 117.146 149.619 115.483 150.307C113.82 150.996 111.991 151.176 110.225 150.825C108.46 150.474 106.839 149.607 105.566 148.335C104.293 147.062 103.427 145.441 103.075 143.675C102.724 141.91 102.905 140.08 103.593 138.418C104.282 136.755 105.448 135.334 106.945 134.334C108.441 133.334 110.201 132.8 112.001 132.8C114.414 132.8 116.729 133.759 118.435 135.465C120.142 137.172 121.101 139.487 121.101 141.9Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear_23096_18852"
            x1="180.247"
            y1="109.554"
            x2="43.7595"
            y2="109.554"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF9900" />
            <stop offset="1" stopColor="#C8511B" />
          </linearGradient>
        </defs>
      </svg>
    </SvgIcon>
  );
};
