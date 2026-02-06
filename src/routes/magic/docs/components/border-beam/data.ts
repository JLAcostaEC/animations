import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";
import BasicUsage from "./examples/border-beam-basic-usage.svelte";
import BasicUsageRaw from "./examples/border-beam-basic-usage.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
  id: "border-beam",
  title: "Border Beam",
  description: "A component for creating animated border beam effects around elements with customizable gradients, duration, and direction.",
  category: "animation",
  badge: "new",
};

const examples: Example[] = [
  {
    name: "Basic Usage",
    preview: BasicUsage,
    code: {
      filename: "border-beam-basic-usage.svelte",
      filecode: BasicUsageRaw,
      lang: "svelte",
    },
  },
  {
    name: "Preview",
    preview: Preview,
    code: {
      filename: "preview.svelte",
      filecode: PreviewCode,
      lang: "svelte",
    },
  },
];

const seo: SEO = {
  title: "Border Beam - SV5 Animations",
  description: "Learn how to create border beam effects in Svelte using the SV5 Animations library.",
  keywords: ["Svelte", "Border Beam", "SV5 Animations", "Animation", "Web Design"],
};

export const data: ComponentDoc = {
  ...meta,
  preview: Preview,
  previewCode: {
    filename: "border-beam.svelte",
    filecode: PreviewCode,
    lang: "svelte",
    hideLines: true,
    highlight: [2],
  },
  examples,
  seo,
  props: [
    {
      name: "BorderBeam",
      desc: "A component for creating animated border beam effects.",
      props: [
        { name: "size", type: "number", default: "50", description: "The size of the border beam in pixels" },
        { name: "duration", type: "number", default: "6", description: "The duration of the animation in seconds" },
        { name: "delay", type: "number", default: "0", description: "The delay before the animation starts in seconds" },
        { name: "colorFrom", type: "string", default: '"#ffaa40"', description: "The starting color of the gradient" },
        { name: "colorTo", type: "string", default: '"#9c40ff"', description: "The ending color of the gradient" },
        { name: "transition", type: "Transition", default: "undefined", description: "Custom motion transition configuration" },
        { name: "class", type: "string", default: "undefined", description: "Additional CSS classes to apply" },
        { name: "style", type: "string", default: "undefined", description: "Additional inline styles" },
        { name: "reverse", type: "boolean", default: "false", description: "Whether to reverse the animation direction" },
        { name: "initialOffset", type: "number", default: "0", description: "The initial offset position (0-100)" },
        { name: "borderWidth", type: "number", default: "1", description: "The border width of the beam in pixels" },
      ],
    },
  ],
  folderStructure: `src/
â””â”€â”€ lib/
    â””â”€â”€ components/
        â””â”€â”€ magic-ui/
            â””â”€â”€ border-beam/
                â””â”€â”€ border-beam.svelte`,
};
