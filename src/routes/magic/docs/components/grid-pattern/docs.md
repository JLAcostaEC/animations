````markdown
# Grid Pattern

An SVG-based grid pattern background component with support for highlighted squares and customizable grid dimensions.

## Installation

<Tabs items={["CLI", "Manual"]}>
<Tab value="CLI">

### Using CLI

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/grid-pattern.json
```

  </Tab>
  <Tab value="Manual">

### Manual Installation

No additional dependencies required. Copy and paste the component source code into your project.

  </Tab>
</Tabs>

## Usage

```svelte
<script lang="ts">
  import { GridPattern } from "$lib/components/magic/grid-pattern";
</script>

<div class="relative h-[400px] w-full overflow-hidden rounded-lg border">
  <GridPattern
    width={20}
    height={20}
    x={-1}
    y={-1}
    class="stroke-muted-foreground/30"
  />
</div>
```

## Props

| Prop              | Type                      | Default | Description                             |
| ----------------- | ------------------------- | ------- | --------------------------------------- |
| `class`           | `string`                  | `""`    | Additional CSS classes to apply         |
| `width`           | `number`                  | `40`    | The width of each grid cell             |
| `height`          | `number`                  | `40`    | The height of each grid cell            |
| `x`               | `number`                  | `-1`    | The x-offset of the pattern             |
| `y`               | `number`                  | `-1`    | The y-offset of the pattern             |
| `squares`         | `Array<[number, number]>` | `[]`    | Array of [x, y] coordinates for squares |
| `strokeDasharray` | `string`                  | `"0"`   | Stroke dash array for dashed lines      |

## Features

- SVG-based for crisp rendering at any size
- Customizable grid cell dimensions
- Support for highlighted squares at specific coordinates
- Dashed line support
- Lightweight and performant

## Examples

### With Highlighted Squares

```svelte
<GridPattern
  width={20}
  height={20}
  x={-1}
  y={-1}
  squares={[
    [0, 1],
    [1, 3],
    [3, 0],
    [5, 2],
  ]}
  class="stroke-muted-foreground/30 fill-muted/30"
/>
```

### Dashed Grid

```svelte
<GridPattern
  width={30}
  height={30}
  strokeDasharray="4 2"
  class="stroke-muted-foreground/20"
/>
```
````
