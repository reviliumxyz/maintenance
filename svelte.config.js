import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { phosphorSvelteOptimize } from 'phosphor-svelte/preprocessor';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [phosphorSvelteOptimize(), vitePreprocess()],
	kit: { adapter: adapter(), paths: { relative: false } }
};

export default config;
