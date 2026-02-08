# Pixel Image

A stunning image reveal animation component that splits an image into a grid of pieces, animating them in with staggered delays and an optional grayscale-to-color transition effect.

## Features

- **Grid-based Animation**: Splits images into customizable grid pieces for unique reveal effects
- **Staggered Animations**: Each piece animates with random delays for an organic feel
- **Grayscale Transition**: Optional grayscale-to-color reveal for dramatic effect
- **Predefined Grids**: Multiple built-in grid configurations (6x4, 8x8, 8x3, 4x6, 3x8)
- **Custom Grids**: Define your own grid dimensions for complete control
- **Configurable Timing**: Adjust fade duration, animation delay, and color reveal timing

## Installation

```bash
npx shadcn-svelte@latest add https://animations.sikandarjodd.dev/r/pixel-image.json
```

```bash
pnpm dlx shadcn-svelte@latest add https://animations.sikandarjodd.dev/r/pixel-image.json
```

```bash
npx shadcn-svelte@latest add https://animations.sikandarjodd.dev/r/pixel-image.json
```

```bash
npx shadcn-svelte@latest add https://animations.sikandarjodd.dev/r/pixel-image.json
```

```bash
bunx shadcn-svelte@latest add https://animations.sikandarjodd.dev/r/pixel-image.json
```

## Usage

```svelte
<script lang="ts">
  import { PixelImage } from "$lib/components/magic-ui/pixel-image";
</script>

<PixelImage src="/path/to/your-image.jpg" />
```

## Props

| Prop                  | Type                                        | Default  | Description                                     |
| --------------------- | ------------------------------------------- | -------- | ----------------------------------------------- |
| `src`                 | `string`                                    | Required | The image source URL                            |
| `grid`                | `"6x4" \| "8x8" \| "8x3" \| "4x6" \| "3x8"` | `"6x4"`  | Predefined grid configuration                   |
| `customGrid`          | `{ rows: number; cols: number }`            | -        | Custom grid dimensions (overrides `grid` prop)  |
| `grayscaleAnimation`  | `boolean`                                   | `true`   | Enable grayscale-to-color transition effect     |
| `pixelFadeInDuration` | `number`                                    | `1000`   | Duration of each piece's fade-in animation (ms) |
| `maxAnimationDelay`   | `number`                                    | `1200`   | Maximum random delay for piece animations (ms)  |
| `colorRevealDelay`    | `number`                                    | `1300`   | Delay before color reveal begins (ms)           |

## Examples

### Basic Usage

Simple pixel image reveal with default settings.

```svelte
<script lang="ts">
  import { PixelImage } from "$lib/components/magic-ui/pixel-image";
  import MyImage from "$lib/assets/my-image.jpg";
</script>

<PixelImage src={MyImage} />
```

### Custom Grid

Use a custom grid configuration for more control over the pixel effect.

```svelte
<script lang="ts">
  import { PixelImage } from "$lib/components/magic-ui/pixel-image";
  import MyImage from "$lib/assets/my-image.jpg";
</script>

<PixelImage
  src={MyImage}
  customGrid={{ rows: 4, cols: 6 }}
  grayscaleAnimation
/>
```

### Predefined Grid Patterns

Choose from built-in grid configurations.

```svelte
<script lang="ts">
  import { PixelImage } from "$lib/components/magic-ui/pixel-image";
  import MyImage from "$lib/assets/my-image.jpg";
</script>

<!-- Square grid -->
<PixelImage src={MyImage} grid="8x8" />

<!-- Wide grid -->
<PixelImage src={MyImage} grid="8x3" />

<!-- Tall grid -->
<PixelImage src={MyImage} grid="3x8" />
```

### Custom Animation Timing

Adjust the animation timing for different effects.

```svelte
<script lang="ts">
  import { PixelImage } from "$lib/components/magic-ui/pixel-image";
  import MyImage from "$lib/assets/my-image.jpg";
</script>

<!-- Slower, more dramatic reveal -->
<PixelImage
  src={MyImage}
  pixelFadeInDuration={1500}
  maxAnimationDelay={2000}
  colorRevealDelay={2200}
/>

<!-- Quick, snappy reveal -->
<PixelImage
  src={MyImage}
  pixelFadeInDuration={500}
  maxAnimationDelay={600}
  colorRevealDelay={700}
/>
```

### Without Grayscale Effect

Disable the grayscale-to-color transition for a simpler reveal.

```svelte
<script lang="ts">
  import { PixelImage } from "$lib/components/magic-ui/pixel-image";
  import MyImage from "$lib/assets/my-image.jpg";
</script>

<PixelImage src={MyImage} grayscaleAnimation={false} />
```
