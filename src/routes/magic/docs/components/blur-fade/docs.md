# Blur Fade

A component that animates content with blur and fade effects, supporting directional movement and intersection observer triggering.

## Installation

```bash
npx shadcn-svelte@latest add https://animations.sikandarjodd.dev/r/blur-fade.json
```

## Usage

```svelte
<script lang="ts">
  import { BlurFade } from "$lib/components/magic-ui/blur-fade";
</script>

<BlurFade delay={0.2}>
  <!-- Your content here -->
</BlurFade>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `Snippet` | - | The content to animate |
| `class` | `string` | `""` | Additional CSS classes to apply |
| `variant` | `Variants` | - | Custom animation variants |
| `duration` | `number` | `0.4` | Animation duration in seconds |
| `delay` | `number` | `0` | Animation delay in seconds |
| `offset` | `number` | `6` | Movement offset in pixels |
| `direction` | `"up" \| "down" \| "left" \| "right"` | `"down"` | Animation direction |
| `inView` | `boolean` | `false` | Whether to trigger animation on intersection |
| `inViewMargin` | `string` | `"-50px"` | Intersection observer margin |
| `blur` | `string` | `"6px"` | Blur amount |

## Examples

### Basic Usage

Simple blur fade animation with delay.

### Custom Blur Amount

Different blur intensities for various effects.

### Image Gallery

Using inView prop for staggered animations in a gallery.
