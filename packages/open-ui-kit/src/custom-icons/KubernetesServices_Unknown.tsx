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

export function KubernetesServicesUnknown(props: SvgIconProps) {
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
          d="M12.477 15.248c.421 0 .748-.11.98-.332.244-.222.372-.493.383-.814v-.183c.01-.42.155-.786.432-1.097.277-.31.675-.636 1.196-.98.775-.498 1.396-1.019 1.86-1.562.477-.553.715-1.29.715-2.21 0-.874-.232-1.611-.698-2.21-.465-.608-1.085-1.068-1.86-1.378C14.72 4.16 13.879 4 12.959 4c-1.34 0-2.442.271-3.306.814-.864.532-1.412 1.163-1.645 1.894a2.524 2.524 0 0 0-.133.814c0 .366.116.648.349.848.244.2.515.299.814.299.266 0 .493-.056.681-.166.2-.122.377-.283.532-.482l.266-.333c.255-.454.576-.797.963-1.03a2.621 2.621 0 0 1 1.346-.349c.676 0 1.219.178 1.628.532.41.343.615.803.615 1.38 0 .509-.171.93-.515 1.262-.332.321-.836.72-1.512 1.196a6.78 6.78 0 0 0-1.396 1.28c-.365.465-.548 1.068-.548 1.81v.183c0 .864.46 1.296 1.38 1.296ZM12.444 20c.487 0 .903-.16 1.246-.482a1.55 1.55 0 0 0 .532-1.196 1.55 1.55 0 0 0-.532-1.196 1.758 1.758 0 0 0-1.246-.482c-.487 0-.903.16-1.246.482-.343.32-.515.72-.515 1.196 0 .465.172.864.515 1.196.354.321.77.482 1.246.482Z"
        />
      </svg>
    </SvgIcon>
  );
}
