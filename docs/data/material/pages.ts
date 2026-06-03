import { standardNavIcons } from "@mui/internal-core-docs/AppLayout";
import { MuiPage } from "@mui/internal-core-docs/MuiPage";
import {
  getOpenUIKitComponentsByCategory,
  openUIKitCategoryTitles,
  type OpenUIKitComponentCategory,
} from "docs/src/open-ui-kit-component-registry";

const componentCategories: OpenUIKitComponentCategory[] = [
  "inputs",
  "data-display",
  "charts",
  "feedback",
  "layout",
  "templates",
  "surfaces",
  "navigation",
];

function getComponentCategoryPage(
  category: OpenUIKitComponentCategory,
): MuiPage {
  return {
    pathname: `/open-ui-kit-core/components/${category}`,
    title: openUIKitCategoryTitles[category],
    subheader: category,
    children: getOpenUIKitComponentsByCategory(category).map((component) => ({
      pathname: `/open-ui-kit-core/react-${component.routeSlug}`,
      title: component.title,
    })),
  };
}

const pages: MuiPage[] = [
  {
    pathname: "/open-ui-kit-core/getting-started-group",
    title: "Getting started",
    children: [
      { pathname: "/open-ui-kit-core/getting-started", title: "Overview" },
      { pathname: "/open-ui-kit-core/getting-started/introduction" },
      { pathname: "/open-ui-kit-core/getting-started/installation" },
      { pathname: "/open-ui-kit-core/getting-started/usage" },
      { pathname: "/open-ui-kit-core/getting-started/contributing" },
      {
        pathname: "/open-ui-kit-core/getting-started/developer-only",
        title: "Developer only",
        children: [
          {
            pathname:
              "/open-ui-kit-core/getting-started/developer-only/development",
            title: "Development",
          },
        ],
      },
      { pathname: "/open-ui-kit-core/getting-started/support" },
      { pathname: "/open-ui-kit-core/getting-started/versions" },
    ],
  },
  {
    pathname: "/open-ui-kit-core/react-",
    title: "Components",
    children: [
      { pathname: "/open-ui-kit-core/all-components", title: "All components" },
      ...componentCategories.map(getComponentCategoryPage),
    ],
  },
  {
    pathname: "https://main--68cc22452afe30d90e4ca977.chromatic.com",
    title: "Storybook",
    icon: standardNavIcons.WebIcon,
    linkProps: {
      target: "_blank",
      rel: "noopener",
    },
  },
];

export default pages;
