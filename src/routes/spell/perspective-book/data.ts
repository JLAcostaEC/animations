import PerspectiveBookRaw from "$lib/components/spell/perspective-book/perspective-book.svelte?raw";
import IndexTsRaw from "$lib/components/spell/perspective-book/index.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";

export const textureDownloadUrl = "/image.avif";

export const meta: ComponentMeta = {
	id: "spell/perspective-book",
	title: "Perspective Book",
	description:
		"A 3D book-cover wrapper for spell-style showcases, with layered depth, hover perspective, and an optional texture overlay.",
	category: "spell",
};

const seo: SEO = {
	title: "Perspective Book",
	description:
		"Learn how to use the Perspective Book spell component in Svelte, including installation, textured covers, and composition patterns.",
	keywords: ["Svelte", "Perspective Book", "Spell", "Svelte Animations", "3D Card", "Book Cover"],
};

const installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "perspective-book.svelte",
			filecode: PerspectiveBookRaw,
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
|-- lib/
|   \`-- components/
|       \`-- spell/
|           \`-- perspective-book/
|               |-- perspective-book.svelte
|               \`-- index.ts`,
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
			name: "Textured Cover Preview",
			description:
				"A textured cover using the hosted site asset. In your own app, place the downloaded file in static and pass that path via textureUrl.",
			preview: Preview,
			code: {
				filename: "preview.svelte",
				filecode: PreviewCodeRaw,
				lang: "svelte",
			},
		},
	],
	seo,
	props: [
		{
			name: "PerspectiveBook",
			desc: "A wrapper that renders slotted content as a 3D book cover with depth layers and optional texture.",
			props: [
				{
					name: "size",
					type: '"sm" | "default" | "lg"',
					default: '"default"',
					description: "Controls the rendered width and spine translation of the book.",
				},
				{
					name: "textured",
					type: "boolean",
					default: "false",
					description: "Enables the texture overlay when a textureUrl is also provided.",
				},
				{
					name: "textureUrl",
					type: "string | undefined",
					default: "undefined",
					description:
						"Optional URL for the texture image, usually served from your app's static folder.",
				},
				{
					name: "class",
					type: "string",
					default: "undefined",
					description: "Custom classes applied to the front and back cover surfaces.",
				},
				{
					name: "style",
					type: "string",
					default: "undefined",
					description: "Inline styles applied to the outer perspective wrapper.",
				},
			],
		},
	],
};
