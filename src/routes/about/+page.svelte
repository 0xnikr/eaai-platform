<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import TestimonialGrid from '$lib/components/TestimonialGrid.svelte';
	import CTABand from '$lib/components/CTABand.svelte';
	import { testimonials } from '$lib/data/siteContent';
	import { reveal } from '$lib/actions/reveal';

	const values = [
		{ title: 'Implementation Over Theory', desc: 'We deliver actionable frameworks, not abstract concepts. Every engagement produces implementable deliverables.' },
		{ title: 'Measurement First', desc: 'If you can\'t measure it, you can\'t manage it. We build KPI frameworks into every transformation program.' },
		{ title: 'Capability Building', desc: 'We don\'t create dependency. We install permanent AI capability inside your organization.' },
		{ title: 'Executive Alignment', desc: 'AI transformation fails without leadership alignment. We start at the top and build consensus throughout.' },
		{ title: 'Responsible AI', desc: 'Governance and ethics are not afterthoughts. We embed responsible AI practices from day one.' },
		{ title: 'Continuous Optimization', desc: 'AI transformation is not a one-time event. We build systems for ongoing measurement and improvement.' }
	];

	const stats = [
		{ value: '200+', label: 'Organizations Served' },
		{ value: '50,000+', label: 'Professionals Trained' },
		{ value: '94%', label: 'Program Satisfaction' },
		{ value: '15+', label: 'Years Combined Experience' }
	];
</script>

<svelte:head>
	<title>About — EAAI</title>
	<meta name="description" content="About the Executive AI Advisory Institute — our mission, values, and team." />
</svelte:head>

<Hero
	eyebrow="About EAAI"
	title="Building Organizational <span class='gradient'>AI Capability</span>"
	subtitle="We exist to help organizations move from AI ambition to AI reality — through structured strategy, training, implementation, and measurement."
	compact={true}
/>

<!-- Mission -->
<section class="section-spacing">
	<div class="container-main">
		<div class="mission-block" use:reveal>
			<h2>Our Mission</h2>
			<p class="mission-text">
				The Executive AI Advisory Institute was founded on a simple observation: most organizations know they need AI, but lack a structured path from strategy to measurable adoption. Generic workshops and consultant slide decks don't create lasting capability.
			</p>
			<p class="mission-text">
				We built EAAI to be the partner that stays through the entire journey — from initial assessment through implementation, measurement, and optimization. We combine executive advisory, structured training, certification, and hands-on implementation support into one integrated transformation methodology.
			</p>
			<p class="mission-text highlight">
				We do not just teach AI. We build organizational AI capability.
			</p>
		</div>
	</div>
</section>

<!-- Stats -->
<section class="section-spacing stats-section">
	<div class="container-main">
		<div class="stats-grid">
			{#each stats as s, i}
				<div class="stat-block" use:reveal={{ delay: i * 100 }}>
					<span class="stat-value">{s.value}</span>
					<span class="stat-label">{s.label}</span>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Values -->
<section class="section-spacing">
	<div class="container-main">
		<div class="section-header" use:reveal>
			<span class="eyebrow">Principles</span>
			<h2>What <span class="gradient-text">Drives Us</span></h2>
		</div>
		<div class="values-grid">
			{#each values as v, i}
				<div class="value-card premium-card" use:reveal={{ delay: i * 80 }}>
					<h3>{v.title}</h3>
					<p>{v.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Testimonials -->
<section class="section-spacing">
	<div class="container-main">
		<div class="section-header" use:reveal>
			<span class="eyebrow">Client Results</span>
			<h2>Trusted by <span class="gradient-text">Leaders</span></h2>
		</div>
		<TestimonialGrid testimonials={testimonials.slice(0, 3)} />
	</div>
</section>

<CTABand variant="gradient" title="Ready to Partner With Us?" description="Schedule a conversation to explore how we can support your AI transformation." primaryCta={{ label: 'Schedule Consultation', href: '/bookings' }} secondaryCta={{ label: 'View Programs', href: '/courses' }} />

<style>
	.section-header { text-align: center; margin-bottom: 3rem; }
	.section-header h2 { font-size: clamp(1.5rem, 4vw, 2.5rem); font-weight: 800; letter-spacing: -0.02em; color: var(--text-primary); margin: 0.75rem 0 0; }

	.mission-block { max-width: 720px; margin: 0 auto; }
	.mission-block h2 { font-size: clamp(1.5rem, 4vw, 2.5rem); font-weight: 800; letter-spacing: -0.02em; color: var(--text-primary); margin: 0 0 1.5rem; }
	.mission-text { font-size: 1.0625rem; line-height: 1.7; color: var(--text-secondary); margin: 0 0 1rem; }
	.mission-text.highlight { color: var(--accent-primary); font-weight: 600; font-size: 1.125rem; padding: 1.5rem; background: var(--accent-glow); border-radius: var(--radius-card); border: 1px solid color-mix(in srgb, var(--accent-primary) 20%, transparent); }

	.stats-section { background: var(--bg-surface); border-top: 1px solid var(--border-default); border-bottom: 1px solid var(--border-default); }
	.stats-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
	@media (min-width: 768px) { .stats-grid { grid-template-columns: repeat(4, 1fr); } }
	.stat-block { text-align: center; padding: 1.5rem; }
	.stat-value { display: block; font-size: clamp(2rem, 5vw, 3rem); font-weight: 800; letter-spacing: -0.03em; background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
	.stat-label { display: block; font-size: 0.875rem; font-weight: 500; color: var(--text-muted); margin-top: 0.25rem; }

	.values-grid { display: grid; grid-template-columns: 1fr; gap: 1rem; }
	@media (min-width: 640px) { .values-grid { grid-template-columns: repeat(2, 1fr); } }
	@media (min-width: 1024px) { .values-grid { grid-template-columns: repeat(3, 1fr); } }
	.value-card { padding: 1.75rem; }
	.value-card h3 { font-size: 1.0625rem; font-weight: 700; color: var(--text-primary); margin: 0 0 0.5rem; }
	.value-card p { font-size: 0.875rem; line-height: 1.6; color: var(--text-secondary); margin: 0; }
</style>
