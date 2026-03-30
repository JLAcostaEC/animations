# Randomized Text

A text reveal with stable, randomized per-token delays for spell-style headlines, labels, and editorial callouts.

## Installation

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/randomized-text.json
```

## Usage

```svelte
<script lang="ts">
  import { RandomizedText } from "$lib/components/spell/randomized-text";
</script>

<RandomizedText
  as="h1"
  class="max-w-[14ch] text-4xl font-semibold tracking-tight sm:text-5xl"
>
  Spell copy that resolves with a loose, organic rhythm.
</RandomizedText>
```

## Character Split

Set `split="chars"` to animate grapheme-safe characters instead of whole words. This works well for shorter headlines, labels, and punchier line-by-line reveals.

```svelte
<script lang="ts">
  import { RandomizedText } from "$lib/components/spell/randomized-text";
</script>

<RandomizedText
  split="chars"
  triggerOnView
  once={false}
  class="text-3xl font-medium tracking-tight"
>
  Built for launch week.
</RandomizedText>
```

## View Trigger

Use `triggerOnView` to start the animation only after the component enters the viewport. Stable jitter means the token timing stays consistent across re-renders and repeat entries.

```svelte
<script lang="ts">
  import { RandomizedText } from "$lib/components/spell/randomized-text";
</script>

<RandomizedText delay={0.1} triggerOnView once class="text-2xl font-semibold">
  This line waits until it scrolls into frame.
</RandomizedText>
```

## Props

| Prop            | Type                                                                     | Default     | Description                                                                  |
| --------------- | ------------------------------------------------------------------------ | ----------- | ---------------------------------------------------------------------------- |
| `children`      | `Snippet`                                                                | required    | Plain text snippet content used to build the animated token list.            |
| `as`            | `"span" \| "div" \| "p" \| "h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6"` | `"span"`    | Sets the semantic tag used for the animated root element.                    |
| `split`         | `"words" \| "chars"`                                                     | `"words"`   | Controls whether the reveal animates full words or grapheme-safe characters. |
| `delay`         | `number`                                                                 | `0.2`       | Adds a base delay in seconds before token-specific jitter is applied.        |
| `duration`      | `number`                                                                 | `1.2`       | Sets the opacity reveal duration for each animated token in seconds.         |
| `trigger`       | `boolean`                                                                | `true`      | Enables or disables the visible animated state.                              |
| `triggerOnView` | `boolean`                                                                | `false`     | Waits to animate until the component enters the viewport.                    |
| `once`          | `boolean`                                                                | `true`      | When using `triggerOnView`, controls whether the reveal runs only once.      |
| `class`         | `string \| undefined`                                                    | `undefined` | Custom classes applied to the animated root element.                         |
| `style`         | `string \| undefined`                                                    | `undefined` | Inline styles forwarded to the animated root element.                        |
