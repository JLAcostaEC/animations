<script lang="ts">
	import { spellOverviewShowcaseItems } from "$lib/components/layout/spell/showcase-data";
	import SpellOverviewHero from "$lib/components/layout/spell/spell-overview-hero.svelte";
	import SpellOverviewShowcase from "$lib/components/layout/spell/spell-overview-showcase.svelte";
	import SEO from "$lib/seo/SEO.svelte";
</script>

<SEO
	title="Spell UI"
	description="Refined UI components for Design Engineers, rebuilt for Svelte 5 and inspired by the original Spell UI experience."
	keywords={[
		"Spell UI",
		"Svelte Spell UI",
		"Svelte 5",
		"spell.sh",
		"UI components",
		"Design engineering",
	]}
/>

<div class="w-full">
	<div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
		<SpellOverviewHero />
	</div>

	<SpellOverviewShowcase items={spellOverviewShowcaseItems} />
</div>
