<script lang="ts">
	import { page } from '$app/state';
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import FAQAccordion from '$lib/components/FAQAccordion.svelte';
	import CTABand from '$lib/components/CTABand.svelte';
	import { courses, sampleCurriculum } from '$lib/data/courses';
	import type { FAQ } from '$lib/types';

	const slug = $derived(page.params.slug);
	const course = $derived(courses.find((c) => c.slug === slug));
	const curriculum = $derived(course?.curriculum || sampleCurriculum);

	let activeModule = $state(0);

	const faqs: FAQ[] = [
		{ question: 'How long do I have access?', answer: 'You have 12 months of access from the date of enrollment to complete the course at your own pace.' },
		{ question: 'Is there a certificate of completion?', answer: 'Yes. Upon completing all modules and assessments, you receive a verifiable digital certificate.' },
		{ question: 'Can I get a refund?', answer: 'We offer a 14-day satisfaction guarantee. If the course doesn\'t meet your expectations, contact us for a full refund.' },
		{ question: 'Is team access available?', answer: 'Yes. Contact us for team and enterprise pricing with progress tracking and management dashboards.' }
	];
</script>

<svelte:head>
	<title>{course ? course.title : 'Course'} — EAAI</title>
</svelte:head>

{#if course}
	<section class="detail-hero">
		<div class="container-main">
			<Breadcrumb items={[
				{ label: 'Courses', href: '/courses' },
				{ label: course.title }
			]} />

			<div class="hero-layout">
				<div class="hero-text">
					<div class="hero-badges">
						<span class="level-badge">{course.level}</span>
						<span class="format-badge">{course.format}</span>
						{#if course.featured}
							<span class="featured-badge">Featured</span>
						{/if}
					</div>
					<h1>{course.title}</h1>
					<p class="hero-desc">{course.description}</p>
					<div class="hero-stats">
						<div class="stat"><span class="stat-val">{course.modules}</span><span class="stat-lbl">Modules</span></div>
						<div class="stat"><span class="stat-val">{course.lessons}</span><span class="stat-lbl">Lessons</span></div>
						<div class="stat"><span class="stat-val">{course.duration}</span><span class="stat-lbl">Duration</span></div>
					</div>
				</div>

				<div class="enrollment-card glass-card">
					<div class="enroll-price">
						{#if course.price}
							<span class="price">${course.price.toLocaleString()}</span>
						{/if}
					</div>
					<a href="/bookings" class="btn-primary enroll-btn">Enroll Now{#if course.price} — ${course.price.toLocaleString()}{/if}</a>
					<a href="/bookings" class="btn-secondary enroll-btn">Enterprise Access</a>
					<ul class="enroll-perks">
						<li>✓ 12-month access</li>
						<li>✓ Certificate of completion</li>
						<li>✓ Downloadable resources</li>
						<li>✓ 14-day guarantee</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Learning Outcomes -->
	{#if course.outcomes}
		<section class="section-spacing">
			<div class="container-main">
				<h2 class="sec-title">What You'll Learn</h2>
				<div class="outcomes-grid">
					{#each course.outcomes as outcome, i}
						<div class="outcome-card">
							<span class="outcome-num">{String(i + 1).padStart(2, '0')}</span>
							<p>{outcome}</p>
						</div>
					{/each}
				</div>
			</div>
		</section>
	{/if}

	<!-- Curriculum -->
	<section class="section-spacing curriculum-section">
		<div class="container-main">
			<h2 class="sec-title">Course Curriculum</h2>
			<div class="curriculum">
				{#each curriculum as mod, mi}
					<div class="module" class:active={activeModule === mi}>
						<button class="module-header" onclick={() => (activeModule = activeModule === mi ? -1 : mi)}>
							<div class="module-info">
								<span class="module-num">Module {mi + 1}</span>
								<span class="module-title">{mod.title}</span>
							</div>
							<div class="module-meta">
								<span>{mod.lessons.length} lessons</span>
								<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="chevron"><path d="M6 9l6 6 6-6"/></svg>
							</div>
						</button>
						{#if activeModule === mi}
							<div class="module-content">
								{#each mod.lessons as lesson}
									<div class="lesson-row">
										<div class="lesson-icon">
											{#if lesson.type === 'video'}📹{:else if lesson.type === 'quiz'}✏️{:else if lesson.type === 'exercise'}💪{:else}📖{/if}
										</div>
										<span class="lesson-title">{lesson.title}</span>
										<span class="lesson-meta">
											{#if lesson.preview}<span class="preview-tag">Preview</span>{/if}
											{lesson.duration}
										</span>
									</div>
								{/each}
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- FAQ -->
	<section class="section-spacing">
		<div class="container-main">
			<h2 class="sec-title">Frequently Asked Questions</h2>
			<div class="faq-container"><FAQAccordion items={faqs} /></div>
		</div>
	</section>

	<CTABand variant="gradient" title="Ready to Build Your AI Competency?" primaryCta={{ label: `Enroll Now${course.price ? ` — $${course.price.toLocaleString()}` : ''}`, href: '/bookings' }} secondaryCta={{ label: 'Browse All Courses', href: '/courses' }} />
{:else}
	<section class="section-spacing">
		<div class="container-main" style="text-align: center; padding-top: 8rem;">
			<h1>Course Not Found</h1>
			<p style="color: var(--text-secondary);">The requested course could not be found.</p>
			<a href="/courses" class="btn-primary" style="margin-top: 1.5rem;">Browse Courses</a>
		</div>
	</section>
{/if}

<style>
	.detail-hero { padding: 8rem 0 4rem; }
	@media (min-width: 768px) { .detail-hero { padding: 10rem 0 5rem; } }

	.hero-layout { display: grid; grid-template-columns: 1fr; gap: 2rem; margin-top: 2rem; }
	@media (min-width: 768px) { .hero-layout { grid-template-columns: 1.6fr 1fr; gap: 3rem; } }

	.hero-badges { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.25rem; }
	.level-badge, .format-badge, .featured-badge {
		font-size: 0.6875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em;
		padding: 0.25rem 0.75rem; border-radius: 2rem;
	}
	.level-badge { color: var(--accent-primary); background: var(--accent-glow); border: 1px solid color-mix(in srgb, var(--accent-primary) 24%, transparent); }
	.format-badge { color: var(--text-muted); background: var(--bg-elevated); border: 1px solid var(--border-default); }
	.featured-badge { background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary)); color: var(--text-inverse); }

	.hero-text h1 { font-size: clamp(1.75rem, 4vw, 2.75rem); font-weight: 800; letter-spacing: -0.02em; color: var(--text-primary); margin: 0 0 1rem; }
	.hero-desc { font-size: 1.0625rem; line-height: 1.7; color: var(--text-secondary); margin: 0; }

	.hero-stats {
		display: flex; gap: 2rem; margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid var(--border-default);
	}
	.stat { display: flex; flex-direction: column; }
	.stat-val { font-size: 1.25rem; font-weight: 800; color: var(--accent-primary); }
	.stat-lbl { font-size: 0.75rem; color: var(--text-muted); }

	.enrollment-card {
		padding: 2rem; display: flex; flex-direction: column; gap: 1rem; align-self: start;
		position: sticky; top: 100px;
	}
	.price { font-size: 2.5rem; font-weight: 800; color: var(--text-primary); letter-spacing: -0.03em; }
	.enroll-btn { width: 100%; text-align: center; }
	.enroll-perks { list-style: none; padding: 0; margin: 0.5rem 0 0; display: flex; flex-direction: column; gap: 0.375rem; }
	.enroll-perks li { font-size: 0.8125rem; color: var(--text-secondary); }

	.sec-title { font-size: clamp(1.25rem, 3vw, 2rem); font-weight: 800; letter-spacing: -0.02em; color: var(--text-primary); margin: 0 0 2rem; }

	.outcomes-grid { display: grid; grid-template-columns: 1fr; gap: 1rem; }
	@media (min-width: 640px) { .outcomes-grid { grid-template-columns: repeat(2, 1fr); } }
	.outcome-card { background: var(--bg-card); border: 1px solid var(--border-default); border-radius: var(--radius-card); padding: 1.5rem; }
	.outcome-num { font-size: 1.5rem; font-weight: 800; color: var(--accent-primary); opacity: 0.5; }
	.outcome-card p { font-size: 0.9375rem; line-height: 1.5; color: var(--text-secondary); margin: 0.5rem 0 0; }

	.curriculum-section { background: var(--bg-surface); border-top: 1px solid var(--border-default); border-bottom: 1px solid var(--border-default); }
	.curriculum { display: flex; flex-direction: column; gap: 0.5rem; max-width: 800px; }
	.module { background: var(--bg-card); border: 1px solid var(--border-default); border-radius: var(--radius-card); overflow: hidden; transition: border-color 0.3s ease; }
	.module.active { border-color: var(--accent-primary); }

	.module-header {
		width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 1rem;
		padding: 1.25rem 1.5rem; background: none; border: none; cursor: pointer; text-align: left; color: var(--text-primary);
	}
	.module-info { display: flex; flex-direction: column; gap: 0.125rem; }
	.module-num { font-size: 0.6875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: var(--accent-primary); }
	.module-title { font-size: 1rem; font-weight: 600; }
	.module-meta { display: flex; align-items: center; gap: 0.5rem; font-size: 0.8125rem; color: var(--text-muted); flex-shrink: 0; }
	.chevron { transition: transform 0.3s ease; }
	.module.active .chevron { transform: rotate(180deg); }

	.module-content { padding: 0 1.5rem 1.25rem; animation: fadeIn 0.3s ease; }
	.lesson-row {
		display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem 0;
		border-bottom: 1px solid var(--border-default);
	}
	.lesson-row:last-child { border-bottom: none; }
	.lesson-icon { font-size: 0.875rem; flex-shrink: 0; }
	.lesson-title { font-size: 0.875rem; color: var(--text-primary); flex: 1; }
	.lesson-meta { display: flex; align-items: center; gap: 0.5rem; font-size: 0.75rem; color: var(--text-muted); flex-shrink: 0; }
	.preview-tag { font-size: 0.625rem; font-weight: 600; padding: 0.125rem 0.375rem; border-radius: 0.25rem; background: var(--accent-glow); color: var(--accent-primary); }

	.faq-container { max-width: 800px; }
</style>
