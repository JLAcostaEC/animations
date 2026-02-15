<script lang="ts">
	import { Command as CommandPrimitive } from "bits-ui";
	import { cn } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: CommandPrimitive.ListProps = $props();
</script>

<CommandPrimitive.List
	bind:ref
	data-slot="command-list"
	data-orientation="vertical"
	style="--bottom-mask-height: 20px; --top-mask-height: 0px;"
	class={cn(
		"max-h-75 scroll-py-1 overflow-x-hidden overflow-y-auto",
		"no-scrollbar data-[orientation=horizontal]:overflow-x-auto data-[orientation=vertical]:overflow-y-auto",
		"data-[orientation=horizontal]:scroll-fade-effect-x data-[orientation=vertical]:scroll-fade-effect-y",
		className
	)}
	{...restProps}
/>
