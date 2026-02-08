<script lang="ts">
	import { TextAnimate } from "$lib/components/magic-ui/text-animate";
</script>

<div class="flex items-center justify-center">
	<TextAnimate
		content="This animation starts after a delay"
		animation="blurInUp"
		by="character"
		delay={2}
	/>
</div>
