# Perspective Book

A 3D book-cover wrapper for spell-style showcases, with layered depth, hover perspective, and an optional texture overlay.

## Installation

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/perspective-book.json
```

## Usage

```svelte
<script lang="ts">
  import { PerspectiveBook } from "$lib/components/spell/perspective-book";
</script>

<PerspectiveBook size="lg">
  <div class="flex h-full flex-col justify-between">
    <h2 class="text-lg font-semibold">A custom cover</h2>
    <span class="font-serif text-sm">Your author</span>
  </div>
</PerspectiveBook>
```

## Optional Texture

The registry install does not bundle the texture image. If you want the textured cover finish:

1. Download `https://sv-animations.vercel.app/image.avif`
2. Place it in your app at `static/perspective-book-texture.avif`
3. Pass `textureUrl="/perspective-book-texture.avif"` together with `textured`

```svelte
<script lang="ts">
  import { PerspectiveBook } from "$lib/components/spell/perspective-book";
</script>

<PerspectiveBook
  size="lg"
  textured
  textureUrl="/perspective-book-texture.avif"
>
  <div class="flex h-full flex-col justify-between">
    <h2 class="text-lg font-semibold">Textured edition</h2>
    <span class="font-serif text-sm">Your author</span>
  </div>
</PerspectiveBook>
```

## Props

| Prop         | Type                        | Default     | Description                                                                         |
| ------------ | --------------------------- | ----------- | ----------------------------------------------------------------------------------- |
| `size`       | `"sm" \| "default" \| "lg"` | `"default"` | Controls the rendered width and spine translation of the book.                      |
| `textured`   | `boolean`                   | `false`     | Enables the texture overlay when a `textureUrl` is also provided.                   |
| `textureUrl` | `string \| undefined`       | `undefined` | Optional URL for the texture image, usually served from your app's `static` folder. |
| `class`      | `string`                    | `undefined` | Custom classes applied to the front and back cover surfaces.                        |
| `style`      | `string`                    | `undefined` | Inline styles applied to the outer perspective wrapper.                             |
