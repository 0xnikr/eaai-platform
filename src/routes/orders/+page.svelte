<svelte:head><title>Orders — EAAI</title></svelte:head>
<section class="shell"><div class="container-main">
	<div class="auth-notice"><span>🔒</span><div><h3>Orders Preview</h3><p>Your purchase history will appear here after authentication is integrated.</p></div></div>
	<h1>Order History</h1>
	<p class="shell-desc">Your course purchases, event registrations, and advisory engagement invoices will be tracked here.</p>
	<a href="/dashboard" class="btn-secondary">← Back to Dashboard</a>
</div></section>
<style>
	.shell { padding: 8rem 0 4rem; }
	h1 { font-size: clamp(1.5rem, 4vw, 2.25rem); font-weight: 800; color: var(--text-primary); margin: 0 0 0.5rem; }
	.shell-desc { color: var(--text-secondary); margin: 0 0 2rem; }
	.auth-notice { display: flex; align-items: center; gap: 1rem; padding: 1rem 1.5rem; margin-bottom: 2rem; background: var(--accent-glow); border: 1px solid color-mix(in srgb, var(--accent-primary) 24%, transparent); border-radius: var(--radius-card); }
	.auth-notice h3 { font-size: 0.9375rem; font-weight: 600; color: var(--text-primary); margin: 0 0 0.125rem; }
	.auth-notice p { font-size: 0.8125rem; color: var(--text-secondary); margin: 0; }
</style>
