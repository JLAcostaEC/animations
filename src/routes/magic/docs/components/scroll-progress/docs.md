````markdown
# Scroll Progress

A fixed progress bar component that indicates page scroll progress with a gradient color effect.

## Installation

<Tabs items={["CLI", "Manual"]}>
<Tab value="CLI">

### Using CLI

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/scroll-progress.json
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
  import { ScrollProgress } from "$lib/components/magic/scroll-progress";
</script>

<ScrollProgress />
```

## Props

| Prop    | Type     | Default | Description                     |
| ------- | -------- | ------- | ------------------------------- |
| `class` | `string` | `""`    | Additional CSS classes to apply |

## Features

- Automatically tracks page scroll position
- Smooth animation with scaleX transform
- Fixed positioning at top of viewport
- Gradient color effect (purple to pink to orange)
- High z-index for visibility
- Uses motion-sv useScroll hook
- Origin set to top-left for proper scaling

## Examples

### Default Usage

```svelte
<ScrollProgress />

<div class="min-h-[200vh]">
  <!-- Your long content here -->
</div>
```

### Custom Styling

```svelte
<ScrollProgress class="h-2 from-blue-500 via-cyan-500 to-teal-500" />
```

### With Custom Height

```svelte
<ScrollProgress class="h-1.5 shadow-lg" />
```

## Notes

- The component is fixed to the top of the viewport
- Uses scaleX transform for smooth progress indication
- Default gradient: purple (#A97CF8) → pink (#F38CB8) → orange (#FDCC92)
- Height is set to h-1 (4px) by default
- Z-index set to 50 for proper stacking
- Uses useScroll from motion-sv for scroll tracking
````
