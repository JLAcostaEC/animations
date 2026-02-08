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
		<PreviewComponent code={data.previewCode} isCentered={false}>
			<PreviewComp />
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

	{#if data.examples && data.examples.length > 0}
		<H2 id="examples">Examples</H2>
		{#each data.examples as example}
			{@const ExampleComp = example.preview}
			<div class="my-8">
				<H3 id={example.name.toLowerCase().replace(/\s+/g, "-")}>
					{example.name}
				</H3>
				{#if example.description}
					<Paragraph>{example.description}</Paragraph>
				{/if}
				<div class="my-4">
					<PreviewComponent code={example.code} isCentered={true}>
						<ExampleComp />
					</PreviewComponent>
				</div>
			</div>
		{/each}
	{/if}

	{#if data.props && data.props.length > 0}
		<H2 id="props">Props</H2>
		{#each data.props as propsTable}
			<div class="my-4">
				<H3 id={propsTable.name.toLowerCase().replace(/\s+/g, "-")}>
					{propsTable.name}
				</H3>
				{#if propsTable.desc}
					<Paragraph>{propsTable.desc}</Paragraph>
				{/if}
				<div class="my-4">
					<APITable
						headers={["Prop", "Type", "Default"]}
						keys={["name", "type", "default"]}
						data={propsTable.props}
					/>
				</div>
			</div>
		{/each}
	{/if}
</div>
