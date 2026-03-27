# Marquee

A reusable spell marquee for looping logos, tags, or headlines horizontally or vertically, with optional fade edges and hover pause.

## Installation

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/marquee.json
```

## Usage

```svelte
<script lang="ts">
  import { Marquee } from "$lib/components/spell/marquee";

  const items = ["Launch week", "Design systems", "Svelte 5", "Spell UI"];
</script>

<Marquee pauseOnHover class="py-2">
  {#snippet children()}
    <div class="flex gap-3 pr-3">
      {#each items as item}
        <span class="rounded-full border px-3 py-1 text-sm">{item}</span>
      {/each}
    </div>
  {/snippet}
</Marquee>
```

## Vertical Marquee

Use `direction="up"` or `direction="down"` to turn the loop into a vertical stack.

```svelte
<script lang="ts">
  import { Marquee } from "$lib/components/spell/marquee";
</script>

<Marquee direction="up" duration={14} class="h-48" fadeAmount={18}>
  {#snippet children()}
    <div class="flex flex-col gap-3">
      <span>Studio updates</span>
      <span>New components</span>
      <span>Weekly notes</span>
    </div>
  {/snippet}
</Marquee>
```

## Props

| Prop           | Type                                  | Default     | Description                                                                             |
| -------------- | ------------------------------------- | ----------- | --------------------------------------------------------------------------------------- |
| `children`     | `Snippet`                             | required    | Snippet content rendered twice to create the seamless looping marquee.                  |
| `duration`     | `number`                              | `20`        | Sets the total animation duration in seconds.                                           |
| `pauseOnHover` | `boolean`                             | `false`     | Pauses the marquee animation while the user hovers the container.                       |
| `direction`    | `"left" \| "right" \| "up" \| "down"` | `"left"`    | Controls whether the marquee scrolls horizontally or vertically and in which direction. |
| `fade`         | `boolean`                             | `true`      | Adds mask-based fade edges to soften the start and end of the marquee viewport.         |
| `fadeAmount`   | `number`                              | `10`        | Controls how much of the marquee edges are faded, clamped between `0` and `50`.         |
| `class`        | `string \| undefined`                 | `undefined` | Custom classes applied to the outer marquee container.                                  |
| `style`        | `string \| undefined`                 | `undefined` | Inline styles forwarded to the outer marquee container.                                 |
