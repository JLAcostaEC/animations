<script lang="ts">
	import { AnimatedCheckbox } from "$lib/components/spell/animated-checkbox";
	import { ColorSelector, type ColorSelectorColor } from "$lib/components/spell/color-selector";
	import LabelInput from "$lib/components/spell/label-input/label-input.svelte";
	import { QRCode } from "$lib/components/spell/qrcode";
	import { Signature } from "$lib/components/spell/signature";

	let value: ColorSelectorColor = $state("teal");
</script>

<div class="flex min-h-screen flex-col items-center justify-center gap-6">
	<div
		class="mx-auto w-[105px] rounded-lg p-2 shadow-[0_0_0_1px_rgba(0,0,0,.08),_0px_2px_2px_rgba(0,0,0,.04)] md:w-[140px] dark:border [&_svg]:h-auto [&_svg]:w-full"
	>
		<QRCode value="https://spell.sh" size={140} />
	</div>
	<div>
		<LabelInput label="Spell" placeholder="Enter Username" />
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
	"use client";

	<div class="flex flex-col gap-2">
		<AnimatedCheckbox title="Implement Checkbox" />
		<AnimatedCheckbox title="Write documentation" />
		<AnimatedCheckbox title="Add tests" defaultChecked />
	</div>
	<div class="flex items-center justify-center">
		<Signature class="dark:invert-100" text="Bhide Svelte" fontSize={16} color="#1D1D1F" />
	</div>
</div>
