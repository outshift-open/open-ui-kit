/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { IconButtonProps, IconButton, useTheme } from "@mui/material";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import { CopyButtonStylesProps, styles } from "../styles";
import { useCallback, useEffect, useState } from "react";
import copy from "copy-to-clipboard";
import { Copy } from "@/custom-icons";

const TIMEOUT = 2000;

export type CopyButtonPosition = "left" | "right";

export interface CopyButtonProps
  extends IconButtonProps,
    CopyButtonStylesProps {
  text: string;
  onCopy?: () => void;
}

export const CopyButton = ({
  text,
  position,
  top,
  bottom,
  left,
  right,
  onCopy,
  ...props
}: CopyButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;
    if (isCopied) {
      timeout = setTimeout(() => {
        setIsCopied(false);
      }, TIMEOUT);
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [isCopied]);

  const handleOnCopy = useCallback(() => {
    copy(text);
    setIsCopied(true);
    onCopy?.();
  }, [onCopy, text]);

  return (
    <IconButton
      {...props}
      sx={(theme) => styles({ position, top, bottom, left, right, theme })}
      onClick={handleOnCopy}
      disableRipple={true}
    >
      {isCopied ? (
        <DoneRoundedIcon color="success" />
      ) : (
        <Copy fill={theme.palette.vars.interactiveSecondaryDefaultDefault} />
      )}
    </IconButton>
  );
};
