````markdown
# Light Rays

A component that creates animated light rays with customizable count, color, blur, speed, and length.

## Installation

<Tabs items={["CLI", "Manual"]}>
<Tab value="CLI">

### Using CLI

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/light-rays.json
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
  import { LightRays } from "$lib/components/magic/light-rays";
</script>

<div class="relative h-screen w-full overflow-hidden">
  <LightRays count={7} color="rgba(160, 210, 255, 0.2)" blur={36} speed={14} />
</div>
```

## Props

| Prop     | Type     | Default                      | Description                           |
| -------- | -------- | ---------------------------- | ------------------------------------- |
| `class`  | `string` | `""`                         | Additional CSS classes to apply       |
| `count`  | `number` | `7`                          | Number of light rays to display       |
| `color`  | `string` | `"rgba(160, 210, 255, 0.2)"` | Color of the light rays               |
| `blur`   | `number` | `36`                         | Blur amount in pixels                 |
| `speed`  | `number` | `14`                         | Animation speed (cycle duration in s) |
| `length` | `string` | `"70vh"`                     | Length of the light rays              |
| `style`  | `string` | `""`                         | Additional inline styles              |

## Features

- Customizable number of light rays
- Adjustable color and blur effects
- Variable animation speed per ray
- Random positioning and rotation
- Smooth swing animations
- Configurable length and intensity

## Examples

### Blue Light Rays

```svelte
<LightRays count={5} color="rgba(100, 150, 255, 0.3)" speed={10} blur={40} />
```

### Fast Moving Rays

```svelte
<LightRays count={10} speed={5} length="80vh" />
```

### Subtle Background

```svelte
<LightRays count={3} color="rgba(255, 255, 255, 0.1)" blur={60} speed={20} />
```
````
