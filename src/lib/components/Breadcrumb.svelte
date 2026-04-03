<script lang="ts">
	interface Props {
		items: { label: string; href?: string }[];
	}

	let { items }: Props = $props();
</script>

<nav class="breadcrumb" aria-label="Breadcrumb">
	<ol>
		{#each items as item, i}
			<li>
				{#if item.href && i < items.length - 1}
					<a href={item.href}>{item.label}</a>
				{:else}
					<span class="current">{item.label}</span>
				{/if}
			</li>
			{#if i < items.length - 1}
				<li class="separator" aria-hidden="true">
					<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
				</li>
			{/if}
		{/each}
	</ol>
</nav>

<style>
	.breadcrumb ol {
		display: flex;
		align-items: center;
		gap: 0.375rem;
		list-style: none;
		padding: 0;
		margin: 0;
		flex-wrap: wrap;
	}

	.breadcrumb a {
		font-size: 0.8125rem;
		color: var(--text-muted);
		text-decoration: none;
		transition: color 0.2s ease;
	}

	.breadcrumb a:hover {
		color: var(--accent-primary);
	}

	.separator {
		display: flex;
		color: var(--text-muted);
		opacity: 0.5;
	}

	.current {
		font-size: 0.8125rem;
		color: var(--text-secondary);
		font-weight: 500;
	}
</style>
