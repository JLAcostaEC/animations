<script lang="ts">
	import { SlideUpText } from "$lib/components/spell/slide-up-text";
</script>

<div class="flex justify-center py-12">
	<div
		class="w-full max-w-2xl rounded-[28px] border bg-zinc-950 px-6 py-8 text-zinc-50 shadow-sm"
	>
		<p class="mb-3 text-xs font-semibold tracking-[0.28em] text-zinc-400 uppercase">
			Character Split
		</p>
		<SlideUpText
			split="characters"
			from="center"
			stagger={0.04}
			delay={0.05}
			class="text-xl font-semibold tracking-[0.22em] uppercase"
			charClass="pr-[0.02em]"
		>
			CENTERED STAGGER
		</SlideUpText>
	</div>
</div>
