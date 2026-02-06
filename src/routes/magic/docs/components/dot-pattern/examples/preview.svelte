<script lang="ts">
  import { DotPattern } from "$lib/components/magic-ui/dot-pattern";
  import { cn } from "$lib/utils";
</script>

<div class="relative flex h-[400px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background">
  <p class="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-foreground">
    Dot Pattern
  </p>
  <DotPattern
    width={20}
    height={20}
    cx={1}
    cy={1}
    cr={1}
    class={cn(
      "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
    )}
  />
</div>
