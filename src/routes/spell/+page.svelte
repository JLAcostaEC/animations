<script lang="ts">
	import { PerspectiveBook } from "$lib/components/spell/perspective-book";
	import { QRCode } from "$lib/components/spell/qrcode";
	import { Code2, Cog } from "@lucide/svelte";

	const textureUrl = "/image.avif";
</script>

<div class="flex min-h-screen flex-col items-center justify-center gap-6">
	<div
		class="w-[105px] md:w-[140px] rounded-lg p-2 shadow-[0_0_0_1px_rgba(0,0,0,.08),_0px_2px_2px_rgba(0,0,0,.04)] dark:border [&_svg]:w-full [&_svg]:h-auto"
	>
		<QRCode value="https://spell.sh" size={140} />
	</div>
</div>
