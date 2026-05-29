import Grid from "@mui/material/Grid";
import { InfoCard } from "@mui/internal-core-docs/InfoCard";
import { pageToTitle } from "@mui/internal-core-docs/helpers";
import ExtensionRoundedIcon from "@mui/icons-material/ExtensionRounded";
import pages from "docs/data/material/pages";

const categoryDescriptions = {
  inputs: "Actions, choices, filters, and form controls.",
  "data-display": "Reusable patterns for content, metadata, and status.",
  feedback: "Messages, overlays, and loading states.",
  surfaces: "Containers and disclosure patterns for product layouts.",
  navigation: "Wayfinding components for moving through interfaces.",
  layout: "Responsive primitives for arranging product screens.",
  utils: "Lower-level helpers used to compose advanced experiences.",
  lab: "Components that are still being shaped and validated.",
};

function getComponentGroups() {
  return (
    pages
      .find((page) => page.title === "Components")
      ?.children?.filter((page) => page.subheader) ?? []
  );
}

export default function OpenUIKitComponentSection({ category }) {
  const group = getComponentGroups().find(
    (page) => page.subheader === category,
  );

  if (!group) {
    return null;
  }

  return (
    <Grid container spacing={2} sx={{ pt: 1, pb: 2 }}>
      {group.children.map((page) => {
        const title = pageToTitle(page);

        if (!title) {
          return null;
        }

        return (
          <Grid
            key={page.pathname}
            sx={{ flexGrow: 1 }}
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
          >
            <InfoCard
              link={`${page.pathname}/`}
              title={title}
              description={categoryDescriptions[group.subheader]}
              icon={<ExtensionRoundedIcon color="primary" />}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}
