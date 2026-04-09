````markdown
# Interactive Hover Button

A button with an interactive hover effect featuring an expanding dot and sliding text animation with an arrow.

## Installation

<Tabs items={["CLI", "Manual"]}>
<Tab value="CLI">

### Using CLI

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/interactive-hover-button.json
```

  </Tab>
  <Tab value="Manual">

### Manual Installation

```bash
# Using npm
npm install lucide-svelte

# Using pnpm
pnpm add lucide-svelte

# Using yarn
yarn add lucide-svelte
```

Copy and paste the component source code into your project.

  </Tab>
</Tabs>

## Usage

```svelte
<script lang="ts">
  import { InteractiveHoverButton } from "$lib/components/magic/interactive-hover-button";
</script>

<InteractiveHoverButton>Get Started</InteractiveHoverButton>
```

## Props

| Prop    | Type     | Default | Description                     |
| ------- | -------- | ------- | ------------------------------- |
| `class` | `string` | `""`    | Additional CSS classes to apply |

All standard button HTML attributes are supported.

## Features

- Smooth hover animations with expanding dot effect
- Sliding text transition
- Arrow icon reveal on hover
- Fully customizable styling
- Built-in Lucide icon support
- Accessible button element

## Examples

### Custom Styling

```svelte
<InteractiveHoverButton class="bg-primary text-white">
  Click Me
</InteractiveHoverButton>
```

### With Click Handler

```svelte
<InteractiveHoverButton onclick={() => console.log("Clicked!")}>
  Submit
</InteractiveHoverButton>
```

### Large Button

```svelte
<InteractiveHoverButton class="px-8 py-4 text-lg">
  Learn More
</InteractiveHoverButton>
```

## Notes

- The component uses CSS transitions for smooth animations
- Arrow icon (ArrowRight) is included from lucide-svelte
- Works well with Tailwind CSS utility classes
- Maintains accessibility with proper button semantics
````
