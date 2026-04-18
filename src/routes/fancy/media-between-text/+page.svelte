<script lang="ts">
	import { page } from "$app/state";
	import CompactPropsTable from "$lib/components/docs/base/CompactPropsTable.svelte";
	import InstallComponent from "$lib/components/docs/base/InstallComponent.svelte";
	import PackageBadges from "$lib/components/docs/base/PackageBadges.svelte";
	import { CopyPageDropdown } from "$lib/components/docs/copy-page-dropdown";
	import { H1, H2, H3, Paragraph } from "$lib/components/docs/markdown/index";
	import { PreviewComponent } from "$lib/components/ui/preview-component";
	import SEOComponent from "$lib/seo/SEO.svelte";
	import { data } from "./data";

	let PreviewComp = $derived(data.preview);
	let installUrl = $derived(`${page.url.origin}/f/${data.id}.json`);
	let llmsTxtUrl = $derived(`${page.url.href.split("?")[0].split("#")[0]}/llms.txt`);
</script>

<SEOComponent
	title={data.seo.title}
	description={data.seo.description}
	keywords={data.seo.keywords}
/>

<div class="space-y-6 md:space-y-8">
	<section>
		<div class="flex flex-col justify-between gap-3 md:flex-row md:items-center md:gap-4">
			<H1 id="introduction" class="font-figtree">{data.title}</H1>
			<CopyPageDropdown componentName={data.title} {llmsTxtUrl} />
		</div>

		<div class="mt-3 max-w-2xl">
			<Paragraph class="font-figtree">
				{data.description}
			</Paragraph>
			<PackageBadges packages={data.installBlock?.packages ?? []} />
		</div>
	</section>

	<section>
		<PreviewComponent code={data.previewCode} class={data.previewClass}>
			{#if PreviewComp}
				<PreviewComp />
			{/if}
		</PreviewComponent>
	</section>
	<section>
		<H2 id="installation">Installation</H2>
		<InstallComponent
			{installUrl}
			tailwindConfig={data.installBlock?.tailwind
				? { code: data.installBlock.tailwind }
				: undefined}
			codeBlocks={data.installBlock?.installCode}
			packages={data.installBlock?.packages}
			folderStructure={data.installBlock?.folderStructure}
			class="mt-4"
		/>
	</section>

	{#if data.examples && data.examples.length > 0}
		<section>
			<H2 id="examples">Examples</H2>
			<div class="mt-4 space-y-8">
				{#each data.examples as example (example.name)}
					<div class="space-y-0">
						<H3 id={example.name.toLowerCase().replace(/\s+/g, "-")} class="mt-0">
							{example.name}
						</H3>
						<PreviewComponent code={example.code} class={example.previewClass}>
							<example.preview />
						</PreviewComponent>
					</div>
				{/each}
			</div>
		</section>
	{/if}

	{#if data.props && data.props.length > 0}
		<section>
			<H2 id="props">Props</H2>
			<div class="mt-3 space-y-6">
				{#each data.props as prop, index (prop.name ?? index)}
					<CompactPropsTable data={prop} />
				{/each}
			</div>
		</section>
	{/if}
</div>
