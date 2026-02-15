<script lang="ts">
	import { H1, Paragraph } from "$lib/components/docs/markdown";
	import * as Alert from "$lib/components/ui/alert/index.js";
	import AlertCircleIcon from "@lucide/svelte/icons/alert-circle";

	// Introduction
</script>

<div class="flex w-full max-w-4xl items-start gap-x-8 px-4 py-6 sm:px-6 lg:pr-4 lg:pl-8">
	<div>
		<H1>Introduction</H1>
		<Paragraph>
			Create magical landing pages with components that you can copy and paste into your apps.
		</Paragraph>
		<Paragraph>
			<span class="text-primary">Svelte Magic UI</span> is a collection of re-usable components
			built with Svelte, Tailwind CSS and Motion SV.
		</Paragraph>
		<Alert.Root class="mt-4">
			<AlertCircleIcon />
			<Alert.Title>Early Access</Alert.Title>
			<Alert.Description>
				Svelte Magic UI is currently in early development. <br />
				We're building this library in the open and actively working on new components and features.
			</Alert.Description>
		</Alert.Root>
	</div>
</div>
