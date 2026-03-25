# Motion Grid

A frame-based 2D grid animation primitive with active and inactive cells.

## Installation

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/motion-grid.json
```

### Manual Installation

```bash
# Using npm
npm install motion-sv

# Using pnpm
pnpm add motion-sv

# Using yarn
yarn add motion-sv
```

## Usage

```svelte
<script lang="ts">
  import {
    MotionGrid,
    MotionGridCells,
    type Frames,
  } from "$lib/components/magic-ui/motion-grid";

  const frames: Frames = [
    [
      [2, 1],
      [2, 2],
      [2, 3],
    ],
    [
      [1, 2],
      [2, 2],
      [3, 2],
    ],
  ];
</script>

<MotionGrid gridSize={[5, 5]} {frames} duration={250} class="gap-0.5">
  <MotionGridCells
    class="bg-foreground/20 data-[active=true]:bg-foreground/80 size-2 rounded-full"
  />
</MotionGrid>
```

## Props

### MotionGrid

| Prop       | Type               | Default | Description                                                    |
| ---------- | ------------------ | ------- | -------------------------------------------------------------- |
| `gridSize` | `[number, number]` | -       | Number of columns and rows in the grid.                        |
| `frames`   | `Frames`           | -       | Sequence of active cell coordinates for each animation step.   |
| `duration` | `number`           | `200`   | Frame interval in milliseconds. Also used for cell transition. |
| `animate`  | `boolean`          | `true`  | Enables/disables automatic frame cycling.                      |
| `child`    | `Snippet`          | -       | Render-prop wrapper (Svelte equivalent of React `asChild`).    |
| `class`    | `string`           | `""`    | Additional classes for the grid wrapper.                       |

### MotionGridCells

| Prop            | Type                        | Default | Description                                           |
| --------------- | --------------------------- | ------- | ----------------------------------------------------- |
| `activeProps`   | `MotionGridCellMotionProps` | -       | Extra motion/html props merged when cell is active.   |
| `inactiveProps` | `MotionGridCellMotionProps` | -       | Extra motion/html props merged when cell is inactive. |
| `class`         | `string`                    | `""`    | Base class applied to every generated cell.           |

## Notes

- Frame coordinates use `[x, y]` with `x` as column index and `y` as row index.
- `MotionGridCells` must be rendered inside `MotionGrid` (strict context).
- This docs page includes:
  - React-style state cycle preview
  - Manual state switcher
  - Custom active/inactive cell props
  - Child render-prop wrapper usage
