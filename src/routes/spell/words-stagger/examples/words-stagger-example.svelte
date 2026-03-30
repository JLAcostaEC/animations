 <script lang="ts">
	import { WordsStagger } from "$lib/components/spell/words-stagger";

</script>
 <div class="flex flex-col gap-8">
      <div class="space-y-2">
        <p class="text-sm text-muted-foreground font-mono">
          SMALL STAGGER (0.05s)
        </p>
        <WordsStagger stagger={0.05} class="text-xl font-medium" triggerOnView>
          You can just ship things.
        </WordsStagger>
      </div>

      <div class="space-y-2">
        <p class="text-sm text-muted-foreground font-mono">
          NORMAL STAGGER (0.1s)
        </p>
        <WordsStagger stagger={0.1} class="text-xl font-medium" triggerOnView>
          You can just ship things.
        </WordsStagger>
      </div>

      <div class="space-y-2">
        <p class="text-sm text-muted-foreground font-mono">
          LARGE STAGGER (0.2s)
        </p>
        <WordsStagger stagger={0.2} class="text-xl font-medium" triggerOnView>
          You can just ship things.
        </WordsStagger>
      </div>
    </div>