<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import FAQAccordion from '$lib/components/FAQAccordion.svelte';
	import CTABand from '$lib/components/CTABand.svelte';
	import { reveal } from '$lib/actions/reveal';
	import type { FAQ } from '$lib/types';

	const programs = [
		{
			title: 'Executive AI Literacy',
			audience: 'C-Suite & Board Members',
			duration: '1-Day Intensive',
			desc: 'Build strategic AI fluency for senior leaders. Understand capabilities, limitations, investment frameworks, and governance requirements.',
			outcomes: ['AI technology landscape clarity', 'Investment evaluation framework', 'Board communication toolkit', 'Risk awareness and governance readiness']
		},
		{
			title: 'AI Decision-Making for Leaders',
			audience: 'VPs & Senior Directors',
			duration: '2-Day Workshop',
			desc: 'Equip senior leaders with frameworks for evaluating AI opportunities, approving initiatives, and measuring impact within their domains.',
			outcomes: ['Use case evaluation methodology', 'ROI modeling for AI projects', 'Vendor and technology assessment', 'Strategic prioritization framework']
		},
		{
			title: 'AI Workflow Leadership',
			audience: 'Department Managers',
			duration: '3-Day Program',
			desc: 'Train managers to identify, implement, and optimize AI-enhanced workflows within their teams and departments.',
			outcomes: ['Workflow analysis and AI mapping', 'Team adoption strategies', 'Change management techniques', 'Departmental KPI tracking']
		},
		{
			title: 'Governance Readiness for Leaders',
			audience: 'Cross-Functional Leaders',
			duration: '1-Day Workshop',
			desc: 'Prepare leaders across every function to understand and implement responsible AI governance within their areas of responsibility.',
			outcomes: ['AI governance framework literacy', 'Risk identification and mitigation', 'Compliance requirements overview', 'Ethical AI decision-making']
		},
		{
			title: 'Private Leadership Intensive',
			audience: 'Executive Teams',
			duration: 'Custom (1-3 Days)',
			desc: 'Fully customized leadership program designed around your organization\'s specific AI strategy, challenges, and transformation goals.',
			outcomes: ['Custom curriculum aligned to your strategy', 'Executive team alignment sessions', 'Transformation leadership framework', 'Personalized action plans']
		}
	];

	const faqs: FAQ[] = [
		{
			question: 'Can programs be customized for our organization?',
			answer: 'Absolutely. Every leadership program can be tailored to your industry, organizational maturity, team structure, and strategic objectives. Private intensives are fully custom-designed.'
		},
		{
			question: 'What format options are available?',
			answer: 'Programs are available in virtual, in-person, and hybrid formats. We also offer asynchronous pre-work and post-program resources to extend the learning impact.'
		},
		{
			question: 'How many participants can join?',
			answer: 'Standard programs accommodate 15-30 participants for optimal engagement. Custom programs can be scaled for larger groups with multiple facilitators.'
		},
		{
			question: 'Do you provide ongoing support after the program?',
			answer: 'Yes. Every program includes 30-day post-program support, implementation guidance, and access to our exclusive leadership community.'
		}
	];
</script>

<svelte:head>
	<title>Leadership Programs — EAAI</title>
	<meta name="description" content="AI leadership programs for executives, VPs, directors, and department leaders. Build AI fluency and transformation leadership across your organization." />
</svelte:head>

<Hero
	eyebrow="Leadership Programs"
	title="Build AI Leadership <span class='gradient'>at Every Level</span>"
	subtitle="From board-level AI literacy to department-level workflow leadership — programs designed specifically for decision-makers driving AI transformation."
	primaryCta={{ label: 'Explore Programs', href: '#programs' }}
	secondaryCta={{ label: 'Request Custom Program', href: '/bookings' }}
	compact={true}
/>

<!-- Programs -->
<section class="section-spacing" id="programs">
	<div class="container-main">
		<div class="section-header" use:reveal>
			<span class="eyebrow">Programs</span>
			<h2>Leadership Programs <span class="gradient-text">for Decision-Makers</span></h2>
		</div>
		<div class="programs-list">
			{#each programs as prog, i}
				<div class="program-card premium-card" use:reveal={{ delay: i * 100 }}>
					<div class="program-top">
						<div class="program-badges">
							<span class="audience-badge">{prog.audience}</span>
							<span class="duration-badge">{prog.duration}</span>
						</div>
						<h3>{prog.title}</h3>
						<p class="program-desc">{prog.desc}</p>
					</div>
					<div class="program-outcomes">
						<span class="outcomes-label">Key Outcomes</span>
						<ul>
							{#each prog.outcomes as outcome}
								<li>
									<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
									{outcome}
								</li>
							{/each}
						</ul>
					</div>
					<a href="/bookings" class="btn-secondary program-cta">Inquire About This Program</a>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- FAQ -->
<section class="section-spacing">
	<div class="container-main">
		<div class="section-header" use:reveal>
			<span class="eyebrow">Questions</span>
			<h2>Program <span class="gradient-text">FAQ</span></h2>
		</div>
		<div class="faq-container">
			<FAQAccordion items={faqs} />
		</div>
	</div>
</section>

<CTABand
	variant="gradient"
	title="Ready to Build AI Leadership Capability?"
	description="Let's design a leadership program that aligns with your transformation goals."
	primaryCta={{ label: 'Request Custom Program', href: '/bookings' }}
	secondaryCta={{ label: 'View Live Training', href: '/live-training' }}
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

	.programs-list {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.program-card {
		padding: 2rem;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	@media (min-width: 768px) {
		.program-card {
			display: grid;
			grid-template-columns: 1.5fr 1fr;
			grid-template-rows: auto auto;
			gap: 1.5rem 3rem;
		}
		.program-top { grid-column: 1; grid-row: 1 / 3; }
		.program-outcomes { grid-column: 2; grid-row: 1; }
		.program-cta { grid-column: 2; grid-row: 2; align-self: end; }
	}

	.program-badges {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	.audience-badge {
		font-size: 0.6875rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		padding: 0.25rem 0.75rem;
		border-radius: 2rem;
		color: var(--accent-primary);
		background: var(--accent-glow);
		border: 1px solid color-mix(in srgb, var(--accent-primary) 24%, transparent);
	}

	.duration-badge {
		font-size: 0.6875rem;
		font-weight: 500;
		padding: 0.25rem 0.75rem;
		border-radius: 2rem;
		color: var(--text-muted);
		background: var(--bg-elevated);
		border: 1px solid var(--border-default);
	}

	.program-card h3 {
		font-size: 1.375rem;
		font-weight: 700;
		color: var(--text-primary);
		margin: 0 0 0.625rem;
		letter-spacing: -0.01em;
	}

	.program-desc {
		font-size: 0.9375rem;
		line-height: 1.7;
		color: var(--text-secondary);
		margin: 0;
	}

	.outcomes-label {
		display: block;
		font-size: 0.6875rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: var(--text-muted);
		margin-bottom: 0.75rem;
	}

	.program-outcomes ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.program-outcomes li {
		display: flex;
		align-items: flex-start;
		gap: 0.5rem;
		font-size: 0.875rem;
		color: var(--text-secondary);
		line-height: 1.4;
	}

	.program-outcomes li svg {
		flex-shrink: 0;
		margin-top: 2px;
	}

	.program-cta {
		text-align: center;
	}

	.faq-container {
		max-width: 800px;
		margin: 0 auto;
	}
</style>
