<script lang="ts">
	import { onMount } from "svelte";
	import RotatingText from "./rotating-text.svelte";
	import { setRotatingTextContext } from "./use-rotating-text-context.svelte";
	import type { RotatingTextContainerProps } from "./types";

	let {
		ref = $bindable(null),
		content,
		y = -50,
		duration = 2000,
		delay = 0,
		inView = false,
		inViewMargin = "0px",
		inViewOnce = true,
		textProps = {},
		style,
		...props
	}: RotatingTextContainerProps = $props();

	let index = $state(0);
	let localIsInView = $state(false);

	const isInView = $derived(!inView || localIsInView);

	const currentText = $derived.by(() => {
		if (!Array.isArray(content)) return content;
		if (content.length === 0) return "";
		return content[index] ?? content[0] ?? "";
	});

	$effect(() => {
		if (!Array.isArray(content) || content.length === 0) return;
		if (index < content.length) return;
		index = 0;
	});

	onMount(() => {
		if (!inView) {
			localIsInView = true;
			return;
		}

		if (!ref) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry) return;

				if (entry.isIntersecting) {
					localIsInView = true;
					if (inViewOnce) observer.disconnect();
					return;
				}

				if (!inViewOnce) localIsInView = false;
			},
			{
				threshold: 0.1,
				rootMargin: inViewMargin,
			}
		);

		observer.observe(ref);

		return () => observer.disconnect();
	});

	$effect(() => {
		if (!Array.isArray(content)) return;
		if (content.length <= 1) return;
		if (inView && !isInView) return;

		let intervalId: ReturnType<typeof setInterval> | undefined;

		const timeoutId = setTimeout(() => {
			index = (index + 1) % content.length;
			intervalId = setInterval(() => {
				index = (index + 1) % content.length;
			}, duration);
		}, delay);

		return () => {
			clearTimeout(timeoutId);
			if (intervalId) clearInterval(intervalId);
		};
	});

	setRotatingTextContext({
		get currentText() {
			return currentText;
		},
		get y() {
			return y;
		},
		get isInView() {
			return isInView;
		},
	});

	const mergedStyle = $derived(
		`overflow: hidden; padding-block: 0.25rem; ${typeof style === "string" ? style : ""}`
	);
</script>

<div bind:this={ref} style={mergedStyle} {...props}>
	<RotatingText {...textProps} />
</div>
