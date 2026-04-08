````markdown
# Video Text

A component that displays video content masked by text, creating a text-shaped video effect with customizable typography.

## Installation

<Tabs items={["CLI", "Manual"]}>
<Tab value="CLI">

### Using CLI

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/video-text.json
```

  </Tab>
  <Tab value="Manual">

### Manual Installation

```bash
# Using npm
npm install runed

# Using pnpm
pnpm add runed

# Using yarn
yarn add runed
```

Copy and paste the component source code into your project.

  </Tab>
</Tabs>

## Usage

```svelte
<script lang="ts">
  import { VideoText } from "$lib/components/magic/video-text";
</script>

<VideoText src="/videos/background.mp4" content="HELLO" fontSize={20} />
```

## Props

| Prop               | Type                             | Default        | Description                     |
| ------------------ | -------------------------------- | -------------- | ------------------------------- |
| `src`              | `string`                         | Required       | URL of the video file           |
| `content`          | `string`                         | Required       | Text content to mask the video  |
| `class`            | `string`                         | `""`           | Additional CSS classes to apply |
| `autoPlay`         | `boolean`                        | `true`         | Auto-play the video             |
| `muted`            | `boolean`                        | `true`         | Mute the video audio            |
| `loop`             | `boolean`                        | `true`         | Loop the video playback         |
| `preload`          | `"auto" \| "metadata" \| "none"` | `"auto"`       | Video preload strategy          |
| `fontSize`         | `string \| number`               | `20`           | Font size (number = vw units)   |
| `fontWeight`       | `string \| number`               | `"bold"`       | Font weight of the text         |
| `textAnchor`       | `string`                         | `"middle"`     | SVG text anchor position        |
| `dominantBaseline` | `string`                         | `"middle"`     | SVG vertical alignment          |
| `fontFamily`       | `string`                         | `"sans-serif"` | Font family for the text        |

## Features

- Video content masked by text
- Responsive font sizing with viewport units
- Customizable typography (font, size, weight)
- Auto-updates on window resize
- SVG-based text mask
- Video controls (autoplay, loop, mute)
- Centered text positioning

## Examples

### Large Text Overlay

```svelte
<VideoText
  src="/nature.mp4"
  content="NATURE"
  fontSize={25}
  fontWeight="black"
  class="h-screen"
/>
```

### Multi-word Text

```svelte
<VideoText
  src="/city.mp4"
  content="CITY LIFE"
  fontSize={15}
  fontFamily="'Arial Black', sans-serif"
/>
```

### Custom Styling

```svelte
<VideoText
  src="/abstract.mp4"
  content="ABSTRACT"
  fontSize={30}
  fontWeight="900"
  class="h-[600px] w-full"
/>
```

### Without Autoplay

```svelte
<VideoText
  src="/demo.mp4"
  content="DEMO"
  autoPlay={false}
  loop={false}
  fontSize={20}
/>
```

## Notes

- Font size accepts number (converted to vw) or string with units
- Video is object-fit: cover for full container coverage
- Text is centered by default (50% x, 50% y)
- SVG mask is dynamically generated and encoded
- Responsive to window resize events
- Recommended to use short, bold text for best effect
- Video should have good contrast for text visibility
````
