# QRCode

A rounded QR code renderer for spell-style cards, tickets, and landing pages, with circular modules and stylized finder patterns.

## Installation

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/qrcode.json
```

Install the required package:

```bash
pnpm add qrcode
```

## Usage

```svelte
<script lang="ts">
  import { QRCode } from "$lib/components/spell/qrcode";
</script>

<QRCode value="https://sv-animations.vercel.app/spell" size={180} />
```

## Custom Styling

Override the foreground, background, and error correction level to fit the surface you're designing for.

```svelte
<script lang="ts">
  import { QRCode } from "$lib/components/spell/qrcode";
</script>

<QRCode
  value="https://example.com/invite"
  size={220}
  fgColor="#0f172a"
  bgColor="#f8fafc"
  errorCorrectionLevel="H"
  class="rounded-3xl"
/>
```

## Notes

- Invalid or empty input returns no SVG output instead of a broken placeholder.
- The component renders SVG, which makes it easy to scale sharply in cards and print layouts.
- Finder patterns are styled separately from the circular module dots for a more designed look.

## Props

| Prop                   | Type                       | Default               | Description                                                         |
| ---------------------- | -------------------------- | --------------------- | ------------------------------------------------------------------- |
| `value`                | `string`                   | required              | The encoded text or URL used to generate the QR code.               |
| `size`                 | `number`                   | `268`                 | Controls the rendered width and height of the SVG in pixels.        |
| `fgColor`              | `string`                   | `"var(--foreground)"` | Sets the foreground color used for the modules and finder patterns. |
| `bgColor`              | `string`                   | `"var(--background)"` | Sets the background color of the QR surface.                        |
| `errorCorrectionLevel` | `"L" \| "M" \| "Q" \| "H"` | `"M"`                 | Controls the QR error correction level passed to the generator.     |
| `class`                | `string \| undefined`      | `undefined`           | Custom classes merged onto the root SVG element.                    |
