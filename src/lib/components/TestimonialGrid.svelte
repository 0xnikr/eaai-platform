<script lang="ts">
	import type { Testimonial } from '$lib/types';

	interface Props {
		testimonials: Testimonial[];
	}

	let { testimonials }: Props = $props();
</script>

<div class="testimonial-grid">
	{#each testimonials as t}
		<div class="testimonial-card premium-card">
			<div class="quote-icon">
				<svg width="32" height="32" viewBox="0 0 24 24" fill="var(--accent-primary)" opacity="0.3">
					<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z"/>
				</svg>
			</div>
			<blockquote class="quote-text">{t.quote}</blockquote>
			<div class="quote-author">
				<div class="author-avatar">
					{t.name.charAt(0)}
				</div>
				<div class="author-info">
					<span class="author-name">{t.name}</span>
					<span class="author-title">{t.title}, {t.company}</span>
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
	.testimonial-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.25rem;
	}

	@media (min-width: 640px) {
		.testimonial-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 1024px) {
		.testimonial-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	.testimonial-card {
		padding: 1.75rem;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.quote-icon {
		flex-shrink: 0;
	}

	.quote-text {
		margin: 0;
		font-size: 0.9375rem;
		line-height: 1.7;
		color: var(--text-secondary);
		flex: 1;
	}

	.quote-author {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding-top: 0.75rem;
		border-top: 1px solid var(--border-default);
	}

	.author-avatar {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--text-inverse);
		font-weight: 700;
		font-size: 0.875rem;
		flex-shrink: 0;
	}

	.author-info {
		display: flex;
		flex-direction: column;
	}

	.author-name {
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--text-primary);
	}

	.author-title {
		font-size: 0.75rem;
		color: var(--text-muted);
	}
</style>
