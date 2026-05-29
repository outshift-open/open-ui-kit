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
          { pathname: "/open-ui-kit-core/react-autocomplete" },
          { pathname: "/open-ui-kit-core/react-button" },
          {
            pathname: "/open-ui-kit-core/react-button-group",
            title: "Button Group",
          },
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
          {
            pathname: "/open-ui-kit-core/react-radio-button",
            title: "Radio Group",
          },
          { pathname: "/open-ui-kit-core/react-rating" },
          { pathname: "/open-ui-kit-core/react-select" },
          { pathname: "/open-ui-kit-core/react-slider" },
          { pathname: "/open-ui-kit-core/react-switch" },
          {
            pathname: "/open-ui-kit-core/react-text-field",
            title: "Text Field",
          },
          {
            pathname: "/open-ui-kit-core/react-transfer-list",
            title: "Transfer List",
          },
          {
            pathname: "/open-ui-kit-core/react-toggle-button",
            title: "Toggle Button",
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
          { pathname: "/open-ui-kit-core/react-chip" },
          { pathname: "/open-ui-kit-core/react-divider" },
          {
            pathname: "/open-ui-kit-core/react-empty-state",
            title: "Empty State",
          },
          { pathname: "/open-ui-kit-core/icons" },
          {
            pathname: "/open-ui-kit-core/material-icons",
            title: "Material Icons",
          },
          { pathname: "/open-ui-kit-core/react-list" },
          { pathname: "/open-ui-kit-core/react-table" },
          { pathname: "/open-ui-kit-core/react-tooltip" },
          { pathname: "/open-ui-kit-core/react-typography" },
        ],
      },
      {
        pathname: "/open-ui-kit-core/components/feedback",
        subheader: "feedback",
        children: [
          { pathname: "/open-ui-kit-core/react-alert" },
          { pathname: "/open-ui-kit-core/react-banner" },
          { pathname: "/open-ui-kit-core/react-backdrop" },
          { pathname: "/open-ui-kit-core/react-dialog" },
          { pathname: "/open-ui-kit-core/react-progress" },
          { pathname: "/open-ui-kit-core/react-skeleton" },
          { pathname: "/open-ui-kit-core/react-snackbar" },
        ],
      },
      {
        pathname: "/open-ui-kit-core/components/surfaces",
        subheader: "surfaces",
        children: [
          { pathname: "/open-ui-kit-core/react-accordion" },
          { pathname: "/open-ui-kit-core/react-app-bar", title: "App Bar" },
          { pathname: "/open-ui-kit-core/react-card" },
          { pathname: "/open-ui-kit-core/react-paper" },
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
          {
            pathname: "/open-ui-kit-core/react-bottom-navigation",
            title: "Bottom Navigation",
          },
          { pathname: "/open-ui-kit-core/react-breadcrumbs" },
          { pathname: "/open-ui-kit-core/react-drawer" },
          { pathname: "/open-ui-kit-core/react-link" },
          { pathname: "/open-ui-kit-core/react-menu" },
          { pathname: "/open-ui-kit-core/react-pagination" },
          {
            pathname: "/open-ui-kit-core/react-speed-dial",
            title: "Speed Dial",
          },
          { pathname: "/open-ui-kit-core/react-stepper" },
          { pathname: "/open-ui-kit-core/react-tabs" },
        ],
      },
      {
        pathname: "/open-ui-kit-core/components/layout",
        subheader: "layout",
        children: [
          { pathname: "/open-ui-kit-core/react-box" },
          { pathname: "/open-ui-kit-core/react-container" },
          { pathname: "/open-ui-kit-core/react-grid" },
          { pathname: "/open-ui-kit-core/react-stack" },
          {
            pathname: "/open-ui-kit-core/react-image-list",
            title: "Image List",
          },
        ],
      },
      {
        pathname: "/open-ui-kit-core/components/utils",
        subheader: "utils",
        children: [
          {
            pathname: "/open-ui-kit-core/react-click-away-listener",
            title: "Click-Away Listener",
          },
          {
            pathname: "/open-ui-kit-core/react-css-baseline",
            title: "CSS Baseline",
          },
          {
            pathname: "/open-ui-kit-core/react-init-color-scheme-script",
            title: "InitColorSchemeScript",
          },
          { pathname: "/open-ui-kit-core/react-modal" },
          { pathname: "/open-ui-kit-core/react-no-ssr", title: "No SSR" },
          { pathname: "/open-ui-kit-core/react-popover" },
          { pathname: "/open-ui-kit-core/react-popper" },
          { pathname: "/open-ui-kit-core/react-portal" },
          {
            pathname: "/open-ui-kit-core/react-textarea-autosize",
            title: "Textarea Autosize",
          },
          { pathname: "/open-ui-kit-core/transitions" },
          {
            pathname: "/open-ui-kit-core/react-use-media-query",
            title: "useMediaQuery",
          },
        ],
      },
      {
        pathname: "/open-ui-kit-core",
        subheader: "lab",
        children: [
          {
            pathname: "/open-ui-kit-core/about-the-lab",
            title: "About the lab 🧪",
          },
          { pathname: "/open-ui-kit-core/react-masonry" },
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
