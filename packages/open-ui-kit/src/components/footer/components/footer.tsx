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
