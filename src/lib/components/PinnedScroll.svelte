<script lang="ts">
	import { browser } from '$app/environment';

	const stages = [
		{
			id: 'strategy',
			label: 'Strategy',
			title: 'Define Your AI Vision',
			desc: 'We assess your organization\'s AI readiness, identify high-impact use cases, and build a board-ready AI transformation strategy aligned with your business objectives.',
			metrics: [
				{ label: 'Use Cases Identified', value: '24' },
				{ label: 'ROI Projected', value: '340%' },
				{ label: 'Readiness Score', value: '78/100' }
			],
			icon: '🎯'
		},
		{
			id: 'training',
			label: 'Training',
			title: 'Build AI Capability',
			desc: 'Equip your leadership and workforce with structured AI training — from executive literacy to hands-on implementation skills — through certifications and live programs.',
			metrics: [
				{ label: 'Leaders Trained', value: '156' },
				{ label: 'Completion Rate', value: '94%' },
				{ label: 'Confidence Score', value: '4.7/5' }
			],
			icon: '📚'
		},
		{
			id: 'transformation',
			label: 'Transformation',
			title: 'Deploy AI at Scale',
			desc: 'Move from pilot to production with structured implementation support, change management, and cross-functional team enablement across your organization.',
			metrics: [
				{ label: 'AI Systems Live', value: '12' },
				{ label: 'Teams Activated', value: '38' },
				{ label: 'Workflows Enhanced', value: '85' }
			],
			icon: '⚡'
		},
		{
			id: 'measurement',
			label: 'Measurement',
			title: 'Quantify AI Impact',
			desc: 'Track adoption rates, measure operational impact, and build executive dashboards that prove ROI and guide continuous optimization.',
			metrics: [
				{ label: 'Adoption Rate', value: '73%' },
				{ label: 'Efficiency Gain', value: '+41%' },
				{ label: 'Cost Reduction', value: '$2.4M' }
			],
			icon: '📊'
		},
		{
			id: 'optimization',
			label: 'Optimization',
			title: 'Scale & Expand',
			desc: 'Continuously optimize AI initiatives, expand to new departments and use cases, and build a self-sustaining AI Center of Excellence.',
			metrics: [
				{ label: 'Departments Active', value: '12/12' },
				{ label: 'AI Maturity', value: 'Level 4' },
				{ label: 'Annual Impact', value: '$8.2M' }
			],
			icon: '🚀'
		}
	];

	let currentStage = $state(0);
	let sectionEl = $state<HTMLElement | null>(null);
	let pinned = $state(false);
	let completed = $state(false);

	function handleScroll() {
		if (!browser || !sectionEl) return;

		const rect = sectionEl.getBoundingClientRect();
		const sectionHeight = sectionEl.offsetHeight;
		const viewportHeight = window.innerHeight;

		// Section is in view
		if (rect.top <= 0 && rect.bottom >= viewportHeight) {
			pinned = true;
			completed = false;

			// Calculate progress through the pinned section
			const scrolledInto = -rect.top;
			const scrollableDistance = sectionHeight - viewportHeight;
			const progress = Math.min(Math.max(scrolledInto / scrollableDistance, 0), 1);

			currentStage = Math.min(Math.floor(progress * stages.length), stages.length - 1);
		} else {
			pinned = false;
			if (rect.bottom < viewportHeight) {
				completed = true;
				currentStage = stages.length - 1;
			}
		}
	}
</script>

<svelte:window onscroll={handleScroll} />

<section
	class="pinned-section"
	bind:this={sectionEl}
	style="height: {stages.length * 100}vh;"
