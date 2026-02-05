<script lang="ts">
  import { AnimatedBeam } from "$lib/components/magic-ui/animated-beam";
  import Circle from "./circle.svelte";
  import OpenaiIcon from "./openai-icon.svelte";
  import UserIcon from "./user-icon.svelte";

  let containerRef: HTMLDivElement | null = $state(null);
  let div1Ref: HTMLDivElement | null = $state(null);
  let div2Ref: HTMLDivElement | null = $state(null);
  let div3Ref: HTMLDivElement | null = $state(null);
  let div4Ref: HTMLDivElement | null = $state(null);
</script>

<div class="min-h-screen bg-white dark:bg-black p-8 space-y-16">
  <!-- Example 1: Basic Usage -->
  <div class="space-y-4">
    <h2 class="text-2xl font-semibold text-black dark:text-white">
      Basic Usage
    </h2>
    <p class="text-slate-600 dark:text-slate-300">
      Simple animated beam connecting two elements
    </p>
    <div class="flex items-center justify-center p-8 border rounded-lg">
      <div
        class="relative flex w-full max-w-[500px] items-center justify-center overflow-hidden p-10"
        bind:this={containerRef}
      >
        <div
          class="flex size-full flex-col items-stretch justify-between gap-10"
        >
          <div class="flex flex-row justify-between">
            <Circle bind:ref={div1Ref}>
              {#snippet children()}
                <UserIcon />
              {/snippet}
            </Circle>
            <Circle bind:ref={div2Ref}>
              {#snippet children()}
                <OpenaiIcon />
              {/snippet}
            </Circle>
          </div>
        </div>

        <AnimatedBeam
          duration={3}
          {containerRef}
          fromRef={div1Ref}
          toRef={div2Ref}
        />
      </div>
    </div>
  </div>
</div>
