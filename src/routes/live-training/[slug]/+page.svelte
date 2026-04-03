<script lang="ts">
	import { page } from '$app/state';
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import FAQAccordion from '$lib/components/FAQAccordion.svelte';
	import CTABand from '$lib/components/CTABand.svelte';
	import { liveTrainings } from '$lib/data/liveTraining';
	import type { FAQ } from '$lib/types';

	const slug = $derived(page.params.slug);
	const training = $derived(liveTrainings.find((t) => t.slug === slug));

	function formatDate(dateStr: string): string {
		const date = new Date(dateStr + 'T00:00:00');
		return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
	}

	function seatsUrgency(avail: number, total: number): string {
		const pct = avail / total;
		if (pct <= 0.15) return 'critical';
		if (pct <= 0.4) return 'low';
		return 'available';
	}

	const faqs: FAQ[] = [
		{ question: 'What if I can\'t attend all sessions?', answer: 'Recordings are available for 30 days after the event. However, live participation is strongly recommended for the interactive workshop components.' },
		{ question: 'What materials will I receive?', answer: 'Participants receive comprehensive workbooks, templates, frameworks, and tools that are immediately applicable in their organizations.' },
		{ question: 'Can I send a colleague in my place?', answer: 'Yes. Seat transfers are available up to 48 hours before the event at no additional cost.' },
		{ question: 'What is the cancellation policy?', answer: 'Full refund up to 14 days before the event. 50% refund or full credit 7-14 days before. No refunds within 7 days, but transfers are available.' }
	];
</script>

<svelte:head>
	<title>{training ? training.title : 'Training'} — EAAI</title>
</svelte:head>

