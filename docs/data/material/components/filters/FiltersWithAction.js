import * as React from "react";
import { Box, NoSsr } from "@mui/material";
import { Button, FiltersBar, ThemeProvider } from "@open-ui-kit/core";
import { getFiltersData } from "./filterDemoData";

export default function FiltersWithAction() {
  const [filters, setFilters] = React.useState(getFiltersData);

  return (
    <ThemeProvider>
      <Box sx={{ width: "100%", maxWidth: 900 }}>
        <NoSsr>
          <FiltersBar
            isLoading={false}
            filtersData={filters}
            assetsData={{ count: 2200, selectedCount: 1840, name: "assets" }}
            onSelectedChange={setFilters}
            onSearch={() => undefined}
            searchPlaceHolder="Search assets"
            rightSideComponent={
              <Button size="large" variant="secondary">
                Export
              </Button>
            }
          />
        </NoSsr>
      </Box>
    </ThemeProvider>
  );
}
