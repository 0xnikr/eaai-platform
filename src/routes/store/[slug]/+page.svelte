<script lang="ts">import { page } from '$app/state'; const slug = $derived(page.params.slug);</script>
<svelte:head><title>Product — EAAI</title></svelte:head>
<section class="shell"><div class="container-main">
	<a href="/store" style="font-size: 0.8125rem; color: var(--text-muted); text-decoration: none;">← Back to Store</a>
	<h1 style="margin-top: 1rem;">Product: {slug}</h1>
	<p style="color: var(--text-secondary);">Product detail page placeholder. This route will support digital product pages in the future.</p>
</div></section>
<style>.shell { padding: 8rem 0 4rem; } h1 { font-size: 1.75rem; font-weight: 800; color: var(--text-primary); margin: 0 0 0.5rem; }</style>
