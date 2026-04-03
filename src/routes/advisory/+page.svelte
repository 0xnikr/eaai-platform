<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import FAQAccordion from '$lib/components/FAQAccordion.svelte';
	import ComparisonTable from '$lib/components/ComparisonTable.svelte';
	import PricingCards from '$lib/components/PricingCards.svelte';
	import CTABand from '$lib/components/CTABand.svelte';
	import { comparisonData } from '$lib/data/siteContent';
	import { reveal } from '$lib/actions/reveal';
	import type { PricingTier, FAQ } from '$lib/types';

	const deliverables = [
		{ title: 'AI Readiness Assessment', desc: 'Comprehensive evaluation of organizational readiness across strategy, data, talent, technology, governance, and culture.', icon: '🔍' },
		{ title: 'Use Case Portfolio', desc: 'Prioritized inventory of high-impact AI applications with ROI projections and implementation feasibility scores.', icon: '📋' },
		{ title: 'Transformation Roadmap', desc: '12-month implementation plan with milestones, resource requirements, risk mitigation, and decision gates.', icon: '🗺️' },
		{ title: 'Governance Framework', desc: 'Enterprise AI governance policies, risk management protocols, and compliance documentation.', icon: '🏛️' },
		{ title: 'KPI Dashboard Design', desc: 'Custom measurement framework for tracking adoption, impact, and return on AI investment.', icon: '📊' },
		{ title: 'Capability Architecture', desc: 'Training and certification plan to build organization-wide AI competency at every level.', icon: '🏗️' }
	];

	const tiers: PricingTier[] = [
		{
			name: 'Advisory Sprint',
			description: 'Focused 4–6 week engagement for organizations needing a clear AI strategy and roadmap.',
			price: '$25,000',
			priceDetail: '4–6 week engagement',
			features: [
				'AI Readiness Assessment',
				'Use Case Identification & Prioritization',
				'90-Day Action Plan',
				'Executive Workshop (1 day)',
				'Governance Framework Template',
				'30-Day Post-Sprint Support'
			],
			cta: 'Schedule Consultation'
		},
		{
			name: 'Transformation Engagement',
			description: 'Comprehensive 3–6 month partnership for full-scale AI transformation.',
			price: '$75,000',
			priceDetail: '3–6 month engagement',
			features: [
				'Everything in Advisory Sprint',
				'12-Month Transformation Roadmap',
				'Implementation Support & Coaching',
				'Leadership Training Program',
				'Workforce Enablement Planning',
				'KPI Framework & Dashboard Design',
				'Monthly Strategic Alignment Sessions',
				'Change Management Playbook'
			],
			highlighted: true,
			cta: 'Schedule Consultation'
		},
		{
			name: 'Enterprise Partnership',
			description: 'Ongoing strategic partnership for large-scale, multi-department AI transformation.',
			price: 'Custom',
			priceDetail: '12+ month partnership',
			features: [
				'Everything in Transformation Engagement',
				'Dedicated AI Strategy Advisor',
				'Multi-Department Rollout Support',
				'Enterprise Certification Program',
				'AI Center of Excellence Design',
				'Board-Level Reporting & Communication',
				'Continuous Optimization & Expansion',
				'Executive Peer Network Access',
				'Priority Workshop Scheduling'
			],
			cta: 'Contact Us'
		}
	];

	const faqs: FAQ[] = [
		{
			question: 'What industries do you serve?',
			answer: 'We work across all industries including financial services, healthcare, manufacturing, technology, energy, professional services, education, and government. Our frameworks are industry-agnostic but our advisors bring relevant sector expertise.'
		},
		{
			question: 'How do you measure the success of an advisory engagement?',
			answer: 'Every engagement includes defined success metrics and a KPI framework. We track AI readiness improvement, use case implementation progress, adoption rates, and quantifiable business impact. Clients receive structured monthly reports.'
		},
		{
			question: 'Can we start with a smaller engagement?',
			answer: 'Yes. Our Advisory Sprint is designed as an entry point. Many clients begin with a sprint and expand to a full Transformation Engagement based on results. We also offer standalone workshops and assessments.'
		},
		{
			question: 'Who leads the advisory engagements?',
			answer: 'All engagements are led by senior advisors with 15+ years of enterprise AI and digital transformation experience. We do not delegate to junior consultants.'
		},
		{
			question: 'What makes your advisory approach different?',
			answer: 'We combine strategy with execution. Most advisors deliver a roadmap and leave. We stay through implementation, train your teams, build measurement systems, and optimize continuously. Our goal is to build internal AI capability, not create dependency.'
		}
	];
