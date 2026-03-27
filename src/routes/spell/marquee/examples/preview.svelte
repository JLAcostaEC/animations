<script lang="ts">
	import { Marquee } from "$lib/components/spell/marquee";

	const items = ["Launch Week", "Studio Notes", "Svelte 5", "Spell UI", "Reusable Blocks"];
</script>

<div class="py-8">
	<Marquee pauseOnHover class="py-2">
		{#snippet children()}
			<div class="flex gap-3 pr-3">
				{#each items as item}
					<span class="bg-card rounded-full border px-3 py-1 text-sm shadow-sm"
						>{item}</span
					>
				{/each}
			</div>
		{/snippet}
	</Marquee>
</div>
