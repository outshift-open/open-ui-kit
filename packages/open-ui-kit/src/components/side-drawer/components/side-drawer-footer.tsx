/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Box, useTheme } from "@mui/material";
import { Button } from "@/components/button";
import { ArrowForward } from "@mui/icons-material";
import { EMPTY_FUNCTION } from "@/common";
import { footerContainerStyle } from "../styles";
import type { SideDrawerFooterProps } from "../types";

export type { SideDrawerFooterProps };

const SideDrawerFooter = ({
  pageName = "",
  hideGotoPage = false,
  onGotoPage = EMPTY_FUNCTION,
}: SideDrawerFooterProps) => {
  const theme = useTheme();

  return (
    <Box sx={footerContainerStyle(theme)}>
      {!hideGotoPage && (
        <Button
          variant="primary"
          size="large"
          endIcon={<ArrowForward />}
          onClick={onGotoPage}
        >
          Go to {pageName} page
        </Button>
      )}
    </Box>
  );
};

export default SideDrawerFooter;
