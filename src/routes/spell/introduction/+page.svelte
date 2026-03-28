<script lang="ts">
	import {
		H1,
		H2,
		Link,
		ListItem,
		Paragraph,
		Strong,
		UnorderedList,
	} from "$lib/components/docs/markdown";
	import * as Breadcrumb from "$lib/components/ui/breadcrumb";
	import SEO from "$lib/seo/SEO.svelte";
</script>

<SEO
	title="Introduction"
	description="An introduction to Spell UI for Svelte, an unofficial port inspired by the original Spell UI project."
	keywords={["Spell UI", "Svelte Spell UI", "Introduction", "spell.sh", "Svelte 5", "Motion SV"]}
/>

<div class="space-y-8 md:space-y-10">
	<section class="space-y-5">
		<Breadcrumb.Root>
			<Breadcrumb.List>
				<Breadcrumb.Item>
					<Breadcrumb.Link href="/spell">Spell UI</Breadcrumb.Link>
				</Breadcrumb.Item>
				<Breadcrumb.Separator />
				<Breadcrumb.Item>
					<Breadcrumb.Page>Introduction</Breadcrumb.Page>
				</Breadcrumb.Item>
			</Breadcrumb.List>
		</Breadcrumb.Root>

		<div class="space-y-3">
			<H1 id="introduction" class="font-semibold">Introduction</H1>
			<Paragraph>
				A concise guide to what Spell UI for Svelte is, how it relates to the original
				project, and what you can expect from this collection.
			</Paragraph>
		</div>
	</section>

	<section class="space-y-4">
		<H2 id="what-spell-ui-is">What Spell UI Is</H2>
		<Paragraph>
			Spell UI for Svelte is a curated set of reusable interface components and animated
			blocks designed for landing pages, product storytelling, and polished marketing
			surfaces. The goal is to make these patterns feel native in a Svelte 5 codebase while
			still keeping the original editorial, design-forward spirit intact.
		</Paragraph>
	</section>

	<section class="space-y-4">
		<H2 id="why-this-svelte-port-exists">Why This Svelte Port Exists</H2>
		<Paragraph>
			The original Spell UI experience is built for React, but the ideas behind it translate
			beautifully to Svelte. This port exists to give Svelte developers the same kind of
			refined, copy-ready building blocks, adapted with Svelte 5 patterns, Tailwind CSS, and
			Motion SV so they feel comfortable to drop into real projects.
		</Paragraph>
	</section>

	<section class="space-y-4">
		<H2 id="what-to-expect">What To Expect</H2>
		<Paragraph>
			Each component page is meant to stay practical: a focused preview, installation details,
			examples, and typed props so you can evaluate quickly and customize without digging
			through unnecessary noise.
		</Paragraph>
		<UnorderedList>
			<ListItem
				><Strong>Copy-ready patterns</Strong> for modern product and marketing UI</ListItem
			>
			<ListItem
				><Strong>Svelte-first implementation</Strong> using familiar, portable code</ListItem
			>
			<ListItem
				><Strong>Thoughtful motion</Strong> powered by Motion SV instead of heavyweight setup</ListItem
			>
		</UnorderedList>
	</section>

	<section class="space-y-4">
		<H2 id="credits">Credits</H2>
		<Paragraph>
			This is an unofficial Svelte port inspired by the original Spell UI project. Credit for
			the upstream concept, design direction, and React implementation belongs to the original
			project and its creator.
		</Paragraph>
		<UnorderedList>
			<ListItem>
				Original project site:
				<Link href="https://spell.sh" target="_blank" rel="noreferrer">spell.sh</Link>
			</ListItem>
			<ListItem>
				Upstream repository:
				<Link href="https://github.com/xxtomm/spell-ui" target="_blank" rel="noreferrer">
					xxtomm/spell-ui
				</Link>
			</ListItem>
			<ListItem>
				Creator credit:
				<Link href="https://github.com/xxtomm" target="_blank" rel="noreferrer">xxtomm</Link
				>
			</ListItem>
		</UnorderedList>
	</section>
</div>
