````markdown
# Rainbow Button

A button component with animated rainbow gradient borders and background that cycles through multiple colors.

## Installation

<Tabs items={["CLI", "Manual"]}>
<Tab value="CLI">

### Using CLI

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/rainbow-button.json
```

  </Tab>
  <Tab value="Manual">

### Manual Installation

```bash
# Using npm
npm install bits-ui tailwind-variants

# Using pnpm
pnpm add bits-ui tailwind-variants

# Using yarn
yarn add bits-ui tailwind-variants
```

Copy and paste the component source code into your project.

  </Tab>
</Tabs>

## Tailwind CSS Configuration

Add the following to your `layout.css` or global CSS file:

```css
:root {
  --color-1: hsl(0 100% 63%);
  --color-2: hsl(270 100% 63%);
  --color-3: hsl(210 100% 63%);
  --color-4: hsl(195 100% 63%);
  --color-5: hsl(90 100% 63%);
}

@theme inline {
  --animate-rainbow: rainbow var(--speed, 2s) infinite linear;

  @keyframes rainbow {
    0% {
      background-position: 0%;
    }
    100% {
      background-position: 200%;
    }
  }
}
```

## Usage

```svelte
<script lang="ts">
  import { RainbowButton } from "$lib/components/magic/rainbow-button";
</script>

<RainbowButton>Rainbow Button</RainbowButton>
```

## Props

| Prop      | Type                                  | Default     | Description                     |
| --------- | ------------------------------------- | ----------- | ------------------------------- |
| `class`   | `string`                              | `""`        | Additional CSS classes to apply |
| `variant` | `"default" \| "outline"`              | `"default"` | Button style variant            |
| `size`    | `"default" \| "sm" \| "lg" \| "icon"` | `"default"` | Button size                     |

All standard button/anchor HTML attributes are supported.

## Features

- Animated rainbow gradient effect
- Multiple color stops (5 colors)
- Two style variants (default and outline)
- Multiple size options
- Can be rendered as button or anchor
- Glow effect on hover
- Fully customizable with Tailwind variants

## Examples

### Default Rainbow Button

```svelte
<RainbowButton>Get Started</RainbowButton>
```

### Outline Variant

```svelte
<RainbowButton variant="outline">Learn More</RainbowButton>
```

### Different Sizes

```svelte
<RainbowButton size="sm">Small</RainbowButton>
<RainbowButton size="default">Default</RainbowButton>
<RainbowButton size="lg">Large</RainbowButton>
```

### As Link

```svelte
<RainbowButton href="/pricing" variant="outline">View Pricing</RainbowButton>
```

## Notes

- Uses CSS custom properties for rainbow colors
- Animation cycles through all 5 colors smoothly
- Glow effect positioned below the button
- Works with both light and dark mode
- Built with tailwind-variants for easy customization
````
