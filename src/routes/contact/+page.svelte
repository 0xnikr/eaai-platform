<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
</script>

<svelte:head>
	<title>Contact — EAAI</title>
	<meta name="description" content="Get in touch with the Executive AI Advisory Institute." />
</svelte:head>

<Hero
	eyebrow="Contact"
	title="Let's <span class='gradient'>Talk</span>"
	subtitle="Have a question, want to explore a partnership, or ready to start your AI transformation? We'd love to hear from you."
	compact={true}
/>

<section class="section-spacing">
	<div class="container-main">
		<div class="contact-layout">
			<!-- Form -->
			<div class="contact-form-wrap">
				<form class="contact-form" onsubmit={(e) => e.preventDefault()}>
					<div class="form-row">
						<div class="form-group">
							<label for="firstName">First Name</label>
							<input type="text" id="firstName" name="firstName" placeholder="Your first name" required />
						</div>
						<div class="form-group">
							<label for="lastName">Last Name</label>
							<input type="text" id="lastName" name="lastName" placeholder="Your last name" required />
						</div>
					</div>
					<div class="form-group">
						<label for="email">Work Email</label>
						<input type="email" id="email" name="email" placeholder="you@company.com" required />
					</div>
					<div class="form-group">
						<label for="company">Company</label>
						<input type="text" id="company" name="company" placeholder="Your organization" />
					</div>
					<div class="form-group">
						<label for="interest">Area of Interest</label>
						<select id="interest" name="interest">
							<option value="">Select an option</option>
							<option>Executive Advisory</option>
							<option>Leadership Programs</option>
							<option>Certification</option>
							<option>Courses</option>
							<option>Live Training</option>
							<option>Enterprise Partnership</option>
							<option>Other</option>
						</select>
					</div>
					<div class="form-group">
						<label for="message">Message</label>
						<textarea id="message" name="message" rows="4" placeholder="Tell us about your AI transformation goals..."></textarea>
					</div>
					<button type="submit" class="btn-primary form-submit">Send Message</button>
				</form>
			</div>

			<!-- Info -->
			<div class="contact-info">
				<div class="info-card premium-card">
					<h3>Other Ways to Reach Us</h3>
					<div class="info-items">
						<div class="info-item">
							<span class="info-icon">📧</span>
							<div>
								<span class="info-label">Email</span>
								<span class="info-value">hello@eaai.institute</span>
							</div>
						</div>
						<div class="info-item">
							<span class="info-icon">📅</span>
							<div>
								<span class="info-label">Book a Call</span>
								<a href="/bookings" class="info-link">Schedule a consultation →</a>
							</div>
						</div>
						<div class="info-item">
							<span class="info-icon">💼</span>
							<div>
								<span class="info-label">Enterprise</span>
								<span class="info-value">enterprise@eaai.institute</span>
							</div>
						</div>
					</div>
				</div>

				<div class="response-note">
					<p>We typically respond within one business day. For urgent enterprise inquiries, please use the enterprise email address.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.contact-layout { display: grid; grid-template-columns: 1fr; gap: 3rem; }
	@media (min-width: 768px) { .contact-layout { grid-template-columns: 1.5fr 1fr; } }

	.contact-form { display: flex; flex-direction: column; gap: 1.25rem; }
	.form-row { display: grid; grid-template-columns: 1fr; gap: 1.25rem; }
	@media (min-width: 480px) { .form-row { grid-template-columns: 1fr 1fr; } }

	.form-group { display: flex; flex-direction: column; gap: 0.375rem; }
	.form-group label { font-size: 0.8125rem; font-weight: 600; color: var(--text-primary); }

	.form-group input,
	.form-group select,
	.form-group textarea {
		padding: 0.75rem 1rem; font-size: 0.9375rem; font-family: var(--font-family-sans);
		background: var(--bg-card); color: var(--text-primary);
		border: 1px solid var(--border-default); border-radius: var(--radius-button);
		transition: border-color 0.2s ease;
	}
	.form-group input:focus,
	.form-group select:focus,
	.form-group textarea:focus {
		border-color: var(--accent-primary); outline: none;
		box-shadow: 0 0 0 3px var(--accent-glow);
	}
	.form-group input::placeholder,
	.form-group textarea::placeholder { color: var(--text-muted); }
	.form-group select { cursor: pointer; }
	.form-group textarea { resize: vertical; min-height: 100px; }

	.form-submit { width: 100%; margin-top: 0.5rem; }

	.info-card { padding: 1.75rem; }
	.info-card h3 { font-size: 1.0625rem; font-weight: 700; color: var(--text-primary); margin: 0 0 1.25rem; }

	.info-items { display: flex; flex-direction: column; gap: 1.25rem; }
	.info-item { display: flex; gap: 0.75rem; }
	.info-icon { font-size: 1.25rem; flex-shrink: 0; }
	.info-label { display: block; font-size: 0.6875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-muted); }
	.info-value { display: block; font-size: 0.9375rem; color: var(--text-primary); }
	.info-link { display: block; font-size: 0.9375rem; color: var(--accent-primary); text-decoration: none; font-weight: 500; }
	.info-link:hover { text-decoration: underline; }

	.response-note { margin-top: 1.5rem; }
	.response-note p { font-size: 0.8125rem; line-height: 1.5; color: var(--text-muted); margin: 0; }
</style>
