<script lang="ts">
	import {
		H1,
		H2,
		ListItem,
		Paragraph,
		Strong,
		UnorderedList,
	} from "$lib/components/docs/markdown";
	import * as Icons from "$lib/components/icons";
	import { StripedPattern } from "$lib/components/magic-ui/striped-pattern";
	import SEO from "$lib/seo/SEO.svelte";
	import { Avatar, AvatarFallback, AvatarImage } from "$lib/components/ui/avatar";
	import { Button } from "$lib/components/ui/button";
	import * as Breadcrumb from "$lib/components/ui/breadcrumb";

	const creator = {
		name: "tom",
		role: "Original Creator of Spell UI",
		avatar: "https://unavatar.io/x/tomm_ui",
		twitter: "https://x.com/tomm_ui",
		website: "https://spell.sh",
	};
</script>

<SEO
	title="Svelte Spell UI"
	description="Port of Spell UI for Svelte, built to bring the Spell UI aesthetic and ideas into the Svelte ecosystem."
	keywords={[
		"Svelte Spell UI",
		"Spell UI",
		"Svelte Animations Components",
		"Svelte Animations",
		"Svelte 5",
		"Motion SV",
		"Motion Svelte",
		"Svelte Motion",
	]}
/>

<div class="space-y-8 md:space-y-10">
	<section class="space-y-5">
		<div class="space-y-3">
			<H1 id="introduction" class="font-semibold">Svelte Spell UI</H1>
			<Paragraph class="max-w-3xl">Build using Svelte 5, Motion-SV, Tailwind CSS</Paragraph>
			<Paragraph class="max-w-3xl">
				It keeps the original look and feel while making the experience more
				Svelte-friendly.
			</Paragraph>
		</div>
	</section>

	<section class="space-y-4">
		<H2 id="credits">Credits</H2>
		<div class="bg-card text-card-foreground relative max-w-md rounded-md border shadow-sm">
			<div class="relative z-10 flex flex-col gap-6 p-6">
				<div class="flex items-start gap-4">
					<Avatar class="size-14 border">
						<AvatarImage src={creator.avatar} alt={creator.name} />
						<AvatarFallback>TM</AvatarFallback>
					</Avatar>

					<div class="space-y-1">
						<p class="text-foreground text-lg font-medium">{creator.name}</p>
						<p class="text-muted-foreground text-sm">{creator.role}</p>
					</div>
				</div>

				<div class="flex flex-wrap gap-3">
					<Button
						href={creator.twitter}
						target="_blank"
						rel="noreferrer"
						variant="outline"
						size="sm"
						class="text-xs"
					>
						<Icons.Twitter class="size-3" />
						Visit Twitter
					</Button>
				</div>
			</div>

			<StripedPattern
				direction="right"
				class="mask-[radial-gradient(300px_circle_at_right,white,transparent)] opacity-10"
			/>
		</div>
	</section>
</div>
