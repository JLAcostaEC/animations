<script lang="ts">
	import { BlurReveal } from "$lib/components/spell/blur-reveal";
</script>

<div class="flex justify-center py-10">
	<div class="w-full max-w-xl rounded-3xl border bg-zinc-950 px-6 py-8 text-zinc-50 shadow-sm">
		<div class="mb-5 space-y-1">
			<p class="text-xs font-semibold tracking-[0.24em] text-zinc-400 uppercase">Tuned Timing</p>
			<p class="max-w-[24rem] text-sm text-zinc-300">
				A tighter stagger and shorter duration create a faster, more editorial heading reveal.
			</p>
		</div>

		<BlurReveal
			as="span"
			content="Fast. Focused. Dramatic."
			class="text-3xl font-medium tracking-tight sm:text-4xl"
			delay={0.05}
			stagger={0.018}
			duration={0.22}
			letterSpacing={0.4}
			triggerOnView
			once={false}
		/>
	</div>
</div>
