<script lang="ts">
	import { GradientWaveText } from "$lib/components/spell/gradient-wave-text";

	const customColors = ["#2563eb", "#0ea5e9", "#67e8f9", "#e0f2fe"];
</script>

<div class="flex justify-center py-12">
	<div
		class="w-full max-w-3xl rounded-[28px] border bg-zinc-950 px-6 py-10 text-zinc-50 shadow-sm"
	>
		<p class="mb-4 text-xs font-semibold tracking-[0.28em] text-zinc-400 uppercase">
			Linear Bands
		</p>
		<GradientWaveText
			repeat
			radial={false}
			align="left"
			{customColors}
			class="w-full text-4xl font-semibold tracking-tight sm:text-5xl"
		>
			Signals move in deliberate lines
		</GradientWaveText>
	</div>
</div>
