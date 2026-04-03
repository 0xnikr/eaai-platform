<script lang="ts">
	import './layout.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { theme } from '$lib/stores/theme';

	let { children } = $props();

	// Initialize theme on mount
	$effect(() => {
		$theme;
	});
</script>

<svelte:head>
	<title>Executive AI Advisory Institute — Building Organizational AI Capability</title>
	<meta name="description" content="We build organizational AI capability through executive advisory, leadership enablement, workforce training, certification, and measurable transformation." />
</svelte:head>

<Navbar />
<main>
	{@render children()}
</main>
<Footer />

<style>
	main {
		min-height: 100vh;
	}
</style>
