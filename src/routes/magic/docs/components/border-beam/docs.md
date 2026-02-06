# Border Beam

A component for creating animated border beam effects around elements with customizable gradients, duration, and direction.

## Installation

```bash
npx shadcn-svelte@latest add https://animations.sikandarjodd.dev/r/border-beam.json
```

## Usage

```svelte
<script lang="ts">
  import { BorderBeam } from "$lib/components/magic-ui/border-beam";
</script>

<div class="relative overflow-hidden rounded-lg border">
  <!-- Your content here -->
  <BorderBeam />
</div>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `50` | The size of the border beam in pixels |
| `duration` | `number` | `6` | The duration of the animation in seconds |
| `delay` | `number` | `0` | The delay before the animation starts in seconds |
| `colorFrom` | `string` | `"#ffaa40"` | The starting color of the gradient |
| `colorTo` | `string` | `"#9c40ff"` | The ending color of the gradient |
| `transition` | `Transition` | `undefined` | Custom motion transition configuration |
| `class` | `string` | `undefined` | Additional CSS classes to apply |
| `style` | `string` | `undefined` | Additional inline styles |
| `reverse` | `boolean` | `false` | Whether to reverse the animation direction |
| `initialOffset` | `number` | `0` | The initial offset position (0-100) |
| `borderWidth` | `number` | `1` | The border width of the beam in pixels |

## Examples

### Basic Usage

A simple border beam effect on a card component.

### Custom Colors

Customize the gradient colors of the border beam.

### Reverse Animation

Reverse the direction of the border beam animation.

### Custom Duration

Adjust the speed of the border beam animation.
