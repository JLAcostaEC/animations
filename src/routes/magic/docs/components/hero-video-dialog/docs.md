````markdown
# Hero Video Dialog

A video dialog component with animated entrance effects, thumbnail support, and customizable animation styles.

## Installation

<Tabs items={["CLI", "Manual"]}>
<Tab value="CLI">

### Using CLI

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/hero-video-dialog.json
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
  import { HeroVideoDialog } from "$lib/components/magic/hero-video-dialog";
</script>

<HeroVideoDialog
  animationStyle="from-center"
  videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ"
  thumbnailSrc="/thumbnail.jpg"
  thumbnailAlt="Video thumbnail"
/>
```

## Props

| Prop             | Type             | Default             | Description                     |
| ---------------- | ---------------- | ------------------- | ------------------------------- |
| `class`          | `string`         | `""`                | Additional CSS classes to apply |
| `animationStyle` | `AnimationStyle` | `"from-center"`     | Animation entrance style        |
| `videoSrc`       | `string`         | Required            | URL of the video to display     |
| `thumbnailSrc`   | `string`         | Required            | URL of the thumbnail image      |
| `thumbnailAlt`   | `string`         | `"Video thumbnail"` | Alt text for thumbnail          |

### Animation Styles

- `from-bottom` - Slides in from bottom
- `from-center` - Scales from center
- `from-top` - Slides in from top
- `from-left` - Slides in from left
- `from-right` - Slides in from right
- `fade` - Simple fade in
- `top-in-bottom-out` - Slides in from top, exits to bottom
- `left-in-right-out` - Slides in from left, exits to right

## Features

- Multiple animation entrance styles
- Fullscreen video playback
- Click-to-play functionality
- Keyboard escape to close
- Smooth AnimatePresence transitions
- Mobile-friendly controls

## Examples

### Different Animation Styles

```svelte
<HeroVideoDialog
  animationStyle="from-bottom"
  videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ"
  thumbnailSrc="/thumbnail.jpg"
/>

<HeroVideoDialog
  animationStyle="fade"
  videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ"
  thumbnailSrc="/thumbnail.jpg"
/>
```
````
