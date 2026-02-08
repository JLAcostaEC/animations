<script lang="ts">
	import Button from "$lib/components/ui/button/button.svelte";
	import ArrowRight from "@lucide/svelte/icons/arrow-right";
</script>

<main class="overflow-hidden">
	<div class="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block">
		<div
			class="absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]"
		></div>
		<div
			class="absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]"
		></div>
		<div
			class="absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]"
		></div>
	</div>
	<section>
		<div class="relative pt-24 md:pt-36">
			<div
				class="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
			></div>
			<div class="mx-auto max-w-7xl px-6">
				<div class="text-center sm:mx-auto lg:mt-0 lg:mr-auto">
					<div>
						<a
							href="/magic/docs/components/animated-gradient-text"
							class="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
						>
							<span class="text-foreground text-sm"
								>Introducing Animated Gradient Text</span
							>
							<span
								class="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"
							></span>

							<div
								class="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500"
							>
								<div
									class="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0"
								>
									<span class="flex size-6">
										<ArrowRight class="m-auto size-3" />
									</span>
									<span class="flex size-6">
										<ArrowRight class="m-auto size-3" />
									</span>
								</div>
							</div>
						</a>
					</div>

					<h1 class="mt-8 text-6xl text-balance md:text-7xl lg:mt-16 xl:text-[5.25rem]">
						Svelte 5 Animations
					</h1>
					<p class="mx-auto mt-8 max-w-2xl text-lg text-balance">
						A collection of animation utilities and components for Svelte 5.
					</p>

					<div class="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
						<Button href="/magic/docs/components/animated-beam" size="lg"
							>Get Started</Button
						>
						<Button
							size="lg"
							variant="secondary"
							href="https://github.com/SikandarJODD/animations"
							target="_blank">Github</Button
						>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>
