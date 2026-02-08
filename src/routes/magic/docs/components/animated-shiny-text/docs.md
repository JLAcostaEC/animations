# Animated Shiny Text

A light glare effect which pans across text making it appear as if it is shimmering.

## Installation

```bash
npx shadcn-svelte@latest add https://animations.sikandarjodd.dev/r/animated-shiny-text.json
```

## Usage

```svelte
<script lang="ts">
  import AnimatedShinyText from "$lib/components/magic-ui/animated-shiny-text/animated-shiny-text.svelte";
</script>

<AnimatedShinyText>✨ Introducing Magic UI</AnimatedShinyText>
```

## Props

| Prop           | Type     | Default | Description                               |
| -------------- | -------- | ------- | ----------------------------------------- |
| `shimmerWidth` | `number` | `100`   | The width of the shimmer effect in pixels |
| `class`        | `string` | `""`    | Additional CSS classes to apply           |
