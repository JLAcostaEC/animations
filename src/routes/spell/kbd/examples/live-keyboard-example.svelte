<script lang="ts">
	import { KBD } from "$lib/components/spell/KBD";
</script>

<div class="flex flex-wrap gap-4">
	<KBD keys={["command"]} listenToKeyboard />
	<KBD keys={["control"]} listenToKeyboard />
	<KBD keys={["alt"]} listenToKeyboard />
	<KBD keys={["up"]} listenToKeyboard />
	<KBD keys={["down"]} listenToKeyboard />
	<KBD keys={["left"]} listenToKeyboard />
	<KBD keys={["right"]} listenToKeyboard />
</div>
