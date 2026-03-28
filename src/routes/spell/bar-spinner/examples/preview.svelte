<script lang="ts">
	import { BarSpinner } from "$lib/components/spell/bar-spinner";
</script>

<div class="flex justify-center py-12">
	<div
		class="flex w-full max-w-xl items-center justify-between rounded-[28px] border bg-zinc-950 px-6 py-5 text-zinc-50 shadow-sm"
	>
		<div class="space-y-1">
			<p class="text-xs font-semibold tracking-[0.28em] text-zinc-400 uppercase">Syncing</p>
			<p class="text-sm text-zinc-300">Preparing motion assets for export.</p>
		</div>
		<BarSpinner size={28} color="#f5f5f5" aria-label="Loading export assets" />
	</div>
</div>
