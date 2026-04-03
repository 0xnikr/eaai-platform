<script lang="ts">
	import { page } from '$app/state';
	const slug = $derived(page.params.slug);
</script>

<svelte:head><title>Certificate — EAAI</title></svelte:head>

<section class="cert-page">
	<div class="container-main">
		<div class="cert-display">
			<div class="cert-frame">
				<div class="cert-inner">
					<div class="cert-logo">EAAI</div>
					<h1>Certificate of Achievement</h1>
					<p class="cert-subtitle">This certifies that</p>
					<p class="cert-name">Alex Johnson</p>
					<p class="cert-subtitle">has successfully completed</p>
					<h2 class="cert-program">AI Strategy Foundation</h2>
					<p class="cert-date">Issued: January 15, 2025</p>
					<p class="cert-id">Certificate ID: {slug || 'EAAI-2025-001'}</p>
				</div>
			</div>
			<div class="cert-actions">
				<button class="btn-primary">Download PDF</button>
				<button class="btn-secondary">Share Certificate</button>
				<a href="/dashboard" class="btn-secondary">Back to Dashboard</a>
			</div>
		</div>
	</div>
</section>

<style>
	.cert-page { padding: 8rem 0 4rem; }
	.cert-display { max-width: 700px; margin: 0 auto; text-align: center; }

	.cert-frame {
		background: var(--bg-card); border: 3px solid var(--accent-primary);
		border-radius: var(--radius-card); padding: 3rem 2rem; margin-bottom: 2rem;
		box-shadow: 0 0 40px var(--accent-glow);
	}
	.cert-logo { font-size: 2rem; font-weight: 800; background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 2rem; }
	.cert-frame h1 { font-size: 1.5rem; font-weight: 700; color: var(--text-primary); margin: 0 0 1.5rem; letter-spacing: 0.02em; }
	.cert-subtitle { font-size: 0.875rem; color: var(--text-muted); margin: 0 0 0.375rem; }
	.cert-name { font-size: 1.75rem; font-weight: 800; color: var(--text-primary); margin: 0 0 1rem; }
	.cert-program { font-size: 1.25rem; font-weight: 700; color: var(--accent-primary); margin: 0 0 1.5rem; }
	.cert-date { font-size: 0.8125rem; color: var(--text-muted); margin: 0 0 0.25rem; }
	.cert-id { font-size: 0.75rem; font-family: var(--font-family-mono); color: var(--text-muted); margin: 0; }

	.cert-actions { display: flex; flex-direction: column; gap: 0.75rem; align-items: center; }
	@media (min-width: 480px) { .cert-actions { flex-direction: row; justify-content: center; } }
</style>
