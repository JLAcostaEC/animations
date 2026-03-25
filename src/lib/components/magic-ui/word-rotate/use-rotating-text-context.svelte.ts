import { getContext, setContext } from "svelte";
import type { RotatingTextContextType } from "./types";

const ROTATING_TEXT_CONTEXT_KEY = Symbol("rotating-text-context");

export function setRotatingTextContext(value: RotatingTextContextType): RotatingTextContextType {
	setContext(ROTATING_TEXT_CONTEXT_KEY, value);
	return value;
}

export function useRotatingText(): RotatingTextContextType {
	const context = getContext<RotatingTextContextType>(ROTATING_TEXT_CONTEXT_KEY);
	if (!context) {
		throw new Error("RotatingText must be used within a RotatingTextContainer");
	}
	return context;
}
