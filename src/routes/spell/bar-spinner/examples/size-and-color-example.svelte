<script lang="ts">
	import { BarSpinner } from "$lib/components/spell/bar-spinner";

	const examples = [
		{
			label: "Muted Inline",
			size: 16,
			color: "#475569",
			background: "bg-slate-100",
			text: "text-slate-700",
		},
		{
			label: "Brand Accent",
			size: 24,
			color: "#2563eb",
			background: "bg-blue-50",
			text: "text-blue-700",
		},
		{
			label: "Dark Surface",
			size: 32,
			color: "#f8fafc",
			background: "bg-zinc-950",
			text: "text-zinc-100",
		},
	] as const;
</script>

<div class="grid gap-4 py-8 md:grid-cols-3">
	{#each examples as example}
		<div class={`rounded-3xl border px-5 py-6 shadow-sm ${example.background} ${example.text}`}>
			<div class="flex items-center justify-between gap-4">
				<div>
					<p class="text-xs font-semibold tracking-[0.24em] uppercase opacity-70">
						{example.label}
					</p>
					<p class="mt-2 text-sm opacity-80">Spinner size {example.size}px</p>
				</div>
				<BarSpinner
					size={example.size}
					color={example.color}
					aria-label={`${example.label} loading state`}
				/>
			</div>
		</div>
	{/each}
</div>
