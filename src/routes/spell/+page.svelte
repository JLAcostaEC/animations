<script lang="ts">
	import { AnimatedCheckbox } from "$lib/components/spell/animated-checkbox";
	import { ColorSelector, type ColorSelectorColor } from "$lib/components/spell/color-selector";
	import { ExplodingInput } from "$lib/components/spell/exploding-input";
	import { LabelInput } from "$lib/components/spell/label-input";
	import { QRCode } from "$lib/components/spell/qrcode";
	import { Signature } from "$lib/components/spell/signature";

	let value: ColorSelectorColor = $state("teal");
	let previewInput: HTMLInputElement | null = $state(null);
</script>

<div class="flex min-h-screen flex-col items-center justify-center gap-6">
	<div
		class="mx-auto w-[105px] rounded-lg p-2 shadow-[0_0_0_1px_rgba(0,0,0,.08),_0px_2px_2px_rgba(0,0,0,.04)] md:w-[140px] dark:border [&_svg]:h-auto [&_svg]:w-full"
	>
		<QRCode value="https://spell.sh" size={140} />
	</div>
	<div class="relative w-full max-w-xs">
		<LabelInput bind:ref={previewInput} label="Spell" placeholder="Enter Username" />
		<ExplodingInput
			target={previewInput}
			items={["+", "*", "o"]}
			count={2}
			duration={2.1}
			gravity={0.35}
			class="z-50"
		>
			{#snippet children(item)}
				<span class="text-sm font-semibold text-emerald-500">{item}</span>
			{/snippet}
		</ExplodingInput>
	</div>
	<div class="text-mauve-600">
		<p>Value is {value}</p>
		<ColorSelector
			colors={[
				"green",
				"cyan",
				"orange",
				"purple",
				"teal",
				"currentColor",
				"rgba(255, 0, 0, 0.5)",
				"oklch(65% 0.1 170 / 0.5)",
			]}
			bind:value
		/>
	</div>
	<div class="flex flex-col gap-2">
		<AnimatedCheckbox title="Implement Checkbox" />
		<AnimatedCheckbox title="Write documentation" />
		<AnimatedCheckbox title="Add tests" defaultChecked />
	</div>
	<div class="flex items-center justify-center">
		<Signature class="dark:invert-100" text="Bhide Svelte" fontSize={16} color="#1D1D1F" />
	</div>
</div>
