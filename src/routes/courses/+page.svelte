<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import CourseCard from '$lib/components/CourseCard.svelte';
	import FilterChips from '$lib/components/FilterChips.svelte';
	import CTABand from '$lib/components/CTABand.svelte';
	import { courses, courseCategories } from '$lib/data/courses';
	import { reveal } from '$lib/actions/reveal';

	let selectedCategory = $state('All');

	let filtered = $derived(
		selectedCategory === 'All' ? courses : courses.filter((c) => c.category === selectedCategory)
	);

	let featured = $derived(courses.filter((c) => c.featured));
</script>

<svelte:head>
	<title>Courses — EAAI</title>
	<meta name="description" content="Self-paced AI courses for executives, leaders, and teams. Strategy, implementation, governance, measurement, and more." />
</svelte:head>

<Hero
	eyebrow="On-Demand Courses"
	title="Learn AI Strategy <span class='gradient'>At Your Pace</span>"
	subtitle="Structured, premium courses designed for professionals who need actionable AI competency — not theory lectures."
	primaryCta={{ label: 'Browse Courses', href: '#catalog' }}
	secondaryCta={{ label: 'Enterprise Access', href: '/bookings' }}
	compact={true}
/>

<!-- Featured -->
<section class="section-spacing" id="featured">
	<div class="container-main">
		<div class="section-header" use:reveal>
			<span class="eyebrow">Featured</span>
			<h2>Featured <span class="gradient-text">Learning Paths</span></h2>
		</div>
		<div class="course-grid featured-grid">
			{#each featured as course, i}
				<div use:reveal={{ delay: i * 100 }}>
					<CourseCard {course} />
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Full Catalog -->
<section class="section-spacing catalog-section" id="catalog">
	<div class="container-main">
		<div class="section-header" use:reveal>
			<span class="eyebrow">Course Catalog</span>
			<h2>All <span class="gradient-text">Courses</span></h2>
		</div>
		<div class="filter-row">
			<FilterChips items={courseCategories} selected={selectedCategory} onSelect={(cat) => (selectedCategory = cat)} />
		</div>
		<div class="course-grid">
			{#each filtered as course (course.slug)}
				<CourseCard {course} />
			{/each}
		</div>
		{#if filtered.length === 0}
			<p class="no-results">No courses found in this category.</p>
		{/if}
	</div>
</section>

<CTABand variant="gradient" title="Need Custom Training for Your Organization?" description="We design bespoke learning programs aligned with your transformation strategy." primaryCta={{ label: 'Request Custom Program', href: '/bookings' }} secondaryCta={{ label: 'View Live Training', href: '/live-training' }} />

<style>
	.section-header { text-align: center; margin-bottom: 3rem; }
	.section-header h2 { font-size: clamp(1.5rem, 4vw, 2.5rem); font-weight: 800; letter-spacing: -0.02em; color: var(--text-primary); margin: 0.75rem 0 0; }

	.course-grid {
		display: grid; grid-template-columns: 1fr; gap: 1.25rem;
	}
	@media (min-width: 640px) { .course-grid { grid-template-columns: repeat(2, 1fr); } }
	@media (min-width: 1024px) { .course-grid { grid-template-columns: repeat(3, 1fr); } }

	.featured-grid {
		grid-template-columns: 1fr;
	}
	@media (min-width: 640px) { .featured-grid { grid-template-columns: repeat(2, 1fr); } }

	.catalog-section {
		background: var(--bg-surface); border-top: 1px solid var(--border-default); border-bottom: 1px solid var(--border-default);
	}

	.filter-row { margin-bottom: 2rem; }

	.no-results {
		text-align: center; color: var(--text-muted); font-size: 1rem; padding: 3rem 0;
	}
</style>
