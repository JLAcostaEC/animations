import LogoCarouselRaw from "$lib/components/spell/logo-carousel/logo-carousel.svelte?raw";
import IndexTsRaw from "$lib/components/spell/logo-carousel/index.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import TwoUpExample from "./examples/two-up-example.svelte";
import TwoUpExampleRaw from "./examples/two-up-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "spell/logo-carousel",
	title: "Logo Carousel",
	description:
		"A grouped logo carousel that rotates brand marks with staggered enter and exit motion for landing pages, partner walls, and launch sections.",
	category: "spell",
};

const seo: SEO = {
	title: "Logo Carousel",
	description:
		"Learn how to use the Logo Carousel spell component in Svelte, including grouped rotations, timing controls, and custom logo card rendering.",
	keywords: [
		"Svelte",
		"Logo Carousel",
		"Spell",
		"Svelte Animations",
		"Brand Wall",
		"Partner Logos",
	],
};

const installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "logo-carousel.svelte",
			filecode: LogoCarouselRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: IndexTsRaw,
			lang: "typescript",
		},
	],
	folderStructure: `src/
lib/
  components/
    spell/
      logo-carousel/
        logo-carousel.svelte
        index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "preview.svelte",
		filecode: PreviewCodeRaw,
		lang: "svelte",
		hideLines: true,
	},
	installBlock,
	examples: [
		{
			name: "Two Up Rotation",
			description:
				"Reduce the group size to two and tighten the timing for a more editorial, high-attention brand rail.",
			preview: TwoUpExample,
			code: {
				filename: "two-up-example.svelte",
				filecode: TwoUpExampleRaw,
				lang: "svelte",
			},
		},
	],
	seo,
	props: [
		{
			props: [
				{
					name: "items",
					type: "T[]",
					required: true,
					description:
						"The list of items split into groups and rotated through the carousel.",
				},
				{
					name: "children",
					type: "Snippet<[T, number]>",
					required: true,
					description:
						"A snippet used to render each item card or logo, receiving the current item and its index inside the group.",
				},
				{
					name: "stagger",
					type: "number",
					default: "0.14",
					description:
						"Sets the delay in seconds between each item animation inside the active group.",
				},
				{
					name: "count",
					type: "number | undefined",
					default: "undefined",
					description:
						"Controls how many items appear per group before the carousel advances to the next set.",
				},
				{
					name: "duration",
					type: "number",
					default: "600",
					description:
						"Controls the enter and exit animation duration for each item in milliseconds.",
				},
				{
					name: "interval",
					type: "number",
					default: "2500",
					description:
						"Defines how long each group stays visible before the carousel advances, in milliseconds.",
				},
				{
					name: "initialDelay",
					type: "number",
					default: "500",
					description:
						"Adds a delay before the first animated transition starts, in milliseconds.",
				},
				{
					name: "class",
					type: "string | undefined",
					default: "undefined",
					description:
						"Custom classes merged onto each visible group row inside the carousel.",
				},
			],
		},
	],
};
