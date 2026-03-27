<script lang="ts">
	import { KBD } from "$lib/components/spell/kbd";
</script>

<div class="bg-card mx-auto flex w-full max-w-xl flex-col gap-4 rounded-3xl border p-6 shadow-sm">
	<div class="space-y-1">
		<h3 class="text-sm font-medium tracking-tight">Press the shortcut</h3>
		<p class="text-muted-foreground text-sm">
			Hold the keys below to preview the active state driven by live keyboard input.
		</p>
	</div>

	<div class="flex flex-wrap items-center gap-3 text-sm">
		<span class="text-muted-foreground">Palette</span>
		<KBD keys={["cmd", "k"]} listenToKeyboard />
	</div>

	<div class="flex flex-wrap items-center gap-3 text-sm">
		<span class="text-muted-foreground">Publish</span>
		<KBD keys={[{ display: "⌘", key: "meta" }, "shift", "p"]} listenToKeyboard />
	</div>
</div>
