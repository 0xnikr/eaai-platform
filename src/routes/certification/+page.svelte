<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import PricingCards from '$lib/components/PricingCards.svelte';
	import FAQAccordion from '$lib/components/FAQAccordion.svelte';
	import CTABand from '$lib/components/CTABand.svelte';
	import { certifications } from '$lib/data/certifications';
	import { reveal } from '$lib/actions/reveal';
	import type { PricingTier, FAQ } from '$lib/types';

	const domains = [
		{ title: 'AI Strategy', desc: 'Readiness assessment, use case identification, roadmap design', icon: '🎯' },
		{ title: 'Implementation Leadership', desc: 'Pilot design, team building, deployment, scaling', icon: '⚡' },
		{ title: 'AI Governance', desc: 'Policy, risk management, compliance, ethics', icon: '🏛️' },
		{ title: 'Measurement & Analytics', desc: 'KPI design, adoption tracking, impact quantification', icon: '📊' },
		{ title: 'Organizational Change', desc: 'Culture transformation, capability building, adoption', icon: '🔄' },
		{ title: 'Executive Communication', desc: 'Board presentations, stakeholder management, ROI narratives', icon: '💬' }
	];

	function levelColor(level: string): string {
		switch (level) {
			case 'Foundation': return '#22c55e';
			case 'Professional': return '#3b82f6';
			case 'Expert': return '#f59e0b';
			case 'Executive': return '#a855f7';
			default: return 'var(--accent-primary)';
		}
	}

	const pricingTiers: PricingTier[] = [
		{
			name: 'Individual',
			description: 'For professionals pursuing certification independently.',
			price: 'From $799',
			priceDetail: 'per certification',
			features: ['Full curriculum access', 'All practice assessments', 'Proctored final examination', 'Digital certificate & badge', 'One retake included', '12-month access'],
			cta: 'Choose Certification'
		},
		{
			name: 'Team',
			description: 'For organizations certifying 5+ team members.',
			price: 'From $599',
			priceDetail: 'per person',
			features: ['Everything in Individual', 'Volume pricing (5+ seats)', 'Team progress dashboard', 'Dedicated program manager', 'Custom scheduling', 'Cohort study groups'],
			highlighted: true,
			cta: 'Contact for Team Pricing'
		},
		{
			name: 'Enterprise',
			description: 'For organizations building a certified AI leadership bench.',
			price: 'Custom',
			priceDetail: 'tailored engagement',
			features: ['Everything in Team', 'Unlimited certifications', 'Custom domain assessments', 'White-label certificates', 'Integration with LMS', 'Executive reporting', 'Dedicated success manager'],
			cta: 'Schedule Enterprise Call'
		}
	];

	const faqs: FAQ[] = [
		{ question: 'How are assessments structured?', answer: 'Each certification includes multiple assessments combining multiple-choice questions, scenario-based analysis, and practical application exercises. Assessments are proctored and timed to ensure credential integrity.' },
		{ question: 'What happens if I don\'t pass?', answer: 'Each certification includes one complimentary retake. Additional retakes are available for a reduced fee. We also provide detailed feedback on areas for improvement.' },
		{ question: 'How long are certifications valid?', answer: 'Certifications are valid for two years. Renewal requires a streamlined reassessment to ensure continued competency as the AI landscape evolves.' },
		{ question: 'Can our company track team certification progress?', answer: 'Yes. Team and Enterprise plans include a management dashboard showing enrollment status, assessment progress, completion rates, and team performance analytics.' },
		{ question: 'What prerequisites are required?', answer: 'Foundation-level certifications have no prerequisites. Professional and Expert certifications may require completion of lower-level certifications or demonstration of equivalent experience.' }
	];
</script>

<svelte:head>
	<title>Certification — EAAI</title>
	<meta name="description" content="Validate AI leadership competency with structured certifications from Foundation through Executive level." />
</svelte:head>

<Hero
	eyebrow="Certification"
	title="Validate Your <span class='gradient'>AI Leadership</span>"
	subtitle="Structured certification pathways that validate real competency in AI strategy, implementation, governance, and transformation leadership."
	primaryCta={{ label: 'View Certifications', href: '#certifications' }}
	secondaryCta={{ label: 'Enterprise Certification', href: '/bookings' }}
	compact={true}
/>

