<script>
	import { KBD } from "$lib/components/spell/kbd";
</script>

<div class="flex flex-col items-center gap-4">
	<p class="text-muted-foreground text-sm">Press M key to activate</p>
	<KBD keys={[{ display: "HOLD", key: "M" }]} listenToKeyboard />
</div>
