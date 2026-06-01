/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  TextField as MuiTextField,
  styled,
  type TextFieldProps as MuiTextFieldProps,
} from "@mui/material";
import type { ComponentType } from "react";
import { getInputFieldStyles } from "../styles";

export const StyledInputField = styled(MuiTextField)(({ theme }) =>
  getInputFieldStyles(theme),
) as ComponentType<MuiTextFieldProps>;