>
	<div class="sticky-container" class:pinned>
		<div class="container-main pinned-content">
			<div class="pinned-header">
				<span class="eyebrow">The Transformation Journey</span>
				<h2 class="pinned-title">
					How We Install <span class="gradient-text">AI Capability</span>
				</h2>
			</div>

			<!-- Progress Steps -->
			<div class="progress-steps">
				{#each stages as stage, i}
					<button
						class="step"
						class:active={i === currentStage}
						class:completed={i < currentStage}
						onclick={() => (currentStage = i)}
					>
						<span class="step-dot"></span>
						<span class="step-label">{stage.label}</span>
					</button>
					{#if i < stages.length - 1}
						<div class="step-line" class:filled={i < currentStage}></div>
					{/if}
				{/each}
			</div>

			<!-- Stage Content -->
			<div class="stage-display">
				{#key currentStage}
					<div class="stage-content" style="animation: stageIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)">
						<div class="stage-text">
							<div class="stage-icon">{stages[currentStage].icon}</div>
							<h3 class="stage-title">{stages[currentStage].title}</h3>
							<p class="stage-desc">{stages[currentStage].desc}</p>
						</div>

						<div class="stage-dashboard">
							{#each stages[currentStage].metrics as metric}
								<div class="metric-card">
									<span class="metric-value">{metric.value}</span>
									<span class="metric-label">{metric.label}</span>
								</div>
							{/each}

							<!-- Visual indicator -->
							<div class="dashboard-visual">
								<div class="progress-ring">
									<svg viewBox="0 0 100 100">
										<circle cx="50" cy="50" r="42" fill="none" stroke="var(--border-default)" stroke-width="6" />
										<circle
											cx="50" cy="50" r="42"
											fill="none"
											stroke="url(#ringGrad)"
											stroke-width="6"
											stroke-linecap="round"
											stroke-dasharray="264"
											stroke-dashoffset={264 - (264 * ((currentStage + 1) / stages.length))}
											transform="rotate(-90 50 50)"
											style="transition: stroke-dashoffset 0.6s cubic-bezier(0.16,1,0.3,1)"
										/>
										<defs>
											<linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
												<stop offset="0%" stop-color="var(--accent-primary)" />
												<stop offset="100%" stop-color="var(--accent-secondary)" />
											</linearGradient>
										</defs>
									</svg>
									<span class="ring-label">{Math.round(((currentStage + 1) / stages.length) * 100)}%</span>
								</div>
							</div>
						</div>
					</div>
				{/key}
			</div>
		</div>
	</div>
</section>

<style>
	.pinned-section {
		position: relative;
	}

	.sticky-container {
		position: sticky;
		top: 0;
		height: 100vh;
		display: flex;
		align-items: center;
		overflow: hidden;
		background: var(--bg-base);
	}

	.pinned-content {
		width: 100%;
	}

	.pinned-header {
		text-align: center;
		margin-bottom: 2rem;
	}

	@media (min-width: 768px) {
		.pinned-header {
			margin-bottom: 3rem;
		}
	}

	.pinned-title {
		font-size: clamp(1.5rem, 4vw, 2.75rem);
		font-weight: 800;
		letter-spacing: -0.02em;
		margin: 1rem 0 0;
		color: var(--text-primary);
	}

	/* Progress Steps */
	.progress-steps {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0;
		margin-bottom: 2.5rem;
		overflow-x: auto;
		padding: 0.5rem 0;
		-webkit-overflow-scrolling: touch;
	}

	.step {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.5rem;
		flex-shrink: 0;
	}

	.step-dot {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background: var(--bg-elevated);
		border: 2px solid var(--border-light);
		transition: all 0.3s ease;
	}

	.step.active .step-dot {
		background: var(--accent-primary);
		border-color: var(--accent-primary);
		box-shadow: 0 0 12px var(--accent-glow-strong);
	}

	.step.completed .step-dot {
		background: var(--accent-primary);
		border-color: var(--accent-primary);
	}

	.step-label {
		font-size: 0.6875rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: var(--text-muted);
		transition: color 0.3s ease;
		white-space: nowrap;
	}

	.step.active .step-label {
		color: var(--accent-primary);
	}

	.step.completed .step-label {
		color: var(--text-secondary);
	}

	.step-line {
		width: 2rem;
		height: 2px;
		background: var(--border-default);
		margin-top: -1.25rem;
		transition: background 0.3s ease;
		flex-shrink: 0;
	}

	@media (min-width: 640px) {
		.step-line {
			width: 3rem;
		}
	}

	@media (min-width: 768px) {
		.step-line {
			width: 4rem;
		}
	}

	.step-line.filled {
		background: var(--accent-primary);
	}

	/* Stage Content */
	.stage-display {
		max-width: 900px;
		margin: 0 auto;
	}

	.stage-content {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2rem;
	}

	@media (min-width: 768px) {
		.stage-content {
			grid-template-columns: 1fr 1fr;
			gap: 3rem;
			align-items: center;
		}
	}

	.stage-text {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.stage-icon {
		font-size: 2.5rem;
	}

	.stage-title {
		font-size: clamp(1.25rem, 3vw, 1.75rem);
		font-weight: 700;
		letter-spacing: -0.01em;
		color: var(--text-primary);
		margin: 0;
	}

	.stage-desc {
		font-size: 0.9375rem;
		line-height: 1.7;
		color: var(--text-secondary);
		margin: 0;
	}

	/* Dashboard Visual */
	.stage-dashboard {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 0.75rem;
	}

	@media (min-width: 640px) {
		.stage-dashboard {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	.metric-card {
		background: var(--bg-card);
		border: 1px solid var(--border-default);
		border-radius: 0.75rem;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.metric-value {
		font-size: 1.5rem;
		font-weight: 800;
		letter-spacing: -0.02em;
		background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.metric-label {
		font-size: 0.75rem;
		font-weight: 500;
		color: var(--text-muted);
	}

	.dashboard-visual {
		grid-column: 1 / -1;
		display: flex;
		justify-content: center;
		padding: 1rem;
		background: var(--bg-card);
		border: 1px solid var(--border-default);
		border-radius: 0.75rem;
	}

	.progress-ring {
		position: relative;
		width: 100px;
		height: 100px;
	}

	.progress-ring svg {
		width: 100%;
		height: 100%;
	}

	.ring-label {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.25rem;
		font-weight: 800;
		color: var(--accent-primary);
	}

	@keyframes stageIn {
		from {
			opacity: 0;
			transform: translateY(16px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
