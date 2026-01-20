<script lang="ts">
  import { cn } from "$lib/utils.js";

  type Grid = {
    rows: number;
    cols: number;
  };

  const DEFAULT_GRIDS: Record<string, Grid> = {
    "6x4": { rows: 4, cols: 6 },
    "8x8": { rows: 8, cols: 8 },
    "8x3": { rows: 3, cols: 8 },
    "4x6": { rows: 6, cols: 4 },
    "3x8": { rows: 8, cols: 3 },
  };

  type PredefinedGridKey = keyof typeof DEFAULT_GRIDS;

  interface Props {
    src: string;
    grid?: PredefinedGridKey;
    customGrid?: Grid;
    grayscaleAnimation?: boolean;
    pixelFadeInDuration?: number;
    maxAnimationDelay?: number;
    colorRevealDelay?: number;
  }

  let {
    src,
    grid = "6x4",
    grayscaleAnimation = true,
    pixelFadeInDuration = 1000,
    maxAnimationDelay = 1200,
    colorRevealDelay = 1300,
    customGrid,
  }: Props = $props();

  let isVisible = $state(false);
  let showColor = $state(false);

  const MIN_GRID = 1;
  const MAX_GRID = 16;

  const { rows, cols } = $derived.by(() => {
    const isValidGrid = (grid?: Grid) => {
      if (!grid) return false;
      const { rows, cols } = grid;
      return (
        Number.isInteger(rows) &&
        Number.isInteger(cols) &&
        rows >= MIN_GRID &&
        cols >= MIN_GRID &&
        rows <= MAX_GRID &&
        cols <= MAX_GRID
      );
    };

    return isValidGrid(customGrid) ? customGrid! : DEFAULT_GRIDS[grid];
  });

  let pieces = $derived.by(() => {
    const total = rows * cols;
    return Array.from({ length: total }, (_, index) => {
      const row = Math.floor(index / cols);
      const col = index % cols;

      const clipPath = `polygon(
        ${col * (100 / cols)}% ${row * (100 / rows)}%,
        ${(col + 1) * (100 / cols)}% ${row * (100 / rows)}%,
        ${(col + 1) * (100 / cols)}% ${(row + 1) * (100 / rows)}%,
        ${col * (100 / cols)}% ${(row + 1) * (100 / rows)}%
      )`;

      const delay = Math.random() * maxAnimationDelay;
      return {
        clipPath,
        delay,
      };
    });
  });

  $effect(() => {
    isVisible = true;
    const colorTimeout = setTimeout(() => {
      showColor = true;
    }, colorRevealDelay);
    return () => clearTimeout(colorTimeout);
  });
</script>

<div class="relative h-72 w-72 select-none md:h-96 md:w-96">
  {#each pieces as piece, index}
    <div
      class={cn(
        "absolute inset-0 transition-all ease-out",
        isVisible ? "opacity-100" : "opacity-0",
      )}
      style="clip-path: {piece.clipPath}; transition-delay: {piece.delay}ms; transition-duration: {pixelFadeInDuration}ms;"
    >
      <img
        {src}
        alt="Pixel image piece {index + 1}"
        class={cn(
          "z-1 rounded-[2.5rem] object-cover",
          grayscaleAnimation && (showColor ? "grayscale-0" : "grayscale"),
        )}
        style={grayscaleAnimation
          ? `filter: ${showColor ? "grayscale(0)" : "grayscale(1)"}; transition: filter ${pixelFadeInDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`
          : ""}
        draggable="false"
      />
    </div>
  {/each}
</div>
