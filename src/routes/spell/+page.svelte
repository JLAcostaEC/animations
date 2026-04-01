<script lang="ts">
	import SpellOverviewHero from "$lib/components/layout/spell/spell-overview-hero.svelte";
	import SpellOverviewShowcase from "$lib/components/layout/spell/spell-overview-showcase.svelte";
	import SEO from "$lib/seo/SEO.svelte";
</script>

<SEO
	title="Svelte Spell UI"
	description="High Quality Svelte Animations for your projects."
	keywords={["Spell UI", "Svelte Spell UI", "Svelte 5", "UI components", "Design engineering"]}
	images={[
		{
			url: "https://sv-animations.vercel.app/og.png",
			width: 1200,
			height: 630,
			alt: "Svelte Spell UI",
		},
	]}
/>

<div class="w-full">
	<div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
		<SpellOverviewHero />
	</div>

	<SpellOverviewShowcase />
</div>
