<script lang="ts">
	import FiveHundred from '$lib/img/500.png';
</script>

<div class="container mx-auto grid h-screen">
	<div class="m-auto max-w-md bg-base p-4 outline outline-1 outline-overlay0 shadow-lg">
		<h1 class="text-center text-2xl">Server Unavailable</h1>
		<p class=" text-center text-subtext0">
			The website encountered a fatal error and has crashed.
			<br />
			The site will restore itself momentarily.
		</p>
		<img
			class="mx-auto max-w-64"
			src={FiveHundred}
			alt="A server rack with grey smoke blowing out the back"
		/>
	</div>
</div>
