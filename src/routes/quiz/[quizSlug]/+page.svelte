<script lang="ts">
	import { page } from '$app/state';
	import type { QuizQuestion } from '$lib/types';

	const quizSlug = $derived(page.params.quizSlug);

	const questions: QuizQuestion[] = [
		{ id: 'q1', question: 'Which of the following is the most critical first step in enterprise AI transformation?', options: ['Purchasing AI software licenses', 'Conducting an organizational readiness assessment', 'Hiring a Chief AI Officer', 'Building a custom large language model'], correctIndex: 1, explanation: 'An AI readiness assessment establishes a baseline across strategy, data, talent, technology, governance, and culture — essential before any investment decisions.' },
		{ id: 'q2', question: 'What is the primary purpose of an AI governance framework?', options: ['To prevent employees from using AI', 'To ensure responsible, compliant, and risk-managed AI deployment', 'To reduce AI spending', 'To automate board reporting'], correctIndex: 1 },
		{ id: 'q3', question: 'Which metric best indicates successful AI adoption across an organization?', options: ['Number of AI tools purchased', 'Workflow integration rate across departments', 'Social media mentions of AI initiatives', 'Number of AI conference attendees'], correctIndex: 1 }
	];

	let currentQ = $state(0);
	let selected = $state<number | null>(null);
	let answers = $state<(number | null)[]>(new Array(questions.length).fill(null));
	let showResult = $state(false);
	let submitted = $state(false);

	function selectOption(idx: number) {
		if (!submitted) {
			selected = idx;
			answers[currentQ] = idx;
		}
	}

	function submitAnswer() {
		submitted = true;
	}

	function nextQuestion() {
		if (currentQ < questions.length - 1) {
			currentQ++;
			selected = answers[currentQ];
			submitted = false;
		} else {
			showResult = true;
		}
	}

	function prevQuestion() {
		if (currentQ > 0) {
			currentQ--;
			selected = answers[currentQ];
			submitted = false;
		}
	}

	let score = $derived(answers.filter((a, i) => a === questions[i].correctIndex).length);
	let passed = $derived(score >= Math.ceil(questions.length * 0.7));
</script>

<svelte:head><title>Assessment — EAAI</title></svelte:head>

