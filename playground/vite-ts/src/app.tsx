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
