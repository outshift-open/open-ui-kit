import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function ActiveLastBreadcrumb() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Open UI Kit
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/open-ui-kit-core/getting-started/installation/"
        >
          Core
        </Link>
        <Link
          underline="hover"
          href="/open-ui-kit-core/react-breadcrumbs/"
          aria-current="page"
          sx={{
            color: "text.primary",
          }}
        >
          Breadcrumbs
        </Link>
      </Breadcrumbs>
    </div>
  );
}
