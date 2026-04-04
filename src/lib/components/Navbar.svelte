<script lang="ts">
	import { page } from '$app/stores';
	import ThemeToggle from './ThemeToggle.svelte';

	let scrolled = $state(false);
	let mobileOpen = $state(false);

	const navItems = [
		{ label: 'Home', href: '/' },
		{ label: 'Advisory', href: '/advisory' },
		{ label: 'Leadership', href: '/leadership-programs' },
		{ label: 'Certification', href: '/certification' },
		{ label: 'Courses', href: '/courses' },
		{ label: 'Live Training', href: '/live-training' },
		{ label: 'Open Source', href: '/open-source' },
		{ label: 'Bookings', href: '/bookings' }
	];

	function handleScroll() {
		scrolled = window.scrollY > 20;
	}

	function closeMobile() {
		mobileOpen = false;
	}

	function isActive(href: string): boolean {
		if (href === '/') return $page.url.pathname === '/';
		return $page.url.pathname.startsWith(href);
	}
</script>

<svelte:window onscroll={handleScroll} />

<nav class="navbar" class:scrolled aria-label="Main navigation">
	<div class="nav-inner container-main">
		<!-- Logo -->
		<a href="/" class="nav-logo" onclick={closeMobile}>
			<span class="logo-icon">
				<svg width="28" height="28" viewBox="0 0 32 32" fill="none">
					<rect x="2" y="2" width="28" height="28" rx="8" stroke="currentColor" stroke-width="2" />
					<path d="M10 22V10l6 8 6-8v12" stroke="url(#logo-grad)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
					<defs>
						<linearGradient id="logo-grad" x1="10" y1="10" x2="22" y2="22">
							<stop stop-color="var(--accent-primary)" />
							<stop offset="1" stop-color="var(--accent-secondary)" />
						</linearGradient>
					</defs>
				</svg>
			</span>
			<span class="logo-text">
				<span class="logo-main">EAAI</span>
				<span class="logo-sub">Executive AI Advisory</span>
			</span>
		</a>

		<!-- Desktop Nav -->
		<div class="nav-links">
			{#each navItems as item}
				<a
					href={item.href}
					class="nav-link"
					class:active={isActive(item.href)}
				>
					{item.label}
				</a>
			{/each}
		</div>

		<!-- Right Side -->
		<div class="nav-actions">
			<ThemeToggle />
			<a href="/bookings" class="btn-primary nav-cta">Book Strategy Call</a>
		</div>

		<!-- Mobile Toggle -->
		<button
			class="mobile-toggle"
			onclick={() => (mobileOpen = !mobileOpen)}
			aria-label="Toggle menu"
			aria-expanded={mobileOpen}
		>
			<span class="hamburger" class:open={mobileOpen}>
				<span></span>
				<span></span>
				<span></span>
			</span>
		</button>
	</div>

	<!-- Mobile Menu -->
	{#if mobileOpen}
		<div class="mobile-overlay" onclick={closeMobile} role="presentation"></div>
		<div class="mobile-menu" class:open={mobileOpen}>
			<div class="mobile-menu-inner">
				{#each navItems as item}
					<a
						href={item.href}
						class="mobile-link"
						class:active={isActive(item.href)}
						onclick={closeMobile}
					>
						{item.label}
					</a>
				{/each}
				<div class="mobile-divider"></div>
				<div class="mobile-actions">
					<ThemeToggle />
					<a href="/bookings" class="btn-primary mobile-cta" onclick={closeMobile}>Book Strategy Call</a>
				</div>
			</div>
		</div>
	{/if}
</nav>

<style>
	.navbar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
		background: transparent;
	}

	.navbar.scrolled {
		background: var(--glass-bg);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border-bottom: 1px solid var(--glass-border);
	}

	.nav-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 72px;
		gap: 1rem;
	}

	.nav-logo {
		display: flex;
		align-items: center;
		gap: 0.625rem;
		text-decoration: none;
		color: var(--text-primary);
		flex-shrink: 0;
	}

	.logo-icon {
		display: flex;
		align-items: center;
		color: var(--accent-primary);
	}

	.logo-text {
		display: flex;
		flex-direction: column;
		line-height: 1.1;
	}

	.logo-main {
		font-size: 1.125rem;
		font-weight: 800;
		letter-spacing: -0.02em;
		background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.logo-sub {
		font-size: 0.625rem;
		font-weight: 500;
		color: var(--text-muted);
		letter-spacing: 0.04em;
	}

	.nav-links {
		display: none;
		align-items: center;
		gap: 0.125rem;
	}

	@media (min-width: 1280px) {
		.nav-links {
			display: flex;
		}
	}

	.nav-link {
		padding: 0.5rem 0.75rem;
		font-size: 0.8125rem;
		font-weight: 500;
		color: var(--text-secondary);
		text-decoration: none;
		border-radius: 0.5rem;
		transition: all 0.2s ease;
		white-space: nowrap;
	}

	.nav-link:hover {
		color: var(--text-primary);
		background: var(--accent-glow);
	}

	.nav-link.active {
		color: var(--accent-primary);
	}

	.nav-actions {
		display: none;
		align-items: center;
		gap: 0.75rem;
		flex-shrink: 0;
	}

	@media (min-width: 1280px) {
		.nav-actions {
			display: flex;
		}
	}

	.nav-cta {
		padding: 0.625rem 1.25rem;
		font-size: 0.8125rem;
	}

	/* Mobile Toggle */
	.mobile-toggle {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 44px;
		height: 44px;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
	}

	@media (min-width: 1280px) {
		.mobile-toggle {
			display: none;
		}
	}

	.hamburger {
		position: relative;
		width: 22px;
		height: 16px;
	}

	.hamburger span {
		position: absolute;
		left: 0;
		width: 100%;
		height: 2px;
		background: var(--text-primary);
		border-radius: 1px;
		transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.hamburger span:nth-child(1) { top: 0; }
	.hamburger span:nth-child(2) { top: 7px; }
	.hamburger span:nth-child(3) { top: 14px; }

	.hamburger.open span:nth-child(1) {
		top: 7px;
		transform: rotate(45deg);
	}

	.hamburger.open span:nth-child(2) {
		opacity: 0;
		transform: scaleX(0);
	}

	.hamburger.open span:nth-child(3) {
		top: 7px;
		transform: rotate(-45deg);
	}

	/* Mobile Menu */
	.mobile-overlay {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 998;
		animation: fadeOverlay 0.3s ease;
	}

	@keyframes fadeOverlay {
		from { opacity: 0; }
		to { opacity: 1; }
	}

	.mobile-menu {
		position: fixed;
		top: 72px;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 999;
		background: var(--bg-surface);
		border-top: 1px solid var(--border-default);
		overflow-y: auto;
		animation: slideMenu 0.3s cubic-bezier(0.16, 1, 0.3, 1);
	}

	@keyframes slideMenu {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.mobile-menu-inner {
		padding: 1.5rem 1.25rem 3rem;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.mobile-link {
		display: block;
		padding: 1rem 1rem;
		font-size: 1.0625rem;
		font-weight: 500;
		color: var(--text-secondary);
		text-decoration: none;
		border-radius: 0.75rem;
		transition: all 0.2s ease;
	}

	.mobile-link:hover,
	.mobile-link.active {
		color: var(--accent-primary);
		background: var(--accent-glow);
	}

	.mobile-divider {
		height: 1px;
		background: var(--border-default);
		margin: 1rem 0;
	}

	.mobile-actions {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 0 1rem;
		align-items: flex-start;
	}

	.mobile-cta {
		width: 100%;
		text-align: center;
	}
</style>
