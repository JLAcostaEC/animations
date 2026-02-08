# Cool Mode

Add a fun particle effect that follows mouse interactions, with support for emojis, images, and custom shapes. Perfect for adding delight to buttons, cards, or any interactive element.

## Features

- **Interactive Particles**: Particles spawn on click/touch and follow mouse movement
- **Customizable Particles**: Use circles, emojis, or custom images
- **Physics-Based Motion**: Natural particle movement with gravity and spin
- **Touch Support**: Works seamlessly on touch devices
- **Performance Optimized**: Efficient particle rendering and cleanup
- **Zero Configuration**: Works great with defaults, customize as needed

## Installation

```bash
npx shadcn-svelte@latest add https://animations.sikandarjodd.dev/r/cool-mode.json
```

## Usage

Basic usage with default colored circles:

```svelte
<script lang="ts">
  import { CoolMode } from "$lib/components/magic-ui/cool-mode";
</script>

<CoolMode>
  <button>Click Me!</button>
</CoolMode>
```

With emoji particles:

```svelte
<script lang="ts">
  import { CoolMode } from "$lib/components/magic-ui/cool-mode";
</script>

<CoolMode options={{ particle: "ð" }}>
  <button>Click Me!</button>
</CoolMode>
```

With custom image:

```svelte
<script lang="ts">
  import { CoolMode } from "$lib/components/magic-ui/cool-mode";
</script>

<CoolMode options={{ particle: "/path/to/image.png" }}>
  <button>Click Me!</button>
</CoolMode>
```

With custom configuration:

```svelte
<script lang="ts">
  import { CoolMode } from "$lib/components/magic-ui/cool-mode";
</script>

<CoolMode
  options={{
    particle: "â",
    particleCount: 30,
    speedHorz: 10,
    speedUp: 20,
    size: 25,
  }}
>
  <button>Click Me!</button>
</CoolMode>
```

## Props

### CoolMode

| Prop       | Type                  | Default     | Description                               |
| ---------- | --------------------- | ----------- | ----------------------------------------- |
| `children` | `Snippet`             | required    | The content to wrap with cool mode effect |
| `options`  | `CoolParticleOptions` | `undefined` | Configuration options for particles       |

### CoolParticleOptions

| Prop            | Type     | Default     | Description                                    |
| --------------- | -------- | ----------- | ---------------------------------------------- |
| `particle`      | `string` | `"circle"`  | Particle type: `"circle"`, emoji, or image URL |
| `particleCount` | `number` | `undefined` | Maximum number of particles                    |
| `size`          | `number` | random      | Size of particles in pixels                    |
| `speedHorz`     | `number` | random      | Horizontal speed of particles                  |
| `speedUp`       | `number` | random      | Vertical speed of particles                    |

## Examples

### Custom Image

Use your own images as particles for branded effects.

## Tips

- Use emojis for quick, fun effects without additional assets
- Custom images work best with transparent backgrounds
- Adjust speed values for different motion feels
- Works great on buttons, cards, and interactive elements
- Particles automatically clean up when they leave the viewport
