import Grid from "@mui/material/Grid";
import InstallDesktopRoundedIcon from "@mui/icons-material/InstallDesktopRounded";
import DrawRoundedIcon from "@mui/icons-material/DrawRounded";
import PlayCircleFilledWhiteRoundedIcon from "@mui/icons-material/PlayCircleFilledWhiteRounded";
import DesignServicesRoundedIcon from "@mui/icons-material/DesignServicesRounded";
import { InfoCard } from "@mui/internal-core-docs/InfoCard";

const content = [
  {
    title: "Installation",
    description: "Add Open UI Kit to your project with a few commands.",
    link: "/open-ui-kit-core/getting-started/installation/",
    icon: <InstallDesktopRoundedIcon color="primary" />,
  },
  {
    title: "Usage",
    description: "Learn the basics of using Open UI Kit components.",
    link: "/open-ui-kit-core/getting-started/usage/",
    icon: <DrawRoundedIcon color="primary" />,
  },
  {
    title: "Contributing",
    description: "Review the local setup, PR flow, and contribution areas.",
    link: "/open-ui-kit-core/getting-started/contributing/",
    icon: <PlayCircleFilledWhiteRoundedIcon color="primary" />,
  },
  {
    title: "Development",
    description: "Use the developer-only notes for Storybook and package work.",
    link: "/open-ui-kit-core/getting-started/developer-only/development/",
    icon: <DesignServicesRoundedIcon color="primary" />,
  },
  {
    title: "Storybook",
    description:
      "Inspect the existing component stories while the docs mature.",
    link: "https://main--68cc22452afe30d90e4ca977.chromatic.com",
    icon: (
      <img
        src={`/static/branding/design-kits/figma-logo.svg`}
        alt="Figma logo"
        loading="lazy"
        width="18"
        height="18"
      />
    ),
  },
];

export default function MaterialStartingLinksCollection() {
  return (
    <Grid container spacing={2}>
      {content.map(({ icon, title, description, link }) => {
        const isExternal = link.startsWith("http");

        return (
          <Grid key={title} size={{ xs: 12, sm: 6, md: 4 }}>
            <InfoCard
              classNameTitle="algolia-lvl3"
              classNameDescription="algolia-content"
              link={link}
              {...(isExternal ? { target: "_blank", rel: "noopener" } : {})}
              title={title}
              icon={icon}
              description={description}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}
