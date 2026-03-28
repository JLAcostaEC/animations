# Logo Carousel

A grouped spell logo carousel for partner walls, launch pages, and social-proof sections, with staggered enter and exit motion between logo sets.

## Installation

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/logo-carousel.json
```

## Usage

```svelte
<script lang="ts">
  import { LogoCarousel } from "$lib/components/spell/logo-carousel";

  const logos = [
    { name: "North", mark: "NO" },
    { name: "Signal", mark: "SI" },
    { name: "Canvas", mark: "CA" },
    { name: "Helio", mark: "HE" },
    { name: "Atlas", mark: "AT" },
    { name: "Frame", mark: "FR" },
  ];
</script>

<LogoCarousel items={logos} count={3} interval={2400}>
  {#snippet children(item)}
    <div class="flex min-w-32 items-center gap-3 rounded-2xl border px-4 py-3">
      <div
        class="flex size-10 items-center justify-center rounded-xl border text-xs font-semibold"
      >
        {item.mark}
      </div>
      <span class="text-sm font-medium">{item.name}</span>
    </div>
  {/snippet}
</LogoCarousel>
```

## Grouping

Use `count` to control how many items render at once. The component slices `items` into groups and rotates group by group.

If `count` is omitted, all items are shown in one static group and no looping animation runs.

## Timing

- `stagger` is measured in seconds and offsets each item within the active group.
- `duration`, `interval`, and `initialDelay` are measured in milliseconds.

## Notes

- The carousel only loops when there is more than one group to rotate through.
- Your `children` snippet controls the entire visual treatment, so text-only marks, SVG logos, or richer cards all work well.
- Extra HTML attributes are forwarded to the outer wrapper, while `class` styles the inner visible row.

## Props

| Prop           | Type                   | Default     | Description                                                                   |
| -------------- | ---------------------- | ----------- | ----------------------------------------------------------------------------- |
| `items`        | `T[]`                  | required    | The list of items split into groups and rotated through the carousel.         |
| `children`     | `Snippet<[T, number]>` | required    | Renders each item, receiving the current item and its index inside the group. |
| `stagger`      | `number`               | `0.14`      | Sets the delay in seconds between each item animation in the active group.    |
| `count`        | `number \| undefined`  | `undefined` | Controls how many items appear per group before advancing to the next set.    |
| `duration`     | `number`               | `600`       | Controls enter and exit animation duration in milliseconds.                   |
| `interval`     | `number`               | `2500`      | Defines how long each group stays visible before advancing, in milliseconds.  |
| `initialDelay` | `number`               | `500`       | Adds a delay before the first animated transition starts, in milliseconds.    |
| `class`        | `string \| undefined`  | `undefined` | Custom classes merged onto each visible group row inside the carousel.        |
