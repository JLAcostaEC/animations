# Animated Grid Pattern

An animated grid pattern component that creates a dynamic background with moving squares that fade in and out.

## Installation

```bash
npx shadcn-svelte@latest add https://animations.sikandarjodd.dev/r/animated-grid-pattern.json
```

## Usage

```svelte
<script lang="ts">
  import { AnimatedGridPattern } from "$lib/components/magic-ui/animated-grid-pattern/animated-grid-pattern.svelte";
</script>

<div class="bg-background relative h-64 w-full overflow-hidden rounded-lg">
  <AnimatedGridPattern
    numSquares={30}
    maxOpacity={0.1}
    duration={3}
    repeatDelay={1}
    class="absolute inset-0"
  />
</div>
```

## Props

| Prop              | Type     | Default | Description                          |
| ----------------- | -------- | ------- | ------------------------------------ |
| `width`           | `number` | `40`    | Width of each grid square            |
| `height`          | `number` | `40`    | Height of each grid square           |
| `x`               | `number` | `-1`    | X offset for the pattern             |
| `y`               | `number` | `-1`    | Y offset for the pattern             |
| `strokeDasharray` | `number` | `0`     | Dash array for the grid lines        |
| `numSquares`      | `number` | `50`    | Number of animated squares           |
| `maxOpacity`      | `number` | `0.5`   | Maximum opacity for animated squares |
| `duration`        | `number` | `4`     | Animation duration in seconds        |
| `repeatDelay`     | `number` | `0.5`   | Delay between animation repeats      |
| `class`           | `string` | `""`    | Additional CSS classes to apply      |

## Examples

### Basic Usage

A simple animated grid pattern with default settings.

### Custom Styling

Customize the grid size, opacity, and animation timing.

### Masked Pattern

Use CSS masking to create interesting visual effects.
