<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import CTABand from '$lib/components/CTABand.svelte';
	import { reveal } from '$lib/actions/reveal';

	const buildCategories = [
		{
			title: 'AI Agents',
			desc: 'Role-specific agents that answer, research, qualify, route, summarize, and act across your business workflows.',
			icon: '🤖',
			items: [
				'Customer support agents',
				'Sales assistant agents',
				'Internal operations agents',
				'Research agents',
				'Data-entry agents',
				'Voice/chat agents',
				'Workflow automation agents',
				'Multi-agent systems'
			]
		},
		{
			title: 'AI Automation Systems',
			desc: 'Automation that removes manual handoffs from lead flow, documents, reporting, inboxes, and internal operations.',
			icon: '⚙️',
			items: [
				'Lead routing',
				'CRM automation',
				'Document processing',
				'Invoice/report extraction',
				'Email triage',
				'Proposal generation',
				'Call summary automation',
				'KPI tracking'
			]
		},
		{
			title: 'AI-Powered Software',
			desc: 'Custom software and internal platforms where AI is built directly into the tools your team already needs.',
			icon: '🧩',
			items: [
				'Internal dashboards',
				'Client portals',
				'Admin panels',
				'SaaS tools',
				'Knowledgebase search systems',
				'Custom GPT-style apps',
				'AI copilots for teams',
				'Workflow management platforms'
			]
		},
		{
			title: 'Data + Knowledge Systems',
			desc: 'Reliable knowledge layers that connect company documents, databases, conversations, and reporting into usable AI systems.',
			icon: '📊',
			items: [
				'RAG systems',
				'Vector databases',
				'Company knowledgebases',
				'Document ingestion pipelines',
				'Search/chat over internal docs',
				'Real-time data syncing',
				'Analytics dashboards',
				'Reporting systems'
			]
		}
	];

	const techGroups = [
		{
			title: 'AI Platforms',
			items: [
				'OpenAI',
				'Anthropic',
				'Google Gemini',
				'Meta Llama',
				'Mistral',
				'Perplexity',
				'Groq',
				'DeepSeek',
				'xAI',
				'Hugging Face',
				'Ollama',
				'OpenRouter'
			]
		},
		{
			title: 'AI Frameworks',
			items: [
				'LangChain',
				'LlamaIndex',
				'CrewAI',
				'AutoGen',
				'Semantic Kernel',
				'Haystack',
				'DSPy',
				'LangGraph',
				'Vercel AI SDK',
				'Responses API',
				'MCP servers',
				'RAG pipelines'
			]
		},
		{
			title: 'Frontend',
			items: [
				'Next.js',
				'React',
				'SvelteKit',
				'Vue',
				'Tailwind CSS',
				'Shadcn/UI',
				'Framer Motion',
				'Webflow',
				'Astro'
			]
		},
		{
			title: 'Backend',
			items: [
				'Node.js',
				'Python',
				'FastAPI',
				'Express',
				'Django',
				'Flask',
				'Go',
				'REST APIs',
				'GraphQL',
				'Webhooks',
				'Serverless functions'
			]
		},
		{
			title: 'Databases + Vector Search',
			items: [
				'Supabase',
				'PostgreSQL',
				'MongoDB',
				'Firebase',
				'Redis',
				'Pinecone',
				'Weaviate',
				'Qdrant',
				'Chroma',
				'pgvector',
				'Elasticsearch'
			]
		},
		{
			title: 'Automation + Integrations',
			items: [
				'Zapier',
				'Make',
				'n8n',
				'Airtable',
				'Notion',
				'HubSpot',
				'Salesforce',
				'Slack',
				'Gmail',
				'Google Drive',
				'Stripe',
				'Twilio',
				'Calendly',
				'GoHighLevel'
			]
		},
		{
			title: 'Cloud + Deployment',
			items: [
				'Vercel',
				'AWS',
				'Google Cloud',
				'Azure',
				'Docker',
				'Kubernetes',
				'Cloudflare',
				'GitHub Actions',
				'Supabase Edge Functions'
			]
		}
	];

	const systemExamples = [
		{
			title: 'AI Sales Assistant',
			desc: 'Qualifies leads, updates CRM records, drafts follow-ups, and routes high-value opportunities automatically.'
		},
		{
			title: 'Legal Funding Intake Agent',
			desc: 'Reviews cases, extracts key claim details, flags missing documents, scores opportunities, and routes files to the right team.'
		},
		{
			title: 'Production Studio Copilot',
			desc: 'Coordinates production timelines, rights data, budget workflows, talent communications, and campaign tasks so studio teams can reduce manual admin and surface revenue opportunities faster.'
		},
		{
			title: 'Docs & Knowledgebase Agent',
			desc: 'Extracts structured data from PDFs, contracts, invoices, and forms, then lets staff search and chat across SOPs, call notes, CRM records, and internal documentation.'
		},
		{
			title: 'AI-Powered KPI Dashboard',
			desc: 'Tracks bottlenecks, revenue opportunities, team performance, and operational risk in one place.'
		},
		{
			title: 'Voice Appointment Agent',
			desc: 'Handles inbound calls, captures customer details, answers questions, and books appointments.'
		}
	];

	const processSteps = [
		{ step: '01', title: 'Discover', desc: 'We map your workflows, bottlenecks, tools, and data.' },
		{
			step: '02',
			title: 'Design',
			desc: 'We architect the AI system, choose the right models, and define success metrics.'
		},
		{
			step: '03',
			title: 'Build',
			desc: 'We develop the agents, automations, dashboards, and integrations.'
		},
		{ step: '04', title: 'Deploy', desc: 'We launch securely into your existing business stack.' },
		{
			step: '05',
			title: 'Improve',
			desc: 'We monitor performance, add features, and optimize ROI over time.'
		}
	];

	const differentiators = [
		'Business-first AI architecture',
		'Production-ready development',
		'Secure tool and API integrations',
		'Ongoing optimization and support'
	];

	const capabilityTags = [
		'Custom AI agents',
		'RAG systems',
		'CRM integrations',
		'Workflow automation',
		'Internal SaaS tools',
		'Voice AI',
		'Data dashboards',
		'API integrations',
		'Secure deployment',
		'Ongoing support'
	];

	const industryTags = [
		'Professional services',
		'E-commerce',
		'Music distribution',
		'Solar',
		'Finance',
		'Real estate',
		'Healthcare',
		'Legal funding',
		'Agencies',
		'SaaS',
		'Construction',
		'Logistics',
		'Recruiting & staffing'
		
	];

	function moveSpotlight(event: PointerEvent) {
		const card = event.currentTarget as HTMLElement;
		const rect = card.getBoundingClientRect();

		card.style.setProperty('--spotlight-x', `${event.clientX - rect.left}px`);
		card.style.setProperty('--spotlight-y', `${event.clientY - rect.top}px`);
	}
