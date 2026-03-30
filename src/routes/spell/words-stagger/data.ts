import WordsStaggerRaw from "$lib/components/spell/words-stagger/words-stagger.svelte?raw";
import IndexTsRaw from "$lib/components/spell/words-stagger/index.ts?raw";
import SharedTextUtilsRaw from "$lib/utils/text-utils.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import ViewTriggerExample from "./examples/view-trigger-example.svelte";
import ViewTriggerExampleRaw from "./examples/view-trigger-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "spell/words-stagger",
	title: "Words Stagger",
	description:
		"A word-by-word blur and lift reveal for spell-style hero copy, launch messaging, and editorial headings.",
	category: "spell",
};

const seo: SEO = {
	title: "Words Stagger",
	description:
		"Learn how to use the Words Stagger spell component in Svelte, including word-based timing, viewport triggers, and lifecycle callbacks.",
	keywords: [
		"Svelte",
		"Words Stagger",
		"Spell",
		"Svelte Animations",
		"Word Animation",
		"Motion SV",
	],
};

const installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "words-stagger.svelte",
			filecode: WordsStaggerRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: IndexTsRaw,
			lang: "typescript",
		},
		{
			filename: "src/lib/utils/text-utils.ts",
			filecode: SharedTextUtilsRaw,
			lang: "typescript",
		},
	],
	packages: ["motion-sv"],
	folderStructure: `src/
lib/
  utils/
    text-utils.ts
  components/
    spell/
      words-stagger/
        index.ts
        words-stagger.svelte`,
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
			name: "View Trigger",
			description:
				"Replay the stagger on re-entry and surface lifecycle callbacks while keeping the reveal timing tighter and more editorial.",
			preview: ViewTriggerExample,
			code: {
				filename: "view-trigger-example.svelte",
				filecode: ViewTriggerExampleRaw,
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
						"Plain text snippet content that is flattened and split into animated words.",
				},
				{
					name: "as",
					type: '"span" | "div" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"',
					default: '"div"',
					description: "Sets the semantic tag used for the animated root element.",
				},
				{
					name: "delay",
					type: "number",
					default: "0",
					description: "Adds a delay in seconds before the first word starts animating.",
				},
				{
					name: "stagger",
					type: "number",
					default: "0.1",
					description: "Controls the delay between each animated word in seconds.",
				},
				{
					name: "speed",
					type: "number",
					default: "0.5",
					description: "Sets the per-word tween duration in seconds.",
				},
				{
					name: "trigger",
					type: "boolean",
					default: "true",
					description: "Enables or disables the visible animated state.",
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
					description:
						"When using triggerOnView, controls whether the reveal runs only on first entry.",
				},
				{
					name: "onStart",
					type: "() => void",
					default: "undefined",
					description: "Called once when a new visible stagger cycle begins.",
				},
				{
					name: "onComplete",
					type: "() => void",
					default: "undefined",
					description: "Called after the final word completes the visible transition.",
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
