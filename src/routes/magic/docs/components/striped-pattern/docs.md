# Striped Pattern

A background striped pattern made with SVGs, fully customizable using Tailwind CSS.

## Installation

```bash
npx shadcn-svelte@latest add https://animations.sikandarjodd.dev/r/striped-pattern.json
```

## Usage

```svelte
<script lang="ts">
  import { StripedPattern } from "$lib/components/magic-ui/striped-pattern";
</script>

<div
  class="relative flex h-125 w-full flex-col items-center justify-center overflow-hidden rounded-lg border"
>
  <StripedPattern
    class="mask-[radial-gradient(300px_circle_at_center,white,transparent)]"
  />
</div>
```

## Props

| Prop        | Type                | Default  | Description                     |
| ----------- | ------------------- | -------- | ------------------------------- |
| `class`     | `string`            | `""`     | Additional CSS classes to apply |
| `direction` | `"left" \| "right"` | `"left"` | Direction of the stripes        |
| `width`     | `number`            | `10`     | Width of the pattern            |
| `height`    | `number`            | `10`     | Height of the pattern           |

## Examples

```svelte
<script lang="ts">
  import { StripedPattern } from "$lib/components/magic-ui/striped-pattern";
</script>

<div
  class="relative flex h-125 w-full flex-col items-center justify-center overflow-hidden rounded-lg border"
>
  <StripedPattern
    class="mask-[radial-gradient(300px_circle_at_center,white,transparent)]"
  />
</div>
```
