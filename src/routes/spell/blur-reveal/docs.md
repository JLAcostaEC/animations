# Blur Reveal

A text-only blur and stagger reveal for spell-style hero copy, headings, and announcement lines.

## Installation

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/spell/blur-reveal.json
```

## Usage

```svelte
<script lang="ts">
  import { BlurReveal } from "$lib/components/spell/blur-reveal";
</script>

<BlurReveal
  as="h1"
  content="Build sharper Svelte hero copy."
  class="max-w-[14ch] text-4xl font-semibold tracking-tight sm:text-5xl"
/>
```

## Tuned Timing

Use `delay`, `stagger`, and `duration` together to shape how quickly the text resolves. Smaller values create a tighter, more editorial reveal.

```svelte
<script lang="ts">
  import { BlurReveal } from "$lib/components/spell/blur-reveal";
</script>

<BlurReveal
  as="span"
  content="Fast. Focused. Dramatic."
  stagger={0.018}
  duration={0.22}
  delay={0.05}
  letterSpacing={0.4}
  class="text-3xl font-medium tracking-tight"
/>
```

## View Trigger

Set `triggerOnView` to start the reveal when the component enters the viewport instead of immediately on mount.

```svelte
<script lang="ts">
  import { BlurReveal } from "$lib/components/spell/blur-reveal";
</script>

<BlurReveal
  content="Reveal this line on scroll."
  triggerOnView
  once={false}
  class="text-2xl font-semibold"
/>
```

## Props

| Prop            | Type                                                                     | Default     | Description                                                                  |
| --------------- | ------------------------------------------------------------------------ | ----------- | ---------------------------------------------------------------------------- |
| `content`       | `string`                                                                 | required    | Plain text content that will be split into animated grapheme-safe characters. |
| `as`            | `"span" \| "div" \| "p" \| "h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6"` | `"p"`       | Sets the semantic tag used for the animated root element.                    |
| `delay`         | `number`                                                                 | `0`         | Adds a delay in seconds before the reveal sequence begins.                   |
| `stagger`       | `number`                                                                 | `0.03`      | Controls the delay between each character and space reveal in seconds.       |
| `duration`      | `number`                                                                 | `0.3`       | Sets the per-character reveal duration in seconds.                           |
| `trigger`       | `boolean`                                                                | `true`      | Enables or disables the visible reveal state.                                |
| `triggerOnView` | `boolean`                                                                | `false`     | Waits to animate until the component enters the viewport.                    |
| `once`          | `boolean`                                                                | `true`      | When using `triggerOnView`, controls whether the reveal runs only once.      |
| `letterSpacing` | `string \| number \| undefined`                                          | `undefined` | Applies extra spacing between animated characters.                           |
| `onStart`       | `() => void`                                                             | `undefined` | Called when a new reveal cycle begins.                                       |
| `onComplete`    | `() => void`                                                             | `undefined` | Called after the final animated unit completes the visible transition.       |
| `class`         | `string \| undefined`                                                    | `undefined` | Custom classes applied to the animated root element.                         |
| `style`         | `string \| undefined`                                                    | `undefined` | Inline styles forwarded to the animated root element.                        |
