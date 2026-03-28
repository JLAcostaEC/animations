<script lang="ts">
	import { Signature } from "$lib/components/spell/signature";
</script>

<div class="flex justify-center py-12">
	<div class="bg-card w-full max-w-2xl rounded-[28px] border px-6 py-8 shadow-sm">
		<p class="text-muted-foreground mb-3 text-xs font-semibold tracking-[0.28em] uppercase">
			Signature Reveal
		</p>
		<Signature text="Svelte Spell" fontSize={24} color="#1f2937" duration={1.8} />
	</div>
</div>
