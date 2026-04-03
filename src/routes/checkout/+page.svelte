<svelte:head><title>Checkout — EAAI</title></svelte:head>
<section class="shell"><div class="container-main">
	<h1>Checkout</h1>
	<div class="checkout-placeholder">
		<span class="checkout-icon">💳</span>
		<h3>Checkout System</h3>
		<p>Our integrated checkout experience is under development. Payment processing will be available soon.</p>
		<a href="/bookings" class="btn-primary">Contact Us to Purchase</a>
	</div>
</div></section>
<style>
	.shell { padding: 8rem 0 4rem; }
	h1 { font-size: clamp(1.5rem, 4vw, 2.25rem); font-weight: 800; color: var(--text-primary); margin: 0 0 2rem; }
	.checkout-placeholder { text-align: center; padding: 4rem 2rem; background: var(--bg-card); border: 2px dashed var(--border-default); border-radius: var(--radius-card); max-width: 500px; }
	.checkout-icon { font-size: 3rem; display: block; margin-bottom: 1rem; }
	.checkout-placeholder h3 { font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin: 0 0 0.5rem; }
	.checkout-placeholder p { font-size: 0.9375rem; color: var(--text-secondary); margin: 0 0 1.5rem; line-height: 1.5; }
</style>
