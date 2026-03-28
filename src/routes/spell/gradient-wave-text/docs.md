# Gradient Wave Text

A flowing gradient-text effect with layered color bands, radial or linear direction, and optional viewport-triggered playback.

## Installation

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/gradient-wave-text.json
```

Install the required package:

```bash
pnpm add motion-sv
```

## Usage

```svelte
<script lang="ts">
  import { GradientWaveText } from "$lib/components/spell/gradient-wave-text";
</script>

<GradientWaveText
  repeat
  class="w-full text-center text-5xl font-semibold tracking-tight"
>
  Waves of color
</GradientWaveText>
```

## Linear Mode

Set `radial={false}` for a linear gradient treatment and pass `customColors` when you want tighter brand control.

```svelte
<script lang="ts">
  import { GradientWaveText } from "$lib/components/spell/gradient-wave-text";

  const colors = ["#1d4ed8", "#0ea5e9", "#67e8f9", "#f8fafc"];
</script>

<GradientWaveText radial={false} align="left" customColors={colors}>
  Linear bands
</GradientWaveText>
```

## Playback

Use `delay`, `triggerOnView`, `once`, `paused`, and `repeat` to control when the wave starts, whether it loops, and whether it should pause in place.

## Props

| Prop            | Type                            | Default     | Description                                                                |
| --------------- | ------------------------------- | ----------- | -------------------------------------------------------------------------- |
| `children`      | `Snippet \| undefined`          | required    | The text content rendered inside the animated gradient mask.               |
| `align`         | `"left" \| "center" \| "right"` | `"center"`  | Controls content alignment and text alignment for the rendered headline.   |
| `speed`         | `number`                        | `1`         | Controls how quickly the gradient index advances through the color bands.  |
| `paused`        | `boolean`                       | `false`     | Pauses gradient movement while keeping the current visual state rendered.  |
| `delay`         | `number`                        | `0`         | Adds a delay in seconds before the gradient animation begins.              |
| `repeat`        | `boolean`                       | `false`     | Loops the gradient wave indefinitely instead of stopping after one pass.   |
| `triggerOnView` | `boolean`                       | `false`     | Waits to animate until the component enters the viewport.                  |
| `once`          | `boolean`                       | `true`      | When using `triggerOnView`, controls whether the animation runs only once. |
| `radial`        | `boolean`                       | `true`      | Uses a radial gradient when true and a linear gradient when false.         |
| `bottomOffset`  | `number`                        | `20`        | Controls extra bottom padding used to preserve the gradient bloom.         |
| `bandGap`       | `number`                        | `4`         | Sets the spacing between each gradient color band.                         |
| `bandCount`     | `number`                        | `8`         | Controls how many color bands are rendered into the gradient.              |
| `customColors`  | `string[] \| undefined`         | `undefined` | Overrides the default gradient palette with a custom color list.           |
| `ariaLabel`     | `string \| undefined`           | `undefined` | Provides an accessible label for image-like gradient text.                 |
| `role`          | `string \| undefined`           | `undefined` | Overrides the computed root role if you need explicit semantics.           |
| `class`         | `string \| undefined`           | `undefined` | Custom classes applied to the root wrapper.                                |
| `style`         | `string \| undefined`           | `undefined` | Inline styles merged onto the root wrapper.                                |
