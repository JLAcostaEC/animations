````markdown
# Line Shadow Text

A text component with an animated diagonal line shadow effect that moves across the text.

## Installation

<Tabs items={["CLI", "Manual"]}>
<Tab value="CLI">

### Using CLI

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/line-shadow-text.json
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

## Tailwind CSS Configuration

Add the following to your `layout.css` or global CSS file:

```css
@theme inline {
  --animate-line-shadow: line-shadow 15s linear infinite;

  @keyframes line-shadow {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% -100%;
    }
  }
}
```

## Usage

```svelte
<script lang="ts">
  import { LineShadowText } from "$lib/components/magic/line-shadow-text";
</script>

<LineShadowText
  content="Animated Shadow"
  class="text-6xl font-bold"
  shadowColor="black"
/>
```

## Props

| Prop          | Type          | Default   | Description                             |
| ------------- | ------------- | --------- | --------------------------------------- |
| `content`     | `string`      | Required  | The text content to display             |
| `class`       | `string`      | `""`      | Additional CSS classes to apply         |
| `shadowColor` | `string`      | `"black"` | Color of the shadow effect              |
| `as`          | `ElementType` | `"span"`  | HTML element type (span, div, h1, etc.) |

## Features

- Animated diagonal line shadow effect
- Customizable shadow color
- Support for any HTML text element
- Pure CSS animation for performance
- Configurable typography

## Examples

### Large Heading with Shadow

```svelte
<LineShadowText
  content="Hello World"
  as="h1"
  class="text-8xl font-black"
  shadowColor="#333"
/>
```

### Colored Shadow

```svelte
<LineShadowText
  content="Gradient Text"
  class="text-5xl"
  shadowColor="#ff0066"
/>
```

### Paragraph Text

```svelte
<LineShadowText
  content="Animated paragraph text with moving shadow."
  as="p"
  class="text-2xl"
/>
```
````
