````markdown
# Word Rotate

A component that cycles through an array of words with smooth fade and slide animations between transitions.

## Installation

<Tabs items={["CLI", "Manual"]}>
<Tab value="CLI">

### Using CLI

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/word-rotate.json
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
  import { WordRotate } from "$lib/components/magic/word-rotate";
</script>

<WordRotate words={["Fast", "Modern", "Beautiful", "Simple"]} />
```

## Props

| Prop          | Type          | Default                                | Description                            |
| ------------- | ------------- | -------------------------------------- | -------------------------------------- |
| `words`       | `string[]`    | Required                               | Array of words to rotate through       |
| `duration`    | `number`      | `2500`                                 | Duration each word stays visible (ms)  |
| `class`       | `string`      | `""`                                   | Additional CSS classes to apply        |
| `motionProps` | `MotionProps` | `{initial, animate, exit, transition}` | Custom motion animation properties     |
| `as`          | `ElementType` | `"h1"`                                 | HTML element type (h1, h2, span, etc.) |

### Default Motion Props

```typescript
{
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
  transition: { duration: 0.25, ease: "easeOut" }
}
```

## Features

- Smooth word rotation with fade and slide
- Customizable transition duration
- AnimatePresence for enter/exit animations
- Configurable motion properties
- Support for any HTML text element
- Infinite cycling through word array
- Automatic cleanup on unmount

## Examples

### Basic Usage

```svelte
<WordRotate
  words={["Innovation", "Excellence", "Quality"]}
  class="text-primary text-4xl font-bold"
/>
```

### Fast Rotation

```svelte
<WordRotate
  words={["Quick", "Fast", "Rapid", "Swift"]}
  duration={1500}
  class="text-3xl"
/>
```

### Slow Rotation

```svelte
<WordRotate
  words={["Patience", "Calm", "Peace"]}
  duration={4000}
  class="text-5xl font-light"
/>
```

### Custom Element

```svelte
<WordRotate
  words={["Hello", "Bonjour", "Hola"]}
  as="span"
  class="inline-block text-2xl"
/>
```

### Custom Motion

```svelte
<WordRotate
  words={["Slide", "In", "Out"]}
  motionProps={{
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
    transition: { duration: 0.5 },
  }}
/>
```

## Notes

- Uses setInterval for word rotation
- AnimatePresence handles smooth transitions
- Overflow hidden prevents layout shifts
- Py-2 padding prevents clipping during animation
- Default animations: slide up on enter, slide down on exit
- Interval automatically clears on component unmount
- Word index cycles back to 0 after reaching the end
````
