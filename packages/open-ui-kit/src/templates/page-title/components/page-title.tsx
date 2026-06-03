/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Box, Typography } from "@/components";
import { Breadcrumbs } from "@/components/breadcrumbs";
import type { PageTitleProps } from "../types";
import { styles } from "../styles";

export const PageTitle = ({
  title,
  subtitle,
  image,
  icon,
  tag,
  breadcrumbs,
  actions,
  sx,
}: PageTitleProps) => {
  return (
    <Box sx={[styles.root, ...(Array.isArray(sx) ? sx : sx ? [sx] : [])]}>
      {breadcrumbs && breadcrumbs.length > 0 && (
        <Breadcrumbs items={breadcrumbs} />
      )}
      <Box sx={styles.content}>
        <Box sx={styles.left}>
          {image && <Box sx={styles.image}>{image}</Box>}
          {icon && !image && <Box sx={styles.icon}>{icon}</Box>}
          <Box sx={styles.text}>
            <Typography
              variant="h5"
              component="h1"
              sx={(theme) => ({
                color: theme.palette.vars.baseTextStrong,
                fontWeight: 700,
                lineHeight: "30px",
              })}
            >
              {title}
            </Typography>
            {tag}
          </Box>
          {subtitle && (
            <Typography
              variant="body2"
              sx={(theme) => ({
                color: theme.palette.vars.baseTextDefault,
              })}
            >
              {subtitle}
            </Typography>
          )}
        </Box>
        {actions && <Box sx={styles.actions}>{actions}</Box>}
      </Box>
    </Box>
  );
};
