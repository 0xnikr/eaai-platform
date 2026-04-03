<script lang="ts">
	import type { Course } from '$lib/types';

	interface Props {
		course: Course;
	}

	let { course }: Props = $props();

	function levelColor(level: string): string {
		switch (level) {
			case 'Beginner': return '#22c55e';
			case 'Intermediate': return '#3b82f6';
			case 'Advanced': return '#f59e0b';
			case 'Executive': return '#a855f7';
			default: return 'var(--accent-primary)';
		}
	}
</script>

<a href="/courses/{course.slug}" class="course-card premium-card">
	<div class="card-header">
		<div class="card-meta">
			<span class="level-badge" style="--level-color: {levelColor(course.level)}">
				{course.level}
			</span>
			<span class="format-badge">{course.format}</span>
		</div>
		{#if course.featured}
			<span class="featured-badge">Featured</span>
		{/if}
	</div>

	<h3 class="card-title">{course.title}</h3>
	<p class="card-desc">{course.description}</p>

	<div class="card-stats">
		<span class="stat">
			<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/></svg>
			{course.modules} modules
		</span>
		<span class="stat">
			<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
			{course.duration}
		</span>
	</div>

	<div class="card-tags">
		{#each course.tags.slice(0, 3) as tag}
			<span class="tag">{tag}</span>
		{/each}
	</div>

	<div class="card-footer">
		{#if course.price}
			<span class="price">${course.price.toLocaleString()}</span>
		{/if}
		<span class="card-cta">View Course →</span>
	</div>
</a>

<style>
	.course-card {
		display: flex;
		flex-direction: column;
		padding: 1.5rem;
		text-decoration: none;
		color: inherit;
		height: 100%;
	}

	.card-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	.card-meta {
		display: flex;
		gap: 0.5rem;
	}

	.level-badge {
		font-size: 0.6875rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		padding: 0.25rem 0.625rem;
		border-radius: 2rem;
		color: var(--level-color);
		background: color-mix(in srgb, var(--level-color) 12%, transparent);
		border: 1px solid color-mix(in srgb, var(--level-color) 24%, transparent);
	}

	.format-badge {
		font-size: 0.6875rem;
		font-weight: 500;
		padding: 0.25rem 0.625rem;
		border-radius: 2rem;
		color: var(--text-muted);
		background: var(--bg-elevated);
		border: 1px solid var(--border-default);
	}

	.featured-badge {
		font-size: 0.625rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		padding: 0.25rem 0.5rem;
		border-radius: 0.25rem;
		background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
		color: var(--text-inverse);
	}

	.card-title {
		font-size: 1.125rem;
		font-weight: 700;
		letter-spacing: -0.01em;
		color: var(--text-primary);
		margin: 0 0 0.625rem;
		line-height: 1.3;
	}

	.card-desc {
		font-size: 0.875rem;
		line-height: 1.6;
		color: var(--text-secondary);
		margin: 0;
		flex: 1;
	}

	.card-stats {
		display: flex;
		gap: 1.25rem;
		margin-top: 1rem;
		padding-top: 1rem;
		border-top: 1px solid var(--border-default);
	}

	.stat {
		display: flex;
		align-items: center;
		gap: 0.375rem;
		font-size: 0.8125rem;
		color: var(--text-muted);
	}

	.card-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.375rem;
		margin-top: 0.75rem;
	}

	.tag {
		font-size: 0.6875rem;
		font-weight: 500;
		padding: 0.1875rem 0.5rem;
		border-radius: 1rem;
		background: var(--bg-elevated);
		color: var(--text-muted);
		border: 1px solid var(--border-default);
	}

	.card-footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 1.25rem;
		padding-top: 1rem;
		border-top: 1px solid var(--border-default);
	}

	.price {
		font-size: 1.25rem;
		font-weight: 800;
		color: var(--text-primary);
		letter-spacing: -0.02em;
	}

	.card-cta {
		font-size: 0.8125rem;
		font-weight: 600;
		color: var(--accent-primary);
		transition: all 0.2s ease;
	}

	.course-card:hover .card-cta {
		transform: translateX(4px);
	}
</style>
