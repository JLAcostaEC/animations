# Special Text

A scrambled text reveal for labels, product copy, and hero accents, with support for either a plain `text` prop or slotted content.

## Installation

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/special-text.json
```

Install the required package:

```bash
pnpm add motion-sv
```

## Usage

```svelte
<script lang="ts">
  import { SpecialText } from "$lib/components/spell/special-text";
</script>

<SpecialText
  text="SYSTEM READY"
  delay={0.1}
  speed={24}
  class="tracking-[0.28em] uppercase"
/>
```

## Slotted Content

If you do not want to pass a `text` prop, the component can derive its content from the slot instead.

```svelte
<script lang="ts">
  import { SpecialText } from "$lib/components/spell/special-text";
</script>

<SpecialText class="font-medium">Signal locked</SpecialText>
```

## Viewport Trigger

Set `inView` to wait for scroll entry, and use `once={false}` when you want the effect to replay on re-entry.

```svelte
<script lang="ts">
  import { SpecialText } from "$lib/components/spell/special-text";
</script>

<SpecialText inView once={false} delay={0.2} text="Scan complete" />
```

## Props

| Prop       | Type                   | Default     | Description                                                                   |
| ---------- | ---------------------- | ----------- | ----------------------------------------------------------------------------- |
| `children` | `Snippet \| undefined` | `undefined` | Optional slotted text content used when the `text` prop is not provided.      |
| `text`     | `string \| undefined`  | `undefined` | Optional plain text source. Provide either `text` or `children`.              |
| `speed`    | `number`               | `20`        | Controls the scramble update cadence in milliseconds for each animation step. |
| `delay`    | `number`               | `0`         | Adds a delay in seconds before the scramble sequence begins.                  |
| `inView`   | `boolean`              | `false`     | Waits to animate until the component enters the viewport.                     |
| `once`     | `boolean`              | `true`      | When using `inView`, controls whether the reveal runs only on first entry.    |
| `class`    | `string \| undefined`  | `undefined` | Custom classes applied to the animated root span.                             |
