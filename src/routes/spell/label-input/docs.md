# Label Input

A floating-label input with ring-color variants, password visibility toggle support, and sensible defaults for forms, auth screens, and settings pages.

## Installation

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/label-input.json
pnpm add tailwind-variants @lucide/svelte
```

## Usage

```svelte
<script lang="ts">
  import { LabelInput } from "$lib/components/spell/label-input";

  let email = $state("");
</script>

<LabelInput
  label="Email address"
  placeholder="hello@spell.dev"
  bind:value={email}
/>
```

## Password Mode

Set `type="password"` to enable the built-in show and hide button automatically.

```svelte
<LabelInput
  type="password"
  label="Password"
  placeholder="Create a password"
  ringColor="violet"
/>
```

## Notes

- The floating label stays visible even when the placeholder is hidden.
- `ringColor` lets you align the focus state with the rest of a form or brand palette.
- You can pass native input attributes like `name`, `autocomplete`, `required`, and `maxlength`.

## Props

| Prop                 | Type                                                                                     | Default      | Description                                                               |
| -------------------- | ---------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------- |
| `type`               | `"text" \| "email" \| "password" \| "search" \| "tel" \| "url" \| "number" \| "hidden"` | `"text"`     | Controls the input type and enables the password toggle in password mode. |
| `label`              | `string`                                                                                 | `""`         | The floating label text rendered inside the field container.              |
| `ringColor`          | `RingColor \| undefined`                                                                 | `"muted"`    | Selects the focus ring color variant for the input.                       |
| `value`              | `string \| number \| undefined`                                                          | `undefined`  | Controlled field value. Supports `bind:value`.                            |
| `placeholder`        | `string \| undefined`                                                                    | `""`         | Hidden by default and revealed during focus.                              |
| `containerClassName` | `string \| undefined`                                                                    | `undefined`  | Custom classes applied to the outer wrapper element.                      |
| `inputClassName`     | `string \| undefined`                                                                    | `undefined`  | Custom classes applied directly to the input element.                     |
| `disabled`           | `boolean \| undefined`                                                                   | `false`      | Disables typing, focus styles, and the password toggle button.            |
| `class`              | `string \| undefined`                                                                    | `undefined`  | Custom classes merged onto the wrapper root.                              |
