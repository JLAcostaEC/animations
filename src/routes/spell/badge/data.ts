import BadgeRaw from "$lib/components/spell/badge/badge.svelte?raw";
import IndexTsRaw from "$lib/components/spell/badge/index.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import LinkedBadgesExample from "./examples/linked-badges-example.svelte";
import LinkedBadgesExampleRaw from "./examples/linked-badges-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "spell/badge",
	title: "Badge",
	description:
		"A compact spell badge for statuses, filters, and tags, with multi-color variants, optional link mode, and two size presets.",
	category: "spell",
};

const seo: SEO = {
	title: "Badge",
	description:
		"Learn how to use the Badge spell component in Svelte, including color variants, compact sizing, and optional anchor rendering.",
	keywords: ["Svelte", "Badge", "Spell", "Svelte Animations", "Status Tag", "tailwind-variants"],
};

const installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "badge.svelte",
			filecode: BadgeRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: IndexTsRaw,
			lang: "typescript",
		},
	],
	packages: ["tailwind-variants"],
	folderStructure: `src/
lib/
  components/
    spell/
      badge/
        badge.svelte
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
			name: "Linked Badges",
			description:
				"Provide an href to render anchor badges, then switch to the compact size for tag rows, filters, and metadata links.",
			preview: LinkedBadgesExample,
			code: {
				filename: "linked-badges-example.svelte",
				filecode: LinkedBadgesExampleRaw,
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
						"The badge label or custom inline content rendered inside the component.",
				},
				{
					name: "href",
					type: "string | undefined",
					default: "undefined",
					description: "When provided, the badge renders as an anchor instead of a span.",
				},
				{
					name: "variant",
					type: '"default" | "secondary" | "outline" | "destructive" | "red" | "blue" | "green" | "yellow" | "purple" | "pink" | "orange" | "cyan" | "indigo" | "violet" | "rose" | "amber" | "lime" | "emerald" | "sky" | "slate" | "fuchsia"',
					default: '"default"',
					description: "Controls the visual treatment and color palette of the badge.",
				},
				{
					name: "size",
					type: '"default" | "sm"',
					default: '"default"',
					description: "Controls the badge padding footprint.",
				},
				{
					name: "class",
					type: "string | undefined",
					default: "undefined",
					description: "Custom classes merged onto the badge root element.",
				},
			],
		},
	],
};
