/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Box, Button, useTheme } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { EMPTY_FUNCTION } from "@/common";
import { footerContainerStyle } from "../styles";

export interface DrawerShellFooterProps {
  pageName?: string;
  hideGotoPage?: boolean;
  onGotoPage?: () => void;
}

const DrawerShellFooter = ({
  pageName = "",
  hideGotoPage = false,
  onGotoPage = EMPTY_FUNCTION,
}: DrawerShellFooterProps) => {
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

export default DrawerShellFooter;
