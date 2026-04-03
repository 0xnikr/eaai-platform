<script lang="ts">
	import type { PricingTier } from '$lib/types';

	interface Props {
		tiers: PricingTier[];
	}

	let { tiers }: Props = $props();
</script>

<div class="pricing-grid">
	{#each tiers as tier}
		<div class="pricing-card" class:highlighted={tier.highlighted}>
			{#if tier.highlighted}
				<div class="popular-badge">Most Popular</div>
			{/if}
			<div class="pricing-header">
				<h3 class="tier-name">{tier.name}</h3>
				<p class="tier-desc">{tier.description}</p>
			</div>
			<div class="pricing-price">
				<span class="price-amount">{tier.price}</span>
				{#if tier.priceDetail}
					<span class="price-detail">{tier.priceDetail}</span>
				{/if}
			</div>
			<ul class="pricing-features">
				{#each tier.features as feature}
					<li>
						<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
						{feature}
					</li>
				{/each}
			</ul>
			<a href="/bookings" class="pricing-cta" class:primary={tier.highlighted}>
				{tier.cta}
			</a>
		</div>
	{/each}
</div>

<style>
	.pricing-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.5rem;
		align-items: stretch;
	}

	@media (min-width: 640px) {
		.pricing-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 1024px) {
		.pricing-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	.pricing-card {
		position: relative;
		display: flex;
		flex-direction: column;
		background: var(--bg-card);
		border: 1px solid var(--border-default);
		border-radius: var(--radius-card);
		padding: 2rem;
		transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.pricing-card.highlighted {
		border-color: var(--accent-primary);
		box-shadow: 0 0 40px var(--accent-glow);
		transform: scale(1.02);
	}

	@media (min-width: 1024px) {
		.pricing-card.highlighted {
			transform: scale(1.04);
		}
	}

	.popular-badge {
		position: absolute;
		top: -12px;
		left: 50%;
		transform: translateX(-50%);
		font-size: 0.6875rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		padding: 0.375rem 1rem;
		background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
		color: var(--text-inverse);
		border-radius: 2rem;
		white-space: nowrap;
	}

	.pricing-header {
		margin-bottom: 1.5rem;
	}

	.tier-name {
		font-size: 1.25rem;
		font-weight: 700;
		color: var(--text-primary);
		margin: 0 0 0.5rem;
	}

	.tier-desc {
		font-size: 0.875rem;
		line-height: 1.5;
		color: var(--text-secondary);
		margin: 0;
	}

	.pricing-price {
		margin-bottom: 1.5rem;
		padding-bottom: 1.5rem;
		border-bottom: 1px solid var(--border-default);
	}

	.price-amount {
		display: block;
		font-size: 2.5rem;
		font-weight: 800;
		letter-spacing: -0.03em;
		color: var(--text-primary);
	}

	.price-detail {
		font-size: 0.8125rem;
		color: var(--text-muted);
	}

	.pricing-features {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		flex: 1;
	}

	.pricing-features li {
		display: flex;
		align-items: flex-start;
		gap: 0.625rem;
		font-size: 0.875rem;
		color: var(--text-secondary);
		line-height: 1.4;
	}

	.pricing-features li svg {
		flex-shrink: 0;
		margin-top: 2px;
	}

	.pricing-cta {
		display: block;
		text-align: center;
		padding: 0.875rem;
		margin-top: 2rem;
		font-size: 0.9375rem;
		font-weight: 600;
		text-decoration: none;
		border-radius: var(--radius-button);
		transition: all 0.3s ease;
		color: var(--text-primary);
		background: var(--bg-elevated);
		border: 1px solid var(--border-light);
	}

	.pricing-cta:hover {
		border-color: var(--accent-primary);
		color: var(--accent-primary);
	}

	.pricing-cta.primary {
		color: var(--text-inverse);
		background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
		border-color: transparent;
	}

	.pricing-cta.primary:hover {
		filter: brightness(1.1);
		transform: translateY(-1px);
		box-shadow: 0 8px 32px var(--accent-glow-strong);
	}
</style>
