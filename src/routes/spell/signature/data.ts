import SignatureRaw from "$lib/components/spell/signature/signature.svelte?raw";
import IndexTsRaw from "$lib/components/spell/signature/index.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import CustomSignatureExample from "./examples/custom-signature-example.svelte";
import CustomSignatureExampleRaw from "./examples/custom-signature-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "spell/signature",
	title: "Signature",
	description:
		"A handwritten signature renderer that draws glyph paths from the Lastoria font for sign-offs, certificates, and personalized callouts.",
	category: "spell",
};

const seo: SEO = {
	title: "Signature",
	description:
		"Learn how to use the Signature spell component in Svelte, including manual font setup, custom text, timing control, and viewport-triggered playback.",
	keywords: [
		"Svelte",
		"Signature",
		"Spell",
		"Svelte Animations",
		"SVG Path Animation",
		"opentype.js",
	],
};

const installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "signature.svelte",
			filecode: SignatureRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: IndexTsRaw,
			lang: "typescript",
		},
	],
	packages: ["opentype.js"],
	folderStructure: `src/
lib/
  components/
    spell/
      signature/
        index.ts
        signature.svelte
static/
  LastoriaBoldRegular.otf`,
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
			name: "Color",
			preview: CustomSignatureExample,
			code: {
				filename: "color-example.svelte",
				filecode: CustomSignatureExampleRaw,
				lang: "svelte",
			},
		},
	],
	seo,
	props: [
		{
			props: [
				{
					name: "text",
					type: "string",
					default: '"Signature"',
					description:
						"The text converted into animated SVG paths using the downloaded font file.",
				},
				{
					name: "color",
					type: "string",
					default: '"#000"',
					description:
						"Sets both the stroke and fill color used for the drawn signature paths.",
				},
				{
					name: "fontSize",
					type: "number",
					default: "14",
					description:
						"Controls the font size passed into the font parser when generating glyph paths.",
				},
				{
					name: "duration",
					type: "number",
					default: "1.5",
					description:
						"Sets the draw animation duration in seconds for each path segment.",
				},
				{
					name: "delay",
					type: "number",
					default: "0",
					description: "Adds a base delay in seconds before path drawing begins.",
				},
				{
					name: "inView",
					type: "boolean",
					default: "false",
					description: "Waits to animate until the component enters the viewport.",
				},
				{
					name: "once",
					type: "boolean",
					default: "true",
					description:
						"When using inView, controls whether the signature draws only on first entry.",
				},
				{
					name: "class",
					type: "string | undefined",
					default: "undefined",
					description: "Custom classes applied to the root SVG element.",
				},
			],
		},
	],
};
