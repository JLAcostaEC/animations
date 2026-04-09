````markdown
# Ripple

A component that creates expanding ripple circles with customizable size, opacity, and number of circles.

## Installation

<Tabs items={["CLI", "Manual"]}>
<Tab value="CLI">

### Using CLI

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/ripple.json
```

  </Tab>
  <Tab value="Manual">

### Manual Installation

No additional dependencies required. Copy and paste the component source code into your project.

  </Tab>
</Tabs>

## Tailwind CSS Configuration

Add the following to your `layout.css` or global CSS file:

```css
@theme inline {
  --animate-ripple: ripple var(--duration, 2s) ease calc(var(--i, 0) * 0.2s)
    infinite;

  @keyframes ripple {
    0%,
    100% {
      transform: translate(-50%, -50%) scale(1);
    }
    50% {
      transform: translate(-50%, -50%) scale(0.9);
    }
  }
}
```

## Usage

```svelte
<script lang="ts">
  import { Ripple } from "$lib/components/magic/ripple";
</script>

<div class="relative h-screen w-full">
  <Ripple mainCircleSize={210} numCircles={8} />
</div>
```

## Props

| Prop                | Type     | Default | Description                            |
| ------------------- | -------- | ------- | -------------------------------------- |
| `class`             | `string` | `""`    | Additional CSS classes to apply        |
| `mainCircleSize`    | `number` | `210`   | Size of the innermost circle in pixels |
| `mainCircleOpacity` | `number` | `0.24`  | Opacity of the innermost circle        |
| `numCircles`        | `number` | `8`     | Number of ripple circles to display    |

## Features

- Multiple expanding ripple circles
- Staggered animation delays
- Decreasing opacity for outer circles
- Centered positioning
- Customizable size and count
- Pure CSS animations
- Gradient mask support

## Examples

### Large Ripples

```svelte
<Ripple mainCircleSize={300} numCircles={10} mainCircleOpacity={0.3} />
```

### Subtle Effect

```svelte
<Ripple
  mainCircleSize={150}
  numCircles={5}
  mainCircleOpacity={0.15}
  class="opacity-50"
/>
```

### With Container

```svelte
<div
  class="relative h-[600px] w-full bg-gradient-to-br from-blue-50 to-purple-50"
>
  <Ripple mainCircleSize={250} numCircles={7} />
  <div class="relative z-10 flex h-full items-center justify-center">
    <h1 class="text-6xl font-bold">Content Over Ripples</h1>
  </div>
</div>
```

## Notes

- Each ripple circle increases in size by 70px
- Opacity decreases by 0.03 for each outer circle
- Animation delay increases by 0.06s per circle
- Uses absolute positioning - requires a positioned parent
- Pointer-events disabled for non-interactive overlay
````
