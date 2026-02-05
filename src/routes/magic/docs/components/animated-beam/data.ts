import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta } from "$lib/types/structure";
import AnimatedBeamBasicUsage from "./examples/animated-beam-basic-usage.svelte";
import AnimatedBeamBasicUsageRaw from "./examples/animated-beam-basic-usage.svelte?raw";
import AnimatedBeamWithCurvature from "./examples/animated-beam-with-curvature.svelte";
import AnimatedBeamWithCurvatureRaw from "./examples/animated-beam-with-curvature.svelte?raw";
import AnimatedBeamReverseDirection from "./examples/animated-beam-reverse-direction.svelte";
import AnimatedBeamReverseDirectionRaw from "./examples/animated-beam-reverse-direction.svelte?raw";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
  id: "animated-beam",
  title: "Animated Beam",
  description: "A component for creating animated beam effects between two elements with customizable gradients and paths.",
  category: "animation",
  badge: "new",
};

const examples: Example[] = [
  {
    name: "Basic Usage",
    preview: AnimatedBeamBasicUsage,
    code: {
      filename: "animated-beam-basic-usage.svelte",
      filecode: AnimatedBeamBasicUsageRaw,
      lang: "svelte",
    },
  },
  {
    name: "With Curvature",
    preview: AnimatedBeamWithCurvature,
    code: {
      filename: "animated-beam-with-curvature.svelte",
      filecode: AnimatedBeamWithCurvatureRaw,
      lang: "svelte",
    },
  },
  {
    name: "Reverse Direction",
    preview: AnimatedBeamReverseDirection,
    code: {
      filename: "animated-beam-reverse-direction.svelte",
      filecode: AnimatedBeamReverseDirectionRaw,
      lang: "svelte",
    },
  },
];

const seo: SEO = {
  title: "Animated Beam - SV5 Animations",
  description: "Learn how to create animated beam effects in Svelte using the SV5 Animations library.",
  keywords: ["Svelte", "Animated Beam", "SV5 Animations", "Animation", "Web Design"],
};

export const data: ComponentDoc = {
  ...meta,
  preview: Preview,
  previewCode: {
    filename: "animated-beam.svelte",
    filecode: PreviewCode,
    lang: "svelte",
    hideLines: true,
    highlight: [2],
  },
  examples,
  seo,
  props: [
    {
      name: "Animated Beam",
      desc: "A component for creating animated beam effects between elements.",
      props: [
        { name: "class", type: "string", default: '""', description: "Additional CSS classes to apply" },
        { name: "containerRef", type: "HTMLElement | null", default: "null", description: "Reference to the container element" },
        { name: "fromRef", type: "HTMLElement | null", default: "null", description: "Reference to the starting element" },
        { name: "toRef", type: "HTMLElement | null", default: "null", description: "Reference to the ending element" },
        { name: "curvature", type: "number", default: "0", description: "Curvature of the beam path" },
        { name: "reverse", type: "boolean", default: "false", description: "Reverse the animation direction" },
        { name: "duration", type: "number", default: "Math.random() * 3 + 4", description: "Duration of the animation in seconds" },
        { name: "delay", type: "number", default: "0", description: "Delay before animation starts" },
        { name: "pathColor", type: "string", default: '"gray"', description: "Color of the beam path" },
        { name: "pathWidth", type: "number", default: "2", description: "Width of the beam path" },
        { name: "pathOpacity", type: "number", default: "0.2", description: "Opacity of the beam path" },
        { name: "gradientStartColor", type: "string", default: '"#ffaa40"', description: "Starting color of the gradient" },
        { name: "gradientStopColor", type: "string", default: '"#9c40ff"', description: "Ending color of the gradient" },
        { name: "startXOffset", type: "number", default: "0", description: "X offset for the start position" },
        { name: "startYOffset", type: "number", default: "0", description: "Y offset for the start position" },
        { name: "endXOffset", type: "number", default: "0", description: "X offset for the end position" },
        { name: "endYOffset", type: "number", default: "0", description: "Y offset for the end position" },
      ],
    },
  ],
  folderStructure: `src/
â””â”€â”€ lib/
    â””â”€â”€ components/
        â””â”€â”€ magic-ui/
            â””â”€â”€ animated-beam/
                â””â”€â”€ animated-beam.svelte`,
};
