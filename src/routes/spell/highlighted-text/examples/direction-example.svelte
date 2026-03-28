<script lang="ts">
	import { HighlightedText } from "$lib/components/spell/highlighted-text";
</script>

<div class="flex justify-center py-12">
	<div class="bg-card w-full max-w-2xl rounded-[28px] border px-6 py-8 shadow-sm">
		<p class="text-muted-foreground mb-3 text-xs font-semibold tracking-[0.28em] uppercase">
			Viewport Emphasis
		</p>
		<p class="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
			A small directional sweep can make a phrase feel
			<HighlightedText triggerOnView from="left" delay={0.1} class="mx-1">
				deliberate
			</HighlightedText>
			without overpowering the layout.
		</p>
	</div>
</div>
