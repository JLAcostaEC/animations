<script lang="ts">
	import { ColorSelector, type ColorSelectorColor } from "$lib/components/spell/color-selector";

	let neutral: ColorSelectorColor = $state("#0f172a");
	let accent: ColorSelectorColor = $state("rgba(14, 165, 233, 0.85)");
</script>

<div class="mx-auto flex w-full max-w-lg flex-col gap-6 py-8">
	<div class="space-y-2">
		<p class="text-sm font-medium">Compact palette</p>
		<ColorSelector
			colors={["#0f172a", "#334155", "#64748b", "#cbd5e1"]}
			size="sm"
			bind:value={neutral}
		/>
	</div>

	<div class="space-y-2 text-cyan-600">
		<p class="text-sm font-medium">Large custom colors</p>
		<ColorSelector
			colors={["#ec4899", "rgba(14, 165, 233, 0.85)", "oklch(74% 0.16 143)", "currentColor"]}
			size="lg"
			bind:value={accent}
		/>
	</div>
</div>
