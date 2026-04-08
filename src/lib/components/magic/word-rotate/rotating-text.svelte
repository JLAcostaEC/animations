<script lang="ts">
	import { motion, AnimatePresence } from "motion-sv";
	import { useRotatingText } from "./use-rotating-text-context.svelte";
	import type { RotatingTextProps } from "./types";

	let { transition = { duration: 0.3, ease: "easeOut" }, ...props }: RotatingTextProps = $props();

	const context = useRotatingText();

	const currentText = $derived(context.currentText);
	const y = $derived(context.y);
	const isInView = $derived(context.isInView);
</script>

<AnimatePresence mode="wait">
	{#if isInView}
		{#key currentText}
			<motion.div
				{transition}
				initial={{ opacity: 0, y: -y }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y }}
				{...props}
			>
				{currentText}
			</motion.div>
		{/key}
	{/if}
</AnimatePresence>
