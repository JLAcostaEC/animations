# Dotted Map

The Dotted Map component renders an interactive SVG-based world map using dots. It's perfect for visualizing global data, showing office locations, highlighting service areas, or creating stunning hero sections with geographic context.

## Features

- **SVG-Based**: Lightweight, scalable vector graphics that look crisp at any size
- **Customizable Markers**: Add location markers with latitude/longitude coordinates
- **Dot Styling**: Control dot size, color, and density
- **Staggered Rows**: Optional honeycomb-style staggered dot pattern
- **Responsive**: Automatically scales to fit container
- **Performant**: Efficient rendering using `svg-dotted-map` library

## Installation

### CLI Installation

Use the shadcn-svelte CLI to install the component:

::: code-group

```bash [npx]
npx shadcn-svelte@latest add "https://animations.sikandarjodd.com/r/dotted-map.json"
```

```bash [pnpm]
pnpm dlx shadcn-svelte@latest add "https://animations.sikandarjodd.com/r/dotted-map.json"
```

```bash [bun]
bunx shadcn-svelte@latest add "https://animations.sikandarjodd.com/r/dotted-map.json"
```

:::

### Manual Installation

#### 1. Install Dependencies

The component requires the `svg-dotted-map` package:

::: code-group

```bash [npm]
npm install svg-dotted-map
```

```bash [pnpm]
pnpm add svg-dotted-map
```

```bash [yarn]
yarn add svg-dotted-map
```

```bash [bun]
bun add svg-dotted-map
```

:::

#### 2. Copy the Component

Copy the `DottedMap` component to your project:

```
src/
└── lib/
    └── components/
        └── magic-ui/
            └── dotted-map/
                ├── dotted-map.svelte
                └── index.ts
```

## Usage

### Basic Usage

```svelte
<script lang="ts">
  import { DottedMap } from "$lib/components/magic-ui/dotted-map";
</script>

<div class="h-[500px] w-full">
  <DottedMap />
</div>
```

### With Markers

Add markers to highlight specific locations on the map using latitude and longitude coordinates:

```svelte
<script lang="ts">
  import { DottedMap } from "$lib/components/magic-ui/dotted-map";

  const markers = [
    { lat: 40.7128, lng: -74.006, size: 0.3 }, // New York
    { lat: 51.5074, lng: -0.1278, size: 0.3 }, // London
    { lat: 35.6762, lng: 139.6503, size: 0.3 }, // Tokyo
    { lat: -33.8688, lng: 151.2093, size: 0.3 }, // Sydney
  ];
</script>

<div class="h-[500px] w-full overflow-hidden rounded-lg border">
  <DottedMap {markers} markerColor="#FF6900" />
</div>
```

### Custom Styling

Customize the appearance with dot color, radius, and map density:

```svelte
<script lang="ts">
  import { DottedMap } from "$lib/components/magic-ui/dotted-map";
</script>

<div class="h-[500px] w-full">
  <DottedMap dotRadius={0.15} dotColor="#3DECFF" mapSamples={8000} />
</div>
```

### With Overlay Effect

Create a beautiful fading effect with a radial gradient overlay:

```svelte
<script lang="ts">
  import { DottedMap } from "$lib/components/magic-ui/dotted-map";

  const markers = [
    { lat: 40.7128, lng: -74.006, size: 0.3 },
    { lat: 34.0522, lng: -118.2437, size: 0.3 },
    { lat: 51.5074, lng: -0.1278, size: 0.3 },
  ];
</script>

<div class="relative h-[500px] w-full overflow-hidden rounded-lg border">
  <!-- Radial gradient overlay -->
  <div
    class="to-background absolute inset-0 bg-radial from-transparent to-70%"
  />
  <DottedMap {markers} />
</div>
```

## Props

### DottedMap

| Prop          | Type       | Default          | Description                                       |
| ------------- | ---------- | ---------------- | ------------------------------------------------- |
| `width`       | `number`   | `150`            | Width of the SVG viewBox                          |
| `height`      | `number`   | `75`             | Height of the SVG viewBox                         |
| `mapSamples`  | `number`   | `5000`           | Number of dots to render (higher = more detail)   |
| `markers`     | `Marker[]` | `[]`             | Array of marker objects with lat, lng coordinates |
| `dotColor`    | `string`   | `"currentColor"` | Color of the map dots                             |
| `markerColor` | `string`   | `"#FF6900"`      | Color of the location markers                     |
| `dotRadius`   | `number`   | `0.2`            | Radius of each dot                                |
| `stagger`     | `boolean`  | `true`           | Whether to stagger alternating rows (honeycomb)   |
| `class`       | `string`   | `""`             | Additional CSS classes to apply to the SVG        |
| `style`       | `string`   | `""`             | Inline styles to apply to the SVG                 |

### Marker Interface

| Property | Type     | Required | Description                                      |
| -------- | -------- | -------- | ------------------------------------------------ |
| `lat`    | `number` | Yes      | Latitude of the marker (-90 to 90)               |
| `lng`    | `number` | Yes      | Longitude of the marker (-180 to 180)            |
| `size`   | `number` | No       | Custom size for this marker (default: dotRadius) |

## Guidance

### Choosing Map Samples

The `mapSamples` prop controls the density of dots on the map:

- **Low (2000-3000)**: Faster rendering, abstract appearance
- **Medium (5000)**: Good balance of detail and performance (default)
- **High (8000-10000)**: More detailed map, slower initial render

### Dot Radius Tips

- Use smaller values (`0.1-0.2`) for a finer, more detailed look
- Use larger values (`0.3-0.5`) for a bolder, more stylized appearance
- Marker size should typically be slightly larger than dot radius for visibility

### Common Marker Coordinates

Here are some commonly used city coordinates for reference:

| City        | Latitude | Longitude |
| ----------- | -------- | --------- |
| New York    | 40.7128  | -74.006   |
| Los Angeles | 34.0522  | -118.2437 |
| London      | 51.5074  | -0.1278   |
| Paris       | 48.8566  | 2.3522    |
| Tokyo       | 35.6762  | 139.6503  |
| Sydney      | -33.8688 | 151.2093  |
| Dubai       | 25.2048  | 55.2708   |
| Singapore   | 1.3521   | 103.8198  |
| Berlin      | 52.52    | 13.405    |
| São Paulo   | -23.5505 | -46.6333  |

### Styling Tips

1. **Container Sizing**: Always wrap the component in a container with defined dimensions
2. **Overflow Hidden**: Use `overflow-hidden` on the container for clean edges
3. **Dark Mode**: The default dot color uses `currentColor`, which adapts to text color
4. **Overlays**: Add gradient overlays for depth and visual interest
5. **Border Radius**: Round the container corners for a modern look

### Performance Considerations

- For hero sections with many markers, keep `mapSamples` at default (5000)
- Use CSS transitions for smooth marker animations rather than re-rendering
- Consider lazy loading the map for below-the-fold content

## Examples

### Global Office Locations

Perfect for showcasing company presence around the world.

### Service Coverage Map

Highlight regions where your service is available.

### Interactive Dashboard

Use as a backdrop for data visualization dashboards.
