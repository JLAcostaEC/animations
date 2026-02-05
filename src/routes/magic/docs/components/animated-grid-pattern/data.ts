import type { CodeBlock } from "$lib/components/ui/code";
import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";
import Example1 from "./examples/animated-grid-pattern-example-1.svelte";
import Example1Raw from "./examples/animated-grid-pattern-example-1.svelte?raw";
import Example2 from "./examples/animated-grid-pattern-example-2.svelte";
import Example2Raw from "./examples/animated-grid-pattern-example-2.svelte?raw";
import Example3 from "./examples/animated-grid-pattern-example-3.svelte";
import Example3Raw from "./examples/animated-grid-pattern-example-3.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
  id: "animated-grid-pattern",
  title: "",
  description: "A description for  component.",
  category: "animation",
  badge: "new",
};

const examples: Example[] = [
  {
    name: "Example 1",
    preview: Example1,
    code: {
      filename: "animated-grid-pattern-example-1.svelte",
      filecode: Example1Raw,
      lang: "svelte",
    },
  },
  {
    name: "Example 2",
    preview: Example2,
    code: {
      filename: "animated-grid-pattern-example-2.svelte",
      filecode: Example2Raw,
      lang: "svelte",
    },
  },
  {
    name: "Example 3",
    preview: Example3,
    code: {
      filename: "animated-grid-pattern-example-3.svelte",
      filecode: Example3Raw,
      lang: "svelte",
    },
  },
];

const seo: SEO = {
  title: " - SV5 Animations",
  description: "Learn how to create  effects in Svelte using the SV5 Animations library.",
  keywords: ["Svelte", "", "SV5 Animations", "Animation", "Web Design"],
};

export const data: ComponentDoc = {
  ...meta,
  preview: Preview,
  previewCode: {
    filename: "animated-grid-pattern.svelte",
    filecode: PreviewCode,
    lang: "svelte",
    hideLines: true,
    highlight: [2],
  },
  examples,
  seo,
  props: [
    {
      name: "",
      desc: "A component for .",
      props: [
        { name: "class", type: "string", default: '""', description: "Additional CSS classes to apply" },
      ],
    },
  ],
  folderStructure: `src/
â””â”€â”€ lib/
    â””â”€â”€ components/
        â””â”€â”€ magic-ui/
            â””â”€â”€ animated-grid-pattern/
                â””â”€â”€ animated-grid-pattern.svelte`,
};
