# Animated Checkbox

A motion-driven checkbox row with animated checkmark drawing and a title strike-through for task lists, onboarding steps, and lightweight toggles.

## Installation

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/animated-checkbox.json
pnpm add motion-sv
```

## Usage

```svelte
<script lang="ts">
  import { AnimatedCheckbox } from "$lib/components/spell/animated-checkbox";

  let checked = $state(false);
</script>

<AnimatedCheckbox
  title="Ship the release notes"
  {checked}
  onCheckedChange={(value) => (checked = value)}
/>
```

## Checklist Groups

Use controlled state when you want to manage multiple items from a parent component.

```svelte
<script lang="ts">
  import { AnimatedCheckbox } from "$lib/components/spell/animated-checkbox";

  let tasks = $state([
    { title: "Write docs", checked: true },
    { title: "Record demo", checked: false },
  ]);
</script>
```

## Notes

- The checkmark path and strike-through line both animate with `motion-sv`.
- Use `checked` plus `onCheckedChange` when the state needs to stay in sync with stores or forms.
- Use `defaultChecked` for simple uncontrolled toggles.

## Props

| Prop              | Type                                        | Default                | Description                                           |
| ----------------- | ------------------------------------------- | ---------------------- | ----------------------------------------------------- |
| `title`           | `string`                                    | `"Implement Checkbox"` | The label shown next to the animated check indicator. |
| `checked`         | `boolean \| undefined`                      | `undefined`            | Controlled checked state.                             |
| `defaultChecked`  | `boolean`                                   | `false`                | Initial checked state for uncontrolled usage.         |
| `onCheckedChange` | `((checked: boolean) => void) \| undefined` | `undefined`            | Callback fired whenever the checkbox toggles.         |
| `class`           | `string \| undefined`                       | `undefined`            | Custom classes merged onto the button root.           |
