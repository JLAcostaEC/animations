<script lang="ts">
  import { DotPattern } from "$lib/components/magic-ui/dot-pattern";
  import { cn } from "$lib/utils";
</script>

<div
  class="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden"
>
  <DotPattern
    glow={true}
    class={cn(
      "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
    )}
  />
</div>
