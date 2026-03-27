import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import spotifyUrlInfo, { type Preview } from "spotify-url-info";

interface SpotifyPreviewResponse {
	title: string;
	artist: string;
	image: string;
	link: string;
	audio?: string;
}

interface SpotifyErrorResponse {
	error: string;
}

function normalizeSpotifyUrl(url: string): string {
	return url.replace(/\/intl-[a-z]{2}\//i, "/");
}

function toPreviewResponse(preview: Preview): SpotifyPreviewResponse {
	return {
		title: preview.title,
		artist: preview.artist,
		image: preview.image ?? "",
		link: preview.link,
		audio: preview.audio,
	};
}

export const GET: RequestHandler = async ({ url, fetch }) => {
	const spotifyUrl = url.searchParams.get("url");

	if (!spotifyUrl) {
		return json<SpotifyErrorResponse>({ error: "URL is required" }, { status: 400 });
	}

	try {
		const normalizedUrl = normalizeSpotifyUrl(spotifyUrl);
		const { getPreview } = spotifyUrlInfo(fetch);
		const preview = await getPreview(normalizedUrl);

		return json<SpotifyPreviewResponse>(toPreviewResponse(preview));
	} catch {
		return json<SpotifyErrorResponse>(
			{ error: "Failed to fetch Spotify data" },
			{ status: 500 }
		);
	}
};
