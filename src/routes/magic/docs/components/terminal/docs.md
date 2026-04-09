````markdown
# Terminal

A terminal-like UI component with typing animations, sequence control, and intersection observer support.

## Installation

<Tabs items={["CLI", "Manual"]}>
<Tab value="CLI">

### Using CLI

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/terminal.json
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
  --animate-blink-cursor: blink-cursor 1.2s step-end infinite;

  @keyframes blink-cursor {
    0%,
    49% {
      opacity: 1;
    }
    50%,
    100% {
      opacity: 0;
    }
  }
}
```

## Usage

```svelte
<script lang="ts">
  import { Terminal, TypingAnimation } from "$lib/components/magic/terminal";
</script>

<Terminal>
  <TypingAnimation text="npm install svelte" />
  <TypingAnimation text="npm run dev" />
</Terminal>
```

## Components

### Terminal

Main container component for terminal UI.

| Prop          | Type      | Default | Description                                   |
| ------------- | --------- | ------- | --------------------------------------------- |
| `class`       | `string`  | `""`    | Additional CSS classes to apply               |
| `sequence`    | `boolean` | `true`  | Whether to sequence typing animations         |
| `startOnView` | `boolean` | `true`  | Start animation when terminal enters viewport |

### TypingAnimation

Individual typing animation component for terminal lines.

| Prop          | Type      | Default  | Description                     |
| ------------- | --------- | -------- | ------------------------------- |
| `text`        | `string`  | Required | The text to type out            |
| `typingSpeed` | `number`  | `50`     | Speed of typing in milliseconds |
| `startDelay`  | `number`  | `0`      | Delay before starting (ms)      |
| `cursor`      | `boolean` | `true`   | Show blinking cursor            |
| `cursorChar`  | `string`  | `"▊"`    | Character to use for cursor     |
| `class`       | `string`  | `""`     | Additional CSS classes          |

## Features

- Terminal-style UI with typing effect
- Sequential or parallel typing animations
- Intersection observer support
- Customizable typing speed per line
- Blinking cursor effect
- Context-based animation sequencing
- Start delay support

## Examples

### Basic Terminal

```svelte
<Terminal class="rounded-lg bg-black p-4 font-mono text-green-400">
  <TypingAnimation text="$ npm create svelte@latest" />
  <TypingAnimation text="$ cd my-project" />
  <TypingAnimation text="$ npm install" />
  <TypingAnimation text="$ npm run dev" />
</Terminal>
```

### Without Sequence

```svelte
<Terminal sequence={false}>
  <TypingAnimation text="Line 1 types immediately" />
  <TypingAnimation text="Line 2 also types immediately" />
</Terminal>
```

### Custom Typing Speed

```svelte
<Terminal>
  <TypingAnimation text="Fast typing" typingSpeed={30} />
  <TypingAnimation text="Slow typing..." typingSpeed={100} />
</Terminal>
```

### With Delays

```svelte
<Terminal>
  <TypingAnimation text="First command" />
  <TypingAnimation text="Second command" startDelay={500} />
  <TypingAnimation text="Third command" startDelay={1000} />
</Terminal>
```

### Custom Cursor

```svelte
<Terminal>
  <TypingAnimation text="Custom cursor" cursorChar="|" />
  <TypingAnimation text="No cursor" cursor={false} />
</Terminal>
```

## Notes

- Uses Runed library for reactive state management
- Automatically sequences animations when sequence=true
- Intersection observer prevents animations until visible
- Each TypingAnimation can have its own speed and delay
- Cursor blinks using CSS animation
- Default cursor character is a block (▊)
````
