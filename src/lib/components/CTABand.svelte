<script lang="ts">
	interface Props {
		eyebrow?: string;
		title: string;
		description?: string;
		primaryCta?: { label: string; href: string };
		secondaryCta?: { label: string; href: string };
		variant?: 'default' | 'gradient' | 'subtle';
	}

	let {
		eyebrow = '',
		title,
		description = '',
		primaryCta,
		secondaryCta,
		variant = 'default'
	}: Props = $props();
</script>

<section class="cta-band {variant}">
	<div class="container-main cta-inner">
		{#if eyebrow}
			<span class="eyebrow">{eyebrow}</span>
		{/if}
		<h2 class="cta-title">{title}</h2>
		{#if description}
			<p class="cta-desc">{description}</p>
		{/if}
		<div class="cta-actions">
			{#if primaryCta}
				<a href={primaryCta.href} class="btn-primary">{primaryCta.label}</a>
			{/if}
			{#if secondaryCta}
				<a href={secondaryCta.href} class="btn-secondary">{secondaryCta.label}</a>
			{/if}
		</div>
	</div>
</section>

<style>
	.cta-band {
		padding: 4rem 0;
	}

	.cta-band.gradient {
		background: linear-gradient(135deg, var(--accent-glow), transparent, var(--accent-glow));
		border-top: 1px solid var(--border-default);
		border-bottom: 1px solid var(--border-default);
	}

	.cta-band.subtle {
		background: var(--bg-surface);
	}

	.cta-inner {
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.cta-title {
		font-size: clamp(1.5rem, 4vw, 2.5rem);
		font-weight: 800;
		letter-spacing: -0.02em;
		color: var(--text-primary);
		margin: 0;
		max-width: 700px;
	}

	.cta-desc {
		font-size: 1rem;
		line-height: 1.6;
		color: var(--text-secondary);
		margin: 0;
		max-width: 560px;
	}

	.cta-actions {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		margin-top: 0.5rem;
		width: 100%;
		max-width: 400px;
	}

	@media (min-width: 480px) {
		.cta-actions {
			flex-direction: row;
			justify-content: center;
			width: auto;
			max-width: none;
		}
	}

	@media (min-width: 768px) {
		.cta-band {
			padding: 5rem 0;
		}
	}
</style>
