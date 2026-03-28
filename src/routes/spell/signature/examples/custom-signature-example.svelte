<script lang="ts">
	import { Signature } from "$lib/components/spell/signature";
</script>

<div class="flex justify-center py-12">
	<div
		class="w-full max-w-2xl rounded-[28px] border bg-zinc-950 px-6 py-8 text-zinc-50 shadow-sm"
	>
		<p class="mb-3 text-xs font-semibold tracking-[0.28em] text-zinc-400 uppercase">
			Custom Signature
		</p>
		<Signature
			text="Approved by Motion"
			fontSize={20}
			color="#f5f5f5"
			duration={2}
			delay={0.15}
			inView
		/>
	</div>
</div>
