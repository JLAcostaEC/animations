<script lang="ts">
	import { MediaBetweenText } from "$lib/components/fancy/media-between-text";
	import Image from "$lib/assets/pixel-image-demo.jpg";
</script>

<div class="flex min-h-64 items-center justify-center px-4 py-12">
	<MediaBetweenText
		firstText="Design"
		secondText="Motion"
		mediaUrl={Image}
		mediaType="image"
		alt="Abstract landscape used in the Media Between Text preview"
		class="items-center gap-3 text-4xl font-semibold tracking-tight sm:text-6xl"
		leftTextClassName="leading-none"
		rightTextClassName="leading-none"
		mediaContainerClassName="h-14 overflow-hidden rounded-md sm:h-20"
	/>
</div>
