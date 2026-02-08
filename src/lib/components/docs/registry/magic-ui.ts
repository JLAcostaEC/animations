export type BadgeType = "New" | "Updated" | "Beta";

export interface MagicComponent {
	id: string;
	name: string;
	href: string;
	badge?: BadgeType;
	desc?: string;
}

export const magicUIComponents: MagicComponent[] = [
	{
		id: "animated-beam",
		name: "Animated Beam",
		href: "/magic/docs/components/animated-beam",
		desc: "An animated beam of light which travels along a path.",
	},
	{
		id: "animated-circular-progress-bar",
		name: "Animated Circular Progress Bar",
		href: "/magic/docs/components/animated-circular-progress-bar",
		desc: "A component that displays a circular gauge with a percentage value",
	},
	{
		id: "animated-gradient-text",
		name: "Animated Gradient Text",
		href: "/magic/docs/components/animated-gradient-text",
		desc: "An animated gradient background which transitions between colors for text.",
	},
	{
		id: "animated-grid-pattern",
		name: "Animated Grid Pattern",
		href: "/magic/docs/components/animated-grid-pattern",
		desc: "A animated background grid pattern made with SVGs, fully customizable using Tailwind CSS.",
	},
	{
		id: "animated-theme-toggler",
		name: "Animated Theme Toggler",
		href: "/magic/docs/components/animated-theme-toggler",
		desc: "An Animated theme toggler component, fully customizable using Tailwind CSS.",
	},
	{
		id: "text-animate",
		name: "Text Animate",
		href: "/magic/docs/components/text-animate",
		desc: "A text animation component that animates text using a variety of different animations.",
	},
	{
		id: "blur-fade",
		name: "Blur Fade",
		href: "/magic/docs/components/blur-fade",
		desc: "Blur fade in and out animation. Used to smoothly fade in and out content.",
	},
	{
		id: "border-beam",
		name: "Border Beam",
		href: "/magic/docs/components/border-beam",
		desc: "An animated beam of light which travels along the border of its container.",
	},
	{
		id: "cool-mode",
		name: "Cool Mode",
		href: "/magic/docs/components/cool-mode",
		desc: "Add a fun particle effect that follows mouse interactions, with support for emojis, images, and custom shapes.",
	},
	{
		id: "dot-pattern",
		name: "Dot Pattern",
		href: "/magic/docs/components/dot-pattern",
		desc: "A customizable dot pattern background component with optional glow animations and mask effects.",
	},
	{
		id: "file-tree",
		name: "File Tree",
		href: "/magic/docs/components/file-tree",
		desc: "A component for creating file tree views with folder and file icons.",
	},
	{
		id: "dotted-map",
		name: "Dotted Map",
		href: "/magic/docs/components/dotted-map",
		desc: "A component for creating dotted map with custom dots and lines.",
	},
	{
		id: "shine-border",
		name: "Shine Border",
		href: "/magic/docs/components/shine-border",
		badge: "New",
		desc: "Shine border is an animated background border effect.",
	},
	{
		id: "marquee",
		name: "Marquee",
		href: "/magic/docs/components/marquee",
		badge: "New",
		desc: "An infinite scrolling component that can be used to display text, images, or videos.",
	},
	{
		id: "pixel-image",
		name: "Pixel Image",
		href: "/magic/docs/components/pixel-image",
		badge: "New",
		desc: "A component that displays your image with a pixelated effect, enhancing the visual appeal of any image in your website.",
	},
	{
		id: "striped-pattern",
		name: "Striped Pattern",
		href: "/magic/docs/components/striped-pattern",
		badge: "New",
		desc: "A background striped pattern made with SVGs, fully customizable using Tailwind CSS.",
	},
];

/**
 * Get prev/next components for navigation
 */
export function getPrevNext(currentId: string) {
	const index = magicUIComponents.findIndex((c) => c.id === currentId);
	return {
		prev: index > 0 ? magicUIComponents[index - 1] : null,
		next: index < magicUIComponents.length - 1 ? magicUIComponents[index + 1] : null,
	};
}

/**
 * Get component by ID
 */
export function getComponentById(id: string) {
	return magicUIComponents.find((c) => c.id === id) ?? null;
}
