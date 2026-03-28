# Color Selector

A compact swatch picker with preset or custom CSS colors, optional form support, and size variants for toolbars, cards, and settings panels.

## Installation

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/color-selector.json
pnpm add tailwind-variants
```

## Usage

```svelte
<script lang="ts">
  import { ColorSelector, type ColorSelectorColor } from "$lib/components/spell/color-selector";

  let value: ColorSelectorColor = $state("teal");
</script>

<ColorSelector
  colors={["orange", "teal", "purple", "#111827", "currentColor"]}
  size="lg"
  bind:value
/>
```

## Form Support

Pass a `name` prop if you want the selected color to submit with a native form.

```svelte
<ColorSelector
  name="accentColor"
  colors={["red", "emerald", "sky", "oklch(70% 0.18 220)"]}
  defaultValue="sky"
/>
```

## Notes

- `colors` accepts both built-in preset tokens and raw CSS color strings.
- Use `bind:value` for controlled selection state in settings panels or live previews.
- The root uses `role="radiogroup"` and exposes each swatch as a radio-style button.

## Props

| Prop            | Type                                               | Default     | Description                                        |
| --------------- | -------------------------------------------------- | ----------- | -------------------------------------------------- |
| `colors`        | `readonly ColorSelectorColor[]`                    | `[]`        | The swatches to render.                            |
| `size`          | `"sm" \| "default" \| "lg" \| undefined`           | `"default"` | Controls the diameter of each swatch button.       |
| `defaultValue`  | `ColorSelectorColor \| undefined`                  | `undefined` | Sets the initial selected swatch for uncontrolled usage. |
| `value`         | `ColorSelectorColor \| undefined`                  | `undefined` | Controlled selected color value. Supports `bind:value`. |
| `name`          | `string \| undefined`                              | `undefined` | Renders a hidden input for native form submission. |
| `onColorSelect` | `((color: ColorSelectorColor) => void) \| undefined` | `undefined` | Callback fired when a swatch is selected.          |
| `class`         | `string \| undefined`                              | `undefined` | Custom classes merged onto the radiogroup root.    |
