<script lang="ts">
	import '../app.css';
	let { children } = $props();

	import Button from '$lib/components/Button.svelte';
	import { Moon, Sun } from 'phosphor-svelte';
	import { writable } from 'svelte/store';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	const VIDEOS = [
		'https://snep.lol/download/KXtxFoIOyj',
		'https://snep.lol/download/wzHAliyLOh',
		'https://snep.lol/download/GlLXavPPKe'
	];
	const THEME = writable(browser ? localStorage.getItem('theme') || 'dark' : 'dark');
	const LIGHT_THEMES = ['latte'];
	const DARK_THEMES = ['oled', 'dark', 'mocha'];

	let src = $state('');
	onMount(() => {
		src = VIDEOS[Math.floor(Math.random() * VIDEOS.length)];
	});

	function toggleTheme() {
		if (!browser) return;
		const nextTheme = LIGHT_THEMES.includes($THEME) ? 'dark' : 'latte';
		const html = document.getElementsByTagName('html')[0];

		html.setAttribute('data-theme', nextTheme);
		THEME.set(nextTheme);
	}
</script>

<svelte:head>
	<title>Revilium</title>

	<script>
		const theme = localStorage.getItem('theme') || 'dark';
		const html = document.getElementsByTagName('html')[0];

		html.setAttribute('data-theme', theme);
	</script>
</svelte:head>

<div class="absolute top-0 z-20 h-16 w-screen opacity-50 hover:opacity-100">
	<div class="flex h-full px-4">
		<div class="my-auto ml-auto flex gap-2">
			<Button on:click={toggleTheme}>
				{#if DARK_THEMES.includes($THEME)}
					<Sun class="text-subtext0" size="22"></Sun>
				{:else}
					<Moon class="text-subtext0" size="22"></Moon>
				{/if}
			</Button>
		</div>
	</div>
</div>

{@render children()}

<!-- svelte-ignore a11y_media_has_caption -->
<video
	class="absolute top-0 -z-10 h-screen w-screen object-cover blur-lg filter"
	{src}
	disablePictureInPicture={true}
	autoplay={true}
	loop={true}
	volume={0.05}
></video>
