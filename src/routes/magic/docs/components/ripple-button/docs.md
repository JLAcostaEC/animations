````markdown
# Ripple Button

A button component with a ripple effect that appears on click, expanding from the click position.

## Installation

<Tabs items={["CLI", "Manual"]}>
<Tab value="CLI">

### Using CLI

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/ripple-button.json
```

  </Tab>
  <Tab value="Manual">

### Manual Installation

```bash
# Using npm
npm install runed

# Using pnpm
pnpm add runed

# Using yarn
yarn add runed
```

Copy and paste the component source code into your project.

  </Tab>
</Tabs>

## Tailwind CSS Configuration

Add the following to your `layout.css` or global CSS file:

```css
@theme inline {
  --animate-rippling: rippling var(--duration) ease-out;

  @keyframes rippling {
    0% {
      opacity: 1;
      transform: scale(0);
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }
}
```

## Usage

```svelte
<script lang="ts">
  import { RippleButton } from "$lib/components/magic/ripple-button";
</script>

<RippleButton rippleColor="#ffffff" duration="600ms">Click Me</RippleButton>
```

## Props

| Prop          | Type     | Default     | Description                      |
| ------------- | -------- | ----------- | -------------------------------- |
| `class`       | `string` | `""`        | Additional CSS classes to apply  |
| `rippleColor` | `string` | `"#ffffff"` | Color of the ripple effect       |
| `duration`    | `string` | `"600ms"`   | Duration of the ripple animation |

All standard button HTML attributes are supported.

## Features

- Click-triggered ripple effect
- Ripple expands from click position
- Customizable ripple color and duration
- Multiple ripples can appear simultaneously
- Automatic cleanup of finished ripples
- Uses Runed for reactive state management
- Overflow handling for contained effect

## Examples

### Primary Button with Ripple

```svelte
<RippleButton
  class="bg-primary px-6 py-3 text-white"
  rippleColor="rgba(255, 255, 255, 0.6)"
>
  Primary Action
</RippleButton>
```

### Fast Ripple

```svelte
<RippleButton
  rippleColor="#3b82f6"
  duration="400ms"
  class="bg-blue-50 text-blue-600"
>
  Quick Ripple
</RippleButton>
```

### Slow Ripple

```svelte
<RippleButton
  rippleColor="rgba(0, 0, 0, 0.2)"
  duration="1000ms"
  class="bg-gray-100 px-8 py-4 text-lg"
>
  Slow Motion
</RippleButton>
```

### With Click Handler

```svelte
<RippleButton
  onclick={() => console.log("Clicked!")}
  rippleColor="#10b981"
  class="bg-green-600 text-white"
>
  Submit
</RippleButton>
```

## Notes

- Ripple position calculated based on click coordinates
- Size calculated to cover the entire button
- Uses CSS animations for smooth scaling and fading
- Ripples are automatically removed after animation completes
- Compatible with all button styles and sizes
````
