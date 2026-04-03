<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>Page Not Found — EAAI</title>
</svelte:head>

<section class="error-page">
	<!-- Ambient background effects -->
	<div class="error-bg">
		<div class="gradient-orb orb-1"></div>
		<div class="gradient-orb orb-2"></div>
		<div class="error-grid"></div>

		<!-- Shooting stars in the 404 page too -->
		<div class="stars-layer">
			{#each [
				{ delay: 0.5, top: 8, left: 15, dur: 2.8, len: 90 },
				{ delay: 3.2, top: 18, left: 60, dur: 3.5, len: 120 },
				{ delay: 6, top: 30, left: 35, dur: 2.2, len: 70 },
				{ delay: 8.5, top: 12, left: 75, dur: 3, len: 100 }
			] as star}
				<div class="shooting-star" style="--delay: {star.delay}s; --top: {star.top}%; --left: {star.left}%; --duration: {star.dur}s; --len: {star.len}px;"></div>
			{/each}
		</div>
	</div>

	<div class="error-content">
		<!-- Big 404 display -->
		<div class="error-code-wrapper">
			<span class="error-code">4</span>
			<div class="error-zero">
				<div class="zero-ring"></div>
				<div class="zero-pulse"></div>
			</div>
			<span class="error-code">4</span>
		</div>

		<h1 class="error-title">Lost in the transformation</h1>
		<p class="error-desc">
			The page you're looking for doesn't exist, has been moved, or is still being built.
			Let's get you back on track.
		</p>

		<!-- Navigation options -->
		<div class="error-actions">
			<a href="/" class="btn-primary">Back to Home</a>
			<a href="/courses" class="btn-secondary">Browse Courses</a>
		</div>

		<!-- Quick links -->
		<div class="error-links">
			<span class="error-links-label">Popular destinations</span>
			<div class="error-links-grid">
				<a href="/advisory" class="error-link">
					<span class="error-link-icon">🎯</span>
					<span>Advisory Services</span>
				</a>
				<a href="/certification" class="error-link">
					<span class="error-link-icon">🏆</span>
					<span>Certification</span>
				</a>
				<a href="/live-training" class="error-link">
					<span class="error-link-icon">📡</span>
					<span>Live Training</span>
				</a>
				<a href="/bookings" class="error-link">
					<span class="error-link-icon">📅</span>
					<span>Book a Call</span>
				</a>
				<a href="/open-source" class="error-link">
					<span class="error-link-icon">🔓</span>
					<span>Open Source</span>
				</a>
				<a href="/contact" class="error-link">
					<span class="error-link-icon">✉️</span>
					<span>Contact Us</span>
				</a>
			</div>
		</div>

		<!-- Status code detail -->
		<p class="error-meta">
			Error {page.status} · {page.error?.message || 'Page not found'}
		</p>
	</div>
</section>

