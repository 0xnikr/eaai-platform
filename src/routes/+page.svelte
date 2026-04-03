<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import PinnedScroll from '$lib/components/PinnedScroll.svelte';
	import ComparisonTable from '$lib/components/ComparisonTable.svelte';
	import TestimonialGrid from '$lib/components/TestimonialGrid.svelte';
	import FAQAccordion from '$lib/components/FAQAccordion.svelte';
	import CTABand from '$lib/components/CTABand.svelte';
	import { testimonials, homeFaqs, comparisonData } from '$lib/data/siteContent';
	import { reveal } from '$lib/actions/reveal';

	const pillars = [
		{ icon: '🎯', title: 'Strategy', desc: 'AI readiness assessment and transformation roadmaps' },
		{ icon: '📚', title: 'Training', desc: 'Executive, leadership, and workforce AI enablement' },
		{ icon: '⚡', title: 'Transformation', desc: 'Implementation support from pilot to production' },
		{ icon: '🏆', title: 'Certification', desc: 'Validated competency across AI leadership domains' },
		{ icon: '📊', title: 'Measurement', desc: 'KPI frameworks and adoption tracking dashboards' }
	];

	const offerCards = [
		{ title: 'Executive Advisory', desc: 'Strategic guidance from experienced AI transformation leaders', href: '/advisory', icon: '🏢' },
		{ title: 'Leadership Programs', desc: 'Tailored programs for C-suite and department leaders', href: '/leadership-programs', icon: '👔' },
		{ title: 'Certification', desc: 'Structured certification pathways for individuals and teams', href: '/certification', icon: '🏆' },
		{ title: 'On-Demand Courses', desc: 'Self-paced learning from foundational to advanced topics', href: '/courses', icon: '📚' },
		{ title: 'Live Training', desc: 'Expert-led workshops and intensive cohort programs', href: '/live-training', icon: '🎓' },
		{ title: 'Open Source', desc: 'Frameworks, templates, and tools for the AI community', href: '/open-source', icon: '🔓' },
		{ title: 'Enterprise Rollout', desc: 'End-to-end AI deployment and scaling support', href: '/advisory', icon: '🚀' },
		{ title: 'Adoption Measurement', desc: 'KPI dashboards and impact tracking systems', href: '/advisory', icon: '📈' }
	];

	const processSteps = [
		{ step: '01', title: 'Assess', desc: 'Evaluate organizational AI readiness across strategy, talent, data, technology, and culture.' },
		{ step: '02', title: 'Align', desc: 'Build executive consensus, define priorities, and create a shared transformation vision.' },
		{ step: '03', title: 'Enable', desc: 'Train leadership and teams through structured certification and capability programs.' },
		{ step: '04', title: 'Deploy', desc: 'Implement AI systems with change management, governance, and cross-functional support.' },
		{ step: '05', title: 'Measure', desc: 'Track adoption, quantify impact, and optimize through continuous measurement.' }
	];

	const metrics = [
		{ value: '340%', label: 'Average ROI', desc: 'on AI initiatives guided by our methodology' },
		{ value: '73%', label: 'Adoption Rate', desc: 'average workforce AI adoption within year one' },
		{ value: '94%', label: 'Completion Rate', desc: 'across all training and certification programs' },
		{ value: '$2.4M', label: 'Cost Savings', desc: 'average annual savings from AI optimization' }
	];
</script>

<svelte:head>
	<title>Executive AI Advisory Institute — Building Organizational AI Capability</title>
</svelte:head>

<!-- HERO -->
<Hero
	eyebrow="Executive AI Advisory Institute"
	title="We Build Organizational <span class='gradient'>AI Capability</span>"
	subtitle="Strategy. Training. Implementation. Certification. Measurement. A comprehensive approach to AI transformation that delivers measurable outcomes."
	primaryCta={{ label: 'Book Strategy Call', href: '/bookings' }}
	secondaryCta={{ label: 'Explore Programs', href: '/courses' }}
	showStars={true}
>
	<!-- Trust chips -->
	<div class="trust-row">
		<div class="trust-chip">
			<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
			Enterprise-Grade
		</div>
		<div class="trust-chip">
			<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
			Implementation Focused
		</div>
		<div class="trust-chip">
			<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
			Measurable Outcomes
		</div>
	</div>
</Hero>

