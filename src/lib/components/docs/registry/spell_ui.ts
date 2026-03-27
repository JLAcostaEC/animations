export interface SpellComponent {
	id: string;
	name: string;
	href: string;
	desc?: string;
}

export const spellUIComponents: SpellComponent[] = [
	{
		id: "overview",
		name: "Overview",
		href: "/spell",
		desc: "Browse spell-style animation components and starter docs.",
	},
	{
		id: "perspective-book",
		name: "Perspective Book",
		href: "/spell/perspective-book",
		desc: "A 3D book-cover wrapper with hover depth and optional texture.",
	},
	{
		id: "text-marquee",
		name: "Text Marquee",
		href: "/spell/text-marquee",
		desc: "A vertical text rotator with snippet-based prefix and row composition.",
	},
	{
		id: "blur-reveal",
		name: "Blur Reveal",
		href: "/spell/blur-reveal",
		desc: "A text-only blur and stagger reveal for hero copy, headings, and announcements.",
	},
	{
		id: "randomized-text",
		name: "Randomized Text",
		href: "/spell/randomized-text",
		desc: "A stable randomized text reveal for hero copy, labels, and editorial callouts.",
	},
];

export function getPrevNext(currentId: string) {
	const index = spellUIComponents.findIndex((component) => component.id === currentId);

	return {
		prev: index > 0 ? spellUIComponents[index - 1] : null,
		next: index < spellUIComponents.length - 1 ? spellUIComponents[index + 1] : null,
	};
}
