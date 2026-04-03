<script lang="ts">
	const currentYear = new Date().getFullYear();

	const footerLinks = {
		programs: [
			{ label: 'Executive Advisory', href: '/advisory' },
			{ label: 'Leadership Programs', href: '/leadership-programs' },
			{ label: 'Certification', href: '/certification' },
			{ label: 'Courses', href: '/courses' },
			{ label: 'Live Training', href: '/live-training' }
		],
		resources: [
			{ label: 'Open Source', href: '/open-source' },
			{ label: 'About', href: '/about' },
			{ label: 'Contact', href: '/contact' },
			{ label: 'Bookings', href: '/bookings' }
		],
		platform: [
			{ label: 'Dashboard', href: '/dashboard' },
			{ label: 'My Courses', href: '/dashboard/courses' },
			{ label: 'Certifications', href: '/dashboard/certifications' },
			{ label: 'Account', href: '/account' }
		]
	};
</script>

<footer class="footer">
	<div class="container-main">
		<div class="footer-top">
			<!-- Brand -->
			<div class="footer-brand">
				<a href="/" class="footer-logo">
					<span class="logo-main">EAAI</span>
					<span class="logo-full">Executive AI Advisory Institute</span>
				</a>
				<p class="footer-tagline">
					We build organizational AI capability through executive advisory, structured training, certification, and measurable transformation.
				</p>
			</div>

			<!-- Links -->
			<div class="footer-columns">
				<div class="footer-col">
					<h4>Programs</h4>
					{#each footerLinks.programs as link}
						<a href={link.href}>{link.label}</a>
					{/each}
				</div>
				<div class="footer-col">
					<h4>Resources</h4>
					{#each footerLinks.resources as link}
						<a href={link.href}>{link.label}</a>
					{/each}
				</div>
				<div class="footer-col">
					<h4>Platform</h4>
					{#each footerLinks.platform as link}
						<a href={link.href}>{link.label}</a>
					{/each}
				</div>
			</div>
		</div>

		<div class="footer-bottom">
			<p>© {currentYear} Executive AI Advisory Institute. All rights reserved.</p>
			<div class="footer-legal">
				<a href="/privacy">Privacy</a>
				<a href="/terms">Terms</a>
			</div>
		</div>
	</div>
</footer>

<style>
	.footer {
		background: var(--bg-surface);
		border-top: 1px solid var(--border-default);
		padding: 4rem 0 2rem;
	}

	.footer-top {
		display: grid;
		grid-template-columns: 1fr;
		gap: 3rem;
		padding-bottom: 3rem;
		border-bottom: 1px solid var(--border-default);
	}

	@media (min-width: 768px) {
		.footer-top {
			grid-template-columns: 1.5fr 2fr;
			gap: 4rem;
		}
	}

	.footer-brand {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.footer-logo {
		display: flex;
		flex-direction: column;
		text-decoration: none;
		gap: 0.125rem;
	}

	.footer-logo .logo-main {
		font-size: 1.5rem;
		font-weight: 800;
		letter-spacing: -0.02em;
		background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.footer-logo .logo-full {
		font-size: 0.75rem;
		font-weight: 500;
		color: var(--text-muted);
		letter-spacing: 0.02em;
	}

	.footer-tagline {
		font-size: 0.875rem;
		line-height: 1.6;
		color: var(--text-secondary);
		max-width: 32ch;
		margin: 0;
	}

	.footer-columns {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2rem;
	}

	@media (min-width: 640px) {
		.footer-columns {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	.footer-col h4 {
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--text-muted);
		margin: 0 0 1rem;
	}

	.footer-col a {
		display: block;
		font-size: 0.875rem;
		color: var(--text-secondary);
		text-decoration: none;
		padding: 0.375rem 0;
		transition: color 0.2s ease;
	}

	.footer-col a:hover {
		color: var(--accent-primary);
	}

	.footer-bottom {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: center;
		padding-top: 2rem;
		text-align: center;
	}

	@media (min-width: 640px) {
		.footer-bottom {
			flex-direction: row;
			justify-content: space-between;
		}
	}

	.footer-bottom p {
		font-size: 0.8125rem;
		color: var(--text-muted);
		margin: 0;
	}

	.footer-legal {
		display: flex;
		gap: 1.5rem;
	}

	.footer-legal a {
		font-size: 0.8125rem;
		color: var(--text-muted);
		text-decoration: none;
		transition: color 0.2s ease;
	}

	.footer-legal a:hover {
		color: var(--accent-primary);
	}
</style>
