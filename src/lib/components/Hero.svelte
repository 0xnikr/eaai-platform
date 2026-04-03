<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		eyebrow?: string;
		title: string;
		subtitle?: string;
		primaryCta?: { label: string; href: string };
		secondaryCta?: { label: string; href: string };
		showStars?: boolean;
		compact?: boolean;
		centered?: boolean;
		children?: Snippet;
	}

	let {
		eyebrow = '',
		title,
		subtitle = '',
		primaryCta,
		secondaryCta,
		showStars = false,
		compact = false,
		centered = true,
		children
	}: Props = $props();
</script>

<section class="hero" class:compact class:centered>
	{#if showStars}
		<div class="hero-bg">
			<div class="stars-layer">
				{#each [
					{ delay: 0, top: 6, left: 5, dur: 3, len: 100 },
					{ delay: 2.8, top: 22, left: 30, dur: 2.5, len: 140 },
					{ delay: 5.5, top: 12, left: 55, dur: 3.2, len: 90 },
					{ delay: 1.5, top: 35, left: 10, dur: 2.8, len: 120 },
					{ delay: 4.2, top: 8, left: 70, dur: 3.5, len: 80 },
					{ delay: 7, top: 28, left: 45, dur: 2.2, len: 110 },
					{ delay: 8.5, top: 15, left: 20, dur: 3, len: 130 }
				] as star}
					<div class="shooting-star" style="--delay: {star.delay}s; --top: {star.top}%; --left: {star.left}%; --duration: {star.dur}s; --len: {star.len}px;"></div>
				{/each}
			</div>
			<div class="gradient-orb orb-1"></div>
			<div class="gradient-orb orb-2"></div>
			<div class="gradient-orb orb-3"></div>
			<div class="hero-gradient-overlay"></div>
		</div>
	{/if}

	<div class="container-main hero-content">
		{#if eyebrow}
			<span class="eyebrow hero-eyebrow">{eyebrow}</span>
		{/if}

		<h1 class="hero-title">
			{@html title}
		</h1>

		{#if subtitle}
			<p class="hero-subtitle">{subtitle}</p>
		{/if}

		{#if primaryCta || secondaryCta}
			<div class="hero-actions">
				{#if primaryCta}
					<a href={primaryCta.href} class="btn-primary hero-btn">{primaryCta.label}</a>
				{/if}
				{#if secondaryCta}
					<a href={secondaryCta.href} class="btn-secondary hero-btn">{secondaryCta.label}</a>
				{/if}
			</div>
		{/if}

		{#if children}
			{@render children()}
		{/if}
	</div>
</section>

<style>
	.hero {
		position: relative;
		min-height: 85vh;
		display: flex;
		align-items: center;
		padding: 7rem 0 4rem;
		overflow: hidden;
	}

	.hero.compact {
		min-height: auto;
		padding: 8rem 0 4rem;
	}

	@media (min-width: 768px) {
		.hero {
			min-height: 90vh;
			padding: 8rem 0 5rem;
		}
		.hero.compact {
			padding: 10rem 0 5rem;
		}
	}

	.hero-content {
		position: relative;
		z-index: 2;
	}

	.hero.centered .hero-content {
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.hero-eyebrow {
		margin-bottom: 1.25rem;
		animation: fadeIn 0.6s ease both;
	}

	.hero-title {
		font-size: clamp(2rem, 6vw, 4.25rem);
		font-weight: 800;
		letter-spacing: -0.03em;
		line-height: 1.08;
		color: var(--text-primary);
		margin: 0;
		max-width: 900px;
		animation: fadeIn 0.6s ease 0.1s both;
	}

	.hero-title :global(span.gradient) {
		background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.hero-subtitle {
		font-size: clamp(1rem, 2.5vw, 1.25rem);
		line-height: 1.6;
		color: var(--text-secondary);
		max-width: 640px;
		margin: 1.5rem 0 0;
		animation: fadeIn 0.6s ease 0.2s both;
	}

	.hero-actions {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		margin-top: 2.5rem;
		width: 100%;
		max-width: 400px;
		animation: fadeIn 0.6s ease 0.3s both;
	}

	@media (min-width: 480px) {
		.hero-actions {
			flex-direction: row;
			width: auto;
			max-width: none;
		}
	}

	.hero-btn {
		width: 100%;
		text-align: center;
	}

	@media (min-width: 480px) {
		.hero-btn {
			width: auto;
		}
	}

	/* Background Effects */
	.hero-bg {
		position: absolute;
		inset: 0;
		overflow: hidden;
		z-index: 0;
	}

	.stars-layer {
		position: absolute;
		inset: 0;
	}

	.shooting-star {
		position: absolute;
		top: var(--top);
		left: var(--left);
		width: var(--len, 100px);
		height: 2px;
		/* Trail: transparent at tail (left) → bright at head (right) */
		background: linear-gradient(90deg, transparent 0%, transparent 10%, rgba(0, 229, 187, 0.03) 30%, rgba(0, 229, 187, 0.15) 60%, rgba(0, 229, 187, 0.5) 85%, rgba(0, 229, 187, 0.9) 100%);
		border-radius: 0 50% 50% 0;
		opacity: 0;
		animation: shootingStar var(--duration) ease-out var(--delay) infinite;
	}

	/* Bright glowing head of the shooting star */
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

	.gradient-orb {
		position: absolute;
		border-radius: 50%;
		filter: blur(80px);
		opacity: 0.15;
	}

	.orb-1 {
		width: 600px;
		height: 600px;
		background: var(--accent-primary);
		top: -200px;
		right: -100px;
		animation: float 8s ease-in-out infinite;
	}

	.orb-2 {
		width: 400px;
		height: 400px;
		background: var(--accent-secondary);
		bottom: -100px;
		left: -50px;
		animation: float 10s ease-in-out 2s infinite;
	}

	.orb-3 {
		width: 300px;
		height: 300px;
		background: var(--color-brand-violet);
		top: 40%;
		left: 60%;
		animation: float 12s ease-in-out 4s infinite;
	}

	.hero-gradient-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(180deg, transparent 0%, var(--bg-base) 100%);
	}
</style>