</script>

<svelte:head>
	<title>Executive Advisory — EAAI</title>
	<meta name="description" content="Strategic AI advisory for organizations ready to transform. From readiness assessment to implementation support and measurement." />
</svelte:head>

<Hero
	eyebrow="Executive Advisory"
	title="AI Transformation <span class='gradient'>Built to Last</span>"
	subtitle="We don't just advise — we install AI capability inside your organization. Strategy, implementation, governance, and measurement in one integrated engagement."
	primaryCta={{ label: 'Schedule Consultation', href: '/bookings' }}
	secondaryCta={{ label: 'See Engagement Models', href: '#tiers' }}
	compact={true}
/>

<!-- What Gets Installed -->
<section class="section-spacing" id="deliverables">
	<div class="container-main">
		<div class="section-header" use:reveal>
			<span class="eyebrow">Advisory Deliverables</span>
			<h2>What Gets Installed Inside <span class="gradient-text">Your Organization</span></h2>
			<p class="section-subtitle">Every advisory engagement delivers tangible, implementation-ready output — not just recommendations.</p>
		</div>
		<div class="deliverables-grid">
			{#each deliverables as d, i}
				<div class="deliverable-card premium-card" use:reveal={{ delay: i * 80 }}>
					<span class="d-icon">{d.icon}</span>
					<h3>{d.title}</h3>
					<p>{d.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Engagement Tiers -->
<section class="section-spacing tier-section" id="tiers">
	<div class="container-main">
		<div class="section-header" use:reveal>
			<span class="eyebrow">Engagement Models</span>
			<h2>Choose Your <span class="gradient-text">Transformation Path</span></h2>
			<p class="section-subtitle">From focused strategy sprints to comprehensive enterprise partnerships.</p>
		</div>
		<div use:reveal={{ delay: 150 }}>
			<PricingCards tiers={tiers} />
		</div>
	</div>
</section>

<!-- Comparison -->
<section class="section-spacing">
	<div class="container-main">
		<div class="section-header" use:reveal>
			<span class="eyebrow">Why Choose EAAI</span>
			<h2>Beyond Generic <span class="gradient-text">Consulting</span></h2>
		</div>
		<div use:reveal={{ delay: 100 }}>
			<ComparisonTable rows={comparisonData} />
		</div>
	</div>
</section>

<!-- FAQ -->
<section class="section-spacing">
	<div class="container-main">
		<div class="section-header" use:reveal>
			<span class="eyebrow">Questions</span>
			<h2>Advisory <span class="gradient-text">FAQ</span></h2>
		</div>
		<div class="faq-container">
			<FAQAccordion items={faqs} />
		</div>
	</div>
</section>

<CTABand
	variant="gradient"
	title="Ready for Strategic AI Transformation?"
	description="Schedule a complimentary consultation to explore how our advisory engagements can accelerate your organization's AI journey."
	primaryCta={{ label: 'Schedule Consultation', href: '/bookings' }}
/>

<style>
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

	.deliverables-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.25rem;
	}

	@media (min-width: 640px) {
		.deliverables-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 1024px) {
		.deliverables-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	.deliverable-card {
		padding: 1.75rem;
	}

	.d-icon {
		font-size: 2rem;
		display: block;
		margin-bottom: 0.75rem;
	}

	.deliverable-card h3 {
		font-size: 1.0625rem;
		font-weight: 700;
		color: var(--text-primary);
		margin: 0 0 0.5rem;
	}

	.deliverable-card p {
		font-size: 0.875rem;
		line-height: 1.6;
		color: var(--text-secondary);
		margin: 0;
	}

	.tier-section {
		background: var(--bg-surface);
		border-top: 1px solid var(--border-default);
		border-bottom: 1px solid var(--border-default);
	}

	.faq-container {
		max-width: 800px;
		margin: 0 auto;
	}
</style>
