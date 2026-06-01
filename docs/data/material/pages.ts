import { standardNavIcons } from "@mui/internal-core-docs/AppLayout";
import { MuiPage } from "@mui/internal-core-docs/MuiPage";

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
      {
        pathname: "/open-ui-kit-core/components/inputs",
        subheader: "inputs",
        children: [
          { pathname: "/open-ui-kit-core/react-button" },
          { pathname: "/open-ui-kit-core/react-checkbox" },
          {
            pathname: "/open-ui-kit-core/react-date-time",
            title: "Date Time",
          },
          { pathname: "/open-ui-kit-core/react-filters" },
          {
            pathname: "/open-ui-kit-core/react-floating-action-button",
            title: "Floating Button",
          },
        ],
      },
      {
        pathname: "/open-ui-kit-core/components/data-display",
        subheader: "data-display",
        children: [
          {
            pathname: "/open-ui-kit-core/react-activity-timeline",
            title: "Activity Timeline",
          },
          { pathname: "/open-ui-kit-core/react-avatar" },
          { pathname: "/open-ui-kit-core/react-badge" },
          {
            pathname: "/open-ui-kit-core/react-code-block",
            title: "Code Block",
          },
          {
            pathname: "/open-ui-kit-core/react-copy-button",
            title: "Copy Button",
          },
          { pathname: "/open-ui-kit-core/react-divider" },
          {
            pathname: "/open-ui-kit-core/react-empty-state",
            title: "Empty State",
          },
        ],
      },
      {
        pathname: "/open-ui-kit-core/components/feedback",
        subheader: "feedback",
        children: [
          { pathname: "/open-ui-kit-core/react-banner" },
          { pathname: "/open-ui-kit-core/react-backdrop" },
          { pathname: "/open-ui-kit-core/react-dialog" },
        ],
      },
      {
        pathname: "/open-ui-kit-core/components/surfaces",
        subheader: "surfaces",
        children: [
          { pathname: "/open-ui-kit-core/react-accordion" },
          { pathname: "/open-ui-kit-core/react-card" },
        ],
      },
      {
        pathname: "/open-ui-kit-core/components/navigation",
        subheader: "navigation",
        children: [
          {
            pathname: "/open-ui-kit-core/react-anchor-link-menu",
            title: "Anchor Link Menu",
          },
          { pathname: "/open-ui-kit-core/react-breadcrumbs" },
        ],
      },
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
