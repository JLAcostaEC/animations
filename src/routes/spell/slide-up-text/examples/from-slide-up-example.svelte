<script lang="ts">
	import { SlideUpText } from "$lib/components/spell/slide-up-text";
</script>

<div class="flex flex-col gap-8">
	<div class="flex items-start flex-col">
		<span class="text-muted-foreground mb-2 font-mono text-sm"> BY WORDS </span>
		<SlideUpText split="words" stagger={0.2} class="text-xl font-medium" triggerOnView once={false}>
			Beautiful animated text
		</SlideUpText>
	</div>
	<div class="flex items-start flex-col">
		<span class="text-muted-foreground mb-2 font-mono text-sm"> BY CHARACTERS </span>
		<SlideUpText split="characters" stagger={0.03} class="text-xl font-medium" triggerOnView once={false}>
			You just can ship things.
		</SlideUpText>
	</div>
	<div class="flex items-start flex-col">
		<span class="text-muted-foreground mb-2 font-mono text-sm"> BY LINES </span>
		<SlideUpText split="lines" stagger={0.3} class="text-xl font-medium" triggerOnView once={false}>
			{"First line\nSecond line\nThird line"}
		</SlideUpText>
	</div>
</div>
