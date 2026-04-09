````markdown
# Warp Background

A 3D perspective grid background with animated light beams that create a warping effect.

## Installation

<Tabs items={["CLI", "Manual"]}>
<Tab value="CLI">

### Using CLI

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/warp-background.json
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
  import { WarpBackground } from "$lib/components/magic/warp-background";
</script>

<WarpBackground>
  <div class="z-10 text-center">
    <h1 class="text-6xl font-bold">Your Content</h1>
  </div>
</WarpBackground>
```

## Props

| Prop           | Type     | Default           | Description                                |
| -------------- | -------- | ----------------- | ------------------------------------------ |
| `class`        | `string` | `""`              | Additional CSS classes to apply            |
| `perspective`  | `number` | `100`             | 3D perspective strength (lower = stronger) |
| `beamsPerSide` | `number` | `3`               | Number of light beams per side             |
| `beamSize`     | `number` | `5`               | Size of each beam (% of grid)              |
| `beamDelayMax` | `number` | `3`               | Maximum delay before beam starts (s)       |
| `beamDelayMin` | `number` | `0`               | Minimum delay before beam starts (s)       |
| `beamDuration` | `number` | `3`               | Duration of beam animation (s)             |
| `gridColor`    | `string` | `"var(--border)"` | Color of the grid lines                    |

## Features

- 3D perspective warped grid background
- Animated light beams moving across grid
- Customizable perspective strength
- Adjustable beam count and timing
- Random beam positioning
- Infinite loop animations
- Content slot for foreground elements
- Responsive grid sizing

## Examples

### Strong Perspective

```svelte
<WarpBackground perspective={50}>
  <h1 class="text-7xl font-bold">Deep Space</h1>
</WarpBackground>
```

### Many Beams

```svelte
<WarpBackground beamsPerSide={5} beamSize={3} beamDuration={2}>
  <div class="z-10">Content Here</div>
</WarpBackground>
```

### Custom Grid Color

```svelte
<WarpBackground gridColor="#3b82f6" beamsPerSide={4}>
  <div class="text-center">
    <h2 class="text-5xl">Blue Grid</h2>
  </div>
</WarpBackground>
```

### Slow Animation

```svelte
<WarpBackground beamDuration={5} beamDelayMax={5} perspective={80}>
  <div>Slow warping effect</div>
</WarpBackground>
```

## Grid Details

- Grid consists of horizontal and vertical lines
- Each line is 1% of container width apart
- Beams move from top to bottom with fade effects
- Random delays create staggered animation
- Uses CSS custom properties for grid color
- Transform-style: preserve-3d for 3D effect

## Notes

- Lower perspective values create stronger 3D effect
- More beams = busier animation
- Beam delays are randomized within min/max range
- Grid is positioned at -50% to create warping effect
- Content should have relative z-index for proper layering
- Recommended to use dark backgrounds for best effect
````
