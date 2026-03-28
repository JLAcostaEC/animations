<script lang="ts">
	import type { SpellShowcaseItem } from "./showcase-data";

	let { item }: { item: SpellShowcaseItem } = $props();
</script>

<article
	class="group border-border/70 bg-card hover:border-foreground/15 relative mb-4 [break-inside:avoid] overflow-hidden rounded-[22px] border shadow-sm transition-colors duration-200"
>
	<a
		href={item.href}
		aria-label={`Open ${item.name} docs`}
		class="focus-visible:ring-ring focus-visible:ring-offset-background absolute inset-0 z-20 rounded-[inherit] outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
	></a>

	<div class="relative z-10">
		<div class="min-h-[220px] px-4 pt-5 sm:min-h-[240px]">
			<div class="pointer-events-none overflow-hidden rounded-[16px]">
				<item.preview />
			</div>
		</div>

		<div class="p-4 pt-3">
			<h3 class="text-sm font-medium tracking-[-0.01em]">{item.name}</h3>
		</div>
	</div>
</article>
