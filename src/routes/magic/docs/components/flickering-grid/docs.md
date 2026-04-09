````markdown
# Flickering Grid

An animated flickering grid pattern component that creates a dynamic canvas-based background with randomly flickering squares.

## Installation

<Tabs items={["CLI", "Manual"]}>
<Tab value="CLI">

### Using CLI

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/flickering-grid.json
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
  import { FlickeringGrid } from "$lib/components/magic/flickering-grid";
</script>

<div class="relative size-150 w-full overflow-hidden rounded-lg border">
  <FlickeringGrid
    class="relative inset-0 z-0"
    squareSize={4}
    gridGap={6}
    color="#60A5FA"
    maxOpacity={0.5}
    flickerChance={0.1}
  />
</div>
```

## Props

| Prop            | Type     | Default          | Description                          |
| --------------- | -------- | ---------------- | ------------------------------------ |
| `class`         | `string` | `""`             | Additional CSS classes to apply      |
| `squareSize`    | `number` | `4`              | The size of each square in the grid  |
| `gridGap`       | `number` | `6`              | The gap between squares in the grid  |
| `flickerChance` | `number` | `0.3`            | The chance of each square flickering |
| `color`         | `string` | `"rgb(0, 0, 0)"` | The color of the squares             |
| `width`         | `number` | `undefined`      | The width of the grid                |
| `height`        | `number` | `undefined`      | The height of the grid               |
| `maxOpacity`    | `number` | `0.3`            | The maximum opacity of the squares   |

## Features

- Canvas-based rendering for smooth performance
- Customizable grid dimensions and square sizes
- Adjustable flicker frequency and intensity
- Intersection observer support for performance optimization
- Responsive sizing
- Device pixel ratio support for sharp rendering

## Examples

See the examples section for different configurations and use cases.
````
