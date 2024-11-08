<script lang="ts">
	let {
		children,
		disabled = false
	}: {
		children: Snippet;
		disabled?: boolean;
	} = $props();

	import { createEventDispatcher, type Snippet } from 'svelte';
	const dispatch = createEventDispatcher();
</script>

<button
	class="w-full rounded-md bg-secondary px-2 py-1.5 font-bold text-text shadow-lg"
	{disabled}
	onclick={() => {
		dispatch('click', {});
	}}
>
	{@render children()}
</button>
