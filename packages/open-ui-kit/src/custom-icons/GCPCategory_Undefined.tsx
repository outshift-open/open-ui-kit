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

export function GCPCategoryUndefined(props: SvgIconProps) {
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
          d="M11.518 15.398c.421 0 .748-.111.98-.333.244-.221.372-.493.383-.814v-.183c.01-.42.155-.786.432-1.096.277-.31.675-.637 1.196-.98.775-.499 1.396-1.02 1.86-1.562.477-.554.715-1.29.715-2.21 0-.875-.232-1.612-.698-2.21-.465-.609-1.085-1.069-1.86-1.379C13.76 4.31 12.919 4.15 12 4.15c-1.34 0-2.442.272-3.306.815-.864.531-1.412 1.163-1.645 1.894a2.523 2.523 0 0 0-.133.814c0 .365.116.648.349.847.244.2.515.3.814.3.266 0 .493-.056.681-.167.2-.122.377-.282.532-.482l.266-.332c.255-.454.576-.798.963-1.03a2.622 2.622 0 0 1 1.346-.35c.676 0 1.219.178 1.628.533.41.343.615.803.615 1.379 0 .51-.171.93-.515 1.262-.332.322-.836.72-1.512 1.197a6.782 6.782 0 0 0-1.395 1.279c-.366.465-.549 1.069-.549 1.81v.184c0 .864.46 1.296 1.38 1.296Zm-.033 4.751c.487 0 .903-.16 1.246-.481a1.55 1.55 0 0 0 .532-1.197c0-.476-.177-.875-.532-1.196a1.758 1.758 0 0 0-1.246-.482c-.487 0-.903.16-1.246.482-.343.321-.515.72-.515 1.196 0 .465.172.864.515 1.197.354.32.77.481 1.246.481Z"
        />
      </svg>
    </SvgIcon>
  );
}
