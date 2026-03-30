import PerspectiveBookRaw from "$lib/components/spell/perspective-book/perspective-book.svelte?raw";
import IndexTsRaw from "$lib/components/spell/perspective-book/index.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import TexturedExample from "./examples/textured-example.svelte";
import TexturedExampleRaw from "./examples/textured-example.svelte?raw";

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
	├── lib/
	│   ├── components/
	│   │   ├── spell/
	│   │   │   ├── perspective-book/
	│   │   │   │   ├── index.ts
	│   │   │   │   └── perspective-book.svelte`,
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
			preview: TexturedExample,
			code: {
				filename: "preview.svelte",
				filecode: TexturedExampleRaw,
				lang: "svelte",
				highlight: [2, [28, 54]],
			},
		},
	],
	seo,
	props: [
		{
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
