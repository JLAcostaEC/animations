<script lang="ts">
	import * as Sheet from "$lib/components/ui/sheet";
	import { Badge } from "$lib/components/ui/badge";
	import { PanelLeftIcon } from "@lucide/svelte";
	import ChevronDownIcon from "@lucide/svelte/icons/chevron-down";
	import HomeIcon from "@lucide/svelte/icons/home";
	import { magicUIComponents } from "$lib/components/docs/registry/magic-ui";
	import { spellUIComponents } from "$lib/components/docs/registry/spell_ui";
	import { Separator } from "$lib/components/ui/separator";
	import { page } from "$app/state";

	let { open = $bindable(false) } = $props();

	type MobileNavItem = {
		href: string;
		label: string;
		description?: string;
		badge?: string;
	};

	const getStartedItems: MobileNavItem[] = [
		{
			href: "/magic/docs",
			label: "Introduction",
			description: "Get started with Magic UI components",
		},
		{
			href: "/magic/docs/installation",
			label: "Installation",
			description: "How to install and set up",
		},
	];

	const componentItems: MobileNavItem[] = magicUIComponents.map((component) => ({
		href: component.href,
		label: component.name,
		description: component.desc,
		badge: component.badge,
	}));

	const spellItems: MobileNavItem[] = spellUIComponents.map((component) => ({
		href: component.href,
		label: component.name,
		description: component.desc,
	}));

	function isActive(href: string) {
		const pathname = page.url.pathname;
		return pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
	}

	function isSectionOpen(items: MobileNavItem[]) {
		return items.some((item) => isActive(item.href));
	}

	function handleLinkClick() {
		open = false;
	}
</script>

<Sheet.Root bind:open>
	<Sheet.Overlay class="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm " />
	<Sheet.Trigger
		class="hover:bg-accent hover:text-accent-foreground inline-flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium whitespace-nowrap transition-colors md:hidden"
	>
		<PanelLeftIcon class="size-5" />
	</Sheet.Trigger>
	<Sheet.Content side="left" class="flex w-75 flex-col p-0 sm:w-100">
		<!-- Fixed Header -->
		<Sheet.Header class="border-b px-6 py-4">
			<Sheet.Title class="text-lg font-medium">Svelte Animation</Sheet.Title>
		</Sheet.Header>

		<div class="flex-1 overflow-y-auto px-2 pb-4">
			<div class="mb-4 pt-2">
				<a
					href="/"
					onclick={handleLinkClick}
					class="text-muted-foreground hover:text-primary block rounded-md px-3 py-2 text-sm font-medium transition-colors {isActive(
						'/'
					)
						? 'bg-accent text-accent-foreground'
						: 'hover:bg-accent/50'}"
				>
					<div class="flex items-center gap-2">
						<HomeIcon class="size-4 shrink-0" />
						<span>Home</span>
					</div>
				</a>
			</div>

			<Separator class="my-4" />
			<div class="space-y-2">
				{#each [{ title: "Get Started", items: getStartedItems, open: true }, { title: "Components", items: componentItems, open: isSectionOpen(componentItems) }, { title: "Spell UI", items: spellItems, open: isSectionOpen(spellItems) }] as section (section.title)}
					<details
						class="group border-border overflow-hidden rounded-lg border"
						open={section.open}
					>
						<summary
							class="hover:bg-accent/50 flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-medium"
						>
							<span>{section.title}</span>
							<ChevronDownIcon
								class="text-muted-foreground size-4 transition-transform group-open:rotate-180"
							/>
						</summary>
						<div class="space-y-1 px-2 pb-2">
							{#each section.items as item}
								<a
									href={item.href}
									onclick={handleLinkClick}
									class="block rounded-md px-3 py-2 text-sm transition-colors {isActive(
										item.href
									)
										? 'bg-accent text-accent-foreground font-medium'
										: 'text-muted-foreground hover:text-primary hover:bg-accent/50'}"
								>
									<div class="flex items-start justify-between gap-2">
										<div class="space-y-1">
											<div class="font-medium">{item.label}</div>
											{#if item.description}
												<div
													class="text-muted-foreground/60 line-clamp-2 text-xs"
												>
													{item.description}
												</div>
											{/if}
										</div>
										{#if item.badge}
											<Badge
												variant="secondary"
												class="bg-primary/10 text-primary hover:bg-primary/20 mt-0.5 h-5 shrink-0 px-1.5 text-xs font-medium"
											>
												{item.badge}
											</Badge>
										{/if}
									</div>
								</a>
							{/each}
						</div>
					</details>
				{/each}
			</div>
		</div>
	</Sheet.Content>
</Sheet.Root>