<!-- Capability Domains -->
<section class="section-spacing">
	<div class="container-main">
		<div class="section-header" use:reveal>
			<span class="eyebrow">Domains</span>
			<h2>Certification <span class="gradient-text">Capability Domains</span></h2>
			<p class="section-sub">Our certifications assess competency across six core domains of AI transformation leadership.</p>
		</div>
		<div class="domains-grid">
			{#each domains as d, i}
				<div class="domain-card" use:reveal={{ delay: i * 80 }}>
					<span class="domain-icon">{d.icon}</span>
					<h3>{d.title}</h3>
					<p>{d.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Certification Catalog -->
<section class="section-spacing catalog-section" id="certifications">
	<div class="container-main">
		<div class="section-header" use:reveal>
			<span class="eyebrow">Certification Paths</span>
			<h2>Choose Your <span class="gradient-text">Certification Path</span></h2>
		</div>
		<div class="cert-grid">
			{#each certifications as cert, i}
				<div class="cert-card premium-card" use:reveal={{ delay: i * 100 }}>
					<div class="cert-level" style="--lc: {levelColor(cert.level)}">
						<span class="level-dot"></span>
						{cert.level}
					</div>
					<h3>{cert.title}</h3>
					<p class="cert-desc">{cert.description}</p>
					<div class="cert-details">
						<div class="cert-detail">
							<span class="detail-label">Duration</span>
							<span class="detail-value">{cert.duration}</span>
						</div>
						<div class="cert-detail">
							<span class="detail-label">Assessments</span>
							<span class="detail-value">{cert.assessments}</span>
						</div>
						<div class="cert-detail">
							<span class="detail-label">Domains</span>
							<span class="detail-value">{cert.domains.length}</span>
						</div>
					</div>
					{#if cert.prerequisites && cert.prerequisites.length > 0}
						<div class="cert-prereqs">
							<span class="prereq-label">Prerequisites:</span>
							{cert.prerequisites.join(', ')}
						</div>
					{/if}
					<div class="cert-footer">
						<div class="cert-pricing">
							<span class="cert-price">${cert.price.toLocaleString()}</span>
							{#if cert.priceEnterprise}
								<span class="cert-ent-price">${cert.priceEnterprise.toLocaleString()} enterprise</span>
							{/if}
						</div>
						<a href="/bookings" class="btn-primary cert-cta">Enroll Now</a>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Pricing -->
<section class="section-spacing">
	<div class="container-main">
		<div class="section-header" use:reveal>
			<span class="eyebrow">Pricing</span>
			<h2>Individual & <span class="gradient-text">Enterprise Options</span></h2>
		</div>
		<div use:reveal={{ delay: 150 }}>
			<PricingCards tiers={pricingTiers} />
		</div>
	</div>
</section>

<!-- FAQ -->
<section class="section-spacing">
	<div class="container-main">
		<div class="section-header" use:reveal>
			<span class="eyebrow">Questions</span>
			<h2>Certification <span class="gradient-text">FAQ</span></h2>
		</div>
		<div class="faq-container"><FAQAccordion items={faqs} /></div>
	</div>
</section>

<CTABand variant="gradient" title="Ready to Certify Your AI Leadership?" description="Start with Foundation or jump to your level. Enterprise teams get custom pathways and volume pricing." primaryCta={{ label: 'Start Certification', href: '/bookings' }} secondaryCta={{ label: 'Enterprise Inquiry', href: '/bookings' }} />

<style>
	.section-header { text-align: center; margin-bottom: 3rem; }
	.section-header h2 { font-size: clamp(1.5rem, 4vw, 2.5rem); font-weight: 800; letter-spacing: -0.02em; color: var(--text-primary); margin: 0.75rem 0 0; }
	.section-sub { font-size: 1rem; line-height: 1.6; color: var(--text-secondary); max-width: 600px; margin: 1rem auto 0; }

	.domains-grid {
		display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;
	}
	@media (min-width: 768px) { .domains-grid { grid-template-columns: repeat(3, 1fr); } }
	@media (min-width: 1024px) { .domains-grid { grid-template-columns: repeat(6, 1fr); } }

	.domain-card {
		text-align: center; padding: 1.5rem 1rem;
		background: var(--bg-card); border: 1px solid var(--border-default); border-radius: var(--radius-card);
		transition: all 0.3s ease;
	}
	.domain-card:hover { border-color: var(--accent-primary); transform: translateY(-2px); }
	.domain-icon { font-size: 1.75rem; display: block; margin-bottom: 0.625rem; }
	.domain-card h3 { font-size: 0.875rem; font-weight: 700; color: var(--text-primary); margin: 0 0 0.25rem; }
	.domain-card p { font-size: 0.75rem; color: var(--text-muted); margin: 0; line-height: 1.4; }

	.catalog-section { background: var(--bg-surface); border-top: 1px solid var(--border-default); border-bottom: 1px solid var(--border-default); }

	.cert-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
	@media (min-width: 768px) { .cert-grid { grid-template-columns: repeat(2, 1fr); } }
	@media (min-width: 1280px) { .cert-grid { grid-template-columns: repeat(3, 1fr); } }

	.cert-card { padding: 1.75rem; display: flex; flex-direction: column; }
	.cert-level {
		display: inline-flex; align-items: center; gap: 0.375rem;
		font-size: 0.6875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em;
		color: var(--lc); margin-bottom: 1rem;
	}
	.level-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--lc); }

	.cert-card h3 { font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin: 0 0 0.5rem; }
	.cert-desc { font-size: 0.875rem; line-height: 1.6; color: var(--text-secondary); margin: 0; flex: 1; }

	.cert-details {
		display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem;
		margin-top: 1.25rem; padding: 1rem; background: var(--bg-elevated); border-radius: 0.75rem;
	}
	.cert-detail { display: flex; flex-direction: column; gap: 0.125rem; }
	.detail-label { font-size: 0.625rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-muted); }
	.detail-value { font-size: 0.875rem; font-weight: 600; color: var(--text-primary); }

	.cert-prereqs {
		margin-top: 0.75rem; font-size: 0.8125rem; color: var(--text-muted); line-height: 1.4;
	}
	.prereq-label { font-weight: 600; color: var(--text-secondary); }

	.cert-footer {
		display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;
		margin-top: 1.25rem; padding-top: 1.25rem; border-top: 1px solid var(--border-default);
	}
	.cert-pricing { display: flex; flex-direction: column; }
	.cert-price { font-size: 1.5rem; font-weight: 800; color: var(--text-primary); letter-spacing: -0.02em; }
	.cert-ent-price { font-size: 0.75rem; color: var(--text-muted); }
	.cert-cta { padding: 0.625rem 1.25rem; font-size: 0.8125rem; }

	.faq-container { max-width: 800px; margin: 0 auto; }
</style>
