<script lang="ts">
	import { LogoCarousel } from "$lib/components/spell/logo-carousel";

	const logos = [
		{
			name: "North",
			mark: "NO",
			panelClass:
				"border-emerald-500/20 bg-emerald-500/10 text-emerald-950 dark:text-emerald-100",
			markClass:
				"border-emerald-500/30 bg-emerald-500/15 text-emerald-700 dark:text-emerald-200",
		},
		{
			name: "Signal",
			mark: "SI",
			panelClass: "border-sky-500/20 bg-sky-500/10 text-sky-950 dark:text-sky-100",
			markClass: "border-sky-500/30 bg-sky-500/15 text-sky-700 dark:text-sky-200",
		},
		{
			name: "Frame",
			mark: "FR",
			panelClass:
				"border-violet-500/20 bg-violet-500/10 text-violet-950 dark:text-violet-100",
			markClass: "border-violet-500/30 bg-violet-500/15 text-violet-700 dark:text-violet-200",
		},
		{
			name: "Canvas",
			mark: "CA",
			panelClass: "border-amber-500/20 bg-amber-500/10 text-amber-950 dark:text-amber-100",
			markClass: "border-amber-500/30 bg-amber-500/15 text-amber-700 dark:text-amber-200",
		},
		{
			name: "Atlas",
			mark: "AT",
			panelClass: "border-rose-500/20 bg-rose-500/10 text-rose-950 dark:text-rose-100",
			markClass: "border-rose-500/30 bg-rose-500/15 text-rose-700 dark:text-rose-200",
		},
		{
			name: "Helio",
			mark: "HE",
			panelClass:
				"border-indigo-500/20 bg-indigo-500/10 text-indigo-950 dark:text-indigo-100",
			markClass: "border-indigo-500/30 bg-indigo-500/15 text-indigo-700 dark:text-indigo-200",
		},
		{
			name: "Loom",
			mark: "LO",
			panelClass: "border-cyan-500/20 bg-cyan-500/10 text-cyan-950 dark:text-cyan-100",
			markClass: "border-cyan-500/30 bg-cyan-500/15 text-cyan-700 dark:text-cyan-200",
		},
		{
			name: "Orbit",
			mark: "OR",
			panelClass:
				"border-fuchsia-500/20 bg-fuchsia-500/10 text-fuchsia-950 dark:text-fuchsia-100",
			markClass:
				"border-fuchsia-500/30 bg-fuchsia-500/15 text-fuchsia-700 dark:text-fuchsia-200",
		},
	];
</script>

<div class="flex justify-center py-10">
	<div class="bg-card w-full max-w-4xl rounded-[28px] border px-5 py-8 shadow-sm md:px-8">
		<LogoCarousel items={logos} count={4} stagger={0.08} interval={2400} class="gap-4 md:gap-5">
			{#snippet children(item)}
				<div
					class={`flex min-w-0 flex-1 items-center gap-3 rounded-2xl border px-4 py-3 shadow-sm ${item.panelClass}`}
				>
					<div
						class={`flex size-11 shrink-0 items-center justify-center rounded-2xl border text-xs font-semibold tracking-[0.24em] ${item.markClass}`}
					>
						{item.mark}
					</div>
					<div class="min-w-0">
						<p class="truncate text-sm font-semibold">{item.name}</p>
						<p
							class="text-muted-foreground truncate text-[11px] tracking-[0.24em] uppercase"
						>
							Partner
						</p>
					</div>
				</div>
			{/snippet}
		</LogoCarousel>
	</div>
</div>
