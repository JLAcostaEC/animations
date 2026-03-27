<script lang="ts">
	import { cn } from "$lib/utils";
	import { motion, type Variants } from "motion-sv";

	type WordsStaggerElement = "span" | "div" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

	type WordsStaggerProps = {
		content: string;
		class?: string;
		style?: string;
		as?: WordsStaggerElement;
		delay?: number;
		stagger?: number;
		speed?: number;
		trigger?: boolean;
		triggerOnView?: boolean;
		once?: boolean;
		onStart?: () => void;
		onComplete?: () => void;
	};

	let {
		content,
		class: className,
		style: styleAttribute,
		as = "div",
		delay = 0,
		stagger = 0.1,
		speed = 0.5,
		trigger = true,
		triggerOnView = false,
		once = true,
		onStart,
		onComplete,
	}: WordsStaggerProps = $props();

	let MotionComponent = $derived(motion[as]);
	let element = $state<HTMLElement | null>(null);
	let isInView = $state(false);
	let hasEnteredView = $state(false);
	let animationCycle = $state(0);
	let completedCycle = $state(0);

	let previousShouldAnimate = false;

	function normalizeStyleName(property: string) {
		if (property.startsWith("--")) {
			return property;
		}

		return property.replace(/-([a-z])/g, (_, character: string) => character.toUpperCase());
	}

	function parseStyleAttribute(styleValue?: string) {
		if (!styleValue) {
			return undefined;
		}

		const entries = styleValue
			.split(";")
			.map((declaration) => declaration.trim())
			.filter(Boolean)
			.flatMap((declaration) => {
				const separatorIndex = declaration.indexOf(":");

				if (separatorIndex === -1) {
					return [];
				}

				const property = declaration.slice(0, separatorIndex).trim();
				const value = declaration.slice(separatorIndex + 1).trim();

				if (!property || !value) {
					return [];
				}

				return [[normalizeStyleName(property), value] as const];
			});

		return entries.length > 0 ? Object.fromEntries(entries) : undefined;
	}

	const safeDelay = $derived(Math.max(delay, 0));
	const safeStagger = $derived(Math.max(stagger, 0));
	const safeSpeed = $derived(Math.max(speed, 0.01));
	const rootStyle = $derived(parseStyleAttribute(styleAttribute));

	const normalizedContent = $derived.by(() =>
		content.trim().split(/\s+/).filter(Boolean).join(" ")
	);

	const words = $derived.by(() => (normalizedContent ? normalizedContent.split(" ") : []));
	const lastWordIndex = $derived(words.length - 1);

	const transition = $derived.by(() => ({
		type: "tween" as const,
		ease: "easeOut" as const,
		duration: safeSpeed,
	}));

	const containerVariants = $derived.by<Variants>(() => ({
		hidden: {},
		visible: {
			transition: {
				delayChildren: safeDelay,
				staggerChildren: safeStagger,
			},
		},
	}));

	const wordVariants = $derived.by<Variants>(() => ({
		hidden: {
			opacity: 0,
			y: 10,
			filter: "blur(10px)",
			transition,
		},
		visible: {
			opacity: 1,
			y: 0,
			filter: "blur(0px)",
			transition,
		},
	}));

	$effect(() => {
		if (!triggerOnView || !element) {
			isInView = false;
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry) {
					return;
				}

				if (entry.isIntersecting) {
					isInView = true;
					hasEnteredView = true;
				} else if (!once) {
					isInView = false;
				}
			},
			{ threshold: 0.2 }
		);

		observer.observe(element);

		return () => observer.disconnect();
	});

	const shouldAnimate = $derived(
		words.length > 0 && trigger && (!triggerOnView || (once ? hasEnteredView : isInView))
	);

	$effect(() => {
		if (shouldAnimate && !previousShouldAnimate) {
			animationCycle += 1;
			completedCycle = 0;
			onStart?.();
		}

		previousShouldAnimate = shouldAnimate;
	});

	function handleWordComplete(definition: unknown, wordIndex: number) {
		if (definition !== "visible" || !shouldAnimate || wordIndex !== lastWordIndex) {
			return;
		}

		if (completedCycle === animationCycle) {
			return;
		}

		completedCycle = animationCycle;
		onComplete?.();
	}
</script>

<MotionComponent
	bind:ref={element}
	class={cn("flex flex-wrap", className)}
	style={rootStyle}
	initial="hidden"
	animate={shouldAnimate ? "visible" : "hidden"}
	exit="hidden"
	variants={containerVariants}
>
	<span class="sr-only">{normalizedContent}</span>

	{#each words as word, index (`${word}-${index}`)}
		<motion.span
			class="inline-block"
			aria-hidden="true"
			variants={wordVariants}
			onAnimationComplete={(definition) => handleWordComplete(definition, index)}
		>
			{word}
			{#if index < words.length - 1}
				<span class="inline-block">&nbsp;</span>
			{/if}
		</motion.span>
	{/each}
</MotionComponent>
