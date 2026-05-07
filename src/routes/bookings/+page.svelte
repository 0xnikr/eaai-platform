<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import { bookingTypes } from '$lib/data/siteContent';
</script>

<svelte:head>
	<title>Bookings — EAAI</title>
	<meta name="description" content="Schedule consultations, register for training, and book advisory engagements with the Executive AI Advisory Institute." />
</svelte:head>

<div class="bookings-hero">
	<Hero
		eyebrow="Bookings"
		title="Start Your <span class='gradient'>AI Journey</span>"
		subtitle="From complimentary strategy consultations to enterprise advisory engagements — choose the right starting point for your organization."
		compact={true}
	/>
</div>

<section class="section-spacing bookings-intro">
	<div class="container-main">
		<!-- Future Scheduler Placeholder -->
		<div class="scheduler-placeholder">
			<div class="placeholder-inner">
				<div class="placeholder-icon">📅</div>
				<h3>Scheduling System</h3>
				<p>Our integrated booking system is coming soon. In the meantime, select any option above or contact us directly.</p>
				<a href="/contact" class="btn-secondary">Contact Us Directly</a>
			</div>
		</div>

		<div class="booking-grid">
			{#each bookingTypes as booking}
				<div class="booking-card premium-card">
					<div class="booking-icon">{booking.icon}</div>
					<div class="booking-content">
						<span class="booking-cat">{booking.category}</span>
						<h3>{booking.title}</h3>
						<p>{booking.description}</p>
						<div class="booking-meta">
							<span class="booking-dur">
								<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
								{booking.duration}
							</span>
							{#if booking.price}
								<span class="booking-price">${booking.price}</span>
							{:else if booking.priceLabel}
								<span class="booking-free">{booking.priceLabel}</span>
							{/if}
						</div>
					</div>
					<button class="btn-primary booking-btn">
						{#if booking.price}
							Book Now — ${booking.price}
						{:else}
							Schedule Now
						{/if}
					</button>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.bookings-hero :global(.hero-eyebrow) {
		display: none;
	}

	.bookings-hero :global(.hero.compact) {
		padding: 6.5rem 0 2.75rem;
	}

	.bookings-hero :global(.hero-subtitle) {
		display: none;
	}

	@media (min-width: 768px) {
		.bookings-hero :global(.hero-eyebrow) {
			display: inline-flex;
		}

		.bookings-hero :global(.hero.compact) {
			padding: 10rem 0 5rem;
		}

		.bookings-hero :global(.hero-subtitle) {
			display: block;
			margin-top: 1.5rem;
		}
	}

	.bookings-intro {
		padding-top: 0;
		margin-top: -1.75rem;
	}

	@media (min-width: 768px) {
		.bookings-intro {
			padding-top: 1.5rem;
			margin-top: -1rem;
		}
	}

	.booking-grid {
		display: grid; grid-template-columns: 1fr; gap: 1.25rem; margin-top: 2rem;
	}
	@media (min-width: 640px) { .booking-grid { grid-template-columns: repeat(2, 1fr); } }
	@media (min-width: 1024px) { .booking-grid { grid-template-columns: repeat(3, 1fr); } }

	.booking-card {
		padding: 1.75rem; display: flex; flex-direction: column;
	}
	.booking-icon { font-size: 2rem; margin-bottom: 0.75rem; }
	.booking-content { flex: 1; }
	.booking-cat { font-size: 0.6875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: var(--accent-primary); }
	.booking-card h3 { font-size: 1.125rem; font-weight: 700; color: var(--text-primary); margin: 0.375rem 0 0.5rem; }
	.booking-card p { font-size: 0.875rem; line-height: 1.6; color: var(--text-secondary); margin: 0 0 1rem; }

	.booking-meta { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; }
	.booking-dur { display: flex; align-items: center; gap: 0.375rem; font-size: 0.8125rem; color: var(--text-muted); }
	.booking-price { font-size: 1.125rem; font-weight: 800; color: var(--text-primary); }
	.booking-free { font-size: 0.8125rem; font-weight: 600; color: var(--accent-primary); }

	.booking-btn { width: 100%; text-align: center; padding: 0.75rem; font-size: 0.875rem; }

	.scheduler-placeholder {
		padding: 1.75rem; background: var(--bg-surface); border: 2px dashed var(--border-default); border-radius: var(--radius-card); text-align: center;
	}
	.placeholder-inner { max-width: 400px; margin: 0 auto; }
	.placeholder-icon { font-size: 2.25rem; margin-bottom: 0.5rem; }
	.scheduler-placeholder h3 { font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin: 0 0 0.375rem; }
	.scheduler-placeholder p { font-size: 0.9375rem; color: var(--text-secondary); margin: 0 0 1rem; line-height: 1.45; }

	@media (min-width: 768px) {
		.booking-grid {
			margin-top: 4rem;
		}

		.scheduler-placeholder {
			padding: 3rem;
		}
	}
</style>
