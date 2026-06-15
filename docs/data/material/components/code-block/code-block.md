---
productId: open-ui-kit-core
title: React Code Block component
githubLabel: 'component: code-block'
githubSource: packages/open-ui-kit/src/components/code-block
---

# Code Block

<p class="description">The Open UI Kit Code Block displays snippets with syntax highlighting, copy affordances, optional line numbers, and theme-aware styling.</p>

{{"component": "@mui/internal-core-docs/ComponentLinkHeader"}}

## Introduction

Use Code Block for snippets that users need to read, copy, or compare.
It is useful in installation steps, generated configuration, API examples, and command-line workflows.

{{"demo": "CodeBlockUsage.js", "bg": true}}

## Import

```tsx
import { CodeBlock } from '@open-ui-kit/core';
```

## When to use

Use Code Block for code samples, commands, configuration, logs, or structured text that users need to read or copy.
It is useful in docs, setup flows, developer tools, and troubleshooting surfaces.

Use inline code for short values that do not need their own block.

## Anatomy

A code block includes highlighted content, optional language metadata, optional line numbers, and optional header actions.
Header actions should support the snippet, such as copying or opening a related file.
The surrounding text should explain why the snippet matters before the user reads it.

## Line numbers

Use `showLineNumbers` when the surrounding copy refers to specific lines or when the snippet is long enough to benefit from scanning.
Use `startingLineNumber` when the snippet is excerpted from a larger file.

{{"demo": "CodeBlockLineNumbers.js", "bg": true}}

## Wrapped lines

By default, long lines keep the code block horizontally scrollable.
Set `wrapLongLines` when the snippet is more useful if every value stays visible in the page flow.

{{"demo": "CodeBlockWrapped.js", "bg": true}}

## Header actions

Use `header` for lightweight actions that change the snippet context, such as selecting npm, Yarn, or pnpm instructions.

{{"demo": "CodeBlockHeader.js", "bg": true}}

## Size

Use `size="small"` for compact snippets inside dense panels or helper content.

{{"demo": "CodeBlockSizes.js", "bg": true}}

## Behavior notes

Choose the language explicitly so syntax highlighting and accessibility labels stay accurate.
Use wrapping for commands, JSON, and short config where full lines should stay visible.
Prefer horizontal scrolling for source code where indentation and line breaks carry meaning.

## Props

`CodeBlock` extends `react-syntax-highlighter` props and adds Open UI Kit options.

| Prop | Type | Description |
| --- | --- | --- |
| `text` | `string` | The snippet displayed in the code block and copied by the copy button. |
| `language` | `string` | Syntax language passed to the highlighter. Defaults to JavaScript styling when omitted. |
| `showLineNumbers` | `boolean` | Displays line numbers beside the snippet. |
| `startingLineNumber` | `number` | Sets the first visible line number. |
| `wrapLongLines` | `boolean` | Wraps long lines instead of relying only on horizontal scrolling. |
| `size` | `'small' \| 'medium'` | Changes header, line-number, and code typography density. |
| `header` | `CodeBlockHeaderButton[] \| ReactNode` | Renders a header row above the snippet. |
| `copyButtonProps` | `object` | Passes props to the built-in copy button. |
| `containerProps` | `StackOwnProps` | Passes props to the scrollable code container. |

## Accessibility

Use surrounding headings and labels to explain what the snippet does.
Avoid placing critical instructions only inside comments in the code.
The built-in copy action copies the exact `text` value, so keep placeholders clear and avoid hidden formatting characters.

## Usage guidance

- Keep snippets focused on one task.
- Prefer line numbers for multi-step examples and excerpts.
- Use headers for snippet variants, not for primary page navigation.
- Use `wrapLongLines` for generated commands that users need to inspect.
- Keep secrets and organization-specific values as obvious placeholders.
