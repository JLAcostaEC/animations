import SlideUpTextRaw from "$lib/components/spell/slide-up-text/slide-up-text.svelte?raw";
import IndexTsRaw from "$lib/components/spell/slide-up-text/index.ts?raw";
import SharedTextUtilsRaw from "$lib/utils/text-utils.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import CharacterSplitExample from "./examples/character-split-example.svelte";
import CharacterSplitExampleRaw from "./examples/character-split-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "spell/slide-up-text",
	title: "Slide Up Text",
	description:
		"A staggered text reveal that slides words, characters, or lines upward for hero copy, editorial headlines, and callouts.",
	category: "spell",
};

const seo: SEO = {
	title: "Slide Up Text",
	description:
		"Learn how to use the Slide Up Text spell component in Svelte, including split modes, stagger origin, and viewport-triggered playback.",
	keywords: [
		"Svelte",
		"Slide Up Text",
		"Spell",
		"Svelte Animations",
		"Text Stagger",
		"Motion SV",
	],
};

const installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "slide-up-text.svelte",
			filecode: SlideUpTextRaw,
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
      slide-up-text/
        index.ts
        slide-up-text.svelte`,
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
			name: "Character Split",
			description:
				"Switch to character splitting and stagger from the center for a denser, more cinematic text reveal.",
			preview: CharacterSplitExample,
			code: {
				filename: "character-split-example.svelte",
				filecode: CharacterSplitExampleRaw,
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
						"Plain text snippet content that is flattened and split into animated units.",
				},
				{
					name: "split",
					type: '"words" | "characters" | "lines"',
					default: '"words"',
					description:
						"Controls whether the reveal animates word groups, grapheme-safe characters, or line breaks.",
				},
				{
					name: "delay",
					type: "number",
					default: "0",
					description:
						"Adds a base delay in seconds before the first animated unit begins.",
				},
				{
					name: "stagger",
					type: "number",
					default: "0.1",
					description: "Controls the delay in seconds between animated units.",
				},
				{
					name: "from",
					type: '"first" | "last" | "center"',
					default: '"first"',
					description: "Sets where the stagger timing begins across the animated units.",
				},
				{
					name: "transition",
					type: "AnimationOptions",
					default: '{ type: "tween", duration: 0.5, ease: [0.625, 0.05, 0, 1] }',
					description:
						"Overrides the motion transition used for each unit's vertical reveal.",
				},
				{
					name: "autoStart",
					type: "boolean",
					default: "true",
					description:
						"Starts the animation immediately when not using viewport triggering.",
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
					description: "Called when the component starts a new animation cycle.",
				},
				{
					name: "onComplete",
					type: "() => void",
					default: "undefined",
					description: "Called after the final visible unit finishes animating.",
				},
				{
					name: "class",
					type: "string | undefined",
					default: "undefined",
					description: "Custom classes applied to the root wrapper.",
				},
				{
					name: "wordClass",
					type: "string | undefined",
					default: "undefined",
					description: "Custom classes applied to each word or line wrapper.",
				},
				{
					name: "charClass",
					type: "string | undefined",
					default: "undefined",
					description: "Custom classes applied to each character wrapper.",
				},
			],
		},
	],
};
