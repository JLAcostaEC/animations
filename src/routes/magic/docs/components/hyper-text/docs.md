````markdown
# Hyper Text

An animated text component that creates a glitch effect by cycling through random characters before revealing the final text.

## Installation

<Tabs items={["CLI", "Manual"]}>
<Tab value="CLI">

### Using CLI

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/hyper-text.json
```

  </Tab>
  <Tab value="Manual">

### Manual Installation

```bash
# Using npm
npm install motion-sv

# Using pnpm
pnpm add motion-sv

# Using yarn
yarn add motion-sv
```

Copy and paste the component source code into your project.

  </Tab>
</Tabs>

## Usage

```svelte
<script lang="ts">
  import { HyperText } from "$lib/components/magic/hyper-text";
</script>

<HyperText text="Hyper Text" class="text-4xl font-bold" />
```

## Props

| Prop             | Type          | Default       | Description                              |
| ---------------- | ------------- | ------------- | ---------------------------------------- |
| `text`           | `string`      | Required      | The text to display                      |
| `class`          | `string`      | `""`          | Additional CSS classes to apply          |
| `duration`       | `number`      | `800`         | Duration of animation in milliseconds    |
| `delay`          | `number`      | `0`           | Delay before animation starts (ms)       |
| `as`             | `ElementType` | `"div"`       | HTML element type (div, span, h1, etc.)  |
| `startOnView`    | `boolean`     | `false`       | Start animation when element in viewport |
| `animateOnHover` | `boolean`     | `true`        | Trigger animation on hover               |
| `characterSet`   | `string[]`    | `A-Z letters` | Array of characters to cycle through     |

## Features

- Glitch-style text reveal effect
- Customizable character set for scrambling
- Hover or viewport-based trigger options
- Adjustable animation speed and delay
- Support for any HTML text element
- Intersection observer support

## Examples

### Auto-play on View

```svelte
<HyperText
  text="Animate on Scroll"
  startOnView={true}
  animateOnHover={false}
  class="text-3xl"
/>
```

### Custom Character Set

```svelte
<HyperText
  text="01010101"
  characterSet={["0", "1"]}
  class="font-mono text-2xl"
/>
```

### Fast Animation

```svelte
<HyperText text="Quick Flash" duration={400} class="text-xl font-semibold" />
```
````
