import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
  id: "animated-theme-toggler",
  title: "Animated Theme Toggler",
  description: "A smooth animated theme toggler that uses the View Transition API to create a circular reveal effect when switching between light and dark themes.",
  category: "animation",
  badge: "new",
};


const seo: SEO = {
  title: "Animated Theme Toggler - SV5 Animations",
  description: "Learn how to create smooth theme switching effects in Svelte using the SV5 Animations library with View Transition API.",
  keywords: ["Svelte", "Animated Theme Toggler", "SV5 Animations", "Animation", "Web Design", "View Transition API"],
};

export const data: ComponentDoc = {
  ...meta,
  preview: Preview,
  previewCode: {
    filename: "animated-theme-toggler.svelte",
    filecode: PreviewCode,
    lang: "svelte",
    hideLines: true,
    highlight: [2],
  },
  seo,
  props: [
    {
      name: "AnimatedThemeToggler",
      desc: "A component for smooth theme switching with circular reveal animation.",
      props: [
        { name: "class", type: "string", default: '""', description: "Additional CSS classes to apply" },
        { name: "duration", type: "number", default: "400", description: "Duration of the animation in milliseconds" },
      ],
    },
  ],
  folderStructure: `
animated-theme-toggler/
├── animated-theme-toggler.svelte
└── index.ts
`,
};
