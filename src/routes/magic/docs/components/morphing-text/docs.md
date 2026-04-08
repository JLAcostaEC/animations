````markdown
# Morphing Text

A text component that smoothly morphs between multiple text strings with a blur transition effect.

## Installation

<Tabs items={["CLI", "Manual"]}>
<Tab value="CLI">

### Using CLI

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/morphing-text.json
```

  </Tab>
  <Tab value="Manual">

### Manual Installation

No additional dependencies required. Copy and paste the component source code into your project.

  </Tab>
</Tabs>

## Usage

```svelte
<script lang="ts">
  import { MorphingText } from "$lib/components/magic/morphing-text";
</script>

<MorphingText
  texts={["Hello", "World", "Morphing", "Text"]}
  class="text-4xl font-bold"
/>
```

## Props

| Prop    | Type       | Default  | Description                            |
| ------- | ---------- | -------- | -------------------------------------- |
| `texts` | `string[]` | Required | Array of text strings to morph between |
| `class` | `string`   | `""`     | Additional CSS classes to apply        |

## Features

- Smooth morphing transition between texts
- Automatic cycling through text array
- Blur effect during transitions
- Customizable morph and cooldown timing
- Lightweight vanilla implementation
- No external animation libraries required

## Examples

### Multiple Words

```svelte
<MorphingText
  texts={["Innovation", "Creativity", "Excellence", "Quality"]}
  class="text-primary text-6xl font-black"
/>
```

### Short Phrases

```svelte
<MorphingText
  texts={["Welcome", "Bienvenue", "Bienvenido", "Willkommen"]}
  class="text-5xl"
/>
```

### Brand Messages

```svelte
<MorphingText
  texts={["Build Fast", "Ship Faster", "Scale Better"]}
  class="text-7xl font-bold"
/>
```

## Notes

- The component uses requestAnimationFrame for smooth animations
- Morph time is set to 1.5 seconds with a 0.5 second cooldown
- Automatically handles text length differences
- Filter and opacity transitions create the morphing effect
````
