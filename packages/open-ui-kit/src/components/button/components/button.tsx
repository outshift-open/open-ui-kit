/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { ButtonProps as MuiButtonProps } from "@mui/material";
import { StyledButton } from "./elements";

export type ButtonProps = MuiButtonProps;

export const Button = (props: ButtonProps) => <StyledButton {...props} />;
