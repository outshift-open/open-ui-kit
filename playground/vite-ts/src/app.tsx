/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ThemeProvider } from "@open-ui-kit/core";
import {
  Container,
  Box,
  Link,
  FormControlLabel,
  Switch,
  Typography,
} from "@mui/material";
import ProTip from "./pro-tip";

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/outshift-open/open-ui-kit">
        Open UI Kit
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  return (
    <ThemeProvider isDarkMode={isDarkMode}>
      <Container maxWidth="md">
        <FormControlLabel
          sx={{
            display: "block",
            marginTop: 2,
          }}
          control={
            <Switch
              checked={isDarkMode}
              onChange={() => setIsDarkMode((prev) => !prev)}
              name="isDarkMode"
              color="primary"
            />
          }
          label="Dark Mode"
        />
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginTop={6}
        >
          {/* <img src={isDarkMode ? logoWhite : logo} alt="logo" width={200} /> */}
        </Box>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" sx={{ mb: 2 }} align="center">
            Open UI Kit Vite.js example in TypeScript
          </Typography>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
