# Words Stagger

A word-by-word blur and lift reveal for spell-style hero copy, launch messaging, and editorial headings.

## Installation

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/words-stagger.json
```

## Usage

```svelte
<script lang="ts">
  import { WordsStagger } from "$lib/components/spell/words-stagger";
</script>

<WordsStagger
  as="h1"
  class="max-w-[13ch] text-4xl font-semibold tracking-tight sm:text-5xl"
>
  Words arrive with a crisp staggered lift.
</WordsStagger>
```

## Timing Control

Use `delay`, `stagger`, and `speed` together to control how quickly the line resolves. Smaller values create a tighter, sharper editorial reveal.

```svelte
<script lang="ts">
  import { WordsStagger } from "$lib/components/spell/words-stagger";
</script>

<WordsStagger
  delay={0.05}
  stagger={0.075}
  speed={0.3}
  class="text-3xl font-medium tracking-tight"
>
  Fast. Focused. Timed for the headline.
</WordsStagger>
```

## View Trigger

Set `triggerOnView` to wait for viewport entry, and use `once={false}` when you want the stagger to replay after scrolling away and back.

```svelte
<script lang="ts">
  import { WordsStagger } from "$lib/components/spell/words-stagger";
</script>

<WordsStagger triggerOnView once={false} class="text-2xl font-semibold">
  This line waits for the viewport before animating.
</WordsStagger>
```

## Callbacks

Use `onStart` and `onComplete` to track each visible animation cycle.

```svelte
<script lang="ts">
  import { WordsStagger } from "$lib/components/spell/words-stagger";

  let starts = 0;
  let completes = 0;
</script>

<WordsStagger
  onStart={() => (starts += 1)}
  onComplete={() => (completes += 1)}
>
  Track the start and end of every reveal.
</WordsStagger>
```

## Props

| Prop            | Type                                                                     | Default     | Description                                                                 |
| --------------- | ------------------------------------------------------------------------ | ----------- | --------------------------------------------------------------------------- |
| `children`      | `Snippet`                                                                | required    | Plain text snippet content that is flattened and split into animated words. |
| `as`            | `"span" \| "div" \| "p" \| "h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6"` | `"div"`     | Sets the semantic tag used for the animated root element.                   |
| `delay`         | `number`                                                                 | `0`         | Adds a delay in seconds before the first word starts animating.             |
| `stagger`       | `number`                                                                 | `0.1`       | Controls the delay between each animated word in seconds.                   |
| `speed`         | `number`                                                                 | `0.5`       | Sets the per-word tween duration in seconds.                                |
| `trigger`       | `boolean`                                                                | `true`      | Enables or disables the visible animated state.                             |
| `triggerOnView` | `boolean`                                                                | `false`     | Waits to animate until the component enters the viewport.                   |
| `once`          | `boolean`                                                                | `true`      | When using `triggerOnView`, controls whether the reveal runs only once.     |
| `onStart`       | `() => void`                                                             | `undefined` | Called once when a new visible stagger cycle begins.                        |
| `onComplete`    | `() => void`                                                             | `undefined` | Called after the final word completes the visible transition.               |
| `class`         | `string \| undefined`                                                    | `undefined` | Custom classes applied to the animated root element.                        |
| `style`         | `string \| undefined`                                                    | `undefined` | Inline styles forwarded to the animated root element.                       |
