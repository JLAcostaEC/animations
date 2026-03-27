export interface SpellComponent {
	id: string;
	name: string;
	href: string;
	desc?: string;
	badge?: "Beta" | "New" | "Updated";
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
		id: "words-stagger",
		name: "Words Stagger",
		href: "/spell/words-stagger",
		desc: "A word-by-word blur and lift reveal for hero copy, launch messaging, and editorial headings.",
	},
	{
		id: "randomized-text",
		name: "Randomized Text",
		href: "/spell/randomized-text",
		desc: "A stable randomized text reveal for hero copy, labels, and editorial callouts.",
	},
	{
		id: "expanded-input",
		name: "Expanded Input",
		href: "/spell/expanded-input",
		desc: "A particle input companion that explodes emoji or custom items as you type.",
		badge: "Beta",
	},
];

export function getPrevNext(currentId: string) {
	const index = spellUIComponents.findIndex((component) => component.id === currentId);

	return {
		prev: index > 0 ? spellUIComponents[index - 1] : null,
		next: index < spellUIComponents.length - 1 ? spellUIComponents[index + 1] : null,
	};
}
