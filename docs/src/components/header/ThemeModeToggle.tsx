import * as React from "react";
import { useColorScheme, useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import AutoAwesomeOutlined from "@mui/icons-material/AutoAwesomeOutlined";
import CheckRounded from "@mui/icons-material/CheckRounded";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import { useColorSchemeShim } from "@mui/internal-core-docs/ThemeContext";
import { ThemeMode } from "@/theme-provider/theme-provider";
import {
  getMuiDocsMode,
  getStoredOpenUiKitDocsMode,
  openUiKitDocsModeChangeEvent,
  setStoredOpenUiKitDocsMode,
} from "docs/src/openUiKitDocsMode";

function useOpenUiKitDocsMode(calculatedMode: string | undefined) {
  const [storedMode, setStoredMode] = React.useState(
    getStoredOpenUiKitDocsMode,
  );

  React.useEffect(() => {
    const updateMode = () => {
      setStoredMode(getStoredOpenUiKitDocsMode());
    };

    window.addEventListener("storage", updateMode);
    window.addEventListener(openUiKitDocsModeChangeEvent, updateMode);
    updateMode();

    return () => {
      window.removeEventListener("storage", updateMode);
      window.removeEventListener(openUiKitDocsModeChangeEvent, updateMode);
    };
  }, []);

  return (
    storedMode ?? (calculatedMode === "dark" ? ThemeMode.Dark : ThemeMode.Light)
  );
}

function ThemeModeButton(props: {
  disabled?: boolean;
  mode: ThemeMode;
  onChange: (newMode: ThemeMode) => void;
}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);
  const icon = {
    [ThemeMode.Light]: <LightModeOutlined fontSize="small" />,
    [ThemeMode.Dark]: <DarkModeOutlined fontSize="small" />,
    [ThemeMode.IoC]: <AutoAwesomeOutlined fontSize="small" />,
  }[props.mode];
  const modes = [
    {
      icon: <LightModeOutlined fontSize="small" />,
      label: "Light",
      mode: ThemeMode.Light,
    },
    {
      icon: <DarkModeOutlined fontSize="small" />,
      label: "Dark",
      mode: ThemeMode.Dark,
    },
    {
      icon: <AutoAwesomeOutlined fontSize="small" />,
      label: "IoC",
      mode: ThemeMode.IoC,
    },
  ];

  return (
    <Tooltip title="Theme">
      <span>
        <IconButton
          aria-controls={menuOpen ? "docs-theme-menu" : undefined}
          aria-expanded={menuOpen ? "true" : undefined}
          aria-haspopup="menu"
          aria-label="Theme"
          color="primary"
          size="small"
          disableTouchRipple
          disabled={props.disabled}
          onClick={(event) => {
            setAnchorEl(event.currentTarget);
          }}
        >
          {icon}
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          id="docs-theme-menu"
          onClose={() => {
            setAnchorEl(null);
          }}
          open={menuOpen}
        >
          {modes.map((item) => (
            <MenuItem
              key={item.mode}
              selected={props.mode === item.mode}
              onClick={() => {
                props.onChange(item.mode);
                setAnchorEl(null);
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.label}</ListItemText>
              {props.mode === item.mode ? (
                <CheckRounded fontSize="small" />
              ) : null}
            </MenuItem>
          ))}
        </Menu>
      </span>
    </Tooltip>
  );
}

function CssVarsModeToggle(props: {
  onChange: (newMode: "light" | "dark") => void;
}) {
  const { mode, systemMode, setMode } = useColorScheme();
  const calculatedMode = mode === "system" ? systemMode : mode;
  const openUiKitMode = useOpenUiKitDocsMode(calculatedMode ?? undefined);

  return (
    <ThemeModeButton
      disabled={!calculatedMode}
      mode={openUiKitMode}
      onChange={(newMode) => {
        const muiMode = getMuiDocsMode(newMode);
        setStoredOpenUiKitDocsMode(newMode);
        props.onChange(muiMode);
        setMode(muiMode);
      }}
    />
  );
}

export default function ThemeModeToggle() {
  // TODO replace with useColorScheme once all pages support css vars
  const { mode, systemMode, setMode } = useColorSchemeShim();
  const calculatedMode = mode === "system" ? systemMode : mode;
  const openUiKitMode = useOpenUiKitDocsMode(calculatedMode ?? undefined);

  const theme = useTheme();

  // Server-side hydration
  if (mode === null) {
    return <IconButton color="primary" size="small" disableTouchRipple />;
  }

  // TODO remove this code branch, all pages should be migrated to use CssVarsProvider
  if (!theme.vars) {
    return (
      <ThemeModeButton
        mode={openUiKitMode}
        onChange={(newMode) => {
          setStoredOpenUiKitDocsMode(newMode);
          setMode(getMuiDocsMode(newMode));
        }}
      />
    );
  }

  return <CssVarsModeToggle onChange={setMode} />;
}
