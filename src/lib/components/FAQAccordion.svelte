<script lang="ts">
	import type { FAQ } from '$lib/types';

	interface Props {
		items: FAQ[];
	}

	let { items }: Props = $props();
	let openIndex = $state<number | null>(null);

	function toggle(index: number) {
		openIndex = openIndex === index ? null : index;
	}
</script>

<div class="faq-list" role="list">
	{#each items as item, i}
		<div class="faq-item" class:open={openIndex === i} role="listitem">
			<button
				class="faq-trigger"
				onclick={() => toggle(i)}
				aria-expanded={openIndex === i}
				id="faq-trigger-{i}"
			>
				<span class="faq-question">{item.question}</span>
				<span class="faq-icon">
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<line x1="12" y1="5" x2="12" y2="19" class="v-line" />
						<line x1="5" y1="12" x2="19" y2="12" />
					</svg>
				</span>
			</button>
			{#if openIndex === i}
				<div class="faq-content" role="region" aria-labelledby="faq-trigger-{i}">
					<p>{item.answer}</p>
				</div>
			{/if}
		</div>
	{/each}
</div>

<style>
	.faq-list {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.faq-item {
		background: var(--bg-card);
		border: 1px solid var(--border-default);
		border-radius: var(--radius-card);
		overflow: hidden;
		transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.faq-item:hover {
		border-color: var(--border-light);
	}

	.faq-item.open {
		border-color: var(--accent-primary);
		box-shadow: 0 0 20px var(--accent-glow);
	}

	.faq-trigger {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 1.25rem 1.5rem;
		background: none;
		border: none;
		cursor: pointer;
		text-align: left;
		color: var(--text-primary);
		font-size: 1rem;
		font-weight: 600;
		line-height: 1.4;
	}

	@media (max-width: 639px) {
		.faq-trigger {
			padding: 1rem 1.25rem;
			font-size: 0.9375rem;
		}
	}

	.faq-icon {
		flex-shrink: 0;
		color: var(--text-muted);
		transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.faq-item.open .faq-icon {
		color: var(--accent-primary);
	}

	.faq-icon .v-line {
		transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.faq-item.open .faq-icon .v-line {
		transform: scaleY(0);
		transform-origin: center;
	}

	.faq-content {
		padding: 0 1.5rem 1.25rem;
		animation: faqOpen 0.3s cubic-bezier(0.16, 1, 0.3, 1);
	}

	@media (max-width: 639px) {
		.faq-content {
			padding: 0 1.25rem 1rem;
		}
	}

	.faq-content p {
		margin: 0;
		font-size: 0.9375rem;
		line-height: 1.7;
		color: var(--text-secondary);
	}

	@keyframes faqOpen {
		from {
			opacity: 0;
			transform: translateY(-8px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
