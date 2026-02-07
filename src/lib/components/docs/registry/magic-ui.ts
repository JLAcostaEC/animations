/**
 * Magic UI Component Registry
 *
 * Single source of truth for all Magic UI components.
 * Used for sidebar navigation and prev/next navigation.
 */

export type BadgeType = "New" | "Updated" | "Beta";

export interface MagicComponent {
  id: string;
  name: string;
  href: string;
  badge?: BadgeType;
  desc?: string;
}

/**
 * All Magic UI components
 * Add new components here as they are created
 */
export const magicUIComponents: MagicComponent[] = [
  {
    id: "animated-beam",
    name: "Animated Beam",
    href: "/magic/docs/components/animated-beam",
    badge: "New",
    desc: "An animated beam of light which travels along a path.",
  },
  {
    id: "animated-circular-progress-bar",
    name: "Animated Circular Progress Bar",
    href: "/magic/docs/components/animated-circular-progress-bar",
    badge: "New",
    desc: "A component that displays a circular gauge with a percentage value",
  },
  {
    id: "animated-gradient-text",
    name: "Animated Gradient Text",
    href: "/magic/docs/components/animated-gradient-text",
    desc:'An animated gradient background which transitions between colors for text.'
  },
  {
    id: "animated-grid-pattern",
    name: "Animated Grid Pattern",
    href: "/magic/docs/components/animated-grid-pattern",
    badge: "New",
    desc:'A animated background grid pattern made with SVGs, fully customizable using Tailwind CSS.'
  },
  {
    id: "animated-theme-toggler",
    name: "Animated Theme Toggler",
    href: "/magic/docs/components/animated-theme-toggler",
    badge: "New",
  },
  {
    id: "text-animate",
    name: "Text Animate",
    href: "/magic/docs/components/text-animate",
    badge: "New",
  },
  {
    id: "blur-fade",
    name: "Blur Fade",
    href: "/magic/docs/components/blur-fade",
    badge: "New",
  },
  {
    id: "border-beam",
    name: "Border Beam",
    href: "/magic/docs/components/border-beam",
    badge: "New",
  },
  {
    id: "cool-mode",
    name: "Cool Mode",
    href: "/magic/docs/components/cool-mode",
    badge: "New",
    desc: "Add a fun particle effect that follows mouse interactions, with support for emojis, images, and custom shapes.",
  },
  {
    id: "dot-pattern",
    name: "Dot Pattern",
    href: "/magic/docs/components/dot-pattern",
    badge: "New",
    desc: "A customizable dot pattern background component with optional glow animations and mask effects.",
  },
  {
    id: "file-tree",
    name: "File Tree",
    href: "/magic/docs/components/file-tree",
    badge: "New",
    desc: "A component for creating file tree views with folder and file icons.",
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


