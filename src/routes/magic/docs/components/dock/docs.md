# Dock

A macOS-style dock component with smooth magnification animation on hover, inspired by the macOS dock.

## Installation

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/dock.json
```

## Usage

```svelte
<script lang="ts">
  import { Dock, DockIcon } from "$lib/components/magic-ui/dock";
  import Home from "@lucide/svelte/icons/home";
  import Search from "@lucide/svelte/icons/search";
  import Settings from "@lucide/svelte/icons/settings";
</script>

<Dock>
  <DockIcon>
    <Home class="size-full" />
  </DockIcon>
  <DockIcon>
    <Search class="size-full" />
  </DockIcon>
  <DockIcon>
    <Settings class="size-full" />
  </DockIcon>
</Dock>
```

## Components

### Dock

The main container that provides context and handles mouse tracking for magnification effects.

### DockIcon

Individual icon wrapper that responds to the dock's magnification context.

## Props

### Dock Props

| Prop                   | Type                            | Default    | Description                                           |
| ---------------------- | ------------------------------- | ---------- | ----------------------------------------------------- |
| `class`                | `string`                        | `""`       | Additional CSS classes to apply.                      |
| `iconSize`             | `number`                        | `40`       | The base size of icons in pixels.                     |
| `iconMagnification`    | `number`                        | `60`       | The magnified size of icons when hovered.             |
| `disableMagnification` | `boolean`                       | `false`    | Disables the magnification effect on hover.           |
| `iconDistance`         | `number`                        | `140`      | The distance in pixels at which magnification starts. |
| `direction`            | `"top" \| "middle" \| "bottom"` | `"middle"` | The alignment direction of icons within the dock.     |
| `children`             | `Snippet`                       | -          | The dock icon children to render inside the dock.     |

### DockIcon Props

| Prop       | Type      | Default | Description                                      |
| ---------- | --------- | ------- | ------------------------------------------------ |
| `class`    | `string`  | `""`    | Additional CSS classes to apply.                 |
| `children` | `Snippet` | -       | The icon content to render inside the dock icon. |

## Examples

### Direction

Control the vertical alignment of icons using the `direction` prop.

```svelte
<Dock direction="top">...</Dock>
<Dock direction="middle">...</Dock>
<Dock direction="bottom">...</Dock>
```

### Custom Magnification

Customize the magnification size and distance.

```svelte
<Dock iconMagnification={60} iconDistance={100}>
  <DockIcon>...</DockIcon>
</Dock>
```

### Disabled Magnification

Disable the magnification effect entirely.

```svelte
<Dock disableMagnification={true}>
  <DockIcon>...</DockIcon>
</Dock>
```
