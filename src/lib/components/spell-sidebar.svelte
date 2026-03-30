<script lang="ts">
	import { page } from "$app/state";
	import { spellUISidebarGroups } from "$lib/components/docs/registry/spell_ui";
	import Badge from "$lib/components/ui/badge/badge.svelte";
	import { ScrollArea } from "$lib/components/ui/scroll-area/index.js";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import type { ComponentProps } from "svelte";

	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();

	function isActive(url: string) {
		const pathname = page.url.pathname;
		return pathname === url || (url !== "/" && pathname.startsWith(`${url}/`));
	}
</script>

<Sidebar.Root class="mt-16 border-none" {...restProps} bind:ref>
	<ScrollArea
		class="max-h-[calc(100vh-6rem)] pt-4 pb-8 pr-1"
		scrollbarXClasses="hidden"
		scrollbarYClasses="hidden"
	>
		<Sidebar.Content>
			{#each spellUISidebarGroups as group (group.title)}
				{#if group.items.length}
					<Sidebar.Group>
						<Sidebar.GroupLabel>{group.title}</Sidebar.GroupLabel>
						<Sidebar.GroupContent>
							<Sidebar.Menu>
								{#each group.items as item}
									<Sidebar.MenuItem>
										<Sidebar.MenuButton isActive={isActive(item.href)}>
											{#snippet child({ props })}
												<a href={item.href} {...props}>
													{item.name}
													{#if item.badge}
														<Badge
															variant="secondary"
															class={[
																item.badge === "New" &&
																	"border-green-500/30 bg-green-500/20 text-[10px] text-green-600 dark:bg-green-500/15 dark:text-green-400",
																item.badge === "Beta" &&
																	"border-yellow-500/30 bg-yellow-500/20 text-[10px] text-yellow-600 dark:bg-yellow-500/20 dark:text-yellow-400",
																item.badge === "Updated" &&
																	"border-cyan-500/30 bg-cyan-500/20 text-[10px] text-cyan-600 dark:bg-cyan-500/15 dark:text-cyan-400",
																"ml-auto px-1.5 py-0 text-[10px]",
															]}
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
				{/if}
			{/each}
		</Sidebar.Content>
	</ScrollArea>
</Sidebar.Root>
