import type { CodeBlock } from "$lib/components/ui/code";
import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "animated-list",
	title: "",
	description: "A description for  component.",
	category: "animation",
	badge: "new",
};

const seo: SEO = {
	title: " - Svelte 5 Animations",
	description: "Learn how to create  effects in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "", "Svelte 5 Animations", "Animation", "Web Design"],
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "animated-list.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	seo,
	props: [
		{
			name: "",
			desc: "A component for .",
			props: [
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes to apply",
				},
			],
		},
	],
	folderStructure: `src/
â””â”€â”€ lib/
    â””â”€â”€ components/
        â””â”€â”€ magic-ui/
            â””â”€â”€ animated-list/
                â””â”€â”€ animated-list.svelte`,
};
