/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { IconButton, useTheme } from "@mui/material";
import { Tooltip } from "@/components/tooltip";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import { styles } from "../styles";
import { useCallback, useEffect, useState } from "react";
import type { MouseEvent } from "react";
import copy from "copy-to-clipboard";
import { Copy } from "@/custom-icons";
import type { CopyButtonProps } from "../types";

const TIMEOUT = 2000;

export const CopyButton = ({
  text,
  position,
  size = "large",
  top,
  left,
  right,
  disableMargin,
  onCopy,
  copied,
  tooltipPlacement = "top",
  copyLabel = "Copy",
  copiedLabel = "Copied",
  onClick,
  ...props
}: CopyButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const theme = useTheme();
  const showCopiedState = copied ?? isCopied;

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;
    if (isCopied && copied === undefined) {
      timeout = setTimeout(() => {
        setIsCopied(false);
      }, TIMEOUT);
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [copied, isCopied]);

  const handleOnCopy = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      copy(text);
      setIsCopied(true);
      onCopy?.();
      onClick?.(event);
    },
    [onClick, onCopy, text],
  );

  return (
    <Tooltip
      title={showCopiedState ? copiedLabel : copyLabel}
      placement={tooltipPlacement}
      arrow
    >
      <IconButton
        {...props}
        aria-label={props["aria-label"] ?? copyLabel}
        sx={[
          (theme) =>
            styles({ position, size, top, left, right, disableMargin, theme }),
          ...(Array.isArray(props.sx) ? props.sx : props.sx ? [props.sx] : []),
        ]}
        onClick={handleOnCopy}
        disableRipple={props.disableRipple ?? true}
      >
        {showCopiedState ? (
          <DoneRoundedIcon
            sx={{ color: theme.palette.vars.successIconDefault }}
          />
        ) : (
          <Copy sx={{ color: "inherit" }} />
        )}
      </IconButton>
    </Tooltip>
  );
};
