# Blur Reveal

A text-only blur and stagger reveal for spell-style hero copy, headings, and announcement lines.

## Installation

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/blur-reveal.json
```

## Usage

```svelte
<script lang="ts">
  import { BlurReveal } from "$lib/components/spell/blur-reveal";
</script>

<BlurReveal
  as="h1"
  class="max-w-[14ch] text-4xl font-semibold tracking-tight sm:text-5xl"
>
  Build sharper Svelte hero copy.
</BlurReveal>
```

## Tuned Timing

Use `delay`, `speedReveal`, and `speedSegment` together to shape how quickly the text resolves. Larger speed values create a tighter, more editorial reveal.

```svelte
<script lang="ts">
  import { BlurReveal } from "$lib/components/spell/blur-reveal";
</script>

<BlurReveal
  as="span"
  speedReveal={1.67}
  speedSegment={1.36}
  delay={0.05}
  letterSpacing={0.4}
  class="text-3xl font-medium tracking-tight"
>
  Fast. Focused. Dramatic.
</BlurReveal>
```

## View Trigger

Set `triggerOnView` to start the reveal when the component enters the viewport instead of immediately on mount.

```svelte
<script lang="ts">
  import { BlurReveal } from "$lib/components/spell/blur-reveal";
</script>

<BlurReveal triggerOnView once={false} class="text-2xl font-semibold">
  Reveal this line on scroll.
</BlurReveal>
```

## Props

| Prop            | Type                                                                     | Default     | Description                                                                          |
| --------------- | ------------------------------------------------------------------------ | ----------- | ------------------------------------------------------------------------------------ |
| `children`      | `Snippet`                                                                | required    | Plain text snippet content flattened into grapheme-safe characters before animation. |
| `as`            | `"span" \| "div" \| "p" \| "h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6"` | `"p"`       | Sets the semantic tag used for the animated root element.                            |
| `delay`         | `number`                                                                 | `0`         | Adds a delay in seconds before the reveal sequence begins.                           |
| `speedReveal`   | `number`                                                                 | `1.5`       | Higher values tighten the stagger delay between animated characters.                 |
| `speedSegment`  | `number`                                                                 | `0.5`       | Higher values shorten the per-character reveal duration.                             |
| `stagger`       | `number \| undefined`                                                    | `undefined` | Optional direct override for the computed character stagger timing.                  |
| `duration`      | `number \| undefined`                                                    | `undefined` | Optional direct override for the computed per-character reveal duration.             |
| `trigger`       | `boolean`                                                                | `true`      | Enables or disables the visible reveal state.                                        |
| `triggerOnView` | `boolean`                                                                | `false`     | Waits to animate until the component enters the viewport.                            |
| `once`          | `boolean`                                                                | `true`      | When using `triggerOnView`, controls whether the reveal runs only once.              |
| `letterSpacing` | `string \| number \| undefined`                                          | `undefined` | Applies extra spacing between animated characters.                                   |
| `onStart`       | `() => void`                                                             | `undefined` | Called when a new reveal cycle begins.                                               |
| `onComplete`    | `() => void`                                                             | `undefined` | Called after the final animated unit completes the visible transition.               |
| `class`         | `string \| undefined`                                                    | `undefined` | Custom classes applied to the animated root element.                                 |
| `style`         | `string \| undefined`                                                    | `undefined` | Inline styles forwarded to the animated root element.                                |
