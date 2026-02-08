import Raw from "$lib/components/magic-ui/pixel-image/pixel-image.svelte?raw";
import IndexTs from "$lib/components/magic-ui/pixel-image/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "pixel-image",
	title: "Pixel Image",
	description:
		"A stunning image reveal animation that splits images into grid pieces with staggered fade-in and grayscale-to-color transitions.",
	category: "animation",
	badge: "new",
};

const examples: Example[] = [];

const seo: SEO = {
	title: "Pixel Image - Svelte 5 Animations",
	description:
		"Learn how to create pixelated image reveal effects in Svelte with configurable grids, staggered animations, and grayscale-to-color transitions.",
	keywords: [
		"Svelte",
		"Pixel Image",
		"Svelte 5 Animations",
		"Animation",
		"Image Reveal",
		"Grid Animation",
		"Web Design",
	],
};

let installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "pixel-image.svelte",
			filecode: Raw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: IndexTs,
			lang: "typescript",
		},
	],
	folderStructure: ``,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "pixel-image.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	examples,
	seo,
	props: [
		{
			name: "PixelImage",
			desc: "A component that creates stunning image reveal animations by splitting images into a grid of pieces with staggered fade-in effects.",
			props: [
				{
					name: "src",
					type: "string",
					default: "Required",
					description: "The image source URL",
				},
				{
					name: "grid",
					type: '"6x4" | "8x8" | "8x3" | "4x6" | "3x8"',
					default: '"6x4"',
					description: "Predefined grid configuration",
				},
				{
					name: "customGrid",
					type: "{ rows: number; cols: number }",
					default: "-",
					description: "Custom grid dimensions (overrides grid prop)",
				},
				{
					name: "grayscaleAnimation",
					type: "boolean",
					default: "true",
					description: "Enable grayscale-to-color transition effect",
				},
				{
					name: "pixelFadeInDuration",
					type: "number",
					default: "1000",
					description: "Duration of each piece's fade-in animation (ms)",
				},
				{
					name: "maxAnimationDelay",
					type: "number",
					default: "1200",
					description: "Maximum random delay for piece animations (ms)",
				},
				{
					name: "colorRevealDelay",
					type: "number",
					default: "1300",
					description: "Delay before color reveal begins (ms)",
				},
			],
		},
	],
	installBlock,
};
