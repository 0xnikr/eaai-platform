<svelte:head><title>Cart — EAAI</title></svelte:head>
<section class="shell"><div class="container-main">
	<h1>Your Cart</h1>
	<div class="empty-cart">
		<span class="cart-icon">🛒</span>
		<p>Your cart is empty.</p>
		<a href="/courses" class="btn-primary">Browse Courses</a>
	</div>
</div></section>
<style>
	.shell { padding: 8rem 0 4rem; }
	h1 { font-size: clamp(1.5rem, 4vw, 2.25rem); font-weight: 800; color: var(--text-primary); margin: 0 0 2rem; }
	.empty-cart { text-align: center; padding: 4rem 2rem; background: var(--bg-card); border: 1px solid var(--border-default); border-radius: var(--radius-card); }
	.cart-icon { font-size: 3rem; display: block; margin-bottom: 1rem; }
	.empty-cart p { color: var(--text-secondary); margin: 0 0 1.5rem; }
</style>
