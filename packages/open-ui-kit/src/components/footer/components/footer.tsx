/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Box, Typography } from "@mui/material";
import { styles } from "../styles";
import type { FooterProps } from "../types";
import { Link } from "@/components/link";
import { GeneralSize } from "@/common";
import { Link as RouterLink } from "react-router-dom";

export const Footer = ({
  links,
  productNode,
  productLink = "#",
  productName,
  sx,
}: FooterProps) => {
  return (
    <Box
      component="footer"
      sx={[styles.container, ...(Array.isArray(sx) ? sx : sx ? [sx] : [])]}
    >
      {productNode ? (
        productNode
      ) : (
        <Box
          component={RouterLink}
          to={productLink}
          target="_blank"
          rel="noopener noreferrer"
          sx={(theme) => ({
            color: theme.palette.vars.baseTextDefault,
            display: "inline-flex",
            flexShrink: 0,
            textDecoration: "none",
            whiteSpace: "nowrap",
          })}
        >
          <Typography
            variant="caption"
            sx={(theme) => ({ color: theme.palette.vars.baseTextDefault })}
          >
            © {new Date().getFullYear()} {productName}
          </Typography>
        </Box>
      )}
      <Box sx={styles.actionsContainer}>
        {links?.map((link, index) => (
          <Link key={`${index}-link`} size={GeneralSize.Small} {...link}>
            {link.children}
          </Link>
        ))}
      </Box>
    </Box>
  );
};