</script>

<svelte:head>
	<title>AI Development Capabilities — EAAI</title>
	<meta
		name="description"
		content="Full-stack AI development capabilities for custom agents, automations, dashboards, internal tools, data systems, and business workflow software."
	/>
</svelte:head>

<Hero
	eyebrow="AI Development Capabilities"
	title="Full-Stack AI Development for Companies Ready to <span class='gradient'>Move Faster</span>"
	subtitle="We design, build, deploy, and maintain custom AI systems, automations, agents, dashboards, and internal tools that help companies save time, reduce manual work, and scale operations."
	primaryCta={{ label: 'Book a Strategy Call', href: '/bookings' }}
	secondaryCta={{ label: 'View Capabilities', href: '#what-we-build' }}
	compact={true}
	showStars={true}
>
	<div class="hero-proof">
		<span>Custom agents</span>
		<span>Workflow automation</span>
		<span>Dashboards + internal tools</span>
	</div>
</Hero>

<!-- Positioning -->
<section class="section-spacing">
	<div class="container-main">
		<div class="positioning-grid">
			<div class="positioning-copy" use:reveal>
				<span class="eyebrow">Beyond Chatbots</span>
				<h2>Custom AI systems for companies that need more than advice.</h2>
				<p>
					We design, develop, deploy, and maintain production-grade AI tools, automations, agents,
					internal platforms, and business intelligence systems.
				</p>
			</div>
			<div class="positioning-card premium-card" use:reveal={{ delay: 120 }}>
				<span class="card-label">Builder Mentality</span>
				<p>
					Our work starts with the business workflow, then moves into software architecture, data
					access, model selection, integrations, deployment, and ongoing improvement.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- What We Build -->
