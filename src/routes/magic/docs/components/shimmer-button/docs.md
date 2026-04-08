````markdown
# Shimmer Button

A button component with an animated shimmer effect that slides across the button surface.

## Installation

<Tabs items={["CLI", "Manual"]}>
<Tab value="CLI">

### Using CLI

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/shimmer-button.json
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
  --animate-shimmer-slide: shimmer-slide var(--speed) ease-in-out infinite
    alternate;
  --animate-spin-around: spin-around calc(var(--speed) * 2) infinite linear;

  @keyframes shimmer-slide {
    to {
      transform: translate(calc(100cqw - 100%), 0);
    }
  }

  @keyframes spin-around {
    0% {
      transform: translateZ(0) rotate(0);
    }
    15%,
    35% {
      transform: translateZ(0) rotate(90deg);
    }
    65%,
    85% {
      transform: translateZ(0) rotate(270deg);
    }
    100% {
      transform: translateZ(0) rotate(360deg);
    }
  }
}
```

## Usage

```svelte
<script lang="ts">
  import { ShimmerButton } from "$lib/components/magic/shimmer-button";
</script>

<ShimmerButton>Shimmer Button</ShimmerButton>
```

## Props

| Prop              | Type     | Default              | Description                     |
| ----------------- | -------- | -------------------- | ------------------------------- |
| `class`           | `string` | `""`                 | Additional CSS classes to apply |
| `shimmerColor`    | `string` | `"#ffffff"`          | Color of the shimmer effect     |
| `shimmerSize`     | `string` | `"0.05em"`           | Size of the shimmer cutout      |
| `borderRadius`    | `string` | `"100px"`            | Border radius of the button     |
| `shimmerDuration` | `string` | `"3s"`               | Duration of shimmer animation   |
| `background`      | `string` | `"rgba(0, 0, 0, 1)"` | Background color of the button  |

All standard button HTML attributes are supported.

## Features

- Animated shimmer effect sliding across button
- Customizable shimmer color and speed
- Container query-based sizing
- Blur effect on shimmer sparkles
- Spinning sparkle animations
- Fully customizable styling with CSS variables
- Active state animation

## Examples

### Primary Shimmer Button

```svelte
<ShimmerButton
  background="linear-gradient(to right, #3b82f6, #2563eb)"
  shimmerColor="#60a5fa"
>
  Get Started
</ShimmerButton>
```

### Fast Shimmer

```svelte
<ShimmerButton
  shimmerDuration="1.5s"
  shimmerColor="#fbbf24"
  background="rgba(251, 191, 36, 0.2)"
>
  Quick Shine
</ShimmerButton>
```

### Rounded Shimmer

```svelte
<ShimmerButton borderRadius="12px" class="px-8 py-4 text-lg">
  Rounded Button
</ShimmerButton>
```

### Custom Colors

```svelte
<ShimmerButton
  background="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  shimmerColor="#a78bfa"
  shimmerDuration="2.5s"
>
  Purple Gradient
</ShimmerButton>
```

## Notes

- Uses CSS container queries for responsive sizing
- Shimmer effect alternates direction infinitely
- Includes sparkle elements that spin
- Active state reduces vertical translation
- Supports gradient backgrounds
- Optimized with GPU acceleration
````
