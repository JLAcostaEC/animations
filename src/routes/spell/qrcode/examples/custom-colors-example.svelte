<script lang="ts">
	import { QRCode } from "$lib/components/spell/qrcode";
</script>

<div class="mx-auto grid w-full max-w-xl gap-4 md:grid-cols-2">
	<div class="bg-card rounded-[28px] border p-4 shadow-sm">
		<QRCode
			value="https://example.com/invite"
			size={180}
			fgColor="#0f172a"
			bgColor="#f8fafc"
			errorCorrectionLevel="H"
		/>
	</div>

	<div class="rounded-[28px] bg-[#111827] p-4 shadow-sm">
		<QRCode
			value="https://example.com/ticket"
			size={180}
			fgColor="#f59e0b"
			bgColor="#111827"
			errorCorrectionLevel="Q"
		/>
	</div>
</div>
