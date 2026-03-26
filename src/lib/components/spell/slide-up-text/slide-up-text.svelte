<script lang="ts">
	import { cn } from '$lib/utils';
	import { motion, type AnimationOptions, type Variants } from 'motion-sv';
	import type { HTMLAttributes } from 'svelte/elements';

	type SplitMode = 'words' | 'characters' | 'lines';
	type StaggerFrom = 'first' | 'last' | 'center';

	type CharacterUnit = {
		value: string;
		index: number;
	};

	type RenderGroup = {
		characters: CharacterUnit[];
		needsSpace: boolean;
		spaceIndex?: number;
	};

	interface SlideUpTextProps extends HTMLAttributes<HTMLSpanElement> {
		text: string;
		split?: SplitMode;
		delay?: number;
		stagger?: number;
		from?: StaggerFrom;
		transition?: AnimationOptions;
		class?: string;
		wordClass?: string;
		charClass?: string;
		autoStart?: boolean;
		onStart?: () => void;
		onComplete?: () => void;
		inView?: boolean;
		once?: boolean;
	}

	const defaultTransition: AnimationOptions = {
		type: 'tween',
		ease: [0.625, 0.05, 0, 1],
		duration: 0.5
	};

	let {
		text,
		split = 'words',
		delay = 0,
		stagger = 0.1,
		from = 'first',
		transition = defaultTransition,
		class: className,
		wordClass,
		charClass,
		autoStart = true,
		onStart,
		onComplete,
		inView = false,
		once = true,
		...props
	}: SlideUpTextProps = $props();

	let element = $state<HTMLSpanElement | null>(null);
	let isAnimating = $state(false);
	let hasEnteredView = $state(false);
	let hasPlayedInView = false;

	function splitIntoCharacters(value: string) {
		if (typeof Intl !== 'undefined' && 'Segmenter' in Intl) {
			const segmenter = new Intl.Segmenter('en', { granularity: 'grapheme' });
			return Array.from(segmenter.segment(value), ({ segment }) => segment);
		}

		return Array.from(value);
	}

	const groups = $derived.by<RenderGroup[]>(() => {
		const entries = split === 'lines' ? text.split('\n') : text.split(' ');
		const renderGroups: RenderGroup[] = [];
		let cursor = 0;

		for (const [index, entry] of entries.entries()) {
			const characters =
				split === 'characters'
					? splitIntoCharacters(entry).map((value, characterIndex) => ({
							value,
							index: cursor + characterIndex
						}))
					: [{ value: entry, index: cursor }];

			cursor += characters.length;

			const needsSpace = split !== 'lines' && index !== entries.length - 1;
			const spaceIndex = needsSpace ? cursor : undefined;

			if (needsSpace) {
				cursor += 1;
			}

			renderGroups.push({
				characters,
				needsSpace,
				spaceIndex
			});
		}

		return renderGroups;
	});

	const totalUnits = $derived(
		groups.reduce((sum, group) => sum + group.characters.length + (group.needsSpace ? 1 : 0), 0)
	);

	function getStaggerDelay(index: number) {
		if (from === 'last') {
			return Math.max(0, totalUnits - 1 - index) * stagger;
		}

		if (from === 'center') {
			const center = Math.floor(totalUnits / 2);
			return Math.abs(center - index) * stagger;
		}

		return index * stagger;
	}

	const variants = $derived.by<Variants>(() => ({
		hidden: { y: '100%' },
		visible: (index: number) => ({
			y: 0,
			transition: {
				...transition,
				delay: delay + (typeof transition.delay === 'number' ? transition.delay : 0) + getStaggerDelay(index)
			}
		})
	}));

	function startInternalAnimation() {
		isAnimating = true;
		onStart?.();
	}

	export function startAnimation() {
		startInternalAnimation();
	}

	export function reset() {
		isAnimating = false;
	}

	$effect(() => {
		if (!autoStart || inView) {
			return;
		}

		startInternalAnimation();
	});

	$effect(() => {
		if (!inView || !element) {
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry) {
					return;
				}

				if (entry.isIntersecting) {
					if (once && hasPlayedInView) {
						return;
					}

					hasEnteredView = true;
					hasPlayedInView = true;
					startInternalAnimation();
				} else if (!once) {
					hasEnteredView = false;
					isAnimating = false;
				}
			},
			{ threshold: 0.2 }
		);

		observer.observe(element);

		return () => observer.disconnect();
	});

	const shouldAnimate = $derived(inView ? hasEnteredView && isAnimating : isAnimating);
</script>

<span
	bind:this={element}
	class={cn(
		'flex flex-wrap whitespace-pre-wrap',
		split === 'lines' && 'flex-col items-start',
		className
	)}
	{...props}
>
	<span class="sr-only">{text}</span>

	{#each groups as group, groupIndex (groupIndex)}
		<span
			aria-hidden="true"
			class={cn(split === 'lines' ? 'inline-flex overflow-hidden' : 'inline-flex overflow-hidden', wordClass)}
		>
			{#each group.characters as character, characterIndex (`${groupIndex}-${characterIndex}`)}
				<span class={cn('relative overflow-hidden whitespace-pre-wrap', charClass)}>
					<motion.span
						class="inline-block"
						initial="hidden"
						animate={shouldAnimate ? 'visible' : 'hidden'}
						custom={character.index}
						{variants}
						onAnimationComplete={(definition) => {
							if (
								definition === 'visible' &&
								shouldAnimate &&
								groupIndex === groups.length - 1 &&
								characterIndex === group.characters.length - 1 &&
								!group.needsSpace
							) {
								onComplete?.();
							}
						}}
					>
						{character.value}
					</motion.span>
				</span>
			{/each}

			{#if group.needsSpace}
				<span class="relative overflow-hidden whitespace-pre-wrap">
					<motion.span
						class="inline-block"
						initial="hidden"
						animate={shouldAnimate ? 'visible' : 'hidden'}
						custom={group.spaceIndex}
						{variants}
						onAnimationComplete={(definition) => {
							if (definition === 'visible' && shouldAnimate && groupIndex === groups.length - 1) {
								onComplete?.();
							}
						}}
					>
						{' '}
					</motion.span>
				</span>
			{/if}
		</span>
	{/each}
</span>
