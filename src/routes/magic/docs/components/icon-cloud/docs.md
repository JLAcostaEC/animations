# Icon Cloud

An interactive 3D tag cloud component that displays icons or images in a sphere formation with smooth rotation and drag interactions. Perfect for showcasing technologies, tools, or any collection of icons/images in an engaging way.

## Installation

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/icon-cloud.json
```

## Usage

### With Images

```svelte
<script lang="ts">
  import { IconCloud } from "$lib/components/magic-ui/icon-cloud";

  let images = [
    "https://cdn.simpleicons.org/typescript/typescript",
    "https://cdn.simpleicons.org/react/react",
    "https://cdn.simpleicons.org/svelte/svelte",
    // ... more image URLs
  ];
</script>

<IconCloud {images} />
```

### With Lucide Icons

```svelte
<script lang="ts">
  import { IconCloud } from "$lib/components/magic-ui/icon-cloud";
  import { Github, Twitter, Code, Database } from "@lucide/svelte";

  let icons = [Github, Twitter, Code, Database];
</script>

<IconCloud {icons} />
```

### Mixed Icons and Images

```svelte
<script lang="ts">
  import { IconCloud } from "$lib/components/magic-ui/icon-cloud";
  import { Github, Twitter } from "@lucide/svelte";

  let icons = [Github, Twitter];
  let images = ["https://example.com/image1.png"];
</script>

<IconCloud {icons} {images} />
```

## Props

| Prop     | Type          | Default | Description                                          |
| -------- | ------------- | ------- | ---------------------------------------------------- |
| `icons`  | `Component[]` | `[]`    | Array of Svelte components (Lucide icons) to display |
| `images` | `string[]`    | `[]`    | Array of image URLs to display in the cloud          |
| `class`  | `string`      | `""`    | Additional CSS classes to apply to the container     |

## Features

- **Interactive 3D Sphere**: Icons/images are positioned on a 3D sphere with realistic depth
- **Smooth Rotation**: Automatic continuous rotation with customizable speed
- **Drag Interaction**: Click and drag to rotate the sphere manually
- **Auto-rotation Resume**: After dragging, smoothly returns to auto-rotation
- **Responsive Sizing**: Icons scale based on their z-position for depth effect
- **Opacity Depth**: Icons fade based on distance for enhanced 3D effect

## Examples
