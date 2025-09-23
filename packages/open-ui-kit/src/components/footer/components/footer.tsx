/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Box, Typography } from "@mui/material";
import React from "react";
import { styles } from "../styles";
import { Link, LinkProps } from "@/components";
import { GeneralSize } from "@/common";
import { Link as RouterLink } from "react-router-dom";

export interface FooterProps {
  productNode?: React.ReactNode;
  productName: string;
  productLink?: string;
  links?: LinkProps[];
}

export const Footer: React.FC<FooterProps> = ({
  links,
  productNode,
  productLink = "#",
  productName,
}) => {
  return (
    <Box component="footer" sx={styles.container}>
      {productNode ? (
        productNode
      ) : (
        <RouterLink
          to={productLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Typography
            variant="caption"
            sx={(theme) => ({ color: theme.palette.vars.baseTextDefault })}
          >
            © {new Date().getFullYear()} {productName}
          </Typography>
        </RouterLink>
      )}
      <Box sx={{ ...styles.actionsContainer }}>
        {links?.map((link, index) => (
          <Link key={`${index}-link`} size={GeneralSize.Small} {...link}>
            {link.children}
          </Link>
        ))}
      </Box>
    </Box>
  );
};