{#if training}
	<section class="detail-hero">
		<div class="container-main">
			<Breadcrumb items={[
				{ label: 'Live Training', href: '/live-training' },
				{ label: training.title }
			]} />

			<div class="hero-layout">
				<div class="hero-text">
					<div class="hero-badges">
						<span class="level-badge">{training.level}</span>
						<span class="format-badge">{training.format}</span>
					</div>
					<h1>{training.title}</h1>
					<p class="hero-desc">{training.description}</p>

					<div class="detail-grid">
						<div class="detail-item"><span class="d-label">Date</span><span class="d-value">{formatDate(training.date)}</span></div>
						<div class="detail-item"><span class="d-label">Time</span><span class="d-value">{training.time} {training.timezone}</span></div>
						<div class="detail-item"><span class="d-label">Duration</span><span class="d-value">{training.duration}</span></div>
						<div class="detail-item"><span class="d-label">Availability</span><span class="d-value seats {seatsUrgency(training.seatsAvailable, training.seatsTotal)}">{training.seatsAvailable} of {training.seatsTotal} seats available</span></div>
					</div>
				</div>

				<div class="booking-card glass-card">
					<div class="booking-price">
						<span class="price">${training.price.toLocaleString()}</span>
						<span class="price-per">per participant</span>
					</div>
					<a href="/bookings" class="btn-primary booking-btn">Reserve Your Spot — ${training.price.toLocaleString()}</a>
					<a href="/bookings" class="btn-secondary booking-btn">Group Registration</a>
					<div class="booking-info">
						<p>✓ Includes all materials & resources</p>
						<p>✓ 30-day recording access</p>
						<p>✓ Certificate of completion</p>
						<p>✓ Post-event support (30 days)</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Instructor -->
	<section class="section-spacing">
		<div class="container-main">
			<h2 class="sec-title">Your Facilitator</h2>
			<div class="facilitator-card premium-card">
				<div class="fac-avatar">{training.instructor.name.charAt(0)}</div>
				<div class="fac-info">
					<h3>{training.instructor.name}</h3>
					<span class="fac-title">{training.instructor.title}</span>
					<p>{training.instructor.bio}</p>
					<div class="fac-tags">
						{#each training.instructor.specialties as s}
							<span class="fac-tag">{s}</span>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Outcomes -->
	{#if training.outcomes}
		<section class="section-spacing outcomes-section">
			<div class="container-main">
				<h2 class="sec-title">What You'll Leave With</h2>
				<div class="outcomes-list">
					{#each training.outcomes as outcome, i}
						<div class="outcome-item">
							<span class="outcome-num">{String(i + 1).padStart(2, '0')}</span>
							<p>{outcome}</p>
						</div>
					{/each}
				</div>
			</div>
		</section>
	{/if}

	<!-- Agenda -->
	{#if training.agenda}
		<section class="section-spacing">
			<div class="container-main">
				<h2 class="sec-title">Session Agenda</h2>
				<div class="agenda">
					{#each training.agenda as item}
						<div class="agenda-item">
							<span class="agenda-time">{item.time}</span>
							<div class="agenda-content">
								<h3>{item.title}</h3>
								<p>{item.description}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</section>
	{/if}

	<!-- FAQ -->
	<section class="section-spacing">
		<div class="container-main">
			<h2 class="sec-title">Frequently Asked Questions</h2>
			<div class="faq-container"><FAQAccordion items={faqs} /></div>
		</div>
	</section>

	<CTABand variant="gradient" title="Secure Your Seat" primaryCta={{ label: `Reserve Your Spot — $${training.price.toLocaleString()}`, href: '/bookings' }} secondaryCta={{ label: 'View All Sessions', href: '/live-training' }} />
{:else}
	<section class="section-spacing">
		<div class="container-main" style="text-align: center; padding-top: 8rem;">
			<h1>Training Not Found</h1>
			<p style="color: var(--text-secondary);">The requested training session could not be found.</p>
			<a href="/live-training" class="btn-primary" style="margin-top: 1.5rem;">Browse Live Training</a>
		</div>
	</section>
{/if}

<style>
	.detail-hero { padding: 8rem 0 4rem; }
	@media (min-width: 768px) { .detail-hero { padding: 10rem 0 5rem; } }

	.hero-layout { display: grid; grid-template-columns: 1fr; gap: 2rem; margin-top: 2rem; }
	@media (min-width: 768px) { .hero-layout { grid-template-columns: 1.6fr 1fr; gap: 3rem; } }

	.hero-badges { display: flex; gap: 0.5rem; margin-bottom: 1.25rem; }
	.level-badge { font-size: 0.6875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; padding: 0.25rem 0.75rem; border-radius: 2rem; color: var(--accent-primary); background: var(--accent-glow); border: 1px solid color-mix(in srgb, var(--accent-primary) 24%, transparent); }
	.format-badge { font-size: 0.6875rem; font-weight: 500; padding: 0.25rem 0.75rem; border-radius: 2rem; color: var(--text-muted); background: var(--bg-elevated); border: 1px solid var(--border-default); }

	.hero-text h1 { font-size: clamp(1.75rem, 4vw, 2.75rem); font-weight: 800; letter-spacing: -0.02em; color: var(--text-primary); margin: 0 0 1rem; }
	.hero-desc { font-size: 1.0625rem; line-height: 1.7; color: var(--text-secondary); margin: 0; }

	.detail-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1.5rem; padding: 1.25rem; background: var(--bg-elevated); border-radius: var(--radius-card); }
	.detail-item { display: flex; flex-direction: column; gap: 0.125rem; }
	.d-label { font-size: 0.625rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-muted); }
	.d-value { font-size: 0.875rem; font-weight: 600; color: var(--text-primary); }
	.seats.available { color: var(--accent-primary); }
	.seats.low { color: #f59e0b; }
	.seats.critical { color: #ef4444; }

	.booking-card { padding: 2rem; display: flex; flex-direction: column; gap: 1rem; align-self: start; position: sticky; top: 100px; }
	.booking-price { display: flex; flex-direction: column; }
	.price { font-size: 2.5rem; font-weight: 800; color: var(--text-primary); letter-spacing: -0.03em; }
	.price-per { font-size: 0.8125rem; color: var(--text-muted); }
	.booking-btn { width: 100%; text-align: center; }
	.booking-info { display: flex; flex-direction: column; gap: 0.25rem; margin-top: 0.5rem; }
	.booking-info p { font-size: 0.8125rem; color: var(--text-secondary); margin: 0; }

	.sec-title { font-size: clamp(1.25rem, 3vw, 2rem); font-weight: 800; letter-spacing: -0.02em; color: var(--text-primary); margin: 0 0 2rem; }

	.facilitator-card { padding: 2rem; display: flex; flex-direction: column; gap: 1rem; max-width: 700px; }
	@media (min-width: 640px) { .facilitator-card { flex-direction: row; gap: 1.5rem; } }
	.fac-avatar { width: 64px; height: 64px; border-radius: 50%; background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary)); display: flex; align-items: center; justify-content: center; color: var(--text-inverse); font-weight: 700; font-size: 1.5rem; flex-shrink: 0; }
	.fac-info h3 { font-size: 1.125rem; font-weight: 700; color: var(--text-primary); margin: 0 0 0.125rem; }
	.fac-title { font-size: 0.8125rem; color: var(--accent-primary); font-weight: 500; }
	.fac-info p { font-size: 0.875rem; line-height: 1.6; color: var(--text-secondary); margin: 0.75rem 0; }
	.fac-tags { display: flex; flex-wrap: wrap; gap: 0.375rem; }
	.fac-tag { font-size: 0.6875rem; padding: 0.1875rem 0.5rem; border-radius: 1rem; background: var(--bg-elevated); color: var(--text-muted); border: 1px solid var(--border-default); }

	.outcomes-section { background: var(--bg-surface); border-top: 1px solid var(--border-default); border-bottom: 1px solid var(--border-default); }
	.outcomes-list { display: grid; grid-template-columns: 1fr; gap: 1rem; max-width: 700px; }
	@media (min-width: 640px) { .outcomes-list { grid-template-columns: repeat(2, 1fr); } }
	.outcome-item { background: var(--bg-card); border: 1px solid var(--border-default); border-radius: var(--radius-card); padding: 1.25rem; }
	.outcome-num { font-size: 1.25rem; font-weight: 800; color: var(--accent-primary); opacity: 0.5; }
	.outcome-item p { font-size: 0.9375rem; color: var(--text-secondary); margin: 0.375rem 0 0; line-height: 1.4; }

	.agenda { display: flex; flex-direction: column; gap: 0; max-width: 700px; }
	.agenda-item { display: flex; gap: 1.5rem; padding: 1.25rem 0; border-bottom: 1px solid var(--border-default); }
	.agenda-item:last-child { border-bottom: none; }
	.agenda-time { font-size: 0.8125rem; font-weight: 700; color: var(--accent-primary); min-width: 80px; flex-shrink: 0; }
	.agenda-content h3 { font-size: 1rem; font-weight: 600; color: var(--text-primary); margin: 0 0 0.25rem; }
	.agenda-content p { font-size: 0.875rem; color: var(--text-secondary); margin: 0; line-height: 1.5; }

	.faq-container { max-width: 800px; }
</style>
