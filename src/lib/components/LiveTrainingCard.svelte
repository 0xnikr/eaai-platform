<script lang="ts">
	import type { LiveTraining } from '$lib/types';

	interface Props {
		training: LiveTraining;
	}

	let { training }: Props = $props();

	$effect(() => {
		// Keep reactivity
	});

	function seatsUrgency(available: number, total: number): string {
		const pct = available / total;
		if (pct <= 0.15) return 'critical';
		if (pct <= 0.4) return 'low';
		return 'available';
	}

	function formatDate(dateStr: string): string {
		const date = new Date(dateStr + 'T00:00:00');
		return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
	}
</script>

<a href="/live-training/{training.slug}" class="training-card premium-card">
	<div class="card-top">
		<div class="date-badge">
			<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
			{formatDate(training.date)}
		</div>
		<span class="format-tag">{training.format}</span>
	</div>

	<h3 class="card-title">{training.title}</h3>
	<p class="card-desc">{training.description}</p>

	<div class="card-details">
		<div class="detail">
			<span class="detail-label">Duration</span>
			<span class="detail-value">{training.duration}</span>
		</div>
		<div class="detail">
			<span class="detail-label">Time</span>
			<span class="detail-value">{training.time}</span>
		</div>
		<div class="detail">
			<span class="detail-label">Level</span>
			<span class="detail-value">{training.level}</span>
		</div>
	</div>

	<div class="card-bottom">
		<div class="price-section">
			<span class="price">${training.price.toLocaleString()}</span>
			<span class="seats {seatsUrgency(training.seatsAvailable, training.seatsTotal)}">
				{training.seatsAvailable} seats left
			</span>
		</div>
		<span class="card-cta btn-primary">Reserve Spot</span>
	</div>
</a>

<style>
	.training-card {
		display: flex;
		flex-direction: column;
		padding: 1.5rem;
		text-decoration: none;
		color: inherit;
		height: 100%;
	}

	.card-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 1rem;
	}

	.date-badge {
		display: flex;
		align-items: center;
		gap: 0.375rem;
		font-size: 0.8125rem;
		font-weight: 600;
		color: var(--accent-primary);
	}

	.format-tag {
		font-size: 0.6875rem;
		font-weight: 500;
		padding: 0.25rem 0.625rem;
		border-radius: 2rem;
		background: var(--bg-elevated);
		color: var(--text-muted);
		border: 1px solid var(--border-default);
	}

	.card-title {
		font-size: 1.125rem;
		font-weight: 700;
		color: var(--text-primary);
		margin: 0 0 0.5rem;
		line-height: 1.3;
	}

	.card-desc {
		font-size: 0.875rem;
		line-height: 1.6;
		color: var(--text-secondary);
		margin: 0;
		flex: 1;
	}

	.card-details {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0.75rem;
		margin-top: 1.25rem;
		padding: 1rem;
		background: var(--bg-elevated);
		border-radius: 0.75rem;
	}

	.detail {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.detail-label {
		font-size: 0.625rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: var(--text-muted);
	}

	.detail-value {
		font-size: 0.8125rem;
		font-weight: 600;
		color: var(--text-primary);
	}

	.card-bottom {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 1.25rem;
		padding-top: 1rem;
		border-top: 1px solid var(--border-default);
		gap: 1rem;
	}

	.price-section {
		display: flex;
		flex-direction: column;
		gap: 0.125rem;
	}

	.price {
		font-size: 1.375rem;
		font-weight: 800;
		color: var(--text-primary);
		letter-spacing: -0.02em;
	}

	.seats {
		font-size: 0.75rem;
		font-weight: 600;
	}

	.seats.available {
		color: var(--accent-primary);
	}

	.seats.low {
		color: #f59e0b;
	}

	.seats.critical {
		color: #ef4444;
	}

	.card-cta {
		padding: 0.625rem 1.25rem;
		font-size: 0.8125rem;
		flex-shrink: 0;
	}
</style>
