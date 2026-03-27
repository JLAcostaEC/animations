# Text Marquee

A vertical text rotator for spell-style hero sections, with snippet-based prefix and row composition.

## Installation

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/spell/text-marquee.json
```

## Usage

```svelte
<script lang="ts">
  import { TextMarquee } from "$lib/components/spell/text-marquee";

  const phrases = ["Design systems", "Product launches", "Developer tools"];
</script>

<TextMarquee items={phrases} height={180} speed={1}>
  {#snippet prefix()}
    <span class="text-muted-foreground text-sm font-medium">Used for</span>
  {/snippet}

  {#snippet children(item, index)}
    <span class="text-xl font-semibold tracking-tight">{item}</span>
  {/snippet}
</TextMarquee>
```

## Tuning

Use `height` to control the visible masked viewport, `itemHeight` to control row spacing, and `speed` to control how long a full cycle takes.

```svelte
<script lang="ts">
  import { TextMarquee } from "$lib/components/spell/text-marquee";

  const updates = ["Shipped", "Reviewed", "Published", "Synced"];
</script>

<TextMarquee items={updates} height={120} itemHeight={32} speed={0.65}>
  {#snippet children(item)}
    <span class="text-sm font-medium tracking-[0.24em] uppercase">{item}</span>
  {/snippet}
</TextMarquee>
```

## Props

| Prop         | Type                   | Default     | Description                                                                       |
| ------------ | ---------------------- | ----------- | --------------------------------------------------------------------------------- |
| `items`      | `T[]`                  | required    | The ordered list of items to animate through vertically.                          |
| `children`   | `Snippet<[T, number]>` | required    | Snippet used to render each animated row with the current item and index.         |
| `prefix`     | `Snippet \| undefined` | `undefined` | Optional snippet rendered once before the animated viewport.                      |
| `speed`      | `number`               | `1`         | Scales the total loop duration; larger values make the marquee cycle more slowly. |
| `height`     | `number`               | `200`       | Sets the visible viewport height in pixels.                                       |
| `itemHeight` | `number`               | `40`        | Sets the height of each animated row in pixels.                                   |
| `class`      | `string \| undefined`  | `undefined` | Custom classes applied to the root wrapper.                                       |
| `style`      | `string \| undefined`  | `undefined` | Inline styles forwarded to the root wrapper.                                      |
