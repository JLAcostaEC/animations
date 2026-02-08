# Marquee

An infinite scrolling component that can be used to display text, images, or videos.

## Installation

::: code-group

```bash [npm]
npx shadcn-svelte@latest add https://animations.sikandarjodd.dev/r/marquee.json
```

```bash [pnpm]
pnpm dlx shadcn-svelte@latest add https://animations.sikandarjodd.dev/r/marquee.json
```

```bash [bun]
bunx shadcn-svelte@latest add https://animations.sikandarjodd.dev/r/marquee.json
```

```bash [yarn]
npx shadcn-svelte@latest add https://animations.sikandarjodd.dev/r/marquee.json
```

:::

## Usage

```svelte
<script lang="ts">
  import Marquee from "$lib/components/magic-ui/marquee/marquee.svelte";
</script>

<Marquee pauseOnHover class="[--duration:20s]">
  <!-- Your content here -->
</Marquee>
```

## Props

| Prop           | Type      | Default | Description                                               |
| -------------- | --------- | ------- | --------------------------------------------------------- |
| `children`     | `Snippet` | -       | The content to scroll inside the marquee                  |
| `class`        | `string`  | `""`    | Additional CSS classes to apply                           |
| `reverse`      | `boolean` | `false` | Reverse the animation direction                           |
| `pauseOnHover` | `boolean` | `false` | Pause the animation when hovered                          |
| `vertical`     | `boolean` | `false` | Scroll vertically instead of horizontally                 |
| `repeat`       | `number`  | `4`     | Number of times to repeat the content for seamless scroll |

## Examples

### Horizontal Marquee

A simple horizontal marquee with review cards scrolling left and right.

### Vertical Marquee

A marquee that scrolls vertically, perfect for displaying testimonials in a sidebar layout.

### 3D Marquee

A marquee with a 3D perspective effect, creating an immersive visual experience.
