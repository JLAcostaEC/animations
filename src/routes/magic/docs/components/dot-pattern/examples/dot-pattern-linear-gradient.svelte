<script lang="ts">
  import { DotPattern } from "$lib/components/magic-ui/dot-pattern";
  import { cn } from "$lib/utils";
</script>

<div
  class="bg-background relative flex size-full items-center justify-center overflow-hidden rounded-lg border p-20"
>
  <DotPattern
    width={20}
    height={20}
    cx={1}
    cy={1}
    cr={1}
    class={cn(
      "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]",
    )}
  />
</div>
