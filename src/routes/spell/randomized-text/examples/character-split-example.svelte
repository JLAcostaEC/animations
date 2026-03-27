<script lang="ts">
	import { RandomizedText } from "$lib/components/spell/randomized-text";
</script>

<div class="flex justify-center py-10">
	<div class="w-full max-w-xl rounded-3xl border bg-zinc-950 px-6 py-8 text-zinc-50 shadow-sm">
		<div class="mb-5 space-y-1">
			<p class="text-xs font-semibold tracking-[0.24em] text-zinc-400 uppercase">
				Character Split
			</p>
			<p class="max-w-[24rem] text-sm text-zinc-300">
				Grapheme-safe character splitting keeps punctuation and spacing intact while the
				reveal waits for scroll entry.
			</p>
		</div>

		<RandomizedText
			as="span"
			content="Built for launch week."
			split="chars"
			class="text-3xl font-medium tracking-tight sm:text-4xl"
			delay={0.1}
			triggerOnView
			once={false}
		/>
	</div>
</div>