<section class="quiz-shell">
	<div class="container-main quiz-container">
		<div class="quiz-header">
			<a href="/dashboard" class="learn-back">← Back to Dashboard</a>
			<h1>AI Strategy Assessment</h1>
			<div class="quiz-progress">
				<div class="qp-bar"><div class="qp-fill" style="width: {((currentQ + (showResult ? 1 : 0)) / questions.length) * 100}%"></div></div>
				<span class="qp-text">Question {currentQ + 1} of {questions.length}</span>
			</div>
		</div>

		{#if !showResult}
			<div class="question-card">
				<h2 class="question-text">{questions[currentQ].question}</h2>
				<div class="options">
					{#each questions[currentQ].options as option, i}
						<button
							class="option"
							class:selected={selected === i}
							class:correct={submitted && i === questions[currentQ].correctIndex}
							class:wrong={submitted && selected === i && i !== questions[currentQ].correctIndex}
							onclick={() => selectOption(i)}
							disabled={submitted}
						>
							<span class="option-letter">{String.fromCharCode(65 + i)}</span>
							<span>{option}</span>
						</button>
					{/each}
				</div>

				{#if submitted && questions[currentQ].explanation}
					<div class="explanation">
						<strong>Explanation:</strong> {questions[currentQ].explanation}
					</div>
				{/if}

				<div class="question-nav">
					<button class="btn-secondary" onclick={prevQuestion} disabled={currentQ === 0}>← Previous</button>
					{#if !submitted}
						<button class="btn-primary" onclick={submitAnswer} disabled={selected === null}>Submit Answer</button>
					{:else}
						<button class="btn-primary" onclick={nextQuestion}>{currentQ < questions.length - 1 ? 'Next Question →' : 'View Results'}</button>
					{/if}
				</div>
			</div>
		{:else}
			<div class="result-card">
				<div class="result-icon">{passed ? '🏆' : '📖'}</div>
				<h2>{passed ? 'Assessment Passed!' : 'Keep Learning'}</h2>
				<p class="result-score">Score: {score}/{questions.length} ({Math.round((score / questions.length) * 100)}%)</p>
				<p class="result-desc">
					{passed ? 'Congratulations! You\'ve demonstrated competency in this assessment area. Your certification progress has been updated.' : 'You need 70% or higher to pass. Review the material and try again when ready.'}
				</p>
				<div class="result-actions">
					<a href="/dashboard" class="btn-primary">Back to Dashboard</a>
					{#if !passed}
						<button class="btn-secondary" onclick={() => { currentQ = 0; selected = null; answers = new Array(questions.length).fill(null); showResult = false; submitted = false; }}>Retry Assessment</button>
					{/if}
				</div>
			</div>
		{/if}
	</div>
</section>

<style>
	.quiz-shell { padding: 8rem 0 4rem; min-height: 100vh; }

	.quiz-container { max-width: 720px; }
	.quiz-header { margin-bottom: 2rem; }
	.learn-back { font-size: 0.8125rem; color: var(--text-muted); text-decoration: none; display: inline-block; margin-bottom: 1rem; }
	.learn-back:hover { color: var(--accent-primary); }
	.quiz-header h1 { font-size: 1.5rem; font-weight: 700; color: var(--text-primary); margin: 0 0 1rem; }

	.quiz-progress { display: flex; align-items: center; gap: 0.75rem; }
	.qp-bar { flex: 1; height: 6px; background: var(--bg-elevated); border-radius: 3px; overflow: hidden; }
	.qp-fill { height: 100%; background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary)); border-radius: 3px; transition: width 0.3s ease; }
	.qp-text { font-size: 0.8125rem; color: var(--text-muted); white-space: nowrap; }

	.question-card { background: var(--bg-card); border: 1px solid var(--border-default); border-radius: var(--radius-card); padding: 2rem; }
	.question-text { font-size: 1.25rem; font-weight: 600; color: var(--text-primary); margin: 0 0 1.5rem; line-height: 1.4; }

	.options { display: flex; flex-direction: column; gap: 0.625rem; }
	.option {
		display: flex; align-items: center; gap: 0.75rem; padding: 1rem 1.25rem; width: 100%;
		background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: 0.75rem;
		cursor: pointer; text-align: left; font-size: 0.9375rem; color: var(--text-primary);
		transition: all 0.2s ease;
	}
	.option:hover:not(:disabled) { border-color: var(--accent-primary); }
	.option.selected { border-color: var(--accent-primary); background: var(--accent-glow); }
	.option.correct { border-color: #22c55e; background: rgba(34, 197, 94, 0.1); }
	.option.wrong { border-color: #ef4444; background: rgba(239, 68, 68, 0.1); }
	.option-letter { font-weight: 700; color: var(--text-muted); min-width: 24px; }

	.explanation { margin-top: 1.25rem; padding: 1rem; background: var(--accent-glow); border: 1px solid color-mix(in srgb, var(--accent-primary) 24%, transparent); border-radius: 0.75rem; font-size: 0.9375rem; line-height: 1.5; color: var(--text-secondary); }

	.question-nav { display: flex; justify-content: space-between; margin-top: 2rem; gap: 1rem; }

	.result-card { background: var(--bg-card); border: 1px solid var(--border-default); border-radius: var(--radius-card); padding: 3rem 2rem; text-align: center; }
	.result-icon { font-size: 3rem; margin-bottom: 1rem; }
	.result-card h2 { font-size: 1.75rem; font-weight: 800; color: var(--text-primary); margin: 0 0 0.5rem; }
	.result-score { font-size: 1.25rem; font-weight: 700; color: var(--accent-primary); margin: 0 0 1rem; }
	.result-desc { font-size: 1rem; color: var(--text-secondary); max-width: 480px; margin: 0 auto 2rem; line-height: 1.5; }
	.result-actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
</style>
