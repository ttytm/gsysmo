<script lang="ts">
	import '../app.css';
</script>

<svelte:head>
	<!-- {#if process.env.NODE_ENV === 'production'} -->
	<script src="webui.js"></script>
	<!-- {/if} -->
</svelte:head>

<main class="mx-1">
	<slot />
</main>
