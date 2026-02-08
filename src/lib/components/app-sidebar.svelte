<script lang="ts" module>
	import { magicUIComponents, type BadgeType } from "$lib/components/docs/registry/magic-ui";

	type NavItem = {
		title: string;
		url: string;
		badge?: BadgeType;
	};

	// Build navigation from registry
	const data = {
		navMain: [
			{
				title: "Getting Started",
				url: "#",
				items: [
					{
						title: "Installation",
						url: "#",
					},
					{
						title: "Project Structure",
						url: "#",
					},
				] as NavItem[],
			},
			{
				title: "Text Animations",
				url: "#",
				items: magicUIComponents.map((c) => ({
					title: c.name,
					url: c.href,
					badge: c.badge,
				})) as NavItem[],
			},
		],
	};
</script>

<script lang="ts">
	// import SearchForm from "./search-form.svelte";
	// import VersionSwitcher from "./version-switcher.svelte";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import { ScrollArea } from "$lib/components/ui/scroll-area/index.js";
	import Badge from "$lib/components/ui/badge/badge.svelte";
	import { page } from "$app/state";
	import type { ComponentProps } from "svelte";

	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root class="mt-16" {...restProps} bind:ref>
	<!-- <Sidebar.Header>
    <VersionSwitcher versions={data.versions} defaultVersion={data.versions[0]} />
    <SearchForm />
  </Sidebar.Header> -->
	<ScrollArea class="max-h-[calc(100vh-6rem)] pr-1">
		<Sidebar.Content>
			<!-- We create a Sidebar.Group for each parent. -->
			{#each data.navMain as group (group.title)}
				<Sidebar.Group>
					<Sidebar.GroupLabel>{group.title}</Sidebar.GroupLabel>
					<Sidebar.GroupContent>
						<Sidebar.Menu>
							{#each group.items as item}
								<Sidebar.MenuItem>
									<Sidebar.MenuButton isActive={page.url.pathname === item.url}>
										{#snippet child({ props })}
											<a href={item.url} {...props}>
												{item.title}
												{#if item.badge}
													<Badge
														variant="secondary"
														class="ml-auto px-1.5 py-0 text-[10px]"
													>
														{item.badge}
													</Badge>
												{/if}
											</a>
										{/snippet}
									</Sidebar.MenuButton>
								</Sidebar.MenuItem>
							{/each}
						</Sidebar.Menu>
					</Sidebar.GroupContent>
				</Sidebar.Group>
			{/each}
		</Sidebar.Content>
	</ScrollArea>
	<Sidebar.Rail />
</Sidebar.Root>
