<script lang="ts">
	import { page } from "$app/state";
	import Toc from "$lib/components/docs/base/toc/toc.svelte";
	import DocsNavigation from "$lib/components/docs/navigation/DocsNavigation.svelte";
	import { getPrevNext } from "$lib/components/docs/registry/spell_ui";
	import SpellSidebar from "$lib/components/spell-sidebar.svelte";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import { UseToc } from "$lib/hooks/use-toc.svelte";

	let { children } = $props();

	let toc = new UseToc();

	let isOverviewPage = $derived(page.url.pathname === "/spell");

	let componentId = $derived.by(() => {
		if (page.url.pathname === "/spell") {
			return "overview";
		}

		const path = page.url.pathname;
		const parts = path.split("/");
		return parts[parts.length - 1] || "";
	});

	let navigation = $derived.by(() => {
		let { prev, next } = getPrevNext(componentId);
		return {
			previous: prev ? { title: prev.name, href: prev.href, desc: prev.desc } : null,
			next: next ? { title: next.name, href: next.href, desc: next.desc } : null,
		};
	});
</script>

<Sidebar.Provider>
	<SpellSidebar />
	{#if isOverviewPage}
		{@render children()}
	{:else}
		<div
			class="mx-auto flex w-full max-w-7xl items-start gap-x-8 px-4 py-6 sm:px-6 lg:pr-4 lg:pl-8"
		>
			<main class="w-full sm:max-w-4xl" bind:this={toc.ref}>
				{@render children()}
				<DocsNavigation previous={navigation.previous} next={navigation.next} />
			</main>

			<aside class="sticky top-24 hidden w-56 shrink-0 xl:block">
				<div>
					<h2 class="mb-2 text-sm font-medium">On this page</h2>
				</div>
				<Toc toc={toc.current} />
			</aside>
		</div>
	{/if}
</Sidebar.Provider>
