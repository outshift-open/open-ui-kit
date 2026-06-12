import * as React from "react";
import { Box, NoSsr } from "@mui/material";
import { FiltersBar, ThemeProvider } from "@open-ui-kit/core";
import { getNestedFiltersData } from "./filterDemoData";

export default function FiltersNested() {
  const [filters, setFilters] = React.useState(getNestedFiltersData);

  return (
    <ThemeProvider>
      <Box sx={{ width: "100%", maxWidth: 900 }}>
        <NoSsr>
          <FiltersBar
            isLoading={false}
            filtersData={filters}
            assetsData={{ count: 42, selectedCount: 18, name: "policies" }}
            onSelectedChange={setFilters}
            onSearch={() => undefined}
            searchPlaceHolder="Search policies"
          />
        </NoSsr>
      </Box>
    </ThemeProvider>
  );
}