<section class="section-spacing build-section" id="what-we-build">
	<div class="container-main">
		<div class="section-header" use:reveal>
			<span class="eyebrow">What We Build</span>
			<h2>AI Systems That Fit <span class="gradient-text">Real Operations</span></h2>
			<p class="section-subtitle">
				From standalone agents to integrated business platforms, we build the software layer that
				turns AI capability into operational leverage.
			</p>
		</div>
		<div class="build-grid">
			{#each buildCategories as category, i (category.title)}
				<article class="build-card premium-card" use:reveal={{ delay: i * 80 }}>
					<div class="build-card-head">
						<span class="build-icon">{category.icon}</span>
						<div>
							<h3>{category.title}</h3>
							<p>{category.desc}</p>
						</div>
					</div>
					<ul>
						{#each category.items as item (item)}
							<li>{item}</li>
						{/each}
					</ul>
				</article>
			{/each}
		</div>
	</div>
</section>

<!-- Technology Stack -->
<section class="section-spacing">
	<div class="container-main">
		<div class="section-header" use:reveal>
			<span class="eyebrow">Technology Stack</span>
			<h2>Model, Software, Data, and <span class="gradient-text">Deployment Capabilities</span></h2>
			<p class="section-subtitle">
				We choose tools based on the system your business needs, not hype cycles or a single vendor
				dependency.
			</p>
		</div>
		<div class="tech-grid">
			{#each techGroups as group, i (group.title)}
				<div class="tech-card" use:reveal={{ delay: i * 60 }}>
					<h3>{group.title}</h3>
					<div class="tag-cloud">
						{#each group.items as item (item)}
							<span class="tech-tag">{item}</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Systems We Build -->
<section class="section-spacing systems-section">
	<div class="container-main">
		<div class="section-header" use:reveal>
			<span class="eyebrow">Examples</span>
			<h2>Systems We Can <span class="gradient-text">Build With You</span></h2>
			<p class="section-subtitle">
				Systems we've already shipped around real workflows, business tools, and compliance.
			</p>
		</div>
		<div class="systems-grid">
			{#each systemExamples as system, i (system.title)}
				<article class="system-card premium-card" use:reveal={{ delay: i * 80 }}>
					<span class="system-number">{String(i + 1).padStart(2, '0')}</span>
					<h3>{system.title}</h3>
					<p>{system.desc}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<!-- How We Work -->
<section class="section-spacing">
	<div class="container-main">
		<div class="section-header" use:reveal>
			<span class="eyebrow">How We Work</span>
			<h2>From Workflow Bottleneck to <span class="gradient-text">Production System</span></h2>
		</div>
		<div class="process-grid">
			{#each processSteps as step, i (step.step)}
				<article class="process-card" use:reveal={{ delay: i * 90 }}>
					<span class="step-number">{step.step}</span>
					<h3>{step.title}</h3>
					<p>{step.desc}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<!-- Differentiator -->
<section class="section-spacing differentiator-section">
	<div class="container-main">
		<div class="differentiator-card" role="group" onpointermove={moveSpotlight} use:reveal>
			<span class="eyebrow">Why EAAI</span>
			<blockquote>
				We're not just prompt engineers. We're full-stack AI builders who understand software,
				data, automation, and business outcomes.
			</blockquote>
			<div class="differentiator-grid">
				{#each differentiators as item, i (item)}
					<div class="differentiator-point" use:reveal={{ delay: i * 80 }}>
						<span>✓</span>
						<p>{item}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Credibility Blocks -->
<section class="section-spacing">
	<div class="container-main">
		<div class="credibility-grid">
			<div class="credibility-card premium-card" use:reveal>
				<span class="eyebrow">Capabilities</span>
				<h2>What We Can Own</h2>
				<div class="tag-cloud">
					{#each capabilityTags as item (item)}
						<span class="chip">{item}</span>
					{/each}
				</div>
			</div>
			<div class="credibility-card premium-card" use:reveal={{ delay: 120 }}>
				<span class="eyebrow">Industries Served</span>
				<h2>Where This Applies</h2>
				<div class="tag-cloud">
					{#each industryTags as item (item)}
						<span class="chip">{item}</span>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<CTABand
	variant="gradient"
	eyebrow="Ready to Build?"
	title="Ready to Build Your AI Operating System?"
	description="Tell us where your company is wasting time, leaking revenue, or drowning in manual work. We'll help design the AI systems to fix it."
	primaryCta={{ label: 'Book a Strategy Call', href: '/bookings' }}
/>

<style>
	.hero-proof {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.75rem;
		margin-top: 2.5rem;
	}

	.hero-proof span {
		padding: 0.5rem 1rem;
		font-size: 0.8125rem;
		font-weight: 500;
		color: var(--text-secondary);
		background: var(--bg-elevated);
		border: 1px solid var(--border-default);
		border-radius: var(--radius-chip);
	}

	.section-header {
		text-align: center;
		margin-bottom: 3rem;
	}

	.section-header h2,
	.positioning-copy h2,
	.credibility-card h2 {
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
		max-width: 660px;
		margin: 1rem auto 0;
	}

	.positioning-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.5rem;
		align-items: center;
	}

	@media (min-width: 900px) {
		.positioning-grid {
			grid-template-columns: 1.15fr 0.85fr;
			gap: 3rem;
		}
	}

	.positioning-copy p {
		font-size: 1.0625rem;
		line-height: 1.7;
		color: var(--text-secondary);
		max-width: 680px;
		margin: 1.25rem 0 0;
	}

	.positioning-card {
		position: relative;
		overflow: hidden;
		isolation: isolate;
		--spotlight-x: 18%;
		--spotlight-y: 18%;
		padding: 2rem;
		cursor: default;
		background: var(--bg-card);
		background-position:
			0% 50%,
			0 0;
		background-size:
			140% 100%,
			auto;
	}

	/* Temporarily disabled Builder Mentality cursor spotlight.
	.positioning-card::before {
		content: '';
		position: absolute;
		inset: 0;
		z-index: 0;
		pointer-events: none;
		opacity: 0;
		background: radial-gradient(
			560px circle at var(--spotlight-x) var(--spotlight-y),
			color-mix(in srgb, var(--accent-primary) 30%, transparent),
			color-mix(in srgb, var(--accent-secondary) 16%, transparent) 30%,
			color-mix(in srgb, var(--accent-primary) 7%, transparent) 52%,
			transparent 78%
		);
		transition: opacity 0.25s ease;
	}

	.positioning-card:hover::before {
		opacity: 1;
	}
	*/

	.positioning-card:hover {
		border-color: var(--border-default);
		box-shadow: var(--shadow-card);
		transform: none;
	}

	.positioning-card::after {
		content: '';
		position: absolute;
		inset: 0;
		z-index: 0;
		pointer-events: none;
		background: linear-gradient(110deg, var(--accent-glow), transparent 45%, rgba(139, 92, 246, 0.08));
		background-size: 160% 100%;
	}

	.positioning-card:hover::after {
		animation-play-state: paused;
	}

	.positioning-card > * {
		position: relative;
		z-index: 1;
	}

	/* Temporarily disabled Builder Mentality cursor spotlight.
	:global(:root.light) .positioning-card::before {
		background: radial-gradient(
			560px circle at var(--spotlight-x) var(--spotlight-y),
			color-mix(in srgb, var(--accent-primary) 18%, transparent),
			color-mix(in srgb, var(--accent-secondary) 10%, transparent) 30%,
			color-mix(in srgb, var(--accent-primary) 5%, transparent) 52%,
			transparent 78%
		);
	}
	*/

	@media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
		.positioning-card::after {
			animation: builderGradientDrift 4.5s ease-in-out infinite alternate;
		}
	}

	@keyframes builderGradientDrift {
		from {
			background-position: 0% 50%;
		}
		to {
			background-position: 100% 50%;
		}
	}

	.card-label {
		display: block;
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--accent-primary);
		margin-bottom: 1rem;
	}

	.positioning-card p {
		font-size: 1rem;
		line-height: 1.7;
		color: var(--text-primary);
		margin: 0;
	}

	.build-section,
	.systems-section,
	.differentiator-section {
		background: var(--bg-surface);
		border-top: 1px solid var(--border-default);
		border-bottom: 1px solid var(--border-default);
	}

	.build-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.25rem;
	}

	@media (min-width: 900px) {
		.build-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	.build-card {
		padding: 1.75rem;
	}

	.build-card-head {
		display: flex;
		gap: 1rem;
		align-items: flex-start;
		margin-bottom: 1.25rem;
	}

	.build-icon {
		font-size: 2rem;
		line-height: 1;
		flex-shrink: 0;
	}

	.build-card h3,
	.tech-card h3,
	.system-card h3,
	.process-card h3 {
		font-size: 1.0625rem;
		font-weight: 700;
		color: var(--text-primary);
		margin: 0 0 0.5rem;
	}

	.build-card p,
	.system-card p,
	.process-card p {
		font-size: 0.875rem;
		line-height: 1.6;
		color: var(--text-secondary);
		margin: 0;
	}

	.build-card ul {
		display: grid;
		grid-template-columns: 1fr;
		gap: 0.625rem;
		list-style: none;
		padding: 0;
		margin: 0;
	}

	@media (min-width: 560px) {
		.build-card ul {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	.build-card li {
		position: relative;
		padding-left: 1rem;
		font-size: 0.8125rem;
		line-height: 1.45;
		color: var(--text-secondary);
	}

	.build-card li::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0.55em;
		width: 0.375rem;
		height: 0.375rem;
		border-radius: 50%;
		background: var(--accent-primary);
	}

	.tech-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
	}

	@media (min-width: 768px) {
		.tech-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 1120px) {
		.tech-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	.tech-card {
		padding: 1.25rem;
		background: var(--bg-card);
		border: 1px solid var(--border-default);
		border-radius: var(--radius-card);
	}

	.tag-cloud {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.tech-tag {
		display: inline-flex;
		padding: 0.35rem 0.75rem;
		font-size: 0.75rem;
		font-weight: 500;
		color: var(--text-secondary);
		background: var(--bg-elevated);
		border: 1px solid var(--border-default);
		border-radius: var(--radius-chip);
	}

	.systems-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
	}

	@media (min-width: 640px) {
		.systems-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 1024px) {
		.systems-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	.system-card {
		padding: 1.5rem;
	}

	.system-number,
	.step-number {
		display: block;
		font-size: 2rem;
		font-weight: 800;
		letter-spacing: -0.03em;
		background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		margin-bottom: 0.5rem;
	}

	.process-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.25rem;
	}

	@media (min-width: 640px) {
		.process-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 1024px) {
		.process-grid {
			grid-template-columns: repeat(5, 1fr);
		}
	}

	.process-card {
		padding: 1.5rem;
		background: var(--bg-card);
		border: 1px solid var(--border-default);
		border-radius: var(--radius-card);
	}

	.differentiator-card {
		position: relative;
		overflow: hidden;
		isolation: isolate;
		--spotlight-x: 18%;
		--spotlight-y: 18%;
		max-width: 980px;
		margin: 0 auto;
		padding: clamp(2rem, 5vw, 3.5rem);
		text-align: center;
		background:
			linear-gradient(135deg, var(--accent-glow), transparent 50%, rgba(139, 92, 246, 0.08)),
			var(--bg-card);
		border: 1px solid var(--border-default);
		border-radius: calc(var(--radius-card) * 1.25);
		box-shadow: var(--shadow-elevated);
	}

	.differentiator-card::before {
		content: '';
		position: absolute;
		inset: 0;
		z-index: 0;
		pointer-events: none;
		opacity: 0;
		background: radial-gradient(
			560px circle at var(--spotlight-x) var(--spotlight-y),
			color-mix(in srgb, var(--accent-primary) 30%, transparent),
			color-mix(in srgb, var(--accent-secondary) 16%, transparent) 30%,
			color-mix(in srgb, var(--accent-primary) 7%, transparent) 52%,
			transparent 78%
		);
		transition: opacity 0.25s ease;
	}

	.differentiator-card > * {
		position: relative;
		z-index: 1;
	}

	.differentiator-card:hover::before {
		opacity: 1;
	}

	:global(:root.light) .differentiator-card::before {
		background: radial-gradient(
			560px circle at var(--spotlight-x) var(--spotlight-y),
			color-mix(in srgb, var(--accent-primary) 18%, transparent),
			color-mix(in srgb, var(--accent-secondary) 10%, transparent) 30%,
			color-mix(in srgb, var(--accent-primary) 5%, transparent) 52%,
			transparent 78%
		);
	}

	blockquote {
		font-size: clamp(1.35rem, 4vw, 2.25rem);
		font-weight: 800;
		letter-spacing: -0.03em;
		line-height: 1.2;
		color: var(--text-primary);
		max-width: 840px;
		margin: 1rem auto 2rem;
	}

	.differentiator-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 0.75rem;
	}

	@media (min-width: 768px) {
		.differentiator-grid {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	.differentiator-point {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		padding: 0.875rem;
		background: var(--bg-elevated);
		border: 1px solid var(--border-default);
		border-radius: var(--radius-button);
	}

	.differentiator-point span {
		color: var(--accent-primary);
		font-weight: 800;
	}

	.differentiator-point p {
		font-size: 0.8125rem;
		font-weight: 600;
		color: var(--text-secondary);
		margin: 0;
	}

	.credibility-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.25rem;
	}

	@media (min-width: 900px) {
		.credibility-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	.credibility-card {
		padding: 2rem;
	}

	.credibility-card h2 {
		margin-bottom: 1.5rem;
	}
</style>
