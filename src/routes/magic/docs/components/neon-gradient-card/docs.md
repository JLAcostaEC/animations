````markdown
# Neon Gradient Card

A card component with animated neon gradient borders and customizable colors, border size, and radius.

## Installation

<Tabs items={["CLI", "Manual"]}>
<Tab value="CLI">

### Using CLI

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/neon-gradient-card.json
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
  import { NeonGradientCard } from "$lib/components/magic/neon-gradient-card";
</script>

<NeonGradientCard borderSize={2} borderRadius={20}>
  <div class="p-8">
    <h3 class="text-2xl font-bold">Card Title</h3>
    <p>Your content here</p>
  </div>
</NeonGradientCard>
```

## Props

| Prop           | Type              | Default                                           | Description                     |
| -------------- | ----------------- | ------------------------------------------------- | ------------------------------- |
| `class`        | `string`          | `""`                                              | Additional CSS classes to apply |
| `borderSize`   | `number`          | `2`                                               | Border thickness in pixels      |
| `borderRadius` | `number`          | `20`                                              | Border radius in pixels         |
| `neonColors`   | `NeonColorsProps` | `{firstColor: "#ff00aa", secondColor: "#00FFF1"}` | Neon gradient colors            |

### NeonColorsProps

| Property      | Type     | Description           |
| ------------- | -------- | --------------------- |
| `firstColor`  | `string` | First gradient color  |
| `secondColor` | `string` | Second gradient color |

## Features

- Animated neon gradient border effect
- Customizable gradient colors
- Adjustable border thickness and radius
- Responsive to container size changes
- Canvas-based rendering for smooth animations
- Automatic dimension updates

## Examples

### Custom Colors

```svelte
<NeonGradientCard
  neonColors={{ firstColor: "#00ff00", secondColor: "#0000ff" }}
  borderSize={3}
>
  <div class="p-6">Custom green-blue gradient</div>
</NeonGradientCard>
```

### Thick Border

```svelte
<NeonGradientCard borderSize={4} borderRadius={30}>
  <div class="p-10">Thick neon border</div>
</NeonGradientCard>
```

### Purple Theme

```svelte
<NeonGradientCard
  neonColors={{ firstColor: "#9333ea", secondColor: "#ec4899" }}
  class="max-w-md"
>
  <div class="p-8 text-center">
    <h2 class="text-3xl font-bold">Purple Glow</h2>
  </div>
</NeonGradientCard>
```
````
