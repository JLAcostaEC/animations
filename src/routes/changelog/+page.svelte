<script lang="ts">
	import { MetaTags } from "svelte-meta-tags";
	import { changelogEntries, type ChangelogInline } from "./data";

	const dateFormatter = new Intl.DateTimeFormat("en", {
		month: "long",
		day: "numeric",
		year: "numeric",
	});

	function formatDate(date: string) {
		return dateFormatter.format(new Date(`${date}T00:00:00`));
	}
</script>

<MetaTags
	title="Changelog | Svelte 5 Animations"
	description="Latest component additions, fixes, examples, and updates for Svelte 5 Animations."
	openGraph={{
		url: "https://sv-animations.vercel.app/changelog",
		title: "Changelog | Svelte 5 Animations",
		description: "Latest component additions, fixes, examples, and updates for Svelte 5 Animations.",
		siteName: "Svelte 5 Animations",
		images: [
			{
				url: "https://sv-animations.vercel.app/og.png",
				alt: "Svelte 5 Animations",
			},
		],
	}}
	twitter={{
		cardType: "summary_large_image",
		title: "Changelog | Svelte 5 Animations",
		description: "Latest component additions, fixes, examples, and updates for Svelte 5 Animations.",
		image: "https://sv-animations.vercel.app/og.png",
		imageAlt: "Svelte 5 Animations",
		site: "@Sikandar_Bhide",
		creator: "@Sikandar_Bhide",
	}}
/>

{#snippet inlineParts(parts: ChangelogInline[])}
	{#each parts as part (part.type + part.text)}
		{#if part.type === "link"}
			<a
				href={part.href}
				class="font-medium text-blue-600 underline-offset-4 transition-colors hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
			>
				{part.text}
			</a>
		{:else if part.type === "code"}
			<code
				class="bg-secondary text-secondary-foreground rounded px-1.5 py-0.5 font-mono text-[0.84em]"
			>
				{part.text}
			</code>
		{:else}
			{part.text}
		{/if}
	{/each}
{/snippet}

<section class="font-figtree min-h-[calc(100vh-4rem)] px-4 py-12 sm:py-16">
	<div class="mx-auto w-full max-w-2xl">
		<header class="mb-10">
			<p class="text-muted-foreground mb-2 text-[11px] font-medium tracking-[0.18em] uppercase">
				Updates
			</p>
			<h1 class="text-2xl font-semibold tracking-normal sm:text-3xl">Changelog</h1>
		</header>

		<div class="space-y-12">
			{#each changelogEntries as entry (entry.date)}
				<article aria-labelledby={`changelog-${entry.date}`}>
					<div class="mb-5 flex items-center gap-3">
						<h2
							id={`changelog-${entry.date}`}
							class="text-base font-semibold whitespace-nowrap sm:text-lg"
						>
							{formatDate(entry.date)}
						</h2>
						<div class="bg-border h-px flex-1"></div>
					</div>

					{#if entry.summary}
						<p class="text-foreground mb-6 text-sm leading-7 sm:text-[15px]">
							{@render inlineParts(entry.summary)}
						</p>
					{/if}

					<div class="space-y-7">
						{#each entry.sections as section (section.title)}
							<section aria-labelledby={`changelog-${entry.date}-${section.title}`}>
								<h3
									id={`changelog-${entry.date}-${section.title}`}
									class="text-muted-foreground mb-3 text-[11px] font-medium tracking-[0.16em] uppercase"
								>
									{section.title}
								</h3>

								<ul class="space-y-2.5 text-sm leading-7 sm:text-[15px]">
									{#each section.items as item (item.id)}
										<li class="grid grid-cols-[0.65rem_1fr] gap-2">
											<span
												aria-hidden="true"
												class="bg-muted-foreground/45 mt-[0.78em] size-1 rounded-full"
											></span>
											<span class="min-w-0">
												{@render inlineParts(item.parts)}
											</span>
										</li>
									{/each}
								</ul>
							</section>
						{/each}
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
