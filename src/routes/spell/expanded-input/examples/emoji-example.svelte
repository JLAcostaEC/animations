<script lang="ts">
	import ExpandedInput from "$lib/components/spell/expanded-input/expanded-input.svelte";

	const emojis = ["🤩", "👾", "😺", "👻", "🎃", "🖤", "🗯️"];
</script>

<div class="flex justify-center py-8">
	<label class="block">
		<input
			type="text"
			placeholder="try@spell.here"
			class="h-10 w-72 border-b bg-background p-0 text-base font-medium outline-none placeholder:font-medium"
		/>
		<ExpandedInput
			class="z-50"
			items={emojis}
			direction={{ horizontal: "left", vertical: "top" }}
			gravity={0.5}
			duration={3}
			count={3}
		>
			{#snippet children(item)}
				<span class="text-4xl">{item}</span>
			{/snippet}
		</ExpandedInput>
	</label>
</div>
