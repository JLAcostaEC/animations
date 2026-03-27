# KBD

A tactile keyboard shortcut keycap for docs, commands, and menus, with optional live keyboard listening.

## Installation

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/kbd.json
```

## Usage

```svelte
<script lang="ts">
  import { KBD } from "$lib/components/spell/kbd";
</script>

<div class="flex items-center gap-2 text-sm">
  <span>Open command menu</span>
  <KBD keys={["cmd", "k"]} />
</div>
```

## Live Keyboard Listening

Set `listenToKeyboard` to highlight the keycap while the shortcut is actively pressed.

```svelte
<script lang="ts">
  import { KBD } from "$lib/components/spell/kbd";
</script>

<KBD keys={[{ display: "⌘", key: "meta" }, "shift", "p"]} listenToKeyboard />
```

## Key Display Mapping

Common labels are automatically converted to symbols:

- `cmd` or `command` -> `⌘`
- `ctrl` or `control` -> `⌃`
- `alt` or `option` -> `⌥`
- `space` -> `␣`
- `left`, `right`, `up`, `down` -> arrow symbols

## Props

| Prop               | Type                                             | Default     | Description                                                                              |
| ------------------ | ------------------------------------------------ | ----------- | ---------------------------------------------------------------------------------------- |
| `keys`             | `(string \| { display: string; key: string })[]` | `[]`        | Defines the rendered shortcut sequence. Object items separate display from key matching. |
| `active`           | `boolean`                                        | `false`     | Forces the pressed visual state without listening for keyboard input.                    |
| `listenToKeyboard` | `boolean`                                        | `false`     | Listens for matching pressed keys and toggles the active state automatically.            |
| `class`            | `string \| undefined`                            | `undefined` | Custom classes merged onto the root `kbd` element.                                       |
