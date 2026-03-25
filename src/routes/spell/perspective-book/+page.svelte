<script lang="ts">
	import { page } from "$app/state";
	import InstallComponent from "$lib/components/docs/base/InstallComponent.svelte";
	import APITable from "$lib/components/docs/base/APITable.svelte";
	import { CopyPageDropdown } from "$lib/components/docs/copy-page-dropdown";
	import { H1, H2, H3, Paragraph } from "$lib/components/docs/markdown/index";
	import * as Alert from "$lib/components/ui/alert/index.js";
	import { Button } from "$lib/components/ui/button";
	import { PreviewComponent } from "$lib/components/ui/preview-component";
	import SEO from "$lib/seo/SEO.svelte";
	import AlertCircleIcon from "@lucide/svelte/icons/alert-circle";
	import DownloadIcon from "@lucide/svelte/icons/download";
	import { data, textureDownloadUrl } from "./data";

	let PreviewComp = $derived(data.preview);
	let installUrl = $derived(`${page.url.origin}/r/${data.id}.json`);

	const getURLPath = (url: string) => url.split("?")[0].split("#")[0];
	let llmsTxtUrl = $derived(`${getURLPath(page.url.pathname)}/llms.txt`);
</script>

<SEO title={data.seo.title} description={data.seo.description} keywords={data.seo.keywords} />

<div class="space-y-8 md:space-y-10">
	<section>
		<div class="flex flex-col justify-between gap-3 md:flex-row md:items-center md:gap-4">
			<H1 id="introduction" class="font-semibold">{data.title}</H1>
			<CopyPageDropdown componentName={data.title} {llmsTxtUrl} />
		</div>

		<div class="mt-4 space-y-3">
			<Paragraph>{data.description}</Paragraph>
		</div>
	</section>

	<section>
		<PreviewComponent
			code={data.previewCode}
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
			codeBlocks={data.installBlock?.installCode}
			folderStructure={data.installBlock?.folderStructure}
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
			{#each data.examples ?? [] as example}
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
			{#each data.props ?? [] as prop}
				<APITable data={prop} />
			{/each}
		</div>
	</section>
</div>
