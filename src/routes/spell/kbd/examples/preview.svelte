<script lang="ts">
	import { KBD } from "$lib/components/spell/KBD";
</script>

<div class="flex gap-4">
	<KBD keys={["alt"]} listenToKeyboard />
	<KBD keys={[{ display: "ENTER", key: "enter" }]} listenToKeyboard />
	<KBD keys={["space"]} listenToKeyboard />
	<KBD keys={["ctrl", "j"]} listenToKeyboard />
	<KBD keys={[{ display: "HOLD", key: "H" }]} listenToKeyboard />
	<KBD keys={["up"]} listenToKeyboard />
</div>
