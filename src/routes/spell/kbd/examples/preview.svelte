<script lang="ts">
	import { KBD } from "$lib/components/spell/kbd";
</script>

<div class="flex justify-center py-12">
	<div class="flex flex-wrap items-center justify-center gap-3 text-sm">
		<span class="text-muted-foreground">Search</span>
		<KBD keys={["cmd", "k"]} />
		<span class="text-muted-foreground">Duplicate line</span>
		<KBD keys={["shift", "alt", "down"]} />
		<span class="text-muted-foreground">Close tab</span>
		<KBD keys={["cmd", "w"]} />
	</div>
</div>
