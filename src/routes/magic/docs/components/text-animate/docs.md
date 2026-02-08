# Text Animate

Animate text with various effects like blur, slide, scale, and fade with granular control over words, characters, or lines.

## Installation

```bash
npx shadcn-svelte@latest add https://animations.sikandarjodd.dev/r/text-animate.json
```

## Usage

```svelte
<script lang="ts">
  import TextAnimate from "$lib/components/magic-ui/text-animate/text-animate.svelte";
</script>

<TextAnimate
  content="Text animations made easy"
  animation="blurIn"
  by="word"
/>
```

## Props

| Prop               | Type                                                                                                                                        | Default     | Description                                           |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------------------------------------------------- |
| `content`          | `string`                                                                                                                                    | `""`        | The text content to animate (required)                |
| `animation`        | `"fadeIn" \| "blurIn" \| "blurInUp" \| "blurInDown" \| "slideUp" \| "slideDown" \| "slideLeft" \| "slideRight" \| "scaleUp" \| "scaleDown"` | `"fadeIn"`  | The animation preset to use                           |
| `by`               | `"text" \| "word" \| "character" \| "line"`                                                                                                 | `"word"`    | How to split the text for animation                   |
| `delay`            | `number`                                                                                                                                    | `0`         | Delay before the animation starts (in seconds)        |
| `duration`         | `number`                                                                                                                                    | `0.3`       | Total duration of the animation (in seconds)          |
| `variants`         | `Variants`                                                                                                                                  | `undefined` | Custom motion variants for the item animation         |
| `startOnView`      | `boolean`                                                                                                                                   | `false`     | Start animation when component enters viewport        |
| `once`             | `boolean`                                                                                                                                   | `false`     | Animate only once when in view                        |
| `accessible`       | `boolean`                                                                                                                                   | `true`      | Enable accessibility features (screen reader support) |
| `className`        | `string`                                                                                                                                    | `""`        | Additional CSS classes to apply to the container      |
| `segmentClassName` | `string`                                                                                                                                    | `""`        | Additional CSS classes to apply to each segment       |

## Animation Presets

The component comes with the following animation presets:

- **fadeIn** - Simple fade in animation
- **blurIn** - Blur from blurred to clear
- **blurInUp** - Blur in with upward motion
- **blurInDown** - Blur in with downward motion
- **slideUp** - Slide in from bottom
- **slideDown** - Slide in from top
- **slideLeft** - Slide in from right
- **slideRight** - Slide in from left
- **scaleUp** - Scale from small to normal with spring
- **scaleDown** - Scale from large to normal with spring

## Text Segmentation

Control how the text is split for animation using the `by` prop:

- **text** - Animate the entire text as one unit
- **word** - Animate each word separately (default)
- **character** - Animate each character separately
- **line** - Animate each line separately (split by \n)

## Examples

### Blur In by Text

Animate entire text with a blur-in effect:

```svelte
<script lang="ts">
  import TextAnimate from "$lib/components/magic-ui/text-animate/text-animate.svelte";
</script>

<TextAnimate
  content="This text blurs into view"
  animation="blurIn"
  by="text"
  class="text-3xl font-bold"
/>
```

### Slide Up by Word

Animate each word with a slide-up effect:

```svelte
<script lang="ts">
  import TextAnimate from "$lib/components/magic-ui/text-animate/text-animate.svelte";
</script>

<TextAnimate
  content="Each word slides up smoothly"
  animation="slideUp"
  by="word"
  class="text-3xl font-bold"
/>
```

### Scale Up by Text

Animate entire text with a scale-up spring effect:

```svelte
<script lang="ts">
  import TextAnimate from "$lib/components/magic-ui/text-animate/text-animate.svelte";
</script>

<TextAnimate
  content="Scale up animation with spring"
  animation="scaleUp"
  by="text"
  class="text-3xl font-bold"
/>
```

### Fade In by Line

Animate text line by line with a fade-in effect:

```svelte
<script lang="ts">
  import TextAnimate from "$lib/components/magic-ui/text-animate/text-animate.svelte";
</script>

<TextAnimate
  content="First line appears\nThen the second line\nAnd finally the third"
  animation="fadeIn"
  by="line"
  class="text-center text-3xl font-bold"
/>
```

### Slide Left by Character

Animate each character with a slide-left effect:

```svelte
<script lang="ts">
  import TextAnimate from "$lib/components/magic-ui/text-animate/text-animate.svelte";
</script>

<TextAnimate
  content="Character by character"
  animation="slideLeft"
  by="character"
  class="text-3xl font-bold"
/>
```

### With Delay

Add a delay before the animation starts:

```svelte
<script lang="ts">
  import TextAnimate from "$lib/components/magic-ui/text-animate/text-animate.svelte";
</script>

<TextAnimate
  content="This animation starts after a delay"
  animation="blurInUp"
  by="word"
  delay={0.8}
  class="text-3xl font-bold"
/>
```

### With Duration

Control the total duration of the animation:

```svelte
<script lang="ts">
  import TextAnimate from "$lib/components/magic-ui/text-animate/text-animate.svelte";
</script>

<TextAnimate
  content="Slower animation with custom duration"
  animation="slideUp"
  by="word"
  duration={1.2}
  class="text-3xl font-bold"
/>
```

### Custom Motion Variants

Use custom motion variants for complete control over the animation:

```svelte
<script lang="ts">
  import TextAnimate from "$lib/components/magic-ui/text-animate/text-animate.svelte";
  import type { Variants } from "motion-sv";

  const customVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -50,
      rotate: -10,
      scale: 0.8,
    },
    show: {
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };
</script>

<TextAnimate
  content="Custom motion variants"
  variants={customVariants}
  by="word"
  class="text-3xl font-bold"
/>
```

## Advanced Usage

### Viewport Animation

Animate text when it enters the viewport:

```svelte
<TextAnimate
  content="Animates when scrolled into view"
  animation="blurIn"
  by="word"
  startOnView={true}
  once={true}
/>
```

### Combining Animations

You can create complex text animations by combining multiple instances:

```svelte
<div class="space-y-4">
  <TextAnimate
    content="First headline"
    animation="slideUp"
    by="word"
    delay={0}
  />
  <TextAnimate
    content="Second headline with delay"
    animation="slideUp"
    by="word"
    delay={0.5}
  />
  <TextAnimate
    content="Final headline"
    animation="fadeIn"
    by="word"
    delay={1}
  />
</div>
```
