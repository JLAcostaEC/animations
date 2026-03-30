<script lang="ts">
	import type { SpellShowcaseItem } from "./showcase-data";
	import SpellOverviewCard from "./spell-overview-card.svelte";

	let { items }: { items: SpellShowcaseItem[] } = $props();
</script>

<section>
	<div class="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6 sm:pb-14 lg:px-8">
		<div class="columns-1 gap-4 md:columns-2 xl:columns-3">
			{#each items as item (item.id)}
				<SpellOverviewCard {item} />
			{/each}
		</div>
	</div>
</section>
