export type ChangelogSectionTitle = "Added" | "Updated" | "Fixed" | "Examples";

export type ChangelogInline =
	| {
			type: "text";
			text: string;
	  }
	| {
			type: "link";
			text: string;
			href: string;
	  }
	| {
			type: "code";
			text: string;
	  };

export type ChangelogItem = {
	id: string;
	parts: ChangelogInline[];
};

export type ChangelogSection = {
	title: ChangelogSectionTitle;
	items: ChangelogItem[];
};

export type ChangelogEntry = {
	date: string;
	summary?: ChangelogInline[];
	sections: ChangelogSection[];
};

export const changelogEntries: ChangelogEntry[] = [
	{
		date: "2026-04-20",
		summary: [
			{
				type: "text",
				text: "The first changelog entry, seeded with the latest visible component and example updates.",
			},
		],
		sections: [
			{
				title: "Added",
				items: [
					{
						id: "fancy-media-between-text",
						parts: [
							{ type: "text", text: "Added " },
							{
								type: "link",
								text: "Media Between Text",
								href: "/fancy/media-between-text",
							},
							{
								type: "text",
								text: " to Fancy Components for image and video reveals between text fragments.",
							},
						],
					},
					{
						id: "spell-tilt-card",
						parts: [
							{ type: "text", text: "Added " },
							{ type: "link", text: "Tilt Card", href: "/spell/tilt-card" },
							{
								type: "text",
								text: " with cursor-reactive depth, scale, perspective, and spotlight controls.",
							},
						],
					},
					{
						id: "spell-fallback-avatar",
						parts: [
							{ type: "text", text: "Added " },
							{ type: "link", text: "Fallback Avatar", href: "/spell/fallback-avatar" },
							{
								type: "text",
								text: " with seeded canvas rendering and deterministic fallback visuals.",
							},
						],
					},
					{
						id: "spell-signature",
						parts: [
							{ type: "text", text: "Added " },
							{ type: "link", text: "Signature", href: "/spell/signature" },
							{
								type: "text",
								text: " for handwritten glyph path animation from font data.",
							},
						],
					},
					{
						id: "spell-gradient-wave-text",
						parts: [
							{ type: "text", text: "Added " },
							{
								type: "link",
								text: "Gradient Wave Text",
								href: "/spell/gradient-wave-text",
							},
							{
								type: "text",
								text: " with configurable flowing radial or linear gradient bands.",
							},
						],
					},
				],
			},
			{
				title: "Examples",
				items: [
					{
						id: "media-between-text-scroll-example",
						parts: [
							{ type: "text", text: "Added " },
							{ type: "code", text: "scroll-demo.svelte" },
							{
								type: "text",
								text: " for scroll-triggered Media Between Text reveals.",
							},
						],
					},
					{
						id: "media-between-text-open-close-example",
						parts: [
							{ type: "text", text: "Added " },
							{ type: "code", text: "open-close-trigger.svelte" },
							{
								type: "text",
								text: " for manually opening and closing the reveal.",
							},
						],
					},
					{
						id: "media-between-text-vertical-example",
						parts: [
							{ type: "text", text: "Added " },
							{ type: "code", text: "vertical-open.svelte" },
							{
								type: "text",
								text: " for vertical open and close animation behavior.",
							},
						],
					},
				],
			},
		],
	},
];
