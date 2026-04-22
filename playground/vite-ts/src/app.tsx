/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { ThemeProvider, useThemeMode } from "@open-ui-kit/core";
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

function AppContent() {
  const { isDarkMode, toggleTheme } = useThemeMode();
  return (
    <Container maxWidth="md">
      <FormControlLabel
        sx={{
          display: "block",
          marginTop: 2,
        }}
        control={
          <Switch
            checked={isDarkMode}
            onChange={toggleTheme}
            name="isDarkMode"
            color="primary"
          />
        }
        label={`Dark Mode: ${isDarkMode ? "On" : "Off"}`}
      />
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }} align="center">
          Open UI Kit Vite.js example in TypeScript
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
