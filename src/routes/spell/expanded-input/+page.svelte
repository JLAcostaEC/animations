<script lang="ts">
	import EmojiExample from "./examples/emoji-example.svelte";
	import ImageExample from "./examples/image-example.svelte";
	import SvgComponentsExample from "./examples/svg-components-example.svelte";

	const examples = [
		{
			title: "Emoji Particles",
			description: "The same playful emoji burst as the original React-style demo.",
			component: EmojiExample,
		},
		{
			title: "Image URL Particles",
			description: "Use image URLs as particle items and render them with an image snippet.",
			component: ImageExample,
		},
		{
			title: "Custom SVG Components",
			description: "Pass component-backed SVG particles and render them dynamically in the snippet.",
			component: SvgComponentsExample,
		},
	];
</script>

<div class="mx-auto flex w-full max-w-4xl flex-col gap-8 px-4 py-8 sm:px-6">
	<div class="space-y-2">
		<h1 class="text-3xl font-semibold tracking-tight">Expanded Input</h1>
		<p class="text-muted-foreground max-w-2xl text-sm">
			Type into each field to preview emoji, image, and custom SVG particle variants.
		</p>
	</div>

	{#each examples as example (example.title)}
		<section class="rounded-3xl border bg-card p-6 shadow-sm">
			<div class="mb-4 space-y-1">
				<h2 class="text-lg font-medium tracking-tight">{example.title}</h2>
				<p class="text-muted-foreground text-sm">{example.description}</p>
			</div>

			<svelte:component this={example.component} />
		</section>
	{/each}
</div>
