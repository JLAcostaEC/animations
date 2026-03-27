import BlurRevealRaw from "$lib/components/spell/blur-reveal/blur-reveal.svelte?raw";
import IndexTsRaw from "$lib/components/spell/blur-reveal/index.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import TunedHeadingExample from "./examples/tuned-heading-example.svelte";
import TunedHeadingExampleRaw from "./examples/tuned-heading-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "spell/blur-reveal",
	title: "Blur Reveal",
	description:
		"A text-only blur and stagger reveal for spell-style hero copy, headings, and announcement lines.",
	category: "spell",
};

const seo: SEO = {
	title: "Blur Reveal",
	description:
		"Learn how to use the Blur Reveal spell component in Svelte, including string-based content, stagger timing, and view-triggered animation.",
	keywords: [
		"Svelte",
		"Blur Reveal",
		"Spell",
		"Svelte Animations",
		"Text Animation",
		"Motion SV",
	],
};

const installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "blur-reveal.svelte",
			filecode: BlurRevealRaw,
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
	â”œâ”€â”€ lib/
	â”‚   â”œâ”€â”€ components/
	â”‚   â”‚   â”œâ”€â”€ spell/
	â”‚   â”‚   â”‚   â”œâ”€â”€ blur-reveal/
	â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ index.ts
	â”‚   â”‚   â”‚   â”‚   â””â”€â”€ blur-reveal.svelte`,
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
			name: "Tuned Heading",
			description:
				"Use a tighter stagger, shorter duration, and alternate semantic tag to create a snappier hero-heading reveal.",
			preview: TunedHeadingExample,
			code: {
				filename: "tuned-heading-example.svelte",
				filecode: TunedHeadingExampleRaw,
				lang: "svelte",
			},
		},
	],
	seo,
	props: [
		{
			props: [
				{
					name: "content",
					type: "string",
					required: true,
					description: "Plain text content that will be split into animated grapheme-safe characters.",
				},
				{
					name: "as",
					type: '"span" | "div" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"',
					default: '"p"',
					description: "Sets the semantic tag used for the animated root element.",
				},
				{
					name: "delay",
					type: "number",
					default: "0",
					description: "Adds a delay in seconds before the reveal sequence begins.",
				},
				{
					name: "stagger",
					type: "number",
					default: "0.03",
					description: "Controls the delay between each character and space reveal in seconds.",
				},
				{
					name: "duration",
					type: "number",
					default: "0.3",
					description: "Sets the per-character reveal duration in seconds.",
				},
				{
					name: "trigger",
					type: "boolean",
					default: "true",
					description: "Enables or disables the visible reveal state.",
				},
				{
					name: "triggerOnView",
					type: "boolean",
					default: "false",
					description: "Waits to animate until the component enters the viewport.",
				},
				{
					name: "once",
					type: "boolean",
					default: "true",
					description: "When using triggerOnView, controls whether the reveal runs only on first entry.",
				},
				{
					name: "letterSpacing",
					type: "string | number | undefined",
					default: "undefined",
					description: "Applies extra spacing between animated characters.",
				},
				{
					name: "onStart",
					type: "() => void",
					default: "undefined",
					description: "Called when a new reveal cycle begins.",
				},
				{
					name: "onComplete",
					type: "() => void",
					default: "undefined",
					description: "Called after the final animated unit completes the visible transition.",
				},
				{
					name: "class",
					type: "string | undefined",
					default: "undefined",
					description: "Custom classes applied to the animated root element.",
				},
				{
					name: "style",
					type: "string | undefined",
					default: "undefined",
					description: "Inline styles forwarded to the animated root element.",
				},
			],
		},
	],
};
