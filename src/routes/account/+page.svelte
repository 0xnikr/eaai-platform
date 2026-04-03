<svelte:head><title>Account — EAAI</title></svelte:head>
<section class="shell"><div class="container-main">
	<div class="auth-notice"><span>🔒</span><div><h3>Account Settings Preview</h3><p>Account management will be available after authentication is integrated.</p></div></div>
	<h1>Account Settings</h1>
	<div class="settings-grid">
		<div class="settings-card premium-card">
			<h3>Profile</h3>
			<div class="field"><label>Name</label><input type="text" value="Alex Johnson" disabled /></div>
			<div class="field"><label>Email</label><input type="email" value="alex@company.com" disabled /></div>
			<div class="field"><label>Company</label><input type="text" value="Meridian Financial" disabled /></div>
			<button class="btn-secondary" disabled>Update Profile</button>
		</div>
		<div class="settings-card premium-card">
			<h3>Preferences</h3>
			<div class="pref-item"><span>Email notifications</span><span class="pref-val">Enabled</span></div>
			<div class="pref-item"><span>Dark mode default</span><span class="pref-val">Yes</span></div>
			<div class="pref-item"><span>Language</span><span class="pref-val">English</span></div>
		</div>
	</div>
	<a href="/dashboard" class="btn-secondary" style="margin-top: 2rem; display: inline-flex;">← Back to Dashboard</a>
</div></section>
<style>
	.shell { padding: 8rem 0 4rem; }
	h1 { font-size: clamp(1.5rem, 4vw, 2.25rem); font-weight: 800; color: var(--text-primary); margin: 0 0 2rem; }
	.auth-notice { display: flex; align-items: center; gap: 1rem; padding: 1rem 1.5rem; margin-bottom: 2rem; background: var(--accent-glow); border: 1px solid color-mix(in srgb, var(--accent-primary) 24%, transparent); border-radius: var(--radius-card); }
	.auth-notice h3 { font-size: 0.9375rem; font-weight: 600; color: var(--text-primary); margin: 0 0 0.125rem; }
	.auth-notice p { font-size: 0.8125rem; color: var(--text-secondary); margin: 0; }
	.settings-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
	@media (min-width: 768px) { .settings-grid { grid-template-columns: 1fr 1fr; } }
	.settings-card { padding: 1.75rem; }
	.settings-card h3 { font-size: 1.125rem; font-weight: 700; color: var(--text-primary); margin: 0 0 1.25rem; }
	.field { display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 1rem; }
	.field label { font-size: 0.8125rem; font-weight: 600; color: var(--text-secondary); }
	.field input { padding: 0.625rem 1rem; background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: 0.5rem; color: var(--text-muted); font-size: 0.9375rem; font-family: var(--font-family-sans); }
	.pref-item { display: flex; justify-content: space-between; padding: 0.75rem 0; border-bottom: 1px solid var(--border-default); font-size: 0.9375rem; color: var(--text-secondary); }
	.pref-item:last-child { border-bottom: none; }
	.pref-val { font-weight: 600; color: var(--text-primary); }
</style>
