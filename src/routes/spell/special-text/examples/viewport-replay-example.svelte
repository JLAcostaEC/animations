<script lang="ts">
	import { SpecialText } from "$lib/components/spell/special-text";
</script>

<div class="flex justify-center py-12">
	<div class="w-full max-w-xl rounded-[28px] border bg-zinc-950 px-6 py-8 text-zinc-50 shadow-sm">
		<p class="mb-2 text-xs font-semibold tracking-[0.28em] text-zinc-400 uppercase">
			Replay On View
		</p>
		<p class="mb-5 text-sm text-zinc-300">
			The text below uses the slot as its content source and can replay after leaving and
			re-entering the viewport.
		</p>

		<SpecialText
			inView
			once={false}
			delay={0.2}
			speed={18}
			class="text-sm font-medium tracking-[0.18em] text-zinc-100 uppercase"
		>
			Entry confirmed
		</SpecialText>
	</div>
</div>
