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

import { type IconButtonProps, IconButton } from "@mui/material";
import { Reload } from "@/custom-icons";
import { Tooltip } from "@/components";

interface Props extends IconButtonProps {
  onReload: () => void;
  isLoading: boolean;
}

const ReloadTableButton = ({ onReload, isLoading, ...rest }: Props) => (
  <Tooltip title="Reload">
    <IconButton
      aria-label="reload-table"
      onClick={onReload}
      disabled={isLoading}
      {...rest}
    >
      <Reload />
    </IconButton>
  </Tooltip>
);

export default ReloadTableButton;
