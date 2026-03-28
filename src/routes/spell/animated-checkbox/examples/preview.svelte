<script lang="ts">
	import { AnimatedCheckbox } from "$lib/components/spell/animated-checkbox";

	let tasks = $state([
		{ title: "Wire install docs", checked: true },
		{ title: "Add examples", checked: false },
		{ title: "Polish motion", checked: false },
	]);

	function updateTask(index: number, checked: boolean) {
		tasks = tasks.map((task, taskIndex) =>
			taskIndex === index ? { ...task, checked } : task
		);
	}
</script>

<div class="mx-auto flex w-full max-w-sm flex-col gap-3 py-8">
	{#each tasks as task, index}
		<AnimatedCheckbox
			title={task.title}
			checked={task.checked}
			onCheckedChange={(checked) => updateTask(index, checked)}
		/>
	{/each}
</div>
