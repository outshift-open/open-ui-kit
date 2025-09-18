import pkg from "./package.json" assert { type: "json" };
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import terser from "@rollup/plugin-terser";
import replace from "@rollup/plugin-replace";
import url from "@rollup/plugin-url";
import commonjs from "@rollup/plugin-commonjs";
import globals from "rollup-plugin-node-globals";
import builtins from "rollup-plugin-node-builtins";
import svgr from "@svgr/rollup";
import image from "@rollup/plugin-image";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import clear from "rollup-plugin-clear";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import alias from "@rollup/plugin-alias";
import path from "path";
import cleanup from "rollup-plugin-cleanup";
import copy from "rollup-plugin-copy";

const dts = require("rollup-plugin-dts");
const del = require("rollup-plugin-delete");

const makeExternalPredicate = () => {
  const externalArr = [
    ...Object.keys(pkg.peerDependencies || {}),
    ...Object.keys(pkg.dependencies || {}),
    "@mui/system",
  ];
  if (externalArr.length === 0) {
    return () => false;
  }
  const pattern = new RegExp(`^(${externalArr.join("|")})($|/)`);
  return (id) => pattern.test(id);
};

const externalLibs = makeExternalPredicate();
const input = "src/index.ts";
const extensions = ["js", "jsx", "ts", "tsx"];

const commonPlugins = [
  clear({
    targets: ["dist"],
    watch: false,
  }),
  peerDepsExternal(),
  alias({
    entries: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  }),
  nodeResolve({ preferBuiltins: false, browser: true }),
  url({
    include: ["**/*.woff", "**/*.woff2", "**/*.eot", "**/*.svg", "**/*.ttf"],
    limit: Infinity,
    fileName: "[dirname][name][extname]",
  }),
  copy({
    targets: [{ src: "src/fonts/**/*", dest: "dist/fonts" }],
  }),
  replace({
    values: {
      "use client": "",
    },
    preventAssignment: true,
  }),
  commonjs(),
  builtins(),
  globals(),
  cleanup({
    extensions,
    comments: "none",
  }),
  svgr(),
  image(),
];

/** @type {import('rollup').RollupOptions} */
export default [
  {
    external: externalLibs,
    input: input,
    output: [
      {
        file: "dist/index.cjs.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "dist/index.esm.js",
        format: "esm",
        sourcemap: true,
      },
      {
        file: "dist/index.umd.js",
        format: "umd",
        name: "OpenUIKit",
        sourcemap: true,
        globals: {
          react: "React",
          recharts: "recharts",
          "react-dom": "ReactDOM",
          "react-router-dom": "ReactRouterDOM",
          "react/jsx-runtime": "jsxRuntime",
          "@mui/material": "Mui",
          "@mui/icons-material/CheckBoxOutlineBlankRounded":
            "CheckBoxOutlineBlankRoundedIcon",
          "@mui/icons-material/CheckBoxRounded": "CheckBoxRoundedIcon",
          "@mui/icons-material/IndeterminateCheckBoxRounded":
            "IndeterminateCheckBoxRoundedIcon",
          "@mui/icons-material/ChevronRight": "ChevronRight",
          "@mui/icons-material/Search": "SearchIcon",
          "@mui/icons-material/Close": "CloseIcon",
          "@mui/icons-material": "iconsMaterial",
          "material-react-table": "materialReactTable",
          "@mui/material/Menu": "Menu",
          "@mui/material/IconButton": "IconButton",
          "@mui/material/Divider": "Divider",
          "@mui/material/Box": "Box",
          "@mui/material/FormControlLabel": "FormControlLabel",
          "@mui/material/MenuItem": "MenuItem",
          "@mui/material/Typography": "Typography$1",
          "@mui/lab": "MuiLab",
          "@emotion/react": "react",
          "@emotion/styled": "styled",
          "use-debounce": "useDebounce",
          "react-code-blocks": "reactCodeBlocks",
          "@mui/icons-material/ContentCopy": "ContentCopyIcon",
          "@mui/icons-material/DoneRounded": "DoneRoundedIcon",
          "copy-to-clipboard": "copy",
          "@mui/system": "system",
          "framer-motion": "framerMotion",
          "@mui/icons-material/KeyboardArrowDown": "KeyboardArrowDownIcon",
          "@mui/icons-material/ExpandMore": "ExpandMoreIcon",
          "@mui/icons-material/ExpandLess": "ExpandLessIcon",
          "@mui/material/Chip": "Chip",
          "@mui/material/Tooltip": "Tooltip$1",
          "@mui/icons-material/InfoOutlined": "InfoOutlinedIcon",
          "@mui/icons-material/ClearRounded": "ClearRoundedIcon",
          "@mui/icons-material/AddRounded": "AddRoundedIcon",
          "@mui/material/CircularProgress": "CircularProgress$1",
          "react-virtuoso": "reactVirtuoso",
          "@mui/icons-material/CheckCircleOutlined": "CheckCircleOutlinedIcon",
          "@mui/icons-material/ErrorOutlineRounded": "ErrorOutlineRoundedIcon",
          "@mui/icons-material/InfoOutlineRounded": "InfoOutlineRoundedIcon",
          "@mui/icons-material/WarningAmberRounded": "WarningAmberRoundedIcon",
          zustand: "zustand",
          "react-syntax-highlighter": "SyntaxHighlighter",
          "@mui/icons-material/HighlightOff": "HighlightOffIcon",
          "@mui/icons-material/Done": "DoneIcon",
          "@mui/icons-material/Star": "StarIcon",
          "@mui/icons-material/CheckCircle": "CheckCircleIcon",
          "@mui/icons-material/Warning": "WarningIcon",
          "@mui/icons-material/Cancel": "CancelIcon",
          "@mui/icons-material/RemoveCircle": "RemoveCircleIcon",
          "@mui/icons-material/BlockFlipped": "BlockFlippedIcon",
          "@mui/icons-material/Schedule": "ScheduleIcon",
          "@mui/icons-material/Info": "InfoIcon",
          "@mui/icons-material/CheckCircleOutline": "CheckCircleOutlineIcon",
          "@mui/material/AccordionSummary": "MuiAccordionSummary",
          "@mui/icons-material/ArrowForwardIosSharp": "ArrowForwardIosSharp",
          "date-fns": "dateFns",
          "@mui/x-date-pickers/": "MuiXDate",
          "@mui/x-date-pickers/AdapterDayjs": "AdapterDayjs",
          "@mui/x-date-pickers/LocalizationProvider": "LocalizationProvider",
          "@mui/x-date-pickers/DateTimePicker": "DateTimePicker$1",
          "@mui/x-date-pickers/DatePicker": "DatePicker$1",
          "@mui/x-date-pickers/TimePicker": "TimePicker$1",
          "@mui/x-date-pickers/StaticDateTimePicker": "StaticDateTimePicker$1",
          "@mui/x-date-pickers/StaticDatePicker": "StaticDatePicker$1",
          sonner: "sonner",
        },
      },
    ],
    plugins: [
      ...commonPlugins,
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["**/*.stories.tsx"],
      }),
      commonjs({
        include: /node_modules/,
        requireReturnsDefault: "auto",
      }),
      postcss({
        extensions: [".css"],
        minimize: true,
        extract: "typography.css",
      }),
      terser(),
    ],
  },
  {
    input: "./dist/types/index.d.ts",
    external: [/\.css$/],
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [
      dts.default(),
      del.default({
        hook: "buildEnd",
        targets: ["dist/types"],
      }),
    ],
  },
];
