import * as React from "react";
import NextLink from "next/link";
import { alpha, type Theme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuList, { type MenuListProps } from "@mui/material/MenuList";
import MenuItem, { type MenuItemProps } from "@mui/material/MenuItem";
import { OpenUiKitLogomarkIcon } from "docs/src/branding/OpenUiKitLogo";
import PageContext from "../../PageContext";

const logoColor = (theme: Theme) => ({
  "& path": {
    ...theme.applyDarkStyles({
      fill: (theme.vars || theme).palette.primary[400],
    }),
  },
});

interface ProductItemProps extends MenuItemProps {
  active?: boolean;
  chip?: React.ReactNode;
  description?: string;
  href: string;
  icon?: React.ReactNode;
  name: string;
}

function ProductItem({
  active,
  chip,
  description,
  href,
  icon,
  name,
  sx = [],
  ...other
}: ProductItemProps) {
  return (
    <MenuItem
      component={NextLink} // using the Next link directly here as it accepts, as opposed to the docs Link, passing role="menuitem"
      role="menuitem"
      href={href}
      sx={[
        (theme) => ({
          px: 1.5,
          py: 1.25,
          display: "flex",
          alignItems: "start",
          gap: "10px",
          flexGrow: 1,
          whiteSpace: "normal",
          backgroundColor: active
            ? alpha(theme.palette.primary[50], 0.8)
            : undefined,
          border: "1px solid",
          borderColor: active ? "primary.100" : "transparent",
          borderRadius: "8px",
          transition: "100ms ease-in background-color, border",
          textDecorationLine: "none",
          "&:hover": {
            backgroundColor: active
              ? alpha(theme.palette.primary[50], 0.8)
              : "grey.50",
            borderColor: "divider",
          },
          "&.Mui-focusVisible": {
            backgroundColor: active
              ? (theme.vars || theme).palette.primary[50]
              : "transparent",
          },
          ...theme.applyDarkStyles({
            backgroundColor: active
              ? alpha(theme.palette.primary[900], 0.2)
              : undefined,
            borderColor: active
              ? alpha(theme.palette.primary[300], 0.2)
              : "transparent",
            "&:hover": {
              backgroundColor: active
                ? alpha(theme.palette.primary[900], 0.3)
                : alpha(theme.palette.primaryDark[700], 0.5),
            },
            "&.Mui-focusVisible": {
              backgroundColor: active
                ? alpha(theme.palette.primary[900], 0.5)
                : "transparent",
            },
          }),
        }),
        // You cannot spread `sx` directly because `SxProps` (typeof sx) can be an array.
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Box
        sx={{
          height: 21, // match the Typography line-height
          width: 21,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </Box>
      <Box sx={{ minWidth: 0 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <Typography
            variant="body2"
            sx={{ color: "text.primary", fontWeight: "semiBold" }}
          >
            {name}
          </Typography>
          {chip}
        </Box>
        <Typography
          sx={{
            color: "text.secondary",
            fontSize: ".813rem",
            overflowWrap: "anywhere",
          }}
        >
          {description}
        </Typography>
      </Box>
    </MenuItem>
  );
}

const coreProducts = [
  {
    id: "open-ui-kit-core",
    name: "Open UI Kit Core",
    description: "Core React components and design tokens.",
    icon: <OpenUiKitLogomarkIcon width={14} height={14} sx={logoColor} />,
    href: "/open-ui-kit-core/",
  },
];

export const MuiProductSelector = React.forwardRef(function MuiProductSelector(
  props: MenuListProps<"div">,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
  const pageContext = React.useContext(PageContext);

  return (
    <MenuList
      {...props}
      component="div"
      ref={forwardedRef}
      sx={{
        p: 1.25,
        display: "grid",
        gridTemplateColumns: "minmax(0, 1fr)",
        gap: "4px",
      }}
    >
      {coreProducts.map((product) => (
        <ProductItem
          key={product.name}
          name={product.name}
          description={product.description}
          href={product.href}
          icon={product.icon}
          active={pageContext.productId === product.id}
        />
      ))}
    </MenuList>
  );
});
