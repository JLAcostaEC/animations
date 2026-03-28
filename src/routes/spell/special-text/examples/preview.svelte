<script lang="ts">
	import { SpecialText } from "$lib/components/spell/special-text";
</script>

<div class="flex justify-center py-12">
	<div class="bg-card w-full max-w-xl rounded-[28px] border px-6 py-8 shadow-sm">
		<p class="text-muted-foreground mb-3 text-xs font-semibold tracking-[0.28em] uppercase">
			Status Label
		</p>
		<SpecialText
			text="SYSTEM READY"
			delay={0.08}
			speed={24}
			class="text-base font-semibold tracking-[0.32em] uppercase"
		/>
	</div>
</div>
