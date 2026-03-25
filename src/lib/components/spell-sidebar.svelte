<script lang="ts" module>
	import { spellUIComponents } from "$lib/components/docs/registry/spell_ui";

	const navigationGroups = [
		{
			title: "Overview",
			items: spellUIComponents
				.filter((item) => item.href === "/spell")
				.map((item) => ({
					title: item.name,
					url: item.href,
				})),
		},
		{
			title: "Components",
			items: spellUIComponents
				.filter((item) => item.href !== "/spell")
				.map((item) => ({
					title: item.name,
					url: item.href,
				})),
		},
	];
</script>

<script lang="ts">
	import { page } from "$app/state";
	import { ScrollArea } from "$lib/components/ui/scroll-area/index.js";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import type { ComponentProps } from "svelte";

	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();

	function isActive(url: string) {
		const pathname = page.url.pathname;
		return pathname === url || (url !== "/" && pathname.startsWith(`${url}/`));
	}
</script>

<Sidebar.Root class="mt-16" {...restProps} bind:ref>
	<ScrollArea
		class="max-h-[calc(100vh-6rem)] py-4 pr-1"
		scrollbarXClasses="hidden"
		scrollbarYClasses="hidden"
	>
		<Sidebar.Content>
			{#each navigationGroups as group (group.title)}
				{#if group.items.length}
					<Sidebar.Group>
						<Sidebar.GroupLabel>{group.title}</Sidebar.GroupLabel>
						<Sidebar.GroupContent>
							<Sidebar.Menu>
								{#each group.items as item}
									<Sidebar.MenuItem>
										<Sidebar.MenuButton isActive={isActive(item.url)}>
											{#snippet child({ props })}
												<a href={item.url} {...props}>{item.title}</a>
											{/snippet}
										</Sidebar.MenuButton>
									</Sidebar.MenuItem>
								{/each}
							</Sidebar.Menu>
						</Sidebar.GroupContent>
					</Sidebar.Group>
				{/if}
			{/each}
		</Sidebar.Content>
	</ScrollArea>
</Sidebar.Root>
