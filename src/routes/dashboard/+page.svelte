<script lang="ts">
	import type { EnrolledCourse, CertificationProgress } from '$lib/types';

	const enrolledCourses: EnrolledCourse[] = [
		{ courseSlug: 'ai-strategy-for-executives', title: 'AI Strategy for Executives', progress: 65, lastAccessed: '2 days ago', status: 'in-progress' },
		{ courseSlug: 'ai-implementation-masterclass', title: 'AI Implementation Masterclass', progress: 30, lastAccessed: '1 week ago', status: 'in-progress' },
		{ courseSlug: 'prompt-engineering-for-business', title: 'Prompt Engineering for Business', progress: 100, lastAccessed: '3 weeks ago', status: 'completed' }
	];

	const certProgress: CertificationProgress[] = [
		{ certSlug: 'ai-strategy-foundation', title: 'AI Strategy Foundation', progress: 80, assessmentsPassed: 2, assessmentsTotal: 3, status: 'in-progress' },
		{ certSlug: 'ai-implementation-professional', title: 'AI Implementation Professional', progress: 0, assessmentsPassed: 0, assessmentsTotal: 4, status: 'not-started' }
	];
</script>

<svelte:head>
	<title>Dashboard — EAAI</title>
</svelte:head>

<section class="dashboard">
	<div class="container-main">
		<!-- Auth Placeholder -->
		<div class="auth-notice">
			<span class="lock-icon">🔒</span>
			<div>
				<h3>Dashboard Preview</h3>
				<p>This is a preview of the logged-in dashboard experience. Authentication will be integrated in a future release.</p>
			</div>
		</div>

		<div class="dash-header">
			<h1>Welcome back, <span class="gradient-text">Alex</span></h1>
			<p>Continue your AI transformation journey.</p>
		</div>

		<!-- Quick Stats -->
		<div class="quick-stats">
			<div class="qs-card">
				<span class="qs-value">2</span>
				<span class="qs-label">Courses In Progress</span>
			</div>
			<div class="qs-card">
				<span class="qs-value">1</span>
				<span class="qs-label">Completed</span>
			</div>
			<div class="qs-card">
				<span class="qs-value">1</span>
				<span class="qs-label">Certification Active</span>
			</div>
			<div class="qs-card">
				<span class="qs-value">65%</span>
				<span class="qs-label">Overall Progress</span>
			</div>
		</div>

		<!-- Enrolled Courses -->
		<section class="dash-section">
			<div class="dash-section-header">
				<h2>My Courses</h2>
				<a href="/dashboard/courses">View All →</a>
			</div>
			<div class="enrolled-grid">
				{#each enrolledCourses as course}
					<a href="/learn/{course.courseSlug}" class="enrolled-card premium-card">
						<div class="enrolled-top">
							<span class="enrolled-status" class:completed={course.status === 'completed'}>
								{course.status === 'completed' ? '✓ Completed' : 'In Progress'}
							</span>
							<span class="enrolled-last">{course.lastAccessed}</span>
						</div>
						<h3>{course.title}</h3>
						<div class="progress-bar">
							<div class="progress-fill" style="width: {course.progress}%"></div>
						</div>
						<span class="progress-label">{course.progress}% complete</span>
					</a>
				{/each}
			</div>
		</section>

		<!-- Certifications -->
		<section class="dash-section">
			<div class="dash-section-header">
				<h2>Certifications</h2>
				<a href="/dashboard/certifications">View All →</a>
			</div>
			<div class="enrolled-grid">
				{#each certProgress as cert}
					<div class="enrolled-card premium-card">
						<div class="enrolled-top">
							<span class="enrolled-status" class:completed={cert.status === 'completed'}>
								{cert.status === 'not-started' ? 'Not Started' : cert.status === 'completed' ? '✓ Certified' : 'In Progress'}
							</span>
						</div>
						<h3>{cert.title}</h3>
						<div class="cert-assess">
							<span>Assessments: {cert.assessmentsPassed}/{cert.assessmentsTotal} passed</span>
						</div>
						<div class="progress-bar">
							<div class="progress-fill" style="width: {cert.progress}%"></div>
						</div>
						<span class="progress-label">{cert.progress}% complete</span>
					</div>
				{/each}
			</div>
		</section>

		<!-- Recommended -->
		<section class="dash-section">
			<h2>Recommended Next Steps</h2>
			<div class="rec-grid">
				<a href="/courses/ai-governance-compliance" class="rec-card premium-card">
					<span class="rec-icon">📚</span>
					<h3>AI Governance & Compliance</h3>
					<p>Complete your governance knowledge to round out your transformation capabilities.</p>
				</a>
				<a href="/live-training/ai-kpi-measurement-workshop" class="rec-card premium-card">
					<span class="rec-icon">📊</span>
					<h3>AI KPI Workshop</h3>
					<p>Upcoming live workshop on building measurement dashboards. 28 seats left.</p>
				</a>
				<a href="/certification/ai-implementation-professional" class="rec-card premium-card">
					<span class="rec-icon">🏆</span>
					<h3>Start Implementation Cert</h3>
					<p>You have the prerequisites. Begin the AI Implementation Professional certification.</p>
				</a>
			</div>
		</section>
	</div>
</section>

<style>
	.dashboard { padding: 8rem 0 4rem; }

	.auth-notice {
		display: flex; align-items: center; gap: 1rem; padding: 1rem 1.5rem; margin-bottom: 2rem;
		background: var(--accent-glow); border: 1px solid color-mix(in srgb, var(--accent-primary) 24%, transparent);
		border-radius: var(--radius-card);
	}
	.lock-icon { font-size: 1.5rem; }
	.auth-notice h3 { font-size: 0.9375rem; font-weight: 600; color: var(--text-primary); margin: 0 0 0.125rem; }
	.auth-notice p { font-size: 0.8125rem; color: var(--text-secondary); margin: 0; }

	.dash-header { margin-bottom: 2rem; }
	.dash-header h1 { font-size: clamp(1.5rem, 4vw, 2.25rem); font-weight: 800; letter-spacing: -0.02em; color: var(--text-primary); margin: 0 0 0.375rem; }
	.dash-header p { font-size: 1rem; color: var(--text-secondary); margin: 0; }

	.quick-stats { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-bottom: 3rem; }
	@media (min-width: 768px) { .quick-stats { grid-template-columns: repeat(4, 1fr); } }
	.qs-card { background: var(--bg-card); border: 1px solid var(--border-default); border-radius: var(--radius-card); padding: 1.25rem; text-align: center; }
	.qs-value { display: block; font-size: 2rem; font-weight: 800; background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
	.qs-label { display: block; font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem; }

	.dash-section { margin-bottom: 3rem; }
	.dash-section-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem; }
	.dash-section-header h2, .dash-section > h2 { font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin: 0; }
	.dash-section-header a { font-size: 0.8125rem; font-weight: 600; color: var(--accent-primary); text-decoration: none; }

	.enrolled-grid { display: grid; grid-template-columns: 1fr; gap: 1rem; }
	@media (min-width: 640px) { .enrolled-grid { grid-template-columns: repeat(2, 1fr); } }
	@media (min-width: 1024px) { .enrolled-grid { grid-template-columns: repeat(3, 1fr); } }

	.enrolled-card { padding: 1.5rem; text-decoration: none; color: inherit; }
	.enrolled-top { display: flex; justify-content: space-between; margin-bottom: 0.75rem; }
	.enrolled-status { font-size: 0.6875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; color: #f59e0b; }
	.enrolled-status.completed { color: var(--accent-primary); }
	.enrolled-last { font-size: 0.75rem; color: var(--text-muted); }
	.enrolled-card h3 { font-size: 1rem; font-weight: 600; color: var(--text-primary); margin: 0 0 1rem; }

	.progress-bar { height: 6px; background: var(--bg-elevated); border-radius: 3px; overflow: hidden; }
	.progress-fill { height: 100%; background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary)); border-radius: 3px; transition: width 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
	.progress-label { font-size: 0.75rem; color: var(--text-muted); margin-top: 0.375rem; display: block; }

	.cert-assess { font-size: 0.8125rem; color: var(--text-secondary); margin-bottom: 0.75rem; }

	.rec-grid { display: grid; grid-template-columns: 1fr; gap: 1rem; margin-top: 1.25rem; }
	@media (min-width: 640px) { .rec-grid { grid-template-columns: repeat(3, 1fr); } }
	.rec-card { padding: 1.5rem; text-decoration: none; color: inherit; }
	.rec-icon { font-size: 1.75rem; display: block; margin-bottom: 0.75rem; }
	.rec-card h3 { font-size: 1rem; font-weight: 600; color: var(--text-primary); margin: 0 0 0.375rem; }
	.rec-card p { font-size: 0.8125rem; line-height: 1.5; color: var(--text-secondary); margin: 0; }
</style>
