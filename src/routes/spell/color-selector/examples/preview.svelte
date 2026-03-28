<script lang="ts">
	import { ColorSelector, type ColorSelectorColor } from "$lib/components/spell/color-selector";

	let value: ColorSelectorColor = $state("teal");
</script>

<div class="flex flex-col items-center gap-4 py-8 text-center">
	<div class="rounded-2xl border bg-card px-4 py-3 shadow-sm">
		<p class="text-muted-foreground text-xs font-medium tracking-[0.2em] uppercase">
			Selected
		</p>
		<p class="mt-2 text-lg font-semibold">{value}</p>
	</div>

	<ColorSelector
		colors={["orange", "teal", "purple", "#111827", "currentColor"]}
		size="lg"
		bind:value
	/>
</div>
