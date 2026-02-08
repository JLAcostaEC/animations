<script lang="ts">
	import { page } from "$app/state";
	import { H1, H2, Paragraph, H3 } from "$lib/components/docs/markdown/index";

	import { PreviewComponent } from "$lib/components/ui/preview-component";
	import InstallComponent from "$lib/components/docs/base/InstallComponent.svelte";
	import APITable from "$lib/components/docs/base/APITable.svelte";
	import { CopyPageDropdown } from "$lib/components/docs/copy-page-dropdown";
	import { data } from "./data";

	let PreviewComp = $derived(data.preview);
	let installUrl = $derived(`${page.url.origin}/r/${data.id}.json`);
	let llmsTxtUrl = $derived(`${page.url}/llms.txt`);
</script>

<div>
	<div class="flex flex-col justify-between gap-4 md:flex-row md:items-center">
		<H1 id="introduction">{data.title}</H1>
		<CopyPageDropdown componentName={data.title} {llmsTxtUrl} />
	</div>
	<Paragraph>
		{data.description}
	</Paragraph>

	<!-- Preview Component -->
	<div class="my-6">
		<PreviewComponent code={data.previewCode}>
			{#if PreviewComp}
				<PreviewComp />
			{/if}
		</PreviewComponent>
	</div>

	<H2 id="installation">Installation</H2>
	<InstallComponent
		{installUrl}
		codeBlocks={data.installBlock?.installCode}
		folderStructure={data.installBlock?.folderStructure}
		packages={data.installBlock?.packages}
		class="my-4"
	/>

	<!-- Examples Section -->
	{#if data.examples && data.examples.length > 0}
		<H2 id="examples">Examples</H2>
		{#each data.examples as example}
			<div class="my-6">
				<H3 id={example.name.toLowerCase().replace(/\s+/g, "-")}>{example.name}</H3>
				<PreviewComponent code={example.code}>
					<example.preview />
				</PreviewComponent>
			</div>
		{/each}
	{/if}

	<!-- Props Section -->
	{#if data.props && data.props.length > 0}
		<H2 id="props">Props</H2>
		{#each data.props as prop}
			<APITable data={prop} />
		{/each}
	{/if}
</div>
