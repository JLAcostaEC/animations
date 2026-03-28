<script lang="ts">
	import { Badge } from "$lib/components/spell/badge";
</script>

<div class="bg-card mx-auto flex w-full max-w-xl flex-col gap-4 rounded-3xl border p-6 shadow-sm">
	<div class="space-y-1">
		<h3 class="text-sm font-medium tracking-tight">Browse by component type</h3>
		<p class="text-muted-foreground text-sm">
			Use compact linked badges for filtering, metadata rows, and lightweight navigation.
		</p>
	</div>

	<div class="flex flex-wrap gap-2">
		<Badge
			href="/spell/blur-reveal"
			variant="sky"
			size="sm"
			class="transition-opacity hover:opacity-80"
		>
			Text
		</Badge>
		<Badge
			href="/spell/perspective-book"
			variant="violet"
			size="sm"
			class="transition-opacity hover:opacity-80"
		>
			3D
		</Badge>
		<Badge
			href="/spell/randomized-text"
			variant="emerald"
			size="sm"
			class="transition-opacity hover:opacity-80"
		>
			Docs
		</Badge>
		<Badge
			href="/spell/exploding-input"
			variant="amber"
			size="sm"
			class="transition-opacity hover:opacity-80"
		>
			Input
		</Badge>
	</div>
</div>
