# Slide Up Text

A staggered text reveal that slides words, characters, or lines upward for hero copy, editorial headlines, and callouts.

## Installation

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/slide-up-text.json
```

Install the required package:

```bash
pnpm add motion-sv
```

## Usage

```svelte
<script lang="ts">
  import { SlideUpText } from "$lib/components/spell/slide-up-text";
</script>

<SlideUpText class="max-w-[16ch] text-4xl font-semibold tracking-tight">
  Copy arrives with a clean upward stagger.
</SlideUpText>
```

## Split Modes

Use `split` to choose whether the reveal runs by words, characters, or lines.

```svelte
<script lang="ts">
  import { SlideUpText } from "$lib/components/spell/slide-up-text";
</script>

<SlideUpText split="characters" from="center">Signals stay clear</SlideUpText>
```

## View Trigger

Set `triggerOnView` to wait for viewport entry. Use `once={false}` if you want the reveal to reset after leaving the viewport.

```svelte
<script lang="ts">
  import { SlideUpText } from "$lib/components/spell/slide-up-text";
</script>

<SlideUpText triggerOnView once={false}>Timed to the viewport</SlideUpText>
```

## Props

| Prop            | Type                                 | Default                                       | Description                                                                       |
| --------------- | ------------------------------------ | --------------------------------------------- | --------------------------------------------------------------------------------- |
| `children`      | `Snippet`                            | required                                      | Plain text snippet content that is flattened and split into animated units.       |
| `split`         | `"words" \| "characters" \| "lines"` | `"words"`                                     | Controls whether the reveal animates words, characters, or line breaks.           |
| `delay`         | `number`                             | `0`                                           | Adds a base delay in seconds before the first animated unit begins.               |
| `stagger`       | `number`                             | `0.1`                                         | Controls the delay in seconds between animated units.                             |
| `from`          | `"first" \| "last" \| "center"`      | `"first"`                                     | Sets where the stagger timing begins across the animated units.                   |
| `transition`    | `AnimationOptions`                   | `tween duration 0.5 ease [0.625, 0.05, 0, 1]` | Overrides the motion transition used for each unit's vertical reveal.             |
| `autoStart`     | `boolean`                            | `true`                                        | Starts the animation immediately when not using viewport triggering.              |
| `triggerOnView` | `boolean`                            | `false`                                       | Waits to animate until the component enters the viewport.                         |
| `once`          | `boolean`                            | `true`                                        | When using `triggerOnView`, controls whether the reveal runs only on first entry. |
| `onStart`       | `() => void`                         | `undefined`                                   | Called when the component starts a new animation cycle.                           |
| `onComplete`    | `() => void`                         | `undefined`                                   | Called after the final visible unit finishes animating.                           |
| `class`         | `string \| undefined`                | `undefined`                                   | Custom classes applied to the root wrapper.                                       |
| `wordClass`     | `string \| undefined`                | `undefined`                                   | Custom classes applied to each word or line wrapper.                              |
| `charClass`     | `string \| undefined`                | `undefined`                                   | Custom classes applied to each character wrapper.                                 |
