````markdown
# Shiny Button

A button component with a shiny gradient mask effect that animates across the text on hover and press.

## Installation

<Tabs items={["CLI", "Manual"]}>
<Tab value="CLI">

### Using CLI

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/shiny-button.json
```

  </Tab>
  <Tab value="Manual">

### Manual Installation

```bash
# Using npm
npm install motion-sv

# Using pnpm
pnpm add motion-sv

# Using yarn
yarn add motion-sv
```

Copy and paste the component source code into your project.

  </Tab>
</Tabs>

## Usage

```svelte
<script lang="ts">
  import { ShinyButton } from "$lib/components/magic/shiny-button";
</script>

<ShinyButton>Shiny Button</ShinyButton>
```

## Props

| Prop    | Type     | Default | Description                     |
| ------- | -------- | ------- | ------------------------------- |
| `class` | `string` | `""`    | Additional CSS classes to apply |

All standard button HTML attributes are supported.

## Features

- Animated shiny gradient mask effect
- Spring-based scale animation
- Hover shadow effect in dark mode
- Infinite loop animation with repeat delay
- Press interaction with scale reduction
- Smooth mask-image gradient
- Primary color glow effect

## Examples

### Default Shiny Button

```svelte
<ShinyButton>Click Me</ShinyButton>
```

### Large Button

```svelte
<ShinyButton class="px-8 py-4 text-lg">Get Started</ShinyButton>
```

### With Custom Styles

```svelte
<ShinyButton class="text-xl font-bold tracking-wider">Premium</ShinyButton>
```

### With Click Handler

```svelte
<ShinyButton onclick={() => console.log("Shiny click!")}>Submit</ShinyButton>
```

## Animation Details

- **Initial state**: Gradient at 100% position, scale 0.8
- **Animated state**: Gradient moves to -100%, scale 1
- **Press state**: Scale reduces to 0.95
- **Repeat**: Infinite with 1 second delay between cycles
- **Spring settings**: Stiffness 20, damping 15, mass 2

## Notes

- Uses motion-sv for spring physics
- Gradient mask creates the shiny effect
- Dark mode adds radial gradient background and shadow
- Text appears in semi-transparent black (65%) in light mode
- Text appears in semi-transparent white (90%) in dark mode
- Uppercase text with tracking for better effect
- Border and backdrop blur for depth
````
