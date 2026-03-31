# Exploding Input

A particle input companion that launches squares, emoji, images, or custom snippets outward from the cursor as people type.

## Installation

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/exploding-input.json
```

## Usage

```svelte
<script lang="ts">
  import { ExplodingInput } from "$lib/components/spell/exploding-input";
</script>

<label class="block">
  <input
    type="text"
    placeholder="Type to launch particles"
    class="bg-background h-10 w-72 border-b p-0 text-base font-medium outline-none"
  />
  <ExplodingInput />
</label>
```

## Custom Particles

Pass `items` plus a `children` snippet when you want to render emoji, images, or custom components instead of the default square particles.

```svelte
<script lang="ts">
  import { ExplodingInput } from "$lib/components/spell/exploding-input";

  const emojis = ["\u{1F929}", "\u{1F47E}", "\u{1F63A}", "\u{1F47B}"];
</script>

<label class="block">
  <input
    type="text"
    class="bg-background h-10 w-72 border-b p-0 outline-none"
  />
  <ExplodingInput items={emojis} count={3}>
    {#snippet children(item)}
      <span class="text-4xl">{item}</span>
    {/snippet}
  </ExplodingInput>
</label>
```

## Shared Icon Example

You can also reuse an existing icon component from your project and render it as the particle payload.

```svelte
<script lang="ts">
  import SvelteIcon from "$lib/components/icons/svelte.svelte";
  import { ExplodingInput } from "$lib/components/spell/exploding-input";

  const iconBursts = ["h-7 w-7", "h-6 w-6", "h-8 w-8"];
</script>

<label class="block">
  <input
    type="text"
    class="bg-background h-10 w-80 border-b p-0 outline-none"
  />
  <ExplodingInput items={iconBursts} count={3} rotation={{ animate: true }}>
    {#snippet children(sizeClass)}
      <SvelteIcon class={sizeClass} />
    {/snippet}
  </ExplodingInput>
</label>
```

## Notes

- Wrap the input and `ExplodingInput` in the same `label` for the simplest setup.
- Use the `target` prop when you need to attach the effect to an input rendered elsewhere.
- Leave `items` empty if you want the component to emit its built-in rounded square particles.

## Props

| Prop        | Type                                                                                       | Default                                              | Description                                                             |
| ----------- | ------------------------------------------------------------------------------------------ | ---------------------------------------------------- | ----------------------------------------------------------------------- |
| `items`     | `T[]`                                                                                      | `[]`                                                 | The particle payloads to cycle through.                                 |
| `children`  | `Snippet<[T, number]> \| undefined`                                                        | `undefined`                                          | Optional snippet for rendering custom particle content.                 |
| `count`     | `number`                                                                                   | `1`                                                  | The number of particles spawned on each input event.                    |
| `direction` | `{ horizontal?: "left" \| "center" \| "right"; vertical?: "top" \| "center" \| "bottom" }` | `{ horizontal: "center", vertical: "top" }`          | Controls the general launch direction of each burst.                    |
| `gravity`   | `number`                                                                                   | `0.7`                                                | Adjusts the simulated pull on particles.                                |
| `duration`  | `number`                                                                                   | `3`                                                  | Sets particle lifetime in seconds.                                      |
| `scale`     | `{ value?: number; randomize?: boolean; randomVariation?: number }`                        | `{ value: 1, randomize: false, randomVariation: 0 }` | Defines the base particle scale and optional randomized size variation. |
| `rotation`  | `{ value?: number; animate?: boolean }`                                                    | `{ value: 0, animate: false }`                       | Sets a fixed rotation or enables randomized spin animation.             |
| `target`    | `HTMLInputElement \| null`                                                                 | `null`                                               | Optionally binds the effect to a specific input element.                |
| `class`     | `string \| undefined`                                                                      | `undefined`                                          | Custom classes merged onto the overlay root element.                    |
