<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import LiveTrainingCard from '$lib/components/LiveTrainingCard.svelte';
	import TestimonialGrid from '$lib/components/TestimonialGrid.svelte';
	import CTABand from '$lib/components/CTABand.svelte';
	import { liveTrainings, instructors } from '$lib/data/liveTraining';
	import { testimonials } from '$lib/data/siteContent';
	import { reveal } from '$lib/actions/reveal';
</script>

<svelte:head>
	<title>Live Training — EAAI</title>
	<meta name="description" content="Expert-led live workshops, bootcamps, and intensives for AI strategy, implementation, governance, and leadership." />
</svelte:head>

<Hero
	eyebrow="Live Training"
	title="Learn From <span class='gradient'>Expert Practitioners</span>"
	subtitle="Intensive, hands-on workshops and cohort programs led by senior AI transformation leaders. Leave with actionable deliverables."
	primaryCta={{ label: 'View Upcoming Sessions', href: '#sessions' }}
	secondaryCta={{ label: 'Private Training', href: '/bookings' }}
	compact={true}
/>

<!-- Upcoming Sessions -->
<section class="section-spacing" id="sessions">
	<div class="container-main">
		<div class="section-header" use:reveal>
			<span class="eyebrow">Upcoming</span>
			<h2>Live Training <span class="gradient-text">Sessions</span></h2>
		</div>
		<div class="training-grid">
			{#each liveTrainings as training, i}
				<div use:reveal={{ delay: i * 100 }}>
					<LiveTrainingCard {training} />
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Instructors -->
<section class="section-spacing instructor-section">
	<div class="container-main">
		<div class="section-header" use:reveal>
			<span class="eyebrow">Your Facilitators</span>
			<h2>Led By <span class="gradient-text">Senior Practitioners</span></h2>
		</div>
		<div class="instructor-grid">
			{#each instructors as inst, i}
				<div class="instructor-card premium-card" use:reveal={{ delay: i * 80 }}>
					<div class="inst-avatar">{inst.name.charAt(0)}</div>
					<h3>{inst.name}</h3>
					<span class="inst-title">{inst.title}</span>
					<p class="inst-bio">{inst.bio}</p>
					<div class="inst-tags">
						{#each inst.specialties as s}
							<span class="inst-tag">{s}</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Testimonials -->
<section class="section-spacing">
	<div class="container-main">
		<div class="section-header" use:reveal>
			<span class="eyebrow">Participant Feedback</span>
			<h2>What <span class="gradient-text">Participants Say</span></h2>
		</div>
		<TestimonialGrid testimonials={testimonials.slice(0, 3)} />
	</div>
</section>

<CTABand variant="gradient" title="Need a Private Training Session?" description="We design custom workshops for your executive team, department, or organization." primaryCta={{ label: 'Request Private Training', href: '/bookings' }} secondaryCta={{ label: 'Browse Courses', href: '/courses' }} />

<style>
	.section-header { text-align: center; margin-bottom: 3rem; }
	.section-header h2 { font-size: clamp(1.5rem, 4vw, 2.5rem); font-weight: 800; letter-spacing: -0.02em; color: var(--text-primary); margin: 0.75rem 0 0; }

	.training-grid {
		display: grid; grid-template-columns: 1fr; gap: 1.5rem;
	}
	@media (min-width: 640px) { .training-grid { grid-template-columns: repeat(2, 1fr); } }
	@media (min-width: 1024px) { .training-grid { grid-template-columns: repeat(3, 1fr); } }

	.instructor-section { background: var(--bg-surface); border-top: 1px solid var(--border-default); border-bottom: 1px solid var(--border-default); }

	.instructor-grid {
		display: grid; grid-template-columns: 1fr; gap: 1.25rem;
	}
	@media (min-width: 640px) { .instructor-grid { grid-template-columns: repeat(2, 1fr); } }
	@media (min-width: 1024px) { .instructor-grid { grid-template-columns: repeat(4, 1fr); } }

	.instructor-card { padding: 1.75rem; text-align: center; }
	.inst-avatar {
		width: 56px; height: 56px; border-radius: 50%; margin: 0 auto 1rem;
		background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
		display: flex; align-items: center; justify-content: center;
		color: var(--text-inverse); font-weight: 700; font-size: 1.25rem;
	}
	.instructor-card h3 { font-size: 1.0625rem; font-weight: 700; color: var(--text-primary); margin: 0 0 0.25rem; }
	.inst-title { font-size: 0.8125rem; color: var(--accent-primary); font-weight: 500; }
	.inst-bio { font-size: 0.8125rem; line-height: 1.6; color: var(--text-secondary); margin: 0.75rem 0; }
	.inst-tags { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.375rem; }
	.inst-tag { font-size: 0.6875rem; padding: 0.1875rem 0.5rem; border-radius: 1rem; background: var(--bg-elevated); color: var(--text-muted); border: 1px solid var(--border-default); }
</style>
