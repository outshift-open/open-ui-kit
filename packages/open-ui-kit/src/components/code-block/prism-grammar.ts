/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { refractor } from "refractor/all";

// The Figma "Code Block" frame paints two roles that refractor's stock
// JavaScript grammar does not tokenize:
//
//   Accent/G  the binding name in a declaration — `const a = ...`
//   Accent/H  a bare identifier reference — `x`, `b`, `console`
//
// Both arrive as untokenized text, so without these patterns they inherit the
// punctuation color and the two roles never reach the screen. Everything else
// the frame specifies already has a refractor token: `control-flow` carries
// `return`/`await`, `arrow` carries `=>`, and `parameter` carries declaration-
// site parameters. Those only needed stylesheet keys, which live in `styles`.
//
// This mutates the refractor singleton that `react-syntax-highlighter`'s
// `Prism` export is bound to — there is one copy in the tree, and both reach it
// through the same `refractor/all` specifier. Guarded so repeated imports from
// multiple entry points apply it once.
let patched = false;

export const patchJavaScriptGrammar = (): void => {
  if (patched) return;
  patched = true;

  // Inserted before `keyword` so the patterns that precede it still win:
  // `function-variable` keeps `const add = function` on Accent/F, and
  // `class-name` keeps `Promise` on Accent/J.
  refractor.languages.insertBefore("javascript", "keyword", {
    "declaration-name": {
      pattern: /((?:\b(?:const|let|var)\s+))[A-Za-z_$][\w$]*/,
      lookbehind: true,
    },
  });

  // `Grammar` types only the tokens prismjs ships, so reach the rest through
  // an index signature rather than widening the upstream type.
  const javascript = refractor.languages.javascript as Record<string, unknown>;

  // Appended last, so it only claims identifiers no earlier pattern matched.
  javascript.identifier = /\b[A-Za-z_$][\w$]*\b/;

  // The frame paints `console` as an ordinary identifier reference. refractor
  // has a dedicated `console` token that nests `class-name`; since
  // react-syntax-highlighter resolves overlapping classes in array order and
  // `class-name` lands last, a `console` stylesheet key could not outrank it.
  // Removing the token lets `console` fall through to `identifier` instead.
  delete javascript.console;
};

patchJavaScriptGrammar();
