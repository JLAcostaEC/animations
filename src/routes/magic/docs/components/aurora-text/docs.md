# Aurora Text

An animated gradient text component with aurora-like flowing colors that smoothly transitions and transforms.

## Installation

### Install via CLI

```bash
npx shadcn-svelte@latest add https://animations.sikandarjodd.dev/r/aurora-text.json
```

### Manual Installation

<details>
<summary>Manual installation steps</summary>

1. Install the required dependencies:

```bash
npm install clsx tailwind-merge
```

2. Copy the component files:

Create the following file structure:

```
src/
  └── lib/
      └── components/
          └── magic-ui/
              └── aurora-text/
                  ├── aurora-text.svelte
                  └── index.ts
```

3. Add the aurora animation to your `src/routes/layout.css`:

```css
@theme inline {
  --animate-aurora: aurora 8s ease-in-out infinite alternate;

  @keyframes aurora {
    0% {
      background-position: 0% 50%;
      transform: rotate(-5deg) scale(0.9);
    }
    25% {
      background-position: 50% 100%;
      transform: rotate(5deg) scale(1.1);
    }
    50% {
      background-position: 100% 50%;
      transform: rotate(-3deg) scale(0.95);
    }
    75% {
      background-position: 50% 0%;
      transform: rotate(3deg) scale(1.05);
    }
    100% {
      background-position: 0% 50%;
      transform: rotate(-5deg) scale(0.9);
    }
  }
}
```

</details>

## Usage

```svelte
<script lang="ts">
  import { AuroraText } from "$lib/components/magic-ui/aurora-text";
</script>

<h1 class="text-4xl font-bold">
  Ship <AuroraText>beautiful</AuroraText> products
</h1>
```

## Props

| Prop       | Type       | Default                                        | Description                                          |
| ---------- | ---------- | ---------------------------------------------- | ---------------------------------------------------- |
| `children` | `Snippet`  | required                                       | The text content to display with aurora effect       |
| `class`    | `string`   | `""`                                           | Additional CSS classes to apply                      |
| `colors`   | `string[]` | `["#FF0080", "#7928CA", "#0070F3", "#38bdf8"]` | Array of hex color values for the gradient animation |
| `speed`    | `number`   | `1`                                            | Animation speed multiplier (higher = faster)         |

## Examples

### Basic Example

```svelte
<script lang="ts">
  import { AuroraText } from "$lib/components/magic-ui/aurora-text";
</script>

<h1 class="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
  Ship <AuroraText>beautiful</AuroraText>
</h1>
```

### Custom Colors

Use custom colors to match your brand:

```svelte
<script lang="ts">
  import { AuroraText } from "$lib/components/magic-ui/aurora-text";
</script>

<h2 class="text-3xl font-bold">
  <AuroraText colors={["#10b981", "#3b82f6", "#8b5cf6", "#ec4899"]}>
    Custom Colors
  </AuroraText>
</h2>
```

### Faster Animation

Adjust the speed for different effects:

```svelte
<script lang="ts">
  import { AuroraText } from "$lib/components/magic-ui/aurora-text";
</script>

<p class="text-2xl">
  <AuroraText speed={2}>Fast Animation</AuroraText>
</p>
```

### With Custom Classes

Apply additional styling:

```svelte
<script lang="ts">
  import { AuroraText } from "$lib/components/magic-ui/aurora-text";
</script>

<span class="text-5xl">
  <AuroraText class="font-extrabold italic">Styled Text</AuroraText>
</span>
```
