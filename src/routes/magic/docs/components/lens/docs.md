# Lens

A interactive component that enables zooming into images, videos and other elements. It renders a circular magnifying lens that can follow the pointer or remain static.

## Installation

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/lens.json
```

## Usage

```svelte
<script lang="ts">
  import Lens from "$lib/components/magic-ui/lens/lens.svelte";
</script>

<Lens zoomFactor={2} lensSize={150} isStatic={false} ariaLabel="Zoom Area">
  <!-- content to magnify -->
</Lens>
```

## Props

| Prop              | Type                       | Default                   | Description                                               |
| ----------------- | -------------------------- | ------------------------- | --------------------------------------------------------- |
| `children`        | `Snippet`                  | —                         | Content wrapped by the lens (image, video, etc.).         |
| `zoomFactor`      | `number`                   | `1`                       | The zoom factor of the lens.                              |
| `lensSize`        | `number`                   | `100`                     | The size of the lens (diameter in pixels).                |
| `position`        | `{ x: number; y: number }` | `{ x: 0, y: 0 }`          | The current position of the lens.                         |
| `defaultPosition` | `{ x: number; y: number }` | `{ x: 0, y: 0 }`          | The default starting position of the lens.                |
| `isStatic`        | `boolean`                  | `false`                   | Whether the lens stays fixed instead of following cursor. |
| `duration`        | `number`                   | `0.3`                     | Duration of the lens animation in seconds.                |
| `lensColor`       | `string`                   | `"rgba(255,255,255,0.5)"` | Color overlay inside the lens.                            |
| `ariaLabel`       | `string`                   | `"zoom lens"`             | ARIA label for accessibility.                             |
| `class`           | `string`                   | `""`                      | Additional CSS classes to apply to container.             |

## Examples

```svelte
<script lang="ts">
  import Lens from "$lib/components/magic-ui/lens/lens.svelte";
</script>

<Lens zoomFactor={2} lensSize={150} ariaLabel="Zoom Area">
  <img src="path/to/image.jpg" alt="Zoomable content" />
</Lens>
```
