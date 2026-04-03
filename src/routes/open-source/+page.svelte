<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import FilterChips from '$lib/components/FilterChips.svelte';
	import CTABand from '$lib/components/CTABand.svelte';
	import { openSourceProjects, openSourceCategories } from '$lib/data/siteContent';
	import { reveal } from '$lib/actions/reveal';

	let selectedCategory = $state('All');

	let filtered = $derived(
		selectedCategory === 'All' ? openSourceProjects : openSourceProjects.filter((p) => p.category === selectedCategory)
	);

	let featured = $derived(openSourceProjects.filter((p) => p.featured));
</script>

<svelte:head>
	<title>Open Source — EAAI</title>
	<meta name="description" content="Open-source AI frameworks, templates, and tools from the Executive AI Advisory Institute." />
</svelte:head>

<Hero
	eyebrow="Open Source"
	title="AI Resources for the <span class='gradient'>Community</span>"
	subtitle="Frameworks, templates, tools, and guides — built from our advisory practice and shared freely to accelerate responsible AI adoption."
	primaryCta={{ label: 'Browse Resources', href: '#resources' }}
	secondaryCta={{ label: 'View on GitHub', href: '#' }}
	compact={true}
/>

<!-- Featured -->
<section class="section-spacing">
	<div class="container-main">
		<div class="section-header" use:reveal>
			<span class="eyebrow">Featured</span>
			<h2>Featured <span class="gradient-text">Projects</span></h2>
		</div>
		<div class="featured-grid">
			{#each featured as proj, i}
				<a href={proj.githubUrl} class="featured-card premium-card" target="_blank" rel="noopener" use:reveal={{ delay: i * 100 }}>
					<div class="proj-top">
						<span class="proj-lang">{proj.language}</span>
						<span class="proj-stars">⭐ {proj.stars.toLocaleString()}</span>
					</div>
					<h3>{proj.title}</h3>
					<p>{proj.description}</p>
					<div class="proj-tags">
						{#each proj.tags as tag}
							<span class="proj-tag">{tag}</span>
						{/each}
					</div>
					<span class="proj-cta">View on GitHub →</span>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- All Resources -->
<section class="section-spacing catalog-section" id="resources">
	<div class="container-main">
		<div class="section-header" use:reveal>
			<span class="eyebrow">All Resources</span>
			<h2>Open Source <span class="gradient-text">Catalog</span></h2>
		</div>
		<div class="filter-row">
			<FilterChips items={openSourceCategories} selected={selectedCategory} onSelect={(cat) => (selectedCategory = cat)} />
		</div>
		<div class="resource-grid">
			{#each filtered as proj (proj.slug)}
				<a href={proj.githubUrl} class="resource-card premium-card" target="_blank" rel="noopener">
					<div class="proj-top">
						<span class="proj-lang">{proj.language}</span>
						<span class="proj-stars">⭐ {proj.stars.toLocaleString()}</span>
					</div>
					<h3>{proj.title}</h3>
					<p>{proj.description}</p>
					<div class="proj-tags">
						{#each proj.tags as tag}
							<span class="proj-tag">{tag}</span>
						{/each}
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<CTABand variant="gradient" title="Want to Contribute or Collaborate?" description="Our open-source projects welcome contributions. Join the community building better AI adoption tools." primaryCta={{ label: 'GitHub', href: '#' }} secondaryCta={{ label: 'Contact Us', href: '/contact' }} />

<style>
	.section-header { text-align: center; margin-bottom: 3rem; }
	.section-header h2 { font-size: clamp(1.5rem, 4vw, 2.5rem); font-weight: 800; letter-spacing: -0.02em; color: var(--text-primary); margin: 0.75rem 0 0; }

	.featured-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
	@media (min-width: 768px) { .featured-grid { grid-template-columns: repeat(3, 1fr); } }

	.featured-card, .resource-card { padding: 1.75rem; display: flex; flex-direction: column; text-decoration: none; color: inherit; }

	.proj-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; }
	.proj-lang { font-size: 0.6875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; color: var(--accent-primary); padding: 0.1875rem 0.5rem; background: var(--accent-glow); border-radius: 0.25rem; }
	.proj-stars { font-size: 0.8125rem; color: var(--text-muted); }

	.featured-card h3, .resource-card h3 { font-size: 1.125rem; font-weight: 700; color: var(--text-primary); margin: 0 0 0.5rem; }
	.featured-card p, .resource-card p { font-size: 0.875rem; line-height: 1.6; color: var(--text-secondary); margin: 0; flex: 1; }

	.proj-tags { display: flex; flex-wrap: wrap; gap: 0.375rem; margin-top: 1rem; }
	.proj-tag { font-size: 0.6875rem; padding: 0.1875rem 0.5rem; border-radius: 1rem; background: var(--bg-elevated); color: var(--text-muted); border: 1px solid var(--border-default); }

	.proj-cta { font-size: 0.8125rem; font-weight: 600; color: var(--accent-primary); margin-top: 1.25rem; transition: transform 0.2s ease; }
	.featured-card:hover .proj-cta { transform: translateX(4px); }

	.catalog-section { background: var(--bg-surface); border-top: 1px solid var(--border-default); border-bottom: 1px solid var(--border-default); }
	.filter-row { margin-bottom: 2rem; }
	.resource-grid { display: grid; grid-template-columns: 1fr; gap: 1.25rem; }
	@media (min-width: 640px) { .resource-grid { grid-template-columns: repeat(2, 1fr); } }
	@media (min-width: 1024px) { .resource-grid { grid-template-columns: repeat(3, 1fr); } }
</style>
