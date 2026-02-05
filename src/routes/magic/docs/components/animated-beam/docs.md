# Animated Beam

The Animated Beam component creates smooth, animated gradient beams between two elements. It uses SVG paths with customizable curvature and gradient animations powered by motion-sv.

## Features

- **Smooth Animations**: Uses motion-sv for performant animations
- **Customizable Paths**: Control curvature and positioning with offset props
- **Gradient Effects**: Animated gradients that move along the beam path
- **Flexible Positioning**: Works with any two elements via refs
- **Responsive**: Automatically adjusts to container and element changes

## Usage

The component requires three main refs:
- `containerRef`: The container element
- `fromRef`: The starting element
- `toRef`: The ending element

```svelte
<script lang="ts">
  import { AnimatedBeam } from "$lib/components/magic-ui/animated-beam";

  let containerRef: HTMLDivElement | null = $state(null);
  let fromRef: HTMLDivElement | null = $state(null);
  let toRef: HTMLDivElement | null = $state(null);
</script>

<div bind:this={containerRef}>
  <div bind:this={fromRef}>Start</div>
  <div bind:this={toRef}>End</div>

  <AnimatedBeam
    {containerRef}
    {fromRef}
    {toRef}
    curvature={0.5}
    gradientStartColor="#ffaa40"
    gradientStopColor="#9c40ff"
  />
</div>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `class` | `string` | `""` | Additional CSS classes |
| `containerRef` | `HTMLElement \| null` | `null` | Container element reference |
| `fromRef` | `HTMLElement \| null` | `null` | Starting element reference |
| `toRef` | `HTMLElement \| null` | `null` | Ending element reference |
| `curvature` | `number` | `0` | Path curvature (0 = straight line) |
| `reverse` | `boolean` | `false` | Reverse animation direction |
| `duration` | `number` | `Math.random() * 3 + 4` | Animation duration in seconds |
| `delay` | `number` | `0` | Animation delay in seconds |
| `pathColor` | `string` | `"gray"` | Base path color |
| `pathWidth` | `number` | `2` | Path stroke width |
| `pathOpacity` | `number` | `0.2` | Path opacity |
| `gradientStartColor` | `string` | `"#ffaa40"` | Gradient start color |
| `gradientStopColor` | `string` | `"#9c40ff"` | Gradient end color |
| `startXOffset` | `number` | `0` | X offset for start position |
| `startYOffset` | `number` | `0` | Y offset for start position |
| `endXOffset` | `number` | `0` | X offset for end position |
| `endYOffset` | `number` | `0` | Y offset for end position |

## Examples

### Basic Usage
Connect two elements with a simple animated beam.

### With Curvature
Add curvature to create curved beam paths.

### Reverse Direction
Reverse the animation direction for different visual effects.

### Custom Colors
Customize gradient colors and path styling.