<script lang="ts">import { page } from '$app/state'; const courseSlug = $derived(page.params.courseSlug); const lessonSlug = $derived(page.params.lessonSlug);</script>
<svelte:head><title>Lesson — EAAI</title></svelte:head>
<section class="shell"><div class="container-main">
	<a href="/learn/{courseSlug}" style="font-size: 0.8125rem; color: var(--text-muted); text-decoration: none;">← Back to Course</a>
	<h1 style="margin-top: 1rem;">Lesson: {lessonSlug}</h1>
	<p style="color: var(--text-secondary);">Individual lesson view placeholder. In the production platform, this will display the specific lesson content, resources, and progress tracking.</p>
</div></section>
<style>.shell { padding: 8rem 0 4rem; } h1 { font-size: 1.75rem; font-weight: 800; color: var(--text-primary); margin: 0 0 0.5rem; }</style>