<style>
	.error-page {
		position: relative;
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 6rem 1.5rem 4rem;
		overflow: hidden;
	}

	/* ---- Background Effects ---- */
	.error-bg {
		position: absolute;
		inset: 0;
		z-index: 0;
	}

	.gradient-orb {
		position: absolute;
		border-radius: 50%;
		filter: blur(100px);
		opacity: 0.12;
	}
	.orb-1 {
		width: 500px; height: 500px;
		background: var(--accent-primary);
		top: -150px; right: -100px;
		animation: float 10s ease-in-out infinite;
	}
	.orb-2 {
		width: 350px; height: 350px;
		background: var(--color-brand-violet);
		bottom: -100px; left: -50px;
		animation: float 12s ease-in-out 3s infinite;
	}

	.error-grid {
		position: absolute;
		inset: 0;
		background-image:
			linear-gradient(rgba(0, 229, 187, 0.03) 1px, transparent 1px),
			linear-gradient(90deg, rgba(0, 229, 187, 0.03) 1px, transparent 1px);
		background-size: 60px 60px;
		mask-image: radial-gradient(ellipse 70% 60% at 50% 50%, black 0%, transparent 70%);
		-webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 50%, black 0%, transparent 70%);
	}

	.stars-layer { position: absolute; inset: 0; }

	.shooting-star {
		position: absolute;
		top: var(--top);
		left: var(--left);
		width: var(--len, 100px);
		height: 2px;
		background: linear-gradient(90deg, transparent 0%, transparent 10%, rgba(0, 229, 187, 0.03) 30%, rgba(0, 229, 187, 0.15) 60%, rgba(0, 229, 187, 0.5) 85%, rgba(0, 229, 187, 0.9) 100%);
		border-radius: 0 50% 50% 0;
		opacity: 0;
		animation: shootingStar var(--duration) ease-out var(--delay) infinite;
	}
	.shooting-star::before {
		content: '';
		position: absolute;
		right: -1px;
		top: 50%;
		transform: translateY(-50%);
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background: #fff;
		box-shadow:
			0 0 4px 1px rgba(255, 255, 255, 0.9),
			0 0 8px 2px rgba(0, 229, 187, 0.7),
			0 0 16px 4px rgba(0, 229, 187, 0.3);
	}

	/* ---- Content ---- */
	.error-content {
		position: relative;
		z-index: 2;
		text-align: center;
		max-width: 580px;
	}

	/* --- Giant 404 --- */
	.error-code-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.25rem;
		margin-bottom: 2rem;
	}
	.error-code {
		font-size: clamp(5rem, 15vw, 10rem);
		font-weight: 900;
		line-height: 1;
		letter-spacing: -0.04em;
		background: linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 40%, rgba(0, 229, 187, 0.25) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		filter: drop-shadow(0 0 30px rgba(0, 229, 187, 0.2));
	}

	/* Animated zero with ring + pulse */
	.error-zero {
		position: relative;
		width: clamp(4.5rem, 13vw, 8.5rem);
		height: clamp(5rem, 15vw, 10rem);
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.zero-ring {
		width: 70%;
		height: 70%;
		border-radius: 50%;
		border: 4px solid var(--accent-primary);
		box-shadow:
			0 0 20px rgba(0, 229, 187, 0.3),
			inset 0 0 20px rgba(0, 229, 187, 0.1);
		animation: zeroPulseRing 3s ease-in-out infinite;
	}
	.zero-pulse {
		position: absolute;
		width: 70%;
		height: 70%;
		border-radius: 50%;
		border: 2px solid rgba(0, 229, 187, 0.15);
		animation: zeroPulseExpand 3s ease-in-out infinite;
	}

	@keyframes zeroPulseRing {
		0%, 100% {
			box-shadow: 0 0 20px rgba(0, 229, 187, 0.3), inset 0 0 20px rgba(0, 229, 187, 0.1);
			transform: scale(1);
		}
		50% {
			box-shadow: 0 0 40px rgba(0, 229, 187, 0.5), inset 0 0 30px rgba(0, 229, 187, 0.2);
			transform: scale(1.05);
		}
	}
	@keyframes zeroPulseExpand {
		0% { transform: scale(1); opacity: 0.5; }
		100% { transform: scale(1.6); opacity: 0; }
	}

	/* --- Title, desc, actions --- */
	.error-title {
		font-size: clamp(1.25rem, 3vw, 1.75rem);
		font-weight: 700;
		color: var(--text-primary);
		margin: 0 0 0.75rem;
		letter-spacing: -0.02em;
	}
	.error-desc {
		font-size: 1rem;
		line-height: 1.6;
		color: var(--text-secondary);
		margin: 0 0 2rem;
	}

	.error-actions {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 3rem;
	}
	@media (min-width: 480px) {
		.error-actions { flex-direction: row; justify-content: center; }
	}

	/* --- Quick links --- */
	.error-links {
		margin-bottom: 2rem;
	}
	.error-links-label {
		display: block;
		font-size: 0.6875rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--text-muted);
		margin-bottom: 1rem;
	}
	.error-links-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 0.625rem;
	}
	@media (min-width: 480px) {
		.error-links-grid { grid-template-columns: repeat(3, 1fr); }
	}
	.error-link {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.75rem 1rem;
		background: var(--bg-card);
		border: 1px solid var(--border-default);
		border-radius: 0.625rem;
		text-decoration: none;
		font-size: 0.8125rem;
		font-weight: 500;
		color: var(--text-secondary);
		transition: all 0.25s ease;
	}
	.error-link:hover {
		border-color: var(--accent-primary);
		color: var(--text-primary);
		background: var(--bg-elevated);
		box-shadow: 0 0 16px rgba(0, 229, 187, 0.08);
		transform: translateY(-1px);
	}
	.error-link-icon {
		font-size: 1rem;
		flex-shrink: 0;
	}

	/* --- Meta --- */
	.error-meta {
		font-size: 0.75rem;
		font-family: var(--font-family-mono);
		color: var(--text-muted);
		margin: 0;
		opacity: 0.6;
	}
</style>
