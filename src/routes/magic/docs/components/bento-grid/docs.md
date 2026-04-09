# Bento Grid

Bento grid is a layout used to showcase the features of a product in a simple and elegant way.

## Installation

Using PNPM:

```bash
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/bento-grid.json
```

Using BUN:

```bash
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/bento-grid.json
```

Using NPM or YARN:

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/bento-grid.json
```

## Usage

The grid is exported alongside the card component. A minimal example:

```svelte
<script lang="ts">
  import { BentoGrid, BentoCard } from "$lib/components/magic/bento-grid";
  import FileTextIcon from "@lucide/svelte/icons/file-text";
  import type { Snippet } from "svelte";

  // simple features list, see examples for a full demo
  let features = [
    {
      Icon: FileTextIcon,
      name: "Save your files",
      background: bg,
      description: "We automatically save your files as you type.",
      href: "/",
      cta: "Learn more",
      class: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    // …other items
  ];
</script>

<BentoGrid class="lg:grid-rows-3">
  {#each features as feature}
    <BentoCard {...feature} />
  {/each}
</BentoGrid>

<!-- background  -->
{#snippet bg()}
  <img src="" alt="demo" class="absolute -top-20 -right-20 opacity-60" />
{/snippet}
```

## Props

### BentoGrid

| Prop       | Type      | Default | Description                                 |
| ---------- | --------- | ------- | ------------------------------------------- |
| `class`    | `string`  | `""`    | Additional CSS classes to apply             |
| `children` | `Snippet` |         | The content to be displayed inside the grid |

### BentoCard

| Prop          | Type             | Default | Description                                         |
| ------------- | ---------------- | ------- | --------------------------------------------------- |
| `name`        | `string`         |         | The name of the card, displayed as the title        |
| `class`       | `string`         | `""`    | Additional CSS classes to apply                     |
| `background`  | `Snippet`        |         | The background of the card, can be a color or image |
| `Icon`        | `Component<any>` |         | The icon to be displayed on the card                |
| `iconClass`   | `string`         | `""`    | CSS classes for the icon                            |
| `description` | `string`         |         | A brief description of the card's content           |
| `href`        | `string`         |         | The URL to navigate to when the card is clicked     |
| `cta`         | `string`         |         | The call‑to‑action text displayed on the card       |

## Examples

A more complete example lives in the `examples` folder, but the code below shows the basic structure used in the demo:

```svelte
<script lang="ts">
  import { BentoCard, BentoGrid } from "$lib/components/magic/bento-grid";

  // Icons
  import FileTextIcon from "@lucide/svelte/icons/file-text";
  import InputIcon from "@lucide/svelte/icons/file-input";
  import GlobeIcon from "@lucide/svelte/icons/globe";
  import CalendarIcon from "@lucide/svelte/icons/calendar";
  import BellIcon from "@lucide/svelte/icons/bell";

  import type { Snippet } from "svelte";

  type Feature = {
    Icon: typeof FileTextIcon;
    name: string;
    background: Snippet;
    description: string;
    href: string;
    cta: string;
    class: string;
    iconClass?: string;
  };

  let features: Feature[] = [
    {
      Icon: FileTextIcon,
      name: "Save your files",
      background: bg,
      description: "We automatically save your files as you type.",
      href: "/",
      cta: "Learn more",
      class: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
      iconClass: "stroke-[1.4]",
    },
    {
      Icon: InputIcon,
      name: "Full text search",
      background: bg,
      description: "Search through all your files in one place.",
      href: "/",
      cta: "Learn more",
      class: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
      iconClass: "stroke-[1.4]",
    },
    {
      Icon: GlobeIcon,
      name: "Multilingual",
      background: bg,
      description: "Supports 100+ languages and counting.",
      href: "/",
      cta: "Learn more",
      class: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
      iconClass: "stroke-[1.4]",
    },
    {
      Icon: CalendarIcon,
      name: "Calendar",
      background: bg,
      description: "Use the calendar to filter your files by date.",
      href: "/",
      cta: "Learn more",
      class: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
      iconClass: "stroke-[1.4]",
    },
    {
      Icon: BellIcon,
      name: "Notifications",
      background: bg,
      description:
        "Get notified when someone shares a file or mentions you in a comment.",
      href: "/",
      cta: "Learn more",
      class: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
      iconClass: "stroke-[1.4]",
    },
  ];
</script>

<!-- background  -->
{#snippet bg()}
  <img src="" alt="demo" class="absolute -top-20 -right-20 opacity-60" />
{/snippet}

<BentoGrid class="lg:grid-rows-3">
  {#each features as feature}
    <BentoCard {...feature} />
  {/each}
</BentoGrid>
```
