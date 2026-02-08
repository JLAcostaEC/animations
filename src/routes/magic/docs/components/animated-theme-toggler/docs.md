# Animated Theme Toggler

A smooth animated theme toggler that uses the View Transition API to create a circular reveal effect when switching between light and dark themes.

## Installation

```bash
npx shadcn-svelte@latest add https://animations.sikandarjodd.dev/r/animated-theme-toggler.json
```

## Usage

```svelte
<script lang="ts">
  import { AnimatedThemeToggler } from "$lib/components/magic-ui/animated-theme-toggler";
</script>

<AnimatedThemeToggler />
```

## Props

| Prop       | Type     | Default | Description                               |
| ---------- | -------- | ------- | ----------------------------------------- |
| `class`    | `string` | `""`    | Additional CSS classes to apply           |
| `duration` | `number` | `400`   | Duration of the animation in milliseconds |

## Features

- **Smooth Transitions**: Uses the View Transition API for seamless theme switching
- **Circular Reveal**: Creates a beautiful circular animation expanding from the button
- **Automatic Detection**: Detects current theme from document class
- **Persistent Storage**: Saves theme preference to localStorage
- **Fallback Support**: Works on browsers without View Transition API support
- **Accessibility**: Includes screen reader support with proper ARIA labels

## Browser Support

The component uses the View Transition API, which is supported in modern browsers. For browsers without support, it falls back to instant theme switching without animation.
