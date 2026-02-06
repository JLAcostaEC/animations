<script lang="ts">
  import { BorderBeam } from "$lib/components/magic-ui/border-beam";
</script>

<div
  class="relative w-[350px] overflow-hidden rounded-lg border bg-white p-6 shadow-lg dark:bg-slate-900"
>
  <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-2">
    Basic Card
  </h3>
  <p class="text-slate-600 dark:text-slate-300 mb-4">
    A simple card with an animated border beam effect.
  </p>
  <div class="flex gap-2">
    <button
      class="px-4 py-2 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
    >
      Cancel
    </button>
    <button
      class="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
    >
      Confirm
    </button>
  </div>
  <BorderBeam duration={8} size={100} />
</div>
