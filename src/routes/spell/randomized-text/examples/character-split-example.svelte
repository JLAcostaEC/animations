<script lang="ts">
	import { RandomizedText } from "$lib/components/spell/randomized-text";
</script>

<div class="flex min-h-[200px] w-[500px] flex-col items-center justify-start gap-4">
	<div class="justif-start flex flex-col items-start gap-1">
		<span class="text-muted-foreground font-mono text-sm"> BY CHARACTERS </span>
		<RandomizedText split="chars" class="text-base font-medium tracking-tight" triggerOnView>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis debitis ipsam saepe
			incidunt laboriosam eaque quasi commodi beatae excepturi quos!
		</RandomizedText>
	</div>
	<div class="justif-start flex flex-col items-start gap-1">
		<span class="text-muted-foreground font-mono text-sm"> BY WORDS </span>
		<RandomizedText class="text-base font-medium tracking-tight" triggerOnView>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis debitis ipsam saepe
			incidunt laboriosam eaque quasi commodi beatae excepturi quos!
		</RandomizedText>
	</div>
</div>
