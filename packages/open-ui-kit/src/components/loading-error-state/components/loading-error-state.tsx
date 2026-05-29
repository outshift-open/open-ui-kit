/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link, Stack, Typography } from "@mui/material";
import { stackStyle } from "../styles/styles";
import { NoData } from "@/custom-illustrations";

export const LoadingErrorState = (): JSX.Element => {
  return (
    <Stack sx={stackStyle}>
      <NoData />
      <Typography data-testid="main-text" mt={5} variant="h5">
        Sorry, something went wrong...
      </Typography>
      <Typography data-testid="first-sub-text" mt={3} variant="body2">
        Please refresh the page.
      </Typography>
      <Typography data-testid="second-sub-text" variant="body2">
        If the problem persists,&nbsp;
        <Link target="_blank" href="mailto:support@example.com">
          contact our support.
        </Link>
      </Typography>
    </Stack>
  );
};
