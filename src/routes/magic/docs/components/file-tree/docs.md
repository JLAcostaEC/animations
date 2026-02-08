# File Tree

An interactive file tree component with expandable folders, selectable files, and smooth animations powered by motion-sv.

## Features

- **Interactive File Explorer**: Create intuitive file system interfaces
- **Smooth Animations**: Folder expansion with smooth height animations
- **Customizable Icons**: Support for custom folder and file icons
- **Selectable Items**: Built-in selection state management
- **RTL Support**: Right-to-left text direction support
- **Indicator Lines**: Visual connection lines between tree levels
- **Collapse All/Expand All**: Utility component for bulk operations

## Installation

```bash
npx shadcn-svelte@latest add https://animations.sikandarjodd.dev/r/file-tree.json
```

## Usage

The File Tree component consists of four main parts:

- `Tree`: The root container
- `Folder`: A collapsible folder component
- `File`: A selectable file component
- `CollapseButton`: A utility button to expand/collapse all folders

```svelte
<script lang="ts">
  import {
    Tree,
    Folder,
    File,
    CollapseButton,
    type TreeViewElement,
  } from "$lib/components/magic-ui/file-tree";

  const elements: TreeViewElement[] = [
    {
      id: "1",
      name: "src",
      children: [
        {
          id: "2",
          name: "components",
          children: [
            { id: "3", name: "App.svelte" },
            { id: "4", name: "Header.svelte" },
          ],
        },
        { id: "5", name: "routes" },
      ],
    },
  ];
</script>

<Tree {elements} initialSelectedId="3">
  <Folder element="src" value="1">
    <Folder element="components" value="2">
      <File value="3">App.svelte</File>
      <File value="4">Header.svelte</File>
    </Folder>
    <Folder element="routes" value="5" />
  </Folder>
</Tree>
```

## Props

### Tree

| Prop                   | Type                | Default     | Description                 |
| ---------------------- | ------------------- | ----------- | --------------------------- | -------------- |
| `initialSelectedId`    | `string`            | `undefined` | Initial selected item ID    |
| `initialExpandedItems` | `string[]`          | `[]`        | Initial expanded folder IDs |
| `elements`             | `TreeViewElement[]` | `undefined` | Tree structure data         |
| `indicator`            | `boolean`           | `true`      | Show visual indicator lines |
| `dir`                  | `''rtl''            | ''ltr''`    | `''ltr''`                   | Text direction |
| `class`                | `string`            | `""`        | Additional CSS classes      |

### Folder

| Prop           | Type      | Default  | Description                  |
| -------------- | --------- | -------- | ---------------------------- |
| `element`      | `string`  | required | Folder name/label            |
| `value`        | `string`  | required | Unique identifier            |
| `isSelectable` | `boolean` | `true`   | Whether folder is selectable |
| `class`        | `string`  | `""`     | Additional CSS classes       |

### File

| Prop           | Type      | Default  | Description                |
| -------------- | --------- | -------- | -------------------------- |
| `value`        | `string`  | required | Unique identifier          |
| `isSelectable` | `boolean` | `true`   | Whether file is selectable |
| `class`        | `string`  | `""`     | Additional CSS classes     |

### CollapseButton

| Prop        | Type                | Default  | Description                    |
| ----------- | ------------------- | -------- | ------------------------------ |
| `elements`  | `TreeViewElement[]` | required | Tree elements to manage        |
| `expandAll` | `boolean`           | `false`  | Whether to expand all on mount |
| `class`     | `string`            | `""`     | Additional CSS classes         |

## Types

```typescript
type TreeViewElement = {
  id: string;
  name: string;
  isSelectable?: boolean;
  children?: TreeViewElement[];
};
```
