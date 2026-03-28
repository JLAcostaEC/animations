<script lang="ts">
	import { LogoCarousel } from "$lib/components/spell/logo-carousel";

	const studios = [
		{
			name: "Afterglow",
			tagline: "Motion systems",
			mark: "AG",
			panelClass:
				"border-neutral-900/10 bg-neutral-950 text-neutral-50 dark:border-neutral-50/10 dark:bg-neutral-50 dark:text-neutral-950",
			markClass:
				"border-white/10 bg-white/10 text-white dark:border-black/10 dark:bg-black/5 dark:text-neutral-950",
		},
		{
			name: "Parcel",
			tagline: "Editorial design",
			mark: "PA",
			panelClass:
				"border-neutral-900/10 bg-stone-100 text-stone-950 dark:border-neutral-50/10 dark:bg-stone-900 dark:text-stone-50",
			markClass:
				"border-black/10 bg-black/5 text-stone-900 dark:border-white/10 dark:bg-white/10 dark:text-stone-50",
		},
		{
			name: "Drift",
			tagline: "Product storytelling",
			mark: "DR",
			panelClass:
				"border-neutral-900/10 bg-teal-50 text-teal-950 dark:border-neutral-50/10 dark:bg-teal-950 dark:text-teal-50",
			markClass:
				"border-teal-900/10 bg-teal-900/5 text-teal-900 dark:border-teal-50/10 dark:bg-teal-50/10 dark:text-teal-50",
		},
		{
			name: "Monarch",
			tagline: "Campaign systems",
			mark: "MO",
			panelClass:
				"border-neutral-900/10 bg-orange-50 text-orange-950 dark:border-neutral-50/10 dark:bg-orange-950 dark:text-orange-50",
			markClass:
				"border-orange-900/10 bg-orange-900/5 text-orange-900 dark:border-orange-50/10 dark:bg-orange-50/10 dark:text-orange-50",
		},
	];
</script>

<div class="flex justify-center py-12">
	<div
		class="w-full max-w-3xl rounded-[32px] border bg-[linear-gradient(180deg,var(--color-background),color-mix(in_oklab,var(--color-muted)_55%,transparent))] p-6 shadow-sm md:p-8"
	>
		<div class="mb-6 space-y-1">
			<p class="text-muted-foreground text-xs font-semibold tracking-[0.28em] uppercase">
				Two Up Rotation
			</p>
			<p class="max-w-xl text-sm">
				Smaller groups and a quicker loop feel more like a rotating brand editorial strip
				than a static logo wall.
			</p>
		</div>

		<LogoCarousel
			items={studios}
			count={2}
			stagger={0.1}
			duration={720}
			interval={1800}
			initialDelay={250}
			class="gap-4"
		>
			{#snippet children(item)}
				<div
					class={`flex flex-1 flex-col gap-4 rounded-[24px] border px-5 py-5 ${item.panelClass}`}
				>
					<div class="flex items-center justify-between gap-3">
						<div
							class={`flex size-12 items-center justify-center rounded-2xl border text-xs font-semibold tracking-[0.24em] ${item.markClass}`}
						>
							{item.mark}
						</div>
						<span class="text-[11px] tracking-[0.3em] uppercase opacity-65">Studio</span
						>
					</div>

					<div class="space-y-1">
						<p class="text-lg font-semibold">{item.name}</p>
						<p class="text-sm opacity-75">{item.tagline}</p>
					</div>
				</div>
			{/snippet}
		</LogoCarousel>
	</div>
</div>
