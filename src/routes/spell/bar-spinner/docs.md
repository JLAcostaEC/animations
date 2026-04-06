# Bar Spinner

A compact loading spinner made from twelve fading bars, ideal for inline waits, cards, dialogs, and button-adjacent status indicators.

## Installation

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/bar-spinner.json
```

## Usage

```svelte
<script lang="ts">
  import { BarSpinner } from "$lib/components/spell/bar-spinner";
</script>

<div class="flex items-center gap-3 text-zinc-700">
  <BarSpinner size={18} />
  <span>Loading workspace...</span>
</div>
```

## Sizes and Colors

Tune `size` for tight inline layouts or larger card placeholders, then set `color` with any CSS color value.

```svelte
<script lang="ts">
  import { BarSpinner } from "$lib/components/spell/bar-spinner";
</script>

<div class="flex items-center gap-4">
  <BarSpinner size={16} color="#0f172a" />
  <BarSpinner size={24} color="#2563eb" />
  <BarSpinner size={32} color="oklch(62% 0.16 255)" />
</div>
```

## Notes

- The spinner uses pure CSS keyframes and does not require extra packages.
- Standard `div` attributes such as `style`, `aria-label`, and `role` pass through to the root element.
- `color` defaults to `currentColor`, which makes the spinner easy to theme from surrounding text color.

## Props

| Prop    | Type                  | Default          | Description                                          |
| ------- | --------------------- | ---------------- | ---------------------------------------------------- |
| `size`  | `number`              | `20`             | Controls the rendered width and height in pixels.    |
| `color` | `string`              | `"currentColor"` | Sets the bar fill color using any valid CSS color.   |
| `class` | `string \| undefined` | `undefined`      | Custom classes merged onto the root wrapper element. |
