# Dot Pattern

A customizable dot pattern background component with optional glow animations and mask effects, perfect for creating modern, dynamic backgrounds.

## Features

- **Customizable Grid**: Control spacing, size, and positioning of dots
- **Glow Animation**: Optional pulsing glow effect for visual interest
- **Mask Support**: Works with CSS masks for creative effects
- **Responsive**: Automatically adjusts to container size
- **Performant**: Uses motion-sv for smooth animations
- **SVG-Based**: Clean, scalable vector graphics

## Installation

```bash
npx shadcn-svelte@latest add https://animations.sikandarjodd.dev/r/dot-pattern.json
```

## Usage

Basic usage with default settings:

```svelte
<script lang="ts">
  import { DotPattern } from "$lib/components/magic-ui/dot-pattern";
</script>

<div class="relative h-[400px]">
  <DotPattern />
</div>
```

With custom spacing and glow effect:

```svelte
<script lang="ts">
  import { DotPattern } from "$lib/components/magic-ui/dot-pattern";
  import { cn } from "$lib/utils";
</script>

<div class="relative h-[400px]">
  <DotPattern
    width={20}
    height={20}
    cx={1}
    cy={1}
    cr={1}
    glow={true}
    class={cn(
      "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
    )}
  />
</div>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | `number` | `16` | Horizontal spacing between dots |
| `height` | `number` | `16` | Vertical spacing between dots |
| `x` | `number` | `0` | X-offset of the entire pattern |
| `y` | `number` | `0` | Y-offset of the entire pattern |
| `cx` | `number` | `1` | X-offset of individual dots |
| `cy` | `number` | `1` | Y-offset of individual dots |
| `cr` | `number` | `1` | Radius of each dot |
| `glow` | `boolean` | `false` | Enable glowing animation effect |
| `class` | `string` | `""` | Additional CSS classes |

## Examples

### Linear Gradient Mask
Create a fading effect using a linear gradient mask.

### Glow Effect
Add an animated pulsing glow to dots for a dynamic background.

## Tips

- Use CSS mask-image for creative reveal effects
- Combine with other components for layered backgrounds
- Adjust spacing and size for different visual densities
- The glow effect works best with darker backgrounds
