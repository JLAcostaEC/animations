````markdown
# Pulsating Button

A button component with a pulsating ring effect that expands and fades around the button.

## Installation

<Tabs items={["CLI", "Manual"]}>
<Tab value="CLI">

### Using CLI

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/pulsating-button.json
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
  --animate-pulse-ring: pulse-ring var(--duration) ease-out infinite;

  @keyframes pulse-ring {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    100% {
      box-shadow: 0 0 0 8px transparent;
    }
  }
}
```

## Usage

```svelte
<script lang="ts">
  import { PulsatingButton } from "$lib/components/magic/pulsating-button";
</script>

<PulsatingButton pulseColor="#808080" duration="1.5s">
  Click Me
</PulsatingButton>
```

## Props

| Prop         | Type     | Default     | Description                     |
| ------------ | -------- | ----------- | ------------------------------- |
| `class`      | `string` | `""`        | Additional CSS classes to apply |
| `pulseColor` | `string` | `"#808080"` | Color of the pulsating ring     |
| `duration`   | `string` | `"1.5s"`    | Duration of one pulse cycle     |

All standard button HTML attributes are supported.

## Features

- Smooth pulsating ring animation
- Customizable pulse color and duration
- CSS-based animation for performance
- Fully accessible button element
- Works well with any button style

## Examples

### Primary Button

```svelte
<PulsatingButton
  class="bg-primary text-white"
  pulseColor="#3b82f6"
  duration="2s"
>
  Get Started
</PulsatingButton>
```

### Fast Pulse

```svelte
<PulsatingButton
  pulseColor="#10b981"
  duration="1s"
  class="bg-green-600 text-white"
>
  Success
</PulsatingButton>
```

### Slow Pulse

```svelte
<PulsatingButton
  pulseColor="#ef4444"
  duration="3s"
  class="bg-red-600 px-8 py-4 text-lg text-white"
>
  Alert
</PulsatingButton>
```

## Notes

- The pulse animation is infinite and starts automatically
- Pulse ring expands from 0 to 8px around the button
- Uses box-shadow for the pulsating effect
- Custom CSS properties for easy theming
````
