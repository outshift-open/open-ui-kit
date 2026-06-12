import * as React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Link } from "../Link";
import { useTranslate } from "../i18n";

export const TOC_WIDTH = 242;

const NavLabel = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(1, 0, 1, 1.4),
  fontSize: theme.typography.pxToRem(11),
  fontWeight: theme.typography.fontWeightSemiBold,
  textTransform: "uppercase",
  letterSpacing: ".1rem",
  color: (theme.vars || theme).palette.text.tertiary,
}));

const NavList = styled("ul")({
  padding: 0,
  margin: 0,
  listStyle: "none",
});

export const NavItem = styled(Link, {
  shouldForwardProp: (prop) => prop !== "active" && prop !== "level",
})<{ active?: boolean; level?: number }>(({ theme }) => {
  const activeStyles = {
    borderLeftColor: (theme.vars || theme).palette.primary[200],
    color: (theme.vars || theme).palette.primary[600],
    "&:hover": {
      borderLeftColor: (theme.vars || theme).palette.primary[600],
      color: (theme.vars || theme).palette.primary[600],
    },
  };
  const activeDarkStyles = {
    borderLeftColor: (theme.vars || theme).palette.primary[600],
    color: (theme.vars || theme).palette.primary[300],
    "&:hover": {
      borderLeftColor: (theme.vars || theme).palette.primary[400],
      color: (theme.vars || theme).palette.primary[400],
    },
  };

  return [
    {
      boxSizing: "border-box" as const,
      padding: "6px 0 6px 12px",
      borderLeft: `1px solid transparent`,
      display: "block",
      fontSize: theme.typography.pxToRem(13),
      fontWeight: theme.typography.fontWeightMedium,
      textOverflow: "ellipsis",
      overflow: "hidden",
      "&:hover": {
        borderLeftColor: (theme.vars || theme).palette.grey[400],
        color: (theme.vars || theme).palette.grey[600],
      },
      // TODO: We probably want `aria-current="location"` instead.
      variants: [
        {
          props: ({ active }: { active?: boolean }) => !!active,
          style: [activeStyles, theme.applyDarkStyles(activeDarkStyles)],
        },
        {
          props: ({ active }: { active?: boolean }) => !active,
          style: [
            {
              color: (theme.vars || theme).palette.text.primary,
            },
            theme.applyDarkStyles({
              color: (theme.vars || theme).palette.grey[100],
            }),
          ],
        },
        {
          props: ({ level }: { level?: number }) => level === 2,
          style: {
            padding: `6px 0 6px ${theme.spacing(3)}`,
          },
        },
        {
          props: ({ level }: { level?: number }) => level === 3,
          style: {
            padding: `6px 0 6px ${theme.spacing(4.5)}`,
          },
        },
      ],
      "&:active": activeStyles,
    },
    theme.applyDarkStyles({
      "&:hover": {
        borderLeftColor: (theme.vars || theme).palette.grey[500],
        color: (theme.vars || theme).palette.grey[200],
      },
      "&:active": activeDarkStyles,
    }),
  ];
});

export interface TocItem {
  text: string;
  hash: string;
  children: TocItem[];
}

export interface TableOfContentsProps {
  toc: TocItem[];
  itemLink: (
    item: TocItem,
    level: number,
    onLinkClick?: () => void,
  ) => React.ReactNode;
  onLinkClick?: () => void;
}

export function TableOfContents({
  toc,
  itemLink,
  onLinkClick,
}: TableOfContentsProps) {
  const t = useTranslate();

  return (
    <React.Fragment>
      {toc.length > 0 ? (
        <React.Fragment>
          <NavLabel>{t("tableOfContents")}</NavLabel>
          <NavList>
            {toc.map((item) => (
              <li key={item.text}>
                {itemLink(item, 1, onLinkClick)}
                {item.children.length > 0 ? (
                  <NavList>
                    {item.children.map((subitem) => (
                      <li key={subitem.text}>
                        {itemLink(subitem, 2, onLinkClick)}
                        {subitem.children?.length > 0 ? (
                          <NavList>
                            {subitem.children.map((nestedSubItem) => (
                              <li key={nestedSubItem.text}>
                                {itemLink(nestedSubItem, 3, onLinkClick)}
                              </li>
                            ))}
                          </NavList>
                        ) : null}
                      </li>
                    ))}
                  </NavList>
                ) : null}
              </li>
            ))}
          </NavList>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
}
