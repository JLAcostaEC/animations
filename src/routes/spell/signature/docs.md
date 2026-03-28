# Signature

A handwritten signature renderer that draws glyph paths from the Lastoria font for sign-offs, certificates, and personalized callouts.

## Installation

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/signature.json
```

Install the required package:

```bash
pnpm add opentype.js
```

## Font Asset

Download `LastoriaBoldRegular.otf` from the docs page button and place it in your app's `static/` directory:

```bash
static/
  LastoriaBoldRegular.otf
```

The component fetches the font from `/LastoriaBoldRegular.otf` at runtime.

## Usage

```svelte
<script lang="ts">
  import { Signature } from "$lib/components/spell/signature";
</script>

<Signature text="Svelte Spell" fontSize={22} color="#111827" duration={1.8} />
```

## View Trigger

Set `inView` to wait for the signature to enter the viewport before drawing.

```svelte
<script lang="ts">
  import { Signature } from "$lib/components/spell/signature";
</script>

<Signature text="Signed on arrival" inView />
```

## Props

| Prop       | Type                  | Default       | Description                                                                     |
| ---------- | --------------------- | ------------- | ------------------------------------------------------------------------------- |
| `text`     | `string`              | `"Signature"` | The text converted into animated SVG paths using the downloaded font file.      |
| `color`    | `string`              | `"#000"`      | Sets both the stroke and fill color used for the drawn signature paths.         |
| `fontSize` | `number`              | `14`          | Controls the font size passed into the font parser when generating glyph paths. |
| `duration` | `number`              | `1.5`         | Sets the draw animation duration in seconds for each path segment.              |
| `delay`    | `number`              | `0`           | Adds a base delay in seconds before path drawing begins.                        |
| `inView`   | `boolean`             | `false`       | Waits to animate until the component enters the viewport.                       |
| `once`     | `boolean`             | `true`        | When using `inView`, controls whether the signature draws only on first entry.  |
| `class`    | `string \| undefined` | `undefined`   | Custom classes applied to the root SVG element.                                 |
