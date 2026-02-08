# Typing Animation

A customizable typing animation component that creates typewriter effects with support for single text, multiple words, various cursor styles, and comprehensive animation controls.

## Installation

<Tabs items={["CLI", "Manual"]}>
<Tab value="CLI">

```bash
npx shadcn-svelte@latest add https://animations.sikandarjodd.dev/r/typing-animation.json
```

</Tab>
<Tab value="Manual">

**1. Install dependencies:**

```bash
pnpm add motion-sv runed
```

**2. Add utility function:**

```ts title="lib/utils.ts"
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

**3. Add the cursor blink animation to your `tailwind.config.js`:**

```js title="tailwind.config.js"
module.exports = {
  theme: {
    extend: {
      animation: {
        "blink-cursor": "blink-cursor 1s step-end infinite",
      },
      keyframes: {
        "blink-cursor": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
};
```

**4. Copy the component code:**

Copy the `typing-animation.svelte` component into your project at `$lib/components/magic-ui/typing-animation/`.

</Tab>
</Tabs>

## Usage

### Basic Usage

```svelte
<script lang="ts">
  import { TypingAnimation } from "$lib/components/magic-ui/typing-animation";
</script>

<TypingAnimation content="Hello World! 👋" />
```

### Multiple Words

```svelte
<TypingAnimation words={["Design", "Build", "Ship"]} loop />
```

### Custom Styling

```svelte
<TypingAnimation
  words={["Fast typing", "Slow delete"]}
  typeSpeed={50}
  deleteSpeed={150}
  pauseDelay={2000}
  loop
  class="text-primary text-4xl font-bold"
/>
```

## Props

| Prop          | Type                                | Default         | Description                                                          |
| ------------- | ----------------------------------- | --------------- | -------------------------------------------------------------------- |
| `content`     | `string`                            | `undefined`     | Single text string to type (use this OR words)                       |
| `words`       | `string[]`                          | `undefined`     | Array of words to cycle through (use this OR content)                |
| `class`       | `string`                            | `""`            | Additional CSS classes to apply                                      |
| `duration`    | `number`                            | `100`           | Default duration for typing speed (ms per character)                 |
| `typeSpeed`   | `number`                            | `duration`      | Speed for typing characters (ms per character)                       |
| `deleteSpeed` | `number`                            | `typeSpeed / 2` | Speed for deleting characters (ms per character)                     |
| `delay`       | `number`                            | `0`             | Initial delay before animation starts (ms)                           |
| `pauseDelay`  | `number`                            | `1000`          | Delay between typing and deleting (ms)                               |
| `loop`        | `boolean`                           | `false`         | Whether to loop the animation continuously                           |
| `startOnView` | `boolean`                           | `true`          | Start animation when element enters viewport                         |
| `showCursor`  | `boolean`                           | `true`          | Show the typing cursor                                               |
| `blinkCursor` | `boolean`                           | `true`          | Make the cursor blink during pause                                   |
| `cursorStyle` | `'line' \| 'block' \| 'underscore'` | `'line'`        | Style of the cursor (`'line'`: \|, `'block'`: ▌, `'underscore'`: \_) |

## Examples

### Cursor Blinking

Control whether the cursor blinks or remains static during the pause phase. This is particularly useful for different visual effects.

### Cursor Style

Choose between three cursor styles: line (\|), block (▌), or underscore (\_). Different styles can match your design aesthetic.

### Single Play

Set `loop={false}` to play the animation once without repeating. Perfect for one-time effects or introductions.

### Custom Speed

Customize the typing and deleting speeds independently to create unique animation rhythms. Make typing fast and deleting slow, or vice versa.

### Multiple Words with Emojis

The component supports emojis and special characters. Create engaging animations by cycling through words with emojis.

### Start On View

Control when the animation starts. Use `startOnView={true}` to trigger the animation only when the element enters the viewport, perfect for scroll-based animations.
