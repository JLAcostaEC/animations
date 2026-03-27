# Spotify Card

A Spotify preview card for spell-style media sections, with blurred artwork, optional audio preview playback, and server-fetched metadata.

## Installation

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/spotify-card.json
```

Install the required package:

```bash
pnpm add spotify-url-info
```

## Required API Route

This component fetches metadata from `/api/spotify`, so you also need the helper route below in your app.

```ts
// src/routes/api/spotify/+server.ts
import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import spotifyUrlInfo, { type Preview } from "spotify-url-info";
```

Use the full server file from the docs install block or registry install output.

## Usage

```svelte
<script lang="ts">
  import { SpotifyCard } from "$lib/components/spell/spotify-card";
</script>

<div class="max-w-sm">
  <SpotifyCard url="https://open.spotify.com/track/3n3Ppam7vgaVa1iaRUc9Lp" />
</div>
```

## Notes

- Preview audio is optional and depends on what Spotify exposes for the selected URL.
- The component renders a loading skeleton while the API request is in flight.
- If the request fails, it falls back to an error state instead of rendering partial metadata.

## Props

| Prop    | Type                  | Default     | Description                                                 |
| ------- | --------------------- | ----------- | ----------------------------------------------------------- |
| `url`   | `string`              | required    | The Spotify URL sent to the API route for preview metadata. |
| `class` | `string \| undefined` | `undefined` | Custom classes merged onto the root card wrapper.           |
