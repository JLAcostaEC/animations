<script lang="ts">
	import { PerspectiveBook } from "$lib/components/spell/perspective-book";
	import { Code2, Cog } from "@lucide/svelte";
</script>

<div class="flex min-h-screen flex-col items-center justify-center gap-6">
	<PerspectiveBook textured  size="lg">
		<div class="flex h-full flex-col justify-between">
			<div class="flex flex-col gap-4">
				<div class="flex items-start justify-between gap-4">
					<h2 class="max-w-[12ch] text-lg leading-5 font-semibold sm:text-xl">
						Building Interfaces the Svelte Way
					</h2>
					<Code2 class="mt-0.5 size-6 shrink-0" />
				</div>

				<p
					class="max-w-[18ch] text-xs/relaxed font-medium text-white/80 sm:text-sm/relaxed"
				>
					A compact tribute to compiler-driven UI design and the creator behind it.
				</p>
			</div>

			<div class="space-y-1">
				<p class="text-[0.65rem] font-semibold tracking-[0.28em] text-white/70 uppercase">
					Creator of Svelte
				</p>
				<span class="font-serif text-base font-medium sm:text-lg">Rich Harris</span>
			</div>
		</div>
	</PerspectiveBook>

	<PerspectiveBook class="h-full justify-start bg-[#4D4E41] text-yellow-300" textured>
		<div class="flex h-full flex-col justify-between">
			<div class="flex flex-col gap-4">
				<h2 class="leading-4 font-semibold">The Art of Doing Science and Engineering</h2>
				<Cog class="size-5" />
			</div>
			<span class="font-serif text-sm font-medium">
				Richard<br />W. Hamming
			</span>
		</div>
	</PerspectiveBook>
</div>
