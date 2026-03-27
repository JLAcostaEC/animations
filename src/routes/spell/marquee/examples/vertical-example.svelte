<script lang="ts">
	import { Marquee } from "$lib/components/spell/marquee";

	const announcements = [
		"Studio updates every Friday",
		"New spell components this week",
		"Motion experiments in progress",
		"Design notes published monthly",
	];
</script>

<div class="bg-card mx-auto w-full max-w-md rounded-3xl border p-5 shadow-sm">
	<Marquee direction="up" duration={14} class="h-44" fadeAmount={18}>
		{#snippet children()}
			<div class="flex flex-col gap-3">
				{#each announcements as item}
					<div class="rounded-2xl border px-4 py-3 text-sm">{item}</div>
				{/each}
			</div>
		{/snippet}
	</Marquee>
</div>
