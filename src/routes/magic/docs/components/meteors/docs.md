````markdown
# Meteors

A meteor shower effect component that creates animated falling meteors with customizable trails and quantities. Perfect for adding dynamic, eye-catching background animations to your hero sections or cards.

## Installation

:::::steps

### CLI

::::tabs{sync="pm"}

:::tab{label="npm"}

```bash
npx shadcn-svelte@latest add https://animations.sikandarjodd.dev/r/meteors.json
```

:::

:::tab{label="pnpm"}

```bash
pnpm dlx shadcn-svelte@latest add https://animations.sikandarjodd.dev/r/meteors.json
```

:::

:::tab{label="yarn"}

```bash
yarn dlx shadcn-svelte@latest add https://animations.sikandarjodd.dev/r/meteors.json
```

:::

:::tab{label="bun"}

```bash
bunx shadcn-svelte@latest add https://animations.sikandarjodd.dev/r/meteors.json
```

:::

::::

### Add Tailwind CSS Animation

Add the following to your `layout.css` or global CSS file:

```css
@theme inline {
  --animate-meteor: meteor 5s linear infinite;

  @keyframes meteor {
    0% {
      transform: rotate(var(--angle)) translateX(0);
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    100% {
      transform: rotate(var(--angle)) translateX(-500px);
      opacity: 0;
    }
  }
}
```

:::::

## Usage

```svelte
<script lang="ts">
  import { Meteors } from "$lib/components/magic-ui/meteors";
</script>

<div class="relative h-screen w-full overflow-hidden bg-slate-900">
  <Meteors number={20} />
</div>
```

## Props

| Prop          | Type     | Default | Description                                    |
| ------------- | -------- | ------- | ---------------------------------------------- |
| `number`      | `number` | `20`    | Number of meteors to display                   |
| `minDelay`    | `number` | `0.2`   | Minimum animation delay in seconds             |
| `maxDelay`    | `number` | `1.2`   | Maximum animation delay in seconds             |
| `minDuration` | `number` | `2`     | Minimum animation duration in seconds          |
| `maxDuration` | `number` | `10`    | Maximum animation duration in seconds          |
| `angle`       | `number` | `215`   | Angle of meteor trajectory in degrees (0-360)  |
| `class`       | `string` | `""`    | Additional CSS classes to apply to each meteor |

## Features

- **Randomized Timing**: Each meteor has randomly generated animation delays and durations for a natural effect
- **Customizable Quantity**: Control the number of meteors with the `number` prop
- **Gradient Trails**: Beautiful gradient tails that fade from slate to blue to transparent
- **Diagonal Movement**: Meteors fall at a 215-degree angle for realistic motion
- **Random Positioning**: Meteors spawn at random horizontal positions for varied effects
- **Pure CSS Animations**: Performant animations using CSS keyframes
- **Lightweight**: No external dependencies required

## Examples

### Basic Usage

Create a simple meteor shower effect with the default number of meteors.

```svelte
<script lang="ts">
  import { Meteors } from "$lib/components/magic-ui/meteors";
</script>

<div class="relative h-96 w-full overflow-hidden rounded-lg bg-slate-900">
  <Meteors />
</div>
```

### More Meteors

Increase the intensity by adding more meteors to the scene.

```svelte
<script lang="ts">
  import { Meteors } from "$lib/components/magic-ui/meteors";
</script>

<div
  class="relative h-96 w-full overflow-hidden rounded-lg bg-linear-to-b from-slate-900 to-slate-800"
>
  <Meteors number={30} />
</div>
```

### Card with Meteors

Use meteors as an animated background for cards or hero sections.

```svelte
<script lang="ts">
  import { Meteors } from "$lib/components/magic-ui/meteors";
</script>

<div
  class="relative h-96 w-full overflow-hidden rounded-lg border border-slate-800 bg-slate-900 p-8"
>
  <Meteors number={15} />

  <div class="relative z-10">
    <h2 class="text-3xl font-bold text-white">Welcome</h2>
    <p class="mt-4 text-slate-400">
      Your content here with meteors in the background
    </p>
  </div>
</div>
```
````
