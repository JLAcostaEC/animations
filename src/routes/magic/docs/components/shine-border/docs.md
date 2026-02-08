# Shine Border

An animated background border effect that creates a radiant shine animation around elements. Perfect for highlighting cards, buttons, and other interactive UI components with an eye-catching glow effect.

## Installation

:::::steps

### CLI

::::tabs{sync="pm"}

:::tab{label="npm"}

```bash
npx shadcn-svelte@latest add https://animations.sikandarjodd.dev/r/shine-border.json
```

:::

:::tab{label="pnpm"}

```bash
pnpm dlx shadcn-svelte@latest add https://animations.sikandarjodd.dev/r/shine-border.json
```

:::

:::tab{label="yarn"}

```bash
yarn dlx shadcn-svelte@latest add https://animations.sikandarjodd.dev/r/shine-border.json
```

:::

:::tab{label="bun"}

```bash
bunx shadcn-svelte@latest add https://animations.sikandarjodd.dev/r/shine-border.json
```

:::

::::

### Add Tailwind CSS Animation

Add the following animation to your `src/routes/layout.css` or global CSS file:

```css
@theme inline {
  --animate-shine: shine var(--duration) infinite linear;

  @keyframes shine {
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 100% 100%;
    }
    to {
      background-position: 0% 0%;
    }
  }
}
```

:::::

## Usage

```svelte
<script lang="ts">
  import { ShineBorder } from "$lib/components/magic-ui/shine-border";
</script>

<div class="relative overflow-hidden rounded-lg">
  <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
  <!-- Your content here -->
</div>
```

### Important Styling Notes

The `ShineBorder` component uses `position: absolute` with `inset: 0`, so:

1. **Parent must be `relative`**: The parent container needs `position: relative` for proper positioning
2. **Parent must have `overflow-hidden`**: This prevents the shine effect from extending beyond the container
3. **Parent must have `border-radius`**: The shine border inherits `border-radius` via `rounded-[inherit]`

## Props

| Prop          | Type                 | Default     | Description                                                                          |
| ------------- | -------------------- | ----------- | ------------------------------------------------------------------------------------ |
| `borderWidth` | `number`             | `1`         | Width of the border in pixels                                                        |
| `duration`    | `number`             | `14`        | Duration of the shine animation cycle in seconds                                     |
| `shineColor`  | `string \| string[]` | `"#000000"` | Color(s) of the shine effect. Accepts a single color or array of colors for gradient |
| `class`       | `string`             | `""`        | Additional CSS classes to apply                                                      |
| `style`       | `string`             | `undefined` | Additional inline styles                                                             |

## Examples

### Rainbow Gradient

A vibrant multi-color shine effect using an array of colors for a gradient appearance.

```svelte
<div class="relative overflow-hidden rounded-lg border">
  <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
  <div class="p-6">Rainbow shine border effect</div>
</div>
```

### Monotone (Theme Adaptive)

A single-color shine effect that adapts to light/dark mode using `mode-watcher`.

```svelte
<script lang="ts">
  import { ShineBorder } from "$lib/components/magic-ui/shine-border";
  import { mode } from "mode-watcher";
</script>

<div class="relative overflow-hidden rounded-lg border">
  <ShineBorder shineColor={mode.current === "dark" ? "white" : "black"} />
  <div class="p-6">Theme-adaptive monotone shine</div>
</div>
```

### Custom Duration & Border Width

Adjust the animation speed and border thickness for different visual effects.

```svelte
<div class="relative overflow-hidden rounded-2xl">
  <ShineBorder shineColor="#3B82F6" duration={8} borderWidth={2} />
  <div class="p-6">Faster animation with thicker border</div>
</div>
```

### Button with Shine Border

Apply the shine effect to buttons for interactive highlights.

```svelte
<button class="relative overflow-hidden rounded-full bg-transparent px-6 py-3">
  <ShineBorder shineColor={["#06B6D4", "#8B5CF6"]} duration={10} />
  <span class="relative z-10">Shiny Button</span>
</button>
```

### Card Component

A complete card example with shine border effect around a login form.

```svelte
<script lang="ts">
  import { ShineBorder } from "$lib/components/magic-ui/shine-border";
  import * as Card from "$lib/components/ui/card";
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
</script>

<Card.Root class="relative w-full max-w-md overflow-hidden">
  <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
  <Card.Header>
    <Card.Title>Login</Card.Title>
    <Card.Description>
      Enter your credentials to access your account
    </Card.Description>
  </Card.Header>
  <Card.Content>
    <form class="grid gap-4">
      <div class="grid gap-2">
        <Label for="email">Email</Label>
        <Input id="email" type="email" placeholder="name@example.com" />
      </div>
      <div class="grid gap-2">
        <Label for="password">Password</Label>
        <Input id="password" type="password" />
      </div>
    </form>
  </Card.Content>
  <Card.Footer>
    <Button class="w-full">Sign In</Button>
  </Card.Footer>
</Card.Root>
```

## Tips & Best Practices

1. **Performance**: The animation uses `will-change: background-position` for GPU acceleration. For many shine borders on a page, consider longer durations to reduce animation complexity.

2. **Accessibility**: The component includes `motion-safe:animate-shine` which respects the user's reduced motion preferences. Users with `prefers-reduced-motion: reduce` won't see the animation.

3. **Color Selection**: For gradient colors, use 2-4 colors that complement each other. Too many colors can make the effect look chaotic.

4. **Border Width**: Keep border widths subtle (1-3px) for elegant effects. Larger widths work better on larger elements.

5. **z-index**: The shine border has `pointer-events-none` so it won't interfere with clicks. Content inside should still be interactive.
