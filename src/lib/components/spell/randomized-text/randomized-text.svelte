<script lang="ts">
	import { cn } from "$lib/utils";
	import { motion, type Variants } from "motion-sv";

	type RandomizedTextElement = "span" | "div" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

	type SplitType = "words" | "chars";

	type RandomizedToken =
		| {
				kind: "segment";
				id: string;
				content: string;
				index: number;
				delay: number;
		  }
		| {
				kind: "whitespace";
				id: string;
				value: string;
		  };

	type RandomizedTextProps = {
		content: string;
		class?: string;
		style?: string;
		as?: RandomizedTextElement;
		split?: SplitType;
		delay?: number;
		duration?: number;
		trigger?: boolean;
		triggerOnView?: boolean;
		once?: boolean;
	};

	let {
		content,
		class: className,
		style: styleAttribute,
		as = "span",
		split = "words",
		delay = 0.2,
		duration = 1.2,
		trigger = true,
		triggerOnView = false,
		once = true,
	}: RandomizedTextProps = $props();

	let MotionComponent = $derived(motion[as]);
	let element = $state<HTMLElement | null>(null);
	let isInView = $state(false);
	let hasEnteredView = $state(false);

	function splitIntoCharacters(value: string) {
		if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
			const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
			return Array.from(segmenter.segment(value), ({ segment }) => segment);
		}

		return Array.from(value);
	}

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

	function hashString(value: string, seed: number) {
		let hash = seed >>> 0;

		for (let index = 0; index < value.length; index += 1) {
			hash ^= value.charCodeAt(index);
			hash = Math.imul(hash, 16777619);
		}

		return hash >>> 0;
	}

	function normalizedHash(value: string, seed: number) {
		return hashString(value, seed) / 4294967295;
	}

	function createStableDelay(signature: string, baseDelay: number) {
		const primaryJitter = normalizedHash(signature, 2166136261) * 0.2;
		const secondaryJitter = normalizedHash(signature, 2654435761) * 0.03;

		return baseDelay + primaryJitter + secondaryJitter;
	}

	const expoOut = (time: number) => (time === 1 ? 1 : 1 - Math.pow(2, -10 * time));

	const safeDelay = $derived(Math.max(delay, 0));
	const safeDuration = $derived(Math.max(duration, 0.01));

	const parsedStyle = $derived(parseStyleAttribute(styleAttribute));
	const rootStyle = $derived.by(() => ({
		display: "inline-block",
		wordBreak: "break-word",
		...(parsedStyle ?? {}),
	}));

	const tokens = $derived.by<RandomizedToken[]>(() => {
		if (!content) {
			return [];
		}

		if (split === "chars") {
			return splitIntoCharacters(content).map((segment, index) => {
				if (/^\s+$/.test(segment)) {
					return {
						kind: "whitespace",
						id: `space-${index}`,
						value: segment,
					};
				}

				return {
					kind: "segment",
					id: `char-${index}`,
					content: segment,
					index,
					delay: createStableDelay(`chars:${index}:${segment}:${content}`, safeDelay),
				};
			});
		}

		const entries = content.match(/\S+|\s+/g) ?? [];
		let segmentIndex = 0;

		return entries.map((entry, index) => {
			if (/^\s+$/.test(entry)) {
				return {
					kind: "whitespace",
					id: `space-${index}`,
					value: entry,
				};
			}

			const token = {
				kind: "segment" as const,
				id: `word-${index}`,
				content: entry,
				index: segmentIndex,
				delay: createStableDelay(`words:${segmentIndex}:${entry}:${content}`, safeDelay),
			};

			segmentIndex += 1;

			return token;
		});
	});

	const containerVariants = $derived.by<Variants>(() => ({
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	}));

	const itemVariants = $derived.by<Variants>(() => ({
		hidden: { opacity: 0 },
		visible: (segmentDelay: number) => ({
			opacity: 1,
			transition: {
				duration: safeDuration,
				delay: segmentDelay,
				ease: expoOut,
			},
		}),
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
		trigger && (!triggerOnView || (once ? hasEnteredView : isInView))
	);
</script>

<MotionComponent
	bind:ref={element}
	class={cn("break-words whitespace-pre-wrap", className)}
	style={rootStyle}
	aria-label={content}
	initial="hidden"
	animate={shouldAnimate ? "visible" : "hidden"}
	exit="hidden"
	variants={containerVariants}
>
	{#each tokens as token (token.id)}
		{#if token.kind === "segment"}
			<motion.span
				aria-hidden="true"
				class={split === "words" ? "inline-block whitespace-pre" : "inline-block"}
				custom={token.delay}
				variants={itemVariants}
			>
				{token.content}
			</motion.span>
		{:else}
			<span aria-hidden="true" class="whitespace-pre-wrap">{token.value}</span>
		{/if}
	{/each}
</MotionComponent>
