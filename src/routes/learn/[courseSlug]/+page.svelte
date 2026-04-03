<script lang="ts">
	import { page } from '$app/state';
	import { sampleCurriculum } from '$lib/data/courses';

	const courseSlug = $derived(page.params.courseSlug);
	const curriculum = sampleCurriculum;

	let activeMod = $state(0);
	let activeLesson = $state(0);
	let sidebarOpen = $state(false);
</script>

<svelte:head><title>Learning — EAAI</title></svelte:head>

<div class="learn-shell">
	<!-- Top Bar -->
	<header class="learn-header">
		<div class="learn-header-left">
			<button class="sidebar-toggle" onclick={() => (sidebarOpen = !sidebarOpen)} aria-label="Toggle sidebar">
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
			</button>
			<a href="/courses/{courseSlug}" class="learn-back">← Back to Course</a>
		</div>
		<div class="learn-progress">
			<div class="lp-bar"><div class="lp-fill" style="width: 35%"></div></div>
			<span class="lp-text">35% complete</span>
		</div>
	</header>

	<div class="learn-body">
		<!-- Sidebar -->
		<aside class="learn-sidebar" class:open={sidebarOpen}>
			<div class="sidebar-inner">
				{#each curriculum as mod, mi}
					<div class="sidebar-module">
						<button class="mod-header" onclick={() => (activeMod = activeMod === mi ? -1 : mi)}>
							<span class="mod-label">Module {mi + 1}</span>
							<span class="mod-title">{mod.title}</span>
						</button>
						{#if activeMod === mi}
							<div class="mod-lessons">
								{#each mod.lessons as lesson, li}
									<button
										class="lesson-btn"
										class:active={activeMod === mi && activeLesson === li}
										onclick={() => { activeLesson = li; activeMod = mi; sidebarOpen = false; }}
									>
										<span class="lesson-type-icon">
											{#if lesson.type === 'video'}▶{:else if lesson.type === 'quiz'}✏️{:else if lesson.type === 'exercise'}💪{:else}📖{/if}
										</span>
										<span class="lesson-text">
											<span class="lesson-name">{lesson.title}</span>
											<span class="lesson-dur">{lesson.duration}</span>
										</span>
									</button>
								{/each}
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</aside>

		<!-- Main Content -->
		<main class="learn-main">
			<div class="lesson-content">
				<div class="video-placeholder">
					<div class="play-btn">▶</div>
					<p>Video player placeholder</p>
				</div>

				<div class="lesson-details">
					<span class="lesson-module-label">Module {activeMod + 1} · Lesson {activeLesson + 1}</span>
					<h1>{curriculum[activeMod]?.lessons[activeLesson]?.title ?? 'Select a lesson'}</h1>
					<p class="lesson-body">This is a placeholder for the lesson content area. In the production platform, this will contain video playback, reading content, interactive exercises, or quiz interfaces depending on the lesson type.</p>
				</div>

				<!-- Resources placeholder -->
				<div class="resources-placeholder">
					<h3>📎 Resources & Notes</h3>
					<p>Downloadable resources and your personal notes will appear here.</p>
				</div>
			</div>

			<!-- Navigation -->
			<div class="lesson-nav">
				<button class="btn-secondary" disabled={activeLesson === 0 && activeMod === 0}>← Previous</button>
				<button class="btn-primary">Next Lesson →</button>
			</div>
		</main>
	</div>
</div>

<style>
	.learn-shell { display: flex; flex-direction: column; min-height: 100vh; background: var(--bg-base); }

	.learn-header {
		display: flex; align-items: center; justify-content: space-between; padding: 0.75rem 1.25rem;
		background: var(--bg-surface); border-bottom: 1px solid var(--border-default); position: sticky; top: 0; z-index: 100;
	}
	.learn-header-left { display: flex; align-items: center; gap: 0.75rem; }
	.sidebar-toggle { background: none; border: none; cursor: pointer; color: var(--text-primary); padding: 0.25rem; display: flex; }
	@media (min-width: 1024px) { .sidebar-toggle { display: none; } }
	.learn-back { font-size: 0.8125rem; color: var(--text-muted); text-decoration: none; }
	.learn-back:hover { color: var(--accent-primary); }

	.learn-progress { display: flex; align-items: center; gap: 0.75rem; }
	.lp-bar { width: 120px; height: 4px; background: var(--bg-elevated); border-radius: 2px; overflow: hidden; }
	@media (max-width: 479px) { .lp-bar { width: 60px; } }
	.lp-fill { height: 100%; background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary)); border-radius: 2px; }
	.lp-text { font-size: 0.75rem; color: var(--text-muted); }

	.learn-body { display: flex; flex: 1; }

	.learn-sidebar {
		width: 320px; flex-shrink: 0; background: var(--bg-surface); border-right: 1px solid var(--border-default);
		overflow-y: auto; height: calc(100vh - 52px); position: sticky; top: 52px;
		display: none;
	}
	@media (min-width: 1024px) { .learn-sidebar { display: block; } }
	.learn-sidebar.open { display: block; position: fixed; left: 0; top: 52px; bottom: 0; z-index: 90; width: 300px; }

	.sidebar-inner { padding: 1rem 0; }
	.sidebar-module { border-bottom: 1px solid var(--border-default); }
	.mod-header { width: 100%; padding: 1rem 1.25rem; background: none; border: none; cursor: pointer; text-align: left; display: flex; flex-direction: column; gap: 0.125rem; }
	.mod-label { font-size: 0.625rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: var(--accent-primary); }
	.mod-title { font-size: 0.875rem; font-weight: 600; color: var(--text-primary); }

	.mod-lessons { padding: 0 0 0.5rem; }
	.lesson-btn {
		width: 100%; display: flex; align-items: center; gap: 0.625rem; padding: 0.625rem 1.25rem 0.625rem 2rem;
		background: none; border: none; cursor: pointer; text-align: left; transition: background 0.2s ease;
	}
	.lesson-btn:hover { background: var(--bg-elevated); }
	.lesson-btn.active { background: var(--accent-glow); border-right: 2px solid var(--accent-primary); }
	.lesson-type-icon { font-size: 0.875rem; flex-shrink: 0; }
	.lesson-text { display: flex; flex-direction: column; }
	.lesson-name { font-size: 0.8125rem; color: var(--text-primary); }
	.lesson-dur { font-size: 0.6875rem; color: var(--text-muted); }

	.learn-main { flex: 1; padding: 2rem 1.25rem; max-width: 900px; }
	@media (min-width: 768px) { .learn-main { padding: 2rem 3rem; } }

	.video-placeholder {
		aspect-ratio: 16/9; background: var(--bg-card); border: 1px solid var(--border-default); border-radius: var(--radius-card);
		display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.75rem; margin-bottom: 2rem;
	}
	.play-btn { width: 56px; height: 56px; border-radius: 50%; background: var(--accent-glow); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; color: var(--accent-primary); }
	.video-placeholder p { font-size: 0.8125rem; color: var(--text-muted); }

	.lesson-module-label { font-size: 0.6875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: var(--accent-primary); }
	.lesson-details h1 { font-size: 1.5rem; font-weight: 700; color: var(--text-primary); margin: 0.375rem 0 1rem; }
	.lesson-body { font-size: 1rem; line-height: 1.8; color: var(--text-secondary); }

	.resources-placeholder {
		margin-top: 2rem; padding: 1.5rem; background: var(--bg-card); border: 1px dashed var(--border-default); border-radius: var(--radius-card);
	}
	.resources-placeholder h3 { font-size: 0.9375rem; font-weight: 600; color: var(--text-primary); margin: 0 0 0.375rem; }
	.resources-placeholder p { font-size: 0.8125rem; color: var(--text-muted); margin: 0; }

	.lesson-nav { display: flex; justify-content: space-between; margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid var(--border-default); gap: 1rem; }
</style>
