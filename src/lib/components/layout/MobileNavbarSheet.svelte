<script lang="ts">
	import * as Sheet from "$lib/components/ui/sheet";
	import { Badge } from "$lib/components/ui/badge";
	import { PanelLeftIcon } from "@lucide/svelte";
	import HomeIcon from "@lucide/svelte/icons/home";
	import { magicUIComponents } from "$lib/components/docs/registry/magic-ui";
	import { Separator } from "$lib/components/ui/separator";
	import { page } from "$app/state";
	import { Overlay } from "../ui/dialog";

	let { open = $bindable(false) } = $props();

	// Get started items
	const getStartedItems = [
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

	// Check if a link is active
	function isActive(href: string) {
		return page.url.pathname === href;
	}

	// Close sheet when clicking a link
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

		<!-- Scrollable Content -->
		<div class="flex-1 overflow-y-auto px-2 pb-4">
			<!-- Home Link -->
			<div class="mb-6">
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

			<!-- Get Started Section -->
			<div class="mb-4">
				<h4
					class="text-muted-foreground mb-2 px-3 text-xs font-semibold tracking-wide uppercase"
				>
					Get Started
				</h4>
				<div class="space-y-1">
					{#each getStartedItems as item}
						<a
							href={item.href}
							onclick={handleLinkClick}
							class="block rounded-md px-3 py-2 text-sm transition-colors {isActive(
								item.href
							)
								? 'bg-accent text-accent-foreground font-medium'
								: 'text-muted-foreground hover:text-primary hover:bg-accent/50'}"
						>
							<div class="flex items-center gap-2 font-medium">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									role="img"
									color="currentColor"
									class="shrink-0"
								>
									<path
										d="M17.5055 2.01874C12.8289 2.83455 12 7.5 12 7.5V22C12 22 12.8867 17.1272 18.0004 16.5588C18.5493 16.4978 19 16.0576 19 15.5058V3.39309C19 2.5654 18.3216 1.87638 17.5055 2.01874Z"
										stroke="currentColor"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									></path>
									<path
										d="M5.33333 5.00001C7.79379 4.99657 10.1685 5.88709 12 7.5V22C10.1685 20.3871 7.79379 19.4966 5.33333 19.5C3.77132 19.5 2.99032 19.5 2.64526 19.2792C2.4381 19.1466 2.35346 19.0619 2.22086 18.8547C2 18.5097 2 17.8941 2 16.6629V8.40322C2 6.97543 2 6.26154 2.54874 5.68286C3.09748 5.10418 3.65923 5.07432 4.78272 5.0146C4.965 5.00491 5.14858 5.00001 5.33333 5.00001Z"
										stroke="currentColor"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									></path>
									<path
										d="M12 22.001C13.8315 20.3881 16.2062 19.4976 18.6667 19.501C20.2287 19.501 21.0097 19.501 21.3547 19.2802C21.5619 19.1476 21.6465 19.0629 21.7791 18.8558C22 18.5107 22 17.8951 22 16.6639V8.40424C22 6.97645 22 6.26256 21.4513 5.68388C20.9025 5.1052 20.1235 5.05972 19 5"
										stroke="currentColor"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									></path>
								</svg>
								{item.label}
							</div>
							{#if item.description}
								<div class="text-muted-foreground/60 mt-0.5 ml-6 text-xs">
									{item.description}
								</div>
							{/if}
						</a>
					{/each}
				</div>
			</div>

			<Separator class="my-4" />
			<!-- Magic UI Components Section -->
			<div>
				<h4
					class="text-muted-foreground mb-2 px-3 text-xs font-semibold tracking-wide uppercase"
				>
					Components
				</h4>
				<div class="space-y-1">
					{#each magicUIComponents as component}
						<a
							href={component.href}
							onclick={handleLinkClick}
							class="block rounded-md px-3 py-2 text-sm transition-colors {isActive(
								component.href
							)
								? 'bg-accent text-accent-foreground font-medium'
								: 'text-muted-foreground hover:text-primary hover:bg-accent/50'}"
						>
							<div class="flex items-center justify-between gap-2">
								<div class="flex items-center gap-2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										role="img"
										color="currentColor"
										class="shrink-0"
									>
										<circle
											opacity="0.2"
											cx="12"
											cy="12"
											r="10"
											fill="currentColor"
										></circle>
										<circle
											cx="12"
											cy="12"
											r="10"
											stroke="currentColor"
											stroke-width="1.5"
											stroke-linejoin="round"
										></circle>
									</svg>
									<span>{component.name}</span>
								</div>
								{#if component.badge}
									<Badge
										variant="secondary"
										class="bg-primary/10 text-primary hover:bg-primary/20 h-5 px-1.5 text-xs font-medium"
									>
										{component.badge}
									</Badge>
								{/if}
							</div>
							{#if component.desc}
								<div
									class="text-muted-foreground/60 mt-0.5 ml-6 line-clamp-1 truncate text-xs"
								>
									{component.desc}
								</div>
							{/if}
						</a>
					{/each}
				</div>
			</div>
		</div>
	</Sheet.Content>
</Sheet.Root>
