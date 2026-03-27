<script lang="ts">
	import { QRCode } from "$lib/components/spell/qrcode";
</script>

<div class="flex justify-center py-8">
	<div class="bg-card rounded-[28px] border p-4 shadow-sm">
		<QRCode value="https://sv-animations.vercel.app/spell" size={180} />
	</div>
</div>
