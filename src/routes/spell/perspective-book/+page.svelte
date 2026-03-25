<script lang="ts">
	import { page } from "$app/state";
	import InstallComponent from "$lib/components/docs/base/InstallComponent.svelte";
	import APITable from "$lib/components/docs/base/APITable.svelte";
	import { CopyPageDropdown } from "$lib/components/docs/copy-page-dropdown";
	import { H1, H2, H3, Paragraph } from "$lib/components/docs/markdown/index";
	import * as Alert from "$lib/components/ui/alert/index.js";
	import { Button } from "$lib/components/ui/button";
	import type { CodeBlock } from "$lib/components/ui/code";
	import { PreviewComponent } from "$lib/components/ui/preview-component";
	import SEO from "$lib/seo/SEO.svelte";
	import type { Example } from "$lib/types/examples";
	import type { SEO as SEOType } from "$lib/types/seo";
	import type { InstallComponentDocs, PropsTable } from "$lib/types/structure";
	import AlertCircleIcon from "@lucide/svelte/icons/alert-circle";
	import DownloadIcon from "@lucide/svelte/icons/download";
	import PerspectiveBookRaw from "$lib/components/spell/perspective-book/perspective-book.svelte?raw";
	import IndexTsRaw from "$lib/components/spell/perspective-book/index.ts?raw";
	import Preview from "./examples/preview.svelte";
	import PreviewCodeRaw from "./examples/preview.svelte?raw";

	const title = "Perspective Book";
	const description =
		"A 3D book-cover wrapper for spell-style showcases, with layered depth, hover perspective, and an optional texture overlay.";
	const textureDownloadUrl = "/image.avif";

	const seo: SEOType = {
		title,
		description:
			"Learn how to use the Perspective Book spell component in Svelte, including installation, textured covers, and composition patterns.",
		keywords: [
			"Svelte",
			"Perspective Book",
			"Spell",
			"Svelte Animations",
			"3D Card",
			"Book Cover",
		],
	};

	const previewCode: CodeBlock = {
		filename: "preview.svelte",
		filecode: PreviewCodeRaw,
		lang: "svelte",
		hideLines: true,
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

	const examples: Example[] = [
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
	];

	const propsTables: PropsTable[] = [
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
	];

	let PreviewComp = $derived(Preview);
	let installUrl = $derived(`${page.url.origin}/r/spell/perspective-book.json`);

	const getURLPath = (url: string) => url.split("?")[0].split("#")[0];
	let llmsTxtUrl = $derived(`${getURLPath(page.url.pathname)}/llms.txt`);
</script>

<SEO title={seo.title} description={seo.description} keywords={seo.keywords} />

<div class="space-y-8 md:space-y-10">
	<section>
		<div class="flex flex-col justify-between gap-3 md:flex-row md:items-center md:gap-4">
			<H1 id="introduction">{title}</H1>
			<CopyPageDropdown componentName={title} {llmsTxtUrl} />
		</div>

		<div class="mt-4 space-y-3">
			<Paragraph>{description}</Paragraph>
		</div>
	</section>

	<section>
		<PreviewComponent
			code={previewCode}
			class="bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.65),_transparent_58%)]"
		>
			{#if PreviewComp}
				<PreviewComp />
			{/if}
		</PreviewComponent>
	</section>

	<section>
		<H2 id="installation">Installation</H2>
		<InstallComponent
			{installUrl}
			codeBlocks={installBlock.installCode}
			folderStructure={installBlock.folderStructure}
			class="mt-4"
		/>

		<Alert.Root class="mt-6">
			<AlertCircleIcon />
			<Alert.Title>Optional Texture Download</Alert.Title>
			<Alert.Description>
				<div class="space-y-3">
					<p>
						The registry install does not bundle the texture image. If you want the
						textured finish, download the file below and place it in your app at
						<code class="bg-muted rounded px-1 py-0.5 text-xs">
							static/perspective-book-texture.avif
						</code>.
					</p>
					<p>
						Then pass
						<code class="bg-muted rounded px-1 py-0.5 text-xs">
							textureUrl="/perspective-book-texture.avif"
						</code>
						alongside
						<code class="bg-muted rounded px-1 py-0.5 text-xs">textured</code>.
					</p>
					<Button
						href={textureDownloadUrl}
						download="perspective-book-texture.avif"
						size="sm"
						class="w-fit"
					>
						<DownloadIcon class="size-4" />
						Download Texture
					</Button>
				</div>
			</Alert.Description>
		</Alert.Root>
	</section>

	<section>
		<H2 id="examples">Examples</H2>
		<div class="mt-4 space-y-8">
			{#each examples as example}
				<div class="space-y-3">
					<H3 id={example.name.toLowerCase().replace(/\s+/g, "-")} class="mt-0">
						{example.name}
					</H3>
					{#if example.description}
						<Paragraph>{example.description}</Paragraph>
					{/if}
					<PreviewComponent code={example.code}>
						<example.preview />
					</PreviewComponent>
				</div>
			{/each}
		</div>
	</section>

	<section>
		<H2 id="props">Props</H2>
		<div class="mt-3 space-y-6">
			{#each propsTables as prop}
				<APITable data={prop} />
			{/each}
		</div>
	</section>
</div>
