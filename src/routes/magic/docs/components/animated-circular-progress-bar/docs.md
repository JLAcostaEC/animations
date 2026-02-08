# Animated Circular Progress Bar

The Animated Circular Progress Bar component displays progress in a circular format with smooth animations. It features customizable colors for the progress and remaining portions, and automatically calculates the percentage based on min, max, and current values.

## Features

- **Circular Design**: Displays progress in a visually appealing circular format
- **Animated Transitions**: Smooth animations when the value changes
- **Customizable Colors**: Separate colors for progress and remaining portions
- **Flexible Range**: Supports custom min and max values
- **Responsive**: Scales appropriately with CSS sizing

## Usage

The component requires a `value` and color props for the primary and secondary gauges.

```svelte
<script>
  import { AnimatedCircularProgressBar } from "$lib/components/magic-ui/animated-circular-progress-bar";
</script>

<AnimatedCircularProgressBar
  value={75}
  gaugePrimaryColor="hsl(142 76% 36%)"
  gaugeSecondaryColor="hsl(220 70% 50%)"
/>
```

## Props

- `value`: The current progress value (required)
- `max`: Maximum value (default: 100)
- `min`: Minimum value (default: 0)
- `gaugePrimaryColor`: Color for the progress portion (required)
- `gaugeSecondaryColor`: Color for the remaining portion (required)
- `class`: Additional CSS classes

## Examples

### Basic Usage

```svelte
<AnimatedCircularProgressBar
  value={50}
  gaugePrimaryColor="#10b981"
  gaugeSecondaryColor="#e5e7eb"
/>
```

### Custom Range

```svelte
<AnimatedCircularProgressBar
  min={0}
  max={200}
  value={120}
  gaugePrimaryColor="#3b82f6"
  gaugeSecondaryColor="#d1d5db"
/>
```

### With Custom Styling

```svelte
<AnimatedCircularProgressBar
  value={85}
  gaugePrimaryColor="#f59e0b"
  gaugeSecondaryColor="#fef3c7"
  class="h-32 w-32"
/>
```
