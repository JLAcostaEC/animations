# Highlighted Text

An inline highlight sweep for editorial emphasis, callouts, and hero phrases, with configurable reveal direction and optional viewport triggers.

## Installation

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/highlighted-text.json
```

Install the required package:

```bash
pnpm add motion-sv
```

## Usage

```svelte
<script lang="ts">
  import { HighlightedText } from "$lib/components/spell/highlighted-text";
</script>

<p class="text-3xl font-semibold tracking-tight">
  Build interfaces that feel <HighlightedText>alive</HighlightedText>.
</p>
```

## Direction

Use `from` to control where the highlight sweep starts.

```svelte
<script lang="ts">
  import { HighlightedText } from "$lib/components/spell/highlighted-text";
</script>

<HighlightedText from="left">Sweep from the left</HighlightedText>
```

## View Trigger

Set `triggerOnView` to wait for scroll entry and `once={false}` when you want the highlight to replay.

```svelte
<script lang="ts">
  import { HighlightedText } from "$lib/components/spell/highlighted-text";
</script>

<HighlightedText triggerOnView once={false} from="top">
  Timed with the viewport
</HighlightedText>
```

## Props

| Prop            | Type                                     | Default     | Description                                                                |
| --------------- | ---------------------------------------- | ----------- | -------------------------------------------------------------------------- |
| `children`      | `Snippet \| undefined`                   | required    | The inline text content wrapped by the animated highlight.                 |
| `from`          | `"left" \| "right" \| "top" \| "bottom"` | `"bottom"`  | Controls the direction the highlight bar sweeps in from.                   |
| `delay`         | `number`                                 | `0`         | Adds a delay in seconds before the highlight motion begins.                |
| `triggerOnView` | `boolean`                                | `false`     | Waits to animate until the component enters the viewport.                  |
| `once`          | `boolean`                                | `true`      | When using `triggerOnView`, controls whether the animation runs only once. |
| `class`         | `string \| undefined`                    | `undefined` | Custom classes applied to the outer inline wrapper.                        |
