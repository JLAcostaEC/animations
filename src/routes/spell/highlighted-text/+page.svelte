<script lang="ts">
	import { page } from "$app/state";
	import APITable from "$lib/components/docs/base/APITable.svelte";
	import InstallComponent from "$lib/components/docs/base/InstallComponent.svelte";
	import { CopyPageDropdown } from "$lib/components/docs/copy-page-dropdown";
	import { H1, H2, H3, Paragraph } from "$lib/components/docs/markdown/index";
	import { PreviewComponent } from "$lib/components/ui/preview-component";
	import SEO from "$lib/seo/SEO.svelte";
	import { data } from "./data";

	let PreviewComp = $derived(data.preview);
	let installSlug = $derived(data.id.replace("spell/", ""));
	let installUrl = $derived(`${page.url.origin}/s/${installSlug}.json`);

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

		<div class="mt-3 max-w-2xl">
			<Paragraph>{data.description}</Paragraph>
		</div>
	</section>

	<section>
		<PreviewComponent  code={data.previewCode}>
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
			packages={data.installBlock?.packages}
			class="mt-4"
		/>
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
				<APITable data={prop.props} />
			{/each}
		</div>
	</section>
</div>
