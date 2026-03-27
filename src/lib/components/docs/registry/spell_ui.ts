export type SpellBadgeType = "Beta" | "New" | "Updated";

export type SpellCategory = "Overview" | "Components" | "Text Animations" | "Inputs" | "Spinner";

export interface SpellComponent {
	id: string;
	name: string;
	href: string;
	category: SpellCategory;
	desc?: string;
	badge?: SpellBadgeType;
}

export const spellUIComponents: SpellComponent[] = [
	{
		id: "overview",
		name: "Overview",
		href: "/spell",
		category: "Overview",
		desc: "Browse spell-style animation components and starter docs.",
	},
	{
		id: "perspective-book",
		name: "Perspective Book",
		href: "/spell/perspective-book",
		category: "Components",
		desc: "A 3D book-cover wrapper with hover depth and optional texture.",
	},
	{
		id: "badge",
		name: "Badge",
		href: "/spell/badge",
		category: "Components",
		desc: "A compact pill badge with multi-color variants, optional link mode, and size presets.",
		badge: "New",
	},
	{
		id: "kbd",
		name: "KBD",
		href: "/spell/kbd",
		category: "Components",
		desc: "A tactile keyboard shortcut keycap with optional live keyboard listening.",
		badge: "New",
	},
	{
		id: "marquee",
		name: "Marquee",
		href: "/spell/marquee",
		category: "Text Animations",
		desc: "A reusable horizontal or vertical marquee with optional fade edges and hover pause.",
		badge: "New",
	},
	{
		id: "spotify-card",
		name: "Spotify Card",
		href: "/spell/spotify-card",
		category: "Components",
		desc: "A Spotify preview card with blurred artwork, playback controls, and server-fetched metadata.",
		badge: "New",
	},
	{
		id: "qrcode",
		name: "QRCode",
		href: "/spell/qrcode",
		category: "Components",
		desc: "A rounded QR code renderer with circular modules and stylized finder patterns.",
		badge: "New",
	},
	{
		id: "text-marquee",
		name: "Text Marquee",
		href: "/spell/text-marquee",
		category: "Text Animations",
		desc: "A vertical text rotator with snippet-based prefix and row composition.",
	},
	{
		id: "blur-reveal",
		name: "Blur Reveal",
		href: "/spell/blur-reveal",
		category: "Text Animations",
		desc: "A text-only blur and stagger reveal for hero copy, headings, and announcements.",
	},
	{
		id: "words-stagger",
		name: "Words Stagger",
		href: "/spell/words-stagger",
		category: "Text Animations",
		desc: "A word-by-word blur and lift reveal for hero copy, launch messaging, and editorial headings.",
	},
	{
		id: "randomized-text",
		name: "Randomized Text",
		href: "/spell/randomized-text",
		category: "Text Animations",
		desc: "A stable randomized text reveal for hero copy, labels, and editorial callouts.",
	},
	{
		id: "expanded-input",
		name: "Expanded Input",
		href: "/spell/expanded-input",
		category: "Inputs",
		desc: "A particle input companion that explodes emoji or custom items as you type.",
		badge: "Beta",
	},
];

const spellUICategoryOrder: SpellCategory[] = [
	"Overview",
	"Components",
	"Text Animations",
	"Inputs",
	"Spinner",
];

export const spellUISidebarGroups = spellUICategoryOrder
	.map((title) => ({
		title,
		items: spellUIComponents.filter((item) => item.category === title),
	}))
	.filter((group) => group.items.length > 0);

export function getPrevNext(currentId: string) {
	const index = spellUIComponents.findIndex((component) => component.id === currentId);

	return {
		prev: index > 0 ? spellUIComponents[index - 1] : null,
		next: index < spellUIComponents.length - 1 ? spellUIComponents[index + 1] : null,
	};
}
