<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Badge } from "$lib/components/ui/badge";
	import * as Icons from "$lib/components/icons";

	import BookOpenIcon from "@lucide/svelte/icons/book-open";
	import SparklesIcon from "@lucide/svelte/icons/sparkles";
	import HomeIcon from "@lucide/svelte/icons/home";
	import ZapIcon from "@lucide/svelte/icons/zap";
	import type { Component } from "svelte";
	import {
		NavigationMenuContent,
		NavigationMenuItem,
		NavigationMenuLink,
		NavigationMenuList,
		NavigationMenuRoot,
		NavigationMenuTrigger,
	} from "$lib/components/ui/navigation-menu";
	import LightSwitch from "../ui/light-switch/light-switch.svelte";
	import DocsSearchNavigation from "../docs/navigation/DocsSearchNavigation.svelte";
	import { magicUIComponents } from "$lib/components/docs/registry/magic-ui";
	import MobileNavbarSheet from "./MobileNavbarSheet.svelte";
	// import McpDialog from "./mcp-dialog.svelte";

	type ComponentDropdownItem = {
		href: string;
		title: string;
		description: string;
		icon?: Component;
		badge?: string;
	};

	// Component dropdown items
	const componentItems: ComponentDropdownItem[] = [
		{
			href: "/magic/docs/components/animated-beam",
			title: "Svelte Magic UI",
			description: "50+ Animations & Effects for Svelte",
			icon: SparklesIcon,
		},
		{
			href: "/a/components",
			title: "Svelte Aceternity UI",
			description: "20+ Animations Components",
			icon: ZapIcon,
		},
		{
			href: "/luxe/components",
			title: "Svelte Luxe UI",
			description: "20+ Premium Components for Svelte",
			icon: ZapIcon,
		},
		{
			href: "/in/components",
			title: "Svelte Indie UI",
			description: "20+ Components for Indie Developers",
			icon: ZapIcon,
		},
		{
			href: "/sn/components",
			title: "Svelte Spinner UI",
			description: "20+ Components for Indie Developers",
			icon: ZapIcon,
		},
	];
</script>

<header
	class="bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-40 border-b px-4 backdrop-blur md:px-6"
>
	<div class="flex h-16 items-center justify-between gap-4">
		<!-- Left side  -->
		<div class="flex items-center gap-2">
			<!-- Mobile menu trigger  -->
			<MobileNavbarSheet />
			<!-- Main nav  -->
			<div class="flex items-center gap-6">
				<a href="/" class="text-primary hover:text-primary/90"> Svelte Animations </a>
				<!-- Navigation menu  -->
				<NavigationMenuRoot class="max-md:hidden" delayDuration={0}>
					<NavigationMenuList class="gap-1 ">
						<!-- Home Link -->
						<NavigationMenuItem>
							<NavigationMenuLink
								href="/"
								class="text-muted-foreground hover:text-primary focus:text-primary data-active:bg-accent/50 data-active:text-accent-foreground bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-transparent focus:bg-transparent"
							>
								Home
							</NavigationMenuLink>
						</NavigationMenuItem>

						<NavigationMenuItem>
							<NavigationMenuLink
								href="/magic/docs/components/animated-beam"
								class="text-muted-foreground hover:text-primary focus:text-primary data-active:bg-accent/50 data-active:text-accent-foreground bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-transparent focus:bg-transparent"
							>
								Components
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink
								href="/spell/perspective-book"
								class="text-muted-foreground hover:text-primary focus:text-primary data-active:bg-accent/50 data-active:text-accent-foreground bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-transparent focus:bg-transparent"
							>
								Spell
							</NavigationMenuLink>
						</NavigationMenuItem>

						<!-- Components Menu -->
						<!-- <NavigationMenuItem>
              <NavigationMenuTrigger
                class="text-muted-foreground hover:text-primary focus:text-primary data-[state=open]:text-primary bg-transparent px-4 py-2 text-sm font-medium hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent"
              >
                Components
              </NavigationMenuTrigger>
              <NavigationMenuContent class="">
                <ul class="grid w-150 grid-cols-2 gap-2 px-0 pb-4 h-fit">
                  {#each componentItems as item (item.href)}
                    <li>
                      <NavigationMenuLink href={item.href}>
                        {#snippet child({ props })}
                          <a
                            {...props}
                            class="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                          >
                            <div class="flex items-start gap-3">
                              {#if item.icon}
                                {@const Icon = item.icon}
                                <div
                                  class="bg-muted text-muted-foreground group-hover:bg-accent-foreground/10 group-hover:text-accent-foreground mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md transition-colors"
                                >
                                  <Icon class="size-4" />
                                </div>
                              {/if}
                              <div class="flex-1 space-y-1">
                                <div class="flex items-center gap-2">
                                  <div class="text-sm leading-none font-medium">
                                    {item.title}
                                  </div>
                                  {#if item.badge}
                                    <Badge
                                      variant="secondary"
                                      class="bg-primary/10 text-primary hover:bg-primary/20 h-5 px-1.5 text-xs font-medium"
                                    >
                                      {item.badge}
                                    </Badge>
                                  {/if}
                                </div>
                                <p
                                  class="text-muted-foreground group-hover:text-accent-foreground/80 line-clamp-2 text-xs leading-snug"
                                >
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </a>
                        {/snippet}
                      </NavigationMenuLink>
                    </li>
                  {/each}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem> -->
					</NavigationMenuList>
				</NavigationMenuRoot>
			</div>
		</div>
		<!-- Right side  -->
		<div class="flex items-center gap-2 md:gap-2">
			<!-- Search Bar -->
			<DocsSearchNavigation />
			<Button
				variant="ghost"
				size="icon"
				href="https://github.com/SikandarJODD/animations"
				target="_blank"
			>
				<Icons.GitHub class="size-4" />
			</Button>
			<Button
				variant="ghost"
				size="icon"
				href="https://x.com/Sikandar_Bhide"
				target="_blank"
				class="hidden md:inline-flex"
			>
				<Icons.Twitter class="size-4" />
			</Button>
			<LightSwitch variant="ghost" />
		</div>
	</div>
</header>
