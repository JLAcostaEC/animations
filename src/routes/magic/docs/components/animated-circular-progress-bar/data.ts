import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
  id: "animated-circular-progress-bar",
  title: "Animated Circular Progress Bar",
  description: "A circular progress bar component with animated transitions between primary and secondary colors.",
  category: "animation",
  badge: "new",
};


const seo: SEO = {
  title: "Animated Circular Progress Bar - SV5 Animations",
  description: "Learn how to create animated circular progress bar effects in Svelte using the SV5 Animations library.",
  keywords: ["Svelte", "Animated Circular Progress Bar", "SV5 Animations", "Animation", "Web Design"],
};

export const data: ComponentDoc = {
  ...meta,
  preview: Preview,
  previewCode: {
    filename: "animated-circular-progress-bar.svelte",
    filecode: PreviewCode,
    lang: "svelte",
    hideLines: true,
    highlight: [2],
  },
  seo,
  props: [
    {
      name: "AnimatedCircularProgressBar",
      desc: "A component for displaying animated circular progress.",
      props: [
        { name: "max", type: "number", default: "100", description: "The maximum value for the progress bar" },
        { name: "min", type: "number", default: "0", description: "The minimum value for the progress bar" },
        { name: "value", type: "number", default: "0", description: "The current value of the progress bar" },
        { name: "gaugePrimaryColor", type: "string", required: true, description: "The color for the progress portion of the bar" },
        { name: "gaugeSecondaryColor", type: "string", required: true, description: "The color for the remaining portion of the bar" },
        { name: "class", type: "string", default: '""', description: "Additional CSS classes to apply" },
      ],
    },
  ],
  folderStructure: `
animated-circular-progress-bar/
├── animated-circular-progress-bar.svelte
└── index.ts
`,
};
