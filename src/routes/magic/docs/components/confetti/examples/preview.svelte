<script lang="ts">
	import { Confetti } from "$lib/components/magic/confetti";
	import { Button } from "$lib/components/ui/button";
	let active = $state(true);

	let fire = () => {
		active = false;
		setTimeout(() => {
			active = true;
		}, 10);
	};
</script>

<div
	class="bg-background relative flex h-125 w-full flex-col items-center justify-center overflow-hidden rounded-lg border"
>
	<Confetti {active}>
		<Button onclick={fire}>Fire Confetti</Button>
	</Confetti>
</div>
