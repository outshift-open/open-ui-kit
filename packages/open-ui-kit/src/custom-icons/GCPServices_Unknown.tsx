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

export function GCPServicesUnknown(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          d="M11.643 15.863c.421 0 .748-.11.98-.332.244-.222.372-.493.383-.815v-.183c.01-.42.155-.786.432-1.096.277-.31.675-.637 1.196-.98.775-.498 1.396-1.02 1.86-1.562.477-.554.715-1.29.715-2.21 0-.875-.232-1.611-.698-2.21-.465-.609-1.085-1.068-1.86-1.378-.765-.322-1.607-.482-2.526-.482-1.34 0-2.442.271-3.306.814-.864.532-1.412 1.163-1.645 1.894a2.523 2.523 0 0 0-.133.814c0 .366.116.648.349.847.244.2.515.3.814.3.266 0 .493-.056.681-.167.2-.122.377-.282.532-.481l.266-.333c.255-.454.576-.797.963-1.03a2.621 2.621 0 0 1 1.346-.349c.676 0 1.219.177 1.628.532.41.343.615.803.615 1.379 0 .51-.171.93-.515 1.263-.332.32-.836.72-1.512 1.196a6.782 6.782 0 0 0-1.395 1.28c-.366.464-.549 1.068-.549 1.81v.183c0 .864.46 1.296 1.38 1.296Zm-.033 4.752c.487 0 .903-.16 1.246-.482a1.55 1.55 0 0 0 .532-1.196 1.55 1.55 0 0 0-.532-1.197 1.758 1.758 0 0 0-1.246-.481c-.487 0-.903.16-1.246.481-.343.322-.515.72-.515 1.197 0 .465.172.864.515 1.196.354.321.77.482 1.246.482Z"
        />
      </svg>
    </SvgIcon>
  );
}
