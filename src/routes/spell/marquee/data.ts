import MarqueeRaw from "$lib/components/spell/marquee/marquee.svelte?raw";
import IndexTsRaw from "$lib/components/spell/marquee/index.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import VerticalExample from "./examples/vertical-example.svelte";
import VerticalExampleRaw from "./examples/vertical-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "spell/marquee",
	title: "Marquee",
	description:
		"A reusable spell marquee for looping logos, tags, or headlines horizontally or vertically, with optional fade edges and hover pause.",
	category: "spell",
};

const seo: SEO = {
	title: "Marquee",
	description:
		"Learn how to use the Marquee spell component in Svelte, including horizontal and vertical directions, hover pause, and fade tuning.",
	keywords: ["Svelte", "Marquee", "Spell", "Svelte Animations", "Ticker", "Scrolling Content"],
};

const installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "marquee.svelte",
			filecode: MarqueeRaw,
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
      marquee/
        marquee.svelte
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
			name: "Vertical Stack",
			description:
				"Switch the direction to vertical and tune the fade amount to create a stacked announcement or feature rail.",
			preview: VerticalExample,
			code: {
				filename: "vertical-example.svelte",
				filecode: VerticalExampleRaw,
				lang: "svelte",
			},
		},
	],
	seo,
	props: [
		{
			props: [
				{
					name: "children",
					type: "Snippet",
					required: true,
					description:
						"Snippet content rendered twice to create the seamless looping marquee.",
				},
				{
					name: "duration",
					type: "number",
					default: "20",
					description: "Sets the total animation duration in seconds.",
				},
				{
					name: "pauseOnHover",
					type: "boolean",
					default: "false",
					description:
						"Pauses the marquee animation while the user hovers the container.",
				},
				{
					name: "direction",
					type: '"left" | "right" | "up" | "down"',
					default: '"left"',
					description:
						"Controls whether the marquee scrolls horizontally or vertically and in which direction.",
				},
				{
					name: "fade",
					type: "boolean",
					default: "true",
					description:
						"Adds mask-based fade edges to soften the start and end of the marquee viewport.",
				},
				{
					name: "fadeAmount",
					type: "number",
					default: "10",
					description:
						"Controls how much of the marquee edges are faded, clamped between 0 and 50.",
				},
				{
					name: "class",
					type: "string | undefined",
					default: "undefined",
					description: "Custom classes applied to the outer marquee container.",
				},
				{
					name: "style",
					type: "string | undefined",
					default: "undefined",
					description: "Inline styles forwarded to the outer marquee container.",
				},
			],
		},
	],
};
