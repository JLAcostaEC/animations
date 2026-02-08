# Avatar Circles

A component that displays user avatars in a stacked, overlapping circle layout. Perfect for showing team members, contributors, or any group of users with an optional count badge.

## Installation

```bash
npx shadcn-svelte@latest add https://animations.sikandarjodd.dev/r/avatar-circles.json
```

## Usage

```svelte
<script lang="ts">
  import { AvatarCircles } from "$lib/components/magic-ui/avatar-circles";

  const avatars = [
    {
      imageUrl: "https://avatars.githubusercontent.com/u/16860528",
      profileUrl: "https://github.com/dillionverma",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/20110627",
      profileUrl: "https://github.com/tomonarifeehan",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/106103625",
      profileUrl: "https://github.com/BankkRoll",
    },
  ];
</script>

<AvatarCircles avatarUrls={avatars} />
```

## Props

| Prop         | Type       | Default     | Description                                                         |
| ------------ | ---------- | ----------- | ------------------------------------------------------------------- |
| `avatarUrls` | `Avatar[]` | required    | Array of avatar objects with `imageUrl` and `profileUrl` properties |
| `numPeople`  | `number`   | `undefined` | Optional number to display in the count badge (e.g., +99)           |
| `class`      | `string`   | `""`        | Additional CSS classes to apply                                     |

### Avatar Type

```typescript
interface Avatar {
  imageUrl: string;
  profileUrl: string;
}
```

## Examples

### Basic Usage

Display a simple stack of avatar circles.

```svelte
<script lang="ts">
  import { AvatarCircles } from "$lib/components/magic-ui/avatar-circles";

  const avatars = [
    {
      imageUrl: "https://avatars.githubusercontent.com/u/16860528",
      profileUrl: "https://github.com/dillionverma",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/20110627",
      profileUrl: "https://github.com/tomonarifeehan",
    },
  ];
</script>

<AvatarCircles avatarUrls={avatars} />
```

### With Count Badge

Add a count badge to show additional members not displayed.

```svelte
<script lang="ts">
  import { AvatarCircles } from "$lib/components/magic-ui/avatar-circles";

  const avatars = [
    {
      imageUrl: "https://avatars.githubusercontent.com/u/16860528",
      profileUrl: "https://github.com/dillionverma",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/20110627",
      profileUrl: "https://github.com/tomonarifeehan",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/106103625",
      profileUrl: "https://github.com/BankkRoll",
    },
  ];
</script>

<AvatarCircles numPeople={99} avatarUrls={avatars} />
```
