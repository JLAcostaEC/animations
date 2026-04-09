import PulsatingButtonRaw from "$lib/components/magic/pulsating-button/pulsating-button.svelte?raw";
import IndexTs from "$lib/components/magic/pulsating-button/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "pulsating-button",
	title: "Pulsating Button",
	description: "An animated pulsating button useful for capturing attention of users.",
	category: "animation",
	badge: "new",
};

const seo: SEO = {
	title: "Pulsating Button",
	description:
		"Learn how to create Pulsating Button effects in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Pulsating Button", "Svelte 5 Animations", "Animation", "Web Design"],
};

let installBlock: InstallComponentDocs = {
	packages: [],
	installCode: [
		{
			filename: "pulsating-button.svelte",
			filecode: PulsatingButtonRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: IndexTs,
			lang: "typescript",
		},
	],
	tailwind: {
		filename: "src/routes/layout.css",
		lang: "css",
		highlight: [2, [4, 14]],
		filecode: `@theme inline {
  --animate-pulse: pulse var(--duration) ease-out infinite;

  @keyframes pulse {
    0%,
    100% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    50% {
      box-shadow: 0 0 0 8px var(--pulse-color);
    }
  }
}`,
	},
	folderStructure: `src/
└── lib/
    └── components/
        └── magic/
            └── pulsating-button/
                ├── pulsating-button.svelte
                └── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "pulsating-button.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	seo,
	props: [
		{
			name: "PulsatingButton",
			desc: "A component for Pulsating Button.",
			props: [
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes to apply",
				},
				{
					name: "pulseColor",
					type: "string",
					default: '"#808080"',
					description: "Color of the pulse",
				},
				{
					name: "duration",
					type: "string",
					default: '"1.5s"',
					description: "Duration of the animation",
				},
				{
					name: "children",
					type: "Snippet",
					default: "required",
					description: "The content to display inside the button",
				},
			],
		},
	],
	installBlock,
};
