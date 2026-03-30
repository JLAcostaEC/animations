# Badge

A compact spell badge for statuses, filters, and tags, with multi-color variants, optional link mode, and two size presets.

## Installation

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/badge.json
```

## Usage

```svelte
<script lang="ts">
  import { Badge } from "$lib/components/spell/badge";
</script>

<div class="flex flex-wrap gap-2">
  <Badge>Default</Badge>
  <Badge variant="emerald">Verified</Badge>
  <Badge variant="outline">Draft</Badge>
</div>
```

## Linked Badges

Set `href` to render the badge as an anchor. This works well for filter chips, metadata rows, and docs links.

```svelte
<script lang="ts">
  import { Badge } from "$lib/components/spell/badge";
</script>

<div class="flex flex-wrap gap-2">
  <Badge href="/spell/randomized-text" variant="sky" size="sm">Text</Badge>
  <Badge href="/spell/perspective-book" variant="violet" size="sm">3D</Badge>
  <Badge href="/spell/exploding-input" variant="amber" size="sm">Input</Badge>
</div>
```

## Variants

Available `variant` values:

- `default`
- `secondary`
- `outline`
- `destructive`
- `red`
- `blue`
- `green`
- `yellow`
- `purple`
- `pink`
- `orange`
- `cyan`
- `indigo`
- `violet`
- `rose`
- `amber`
- `lime`
- `emerald`
- `sky`
- `slate`
- `fuchsia`

## Props

| Prop       | Type                                                                                                                                                                                                                                                | Default     | Description                                                         |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------- |
| `children` | `Snippet`                                                                                                                                                                                                                                           | required    | The badge label or custom inline content rendered inside the badge. |
| `href`     | `string \| undefined`                                                                                                                                                                                                                               | `undefined` | When provided, the badge renders as an anchor instead of a span.    |
| `variant`  | `"default" \| "secondary" \| "outline" \| "destructive" \| "red" \| "blue" \| "green" \| "yellow" \| "purple" \| "pink" \| "orange" \| "cyan" \| "indigo" \| "violet" \| "rose" \| "amber" \| "lime" \| "emerald" \| "sky" \| "slate" \| "fuchsia"` | `"default"` | Controls the visual treatment and color palette of the badge.       |
| `size`     | `"default" \| "sm"`                                                                                                                                                                                                                                 | `"default"` | Controls the badge padding footprint.                               |
| `class`    | `string \| undefined`                                                                                                                                                                                                                               | `undefined` | Custom classes merged onto the badge root element.                  |