<!-- VALUE PROP PILLARS -->
<section class="section-spacing" id="pillars">
	<div class="container-main">
		<div class="pillars-grid">
			{#each pillars as pillar, i}
				<div class="pillar-card" use:reveal={{ delay: i * 80 }}>
					<span class="pillar-icon">{pillar.icon}</span>
					<h3 class="pillar-title">{pillar.title}</h3>
					<p class="pillar-desc">{pillar.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- PINNED SCROLL TRANSFORMATION -->
<PinnedScroll />

<!-- OFFER PILLARS GRID -->
<section class="section-spacing" id="offers">
	<div class="container-main">
		<div class="section-header" use:reveal>
			<span class="eyebrow">What We Offer</span>
			<h2>Comprehensive AI <span class="gradient-text">Transformation Services</span></h2>
			<p class="section-subtitle">From strategic advisory to hands-on implementation — every capability your organization needs to succeed with AI.</p>
		</div>
		<div class="offers-grid">
			{#each offerCards as card, i}
				<a href={card.href} class="offer-card premium-card" use:reveal={{ delay: i * 80 }}>
					<span class="offer-icon">{card.icon}</span>
					<h3>{card.title}</h3>
					<p>{card.desc}</p>
					<span class="offer-arrow">→</span>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- HOW IT WORKS -->
<section class="section-spacing how-section" id="process">
	<div class="container-main">
		<div class="section-header" use:reveal>
			<span class="eyebrow">Our Process</span>
			<h2>From Assessment to <span class="gradient-text">Measurable Impact</span></h2>
		</div>
		<div class="process-grid">
			{#each processSteps as step, i}
				<div class="process-card" use:reveal={{ delay: i * 100 }}>
					<span class="step-number">{step.step}</span>
					<h3>{step.title}</h3>
					<p>{step.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- MEASUREMENT / OUTCOMES -->
<section class="section-spacing metrics-section" id="metrics">
	<div class="container-main">
		<div class="section-header" use:reveal>
			<span class="eyebrow">Measurable Outcomes</span>
			<h2>We Don't Just Train — <span class="gradient-text">We Measure Impact</span></h2>
			<p class="section-subtitle">Every engagement includes structured measurement. Our clients track adoption, quantify ROI, and prove AI value to their boards.</p>
		</div>
		<div class="metrics-grid">
			{#each metrics as metric, i}
				<div class="metric-block" use:reveal={{ delay: i * 120 }}>
					<span class="metric-value">{metric.value}</span>
					<span class="metric-label">{metric.label}</span>
					<span class="metric-desc">{metric.desc}</span>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- COMPARISON TABLE -->
<section class="section-spacing" id="comparison">
	<div class="container-main">
		<div class="section-header" use:reveal>
			<span class="eyebrow">Why EAAI</span>
			<h2>A Different Kind of <span class="gradient-text">AI Partner</span></h2>
			<p class="section-subtitle">We go beyond generic workshops and slide decks. Our comprehensive approach delivers what others cannot.</p>
		</div>
		<div use:reveal={{ delay: 150 }}>
			<ComparisonTable rows={comparisonData} />
		</div>
	</div>
</section>

<!-- TESTIMONIALS -->
<section class="section-spacing" id="testimonials">
	<div class="container-main">
		<div class="section-header" use:reveal>
			<span class="eyebrow">Client Results</span>
			<h2>Trusted by <span class="gradient-text">Industry Leaders</span></h2>
		</div>
		<div use:reveal={{ delay: 100 }}>
			<TestimonialGrid testimonials={testimonials} />
		</div>
	</div>
</section>

<!-- FAQ -->
<section class="section-spacing" id="faq">
	<div class="container-main">
		<div class="section-header" use:reveal>
			<span class="eyebrow">Questions</span>
			<h2>Frequently Asked <span class="gradient-text">Questions</span></h2>
		</div>
		<div class="faq-container" use:reveal={{ delay: 100 }}>
			<FAQAccordion items={homeFaqs} />
		</div>
	</div>
</section>

<!-- FINAL CTA -->
<CTABand
	variant="gradient"
	eyebrow="Ready to Transform?"
	title="Start Your AI Transformation Journey"
	description="Schedule a complimentary strategy consultation to assess your organization's AI readiness and transformation potential."
	primaryCta={{ label: 'Book Strategy Call', href: '/bookings' }}
	secondaryCta={{ label: 'Explore Programs', href: '/courses' }}
/>

<style>
	/* Trust Row */
	.trust-row {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.75rem;
		margin-top: 2.5rem;
		animation: fadeIn 0.6s ease 0.4s both;
	}

	.trust-chip {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
		font-size: 0.8125rem;
		font-weight: 500;
		color: var(--text-secondary);
		background: var(--bg-elevated);
		border: 1px solid var(--border-default);
		border-radius: 2rem;
	}

	/* Section Header */
	.section-header {
		text-align: center;
		margin-bottom: 3rem;
	}

	.section-header h2 {
		font-size: clamp(1.5rem, 4vw, 2.5rem);
		font-weight: 800;
		letter-spacing: -0.02em;
		color: var(--text-primary);
		margin: 0.75rem 0 0;
	}

	.section-subtitle {
		font-size: 1rem;
		line-height: 1.6;
		color: var(--text-secondary);
		max-width: 600px;
		margin: 1rem auto 0;
	}

	/* Pillars Grid */
	.pillars-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
	}

	@media (min-width: 640px) {
		.pillars-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (min-width: 1024px) {
		.pillars-grid {
			grid-template-columns: repeat(5, 1fr);
		}
	}

	.pillar-card {
		text-align: center;
		padding: 1.5rem 1rem;
		background: var(--bg-card);
		border: 1px solid var(--border-default);
		border-radius: var(--radius-card);
		transition: all 0.3s ease;
	}

	.pillar-card:hover {
		border-color: var(--accent-primary);
		transform: translateY(-2px);
	}

	.pillar-icon {
		font-size: 2rem;
		display: block;
		margin-bottom: 0.75rem;
	}

	.pillar-title {
		font-size: 0.9375rem;
		font-weight: 700;
		color: var(--text-primary);
		margin: 0 0 0.375rem;
	}

	.pillar-desc {
		font-size: 0.8125rem;
		color: var(--text-muted);
		margin: 0;
		line-height: 1.4;
	}

	/* Offers Grid */
	.offers-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
	}

	@media (min-width: 480px) {
		.offers-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 1024px) {
		.offers-grid {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	.offer-card {
		display: flex;
		flex-direction: column;
		padding: 1.5rem;
		text-decoration: none;
	}

	.offer-icon {
		font-size: 1.75rem;
		margin-bottom: 0.75rem;
	}

	.offer-card h3 {
		font-size: 1rem;
		font-weight: 700;
		color: var(--text-primary);
		margin: 0 0 0.375rem;
	}

	.offer-card p {
		font-size: 0.8125rem;
		color: var(--text-secondary);
		margin: 0;
		line-height: 1.5;
		flex: 1;
	}

	.offer-arrow {
		display: inline-block;
		margin-top: 1rem;
		color: var(--accent-primary);
		font-weight: 600;
		transition: transform 0.2s ease;
	}

	.offer-card:hover .offer-arrow {
		transform: translateX(4px);
	}

	/* Process Grid */
	.how-section {
		background: var(--bg-surface);
		border-top: 1px solid var(--border-default);
		border-bottom: 1px solid var(--border-default);
	}

	.process-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.5rem;
	}

	@media (min-width: 640px) {
		.process-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 1024px) {
		.process-grid {
			grid-template-columns: repeat(5, 1fr);
			gap: 1.25rem;
		}
	}

	.process-card {
		padding: 1.5rem;
		background: var(--bg-card);
		border: 1px solid var(--border-default);
		border-radius: var(--radius-card);
	}

	.step-number {
		font-size: 2rem;
		font-weight: 800;
		background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.process-card h3 {
		font-size: 1.125rem;
		font-weight: 700;
		color: var(--text-primary);
		margin: 0.5rem 0;
	}

	.process-card p {
		font-size: 0.8125rem;
		color: var(--text-secondary);
		margin: 0;
		line-height: 1.5;
	}

	/* Metrics */
	.metrics-section {
		background: var(--bg-surface);
		border-top: 1px solid var(--border-default);
		border-bottom: 1px solid var(--border-default);
	}

	.metrics-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
	}

	@media (min-width: 768px) {
		.metrics-grid {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	.metric-block {
		text-align: center;
		padding: 2rem 1rem;
		background: var(--bg-card);
		border: 1px solid var(--border-default);
		border-radius: var(--radius-card);
	}

	.metric-value {
		display: block;
		font-size: clamp(2rem, 5vw, 3rem);
		font-weight: 800;
		letter-spacing: -0.03em;
		background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.metric-label {
		display: block;
		font-size: 0.875rem;
		font-weight: 700;
		color: var(--text-primary);
		margin-top: 0.25rem;
	}

	.metric-desc {
		display: block;
		font-size: 0.75rem;
		color: var(--text-muted);
		margin-top: 0.25rem;
		line-height: 1.4;
	}

	/* FAQ */
	.faq-container {
		max-width: 800px;
		margin: 0 auto;
	}
</style>
