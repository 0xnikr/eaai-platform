<script lang="ts">
	import { onMount } from 'svelte';

	type Star = {
		delay: number;
		top: number;
		left: number;
		dur: number;
		len: number;
		dx: number;
		dy: number;
	};

	type Meteor = {
		x: number;
		y: number;
		vx: number;
		vy: number;
		len: number;
		age: number;
		life: number;
	};

	const desktopStars: Star[] = [
		{ delay: 0, top: 6, left: 5, dur: 3, len: 100, dx: 500, dy: 300 },
		{ delay: 2.8, top: 22, left: 30, dur: 2.5, len: 140, dx: 500, dy: 300 },
		{ delay: 5.5, top: 12, left: 55, dur: 3.2, len: 90, dx: 500, dy: 300 },
		{ delay: 1.5, top: 35, left: 10, dur: 2.8, len: 120, dx: 500, dy: 300 },
		{ delay: 4.2, top: 8, left: 70, dur: 3.5, len: 80, dx: 500, dy: 300 },
		{ delay: 7, top: 28, left: 45, dur: 2.2, len: 110, dx: 500, dy: 300 },
		{ delay: 8.5, top: 15, left: 20, dur: 3, len: 130, dx: 500, dy: 300 }
	];

	let canvas: HTMLCanvasElement;

	onMount(() => {
		const ctx = canvas.getContext('2d');
		if (!ctx) return;
		const context = ctx;

		const mobileQuery = window.matchMedia('(max-width: 767px)');
		const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
		const meteors: Meteor[] = [];
		let frame = 0;
		let last = performance.now();
		let nextSpawn = 0;
		let running = false;

		function resize() {
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			const { width, height } = canvas.getBoundingClientRect();

			canvas.width = Math.max(1, Math.floor(width * dpr));
			canvas.height = Math.max(1, Math.floor(height * dpr));
			context.setTransform(dpr, 0, 0, dpr, 0, 0);
		}

		function spawn(width: number, height: number) {
			const angle = (32 + Math.random() * 8) * (Math.PI / 180);
			const speed = 420 + Math.random() * 220;
			const x = width * (-0.42 + Math.random() * 1.38);
			const y = height * (-0.32 + Math.random() * 0.72);

			meteors.push({
				x,
				y,
				vx: Math.cos(angle) * speed,
				vy: Math.sin(angle) * speed,
				len: 74 + Math.random() * 48,
				age: 0,
				life: 1.15 + Math.random() * 0.45
			});
		}

		function drawMeteor(meteor: Meteor) {
			const progress = Math.min(meteor.age / meteor.life, 1);
			const fadeIn = Math.min(progress / 0.12, 1);
			const fadeOut = 1 - Math.max((progress - 0.58) / 0.42, 0);
			const alpha = Math.max(0, Math.min(fadeIn, fadeOut));
			const speed = Math.hypot(meteor.vx, meteor.vy);
			const ux = meteor.vx / speed;
			const uy = meteor.vy / speed;
			const length = meteor.len * Math.min(progress / 0.18, 1);
			const tailX = meteor.x - ux * length;
			const tailY = meteor.y - uy * length;
			const gradient = context.createLinearGradient(tailX, tailY, meteor.x, meteor.y);

			gradient.addColorStop(0, 'rgba(0, 229, 187, 0)');
			gradient.addColorStop(0.42, `rgba(0, 229, 187, ${0.16 * alpha})`);
			gradient.addColorStop(0.82, `rgba(0, 229, 187, ${0.58 * alpha})`);
			gradient.addColorStop(1, `rgba(255, 255, 255, ${0.95 * alpha})`);

			context.lineWidth = 2;
			context.lineCap = 'round';
			context.strokeStyle = gradient;
			context.beginPath();
			context.moveTo(tailX, tailY);
			context.lineTo(meteor.x, meteor.y);
			context.stroke();

			context.fillStyle = `rgba(255, 255, 255, ${alpha})`;
			context.shadowBlur = 12;
			context.shadowColor = `rgba(0, 229, 187, ${0.5 * alpha})`;
			context.beginPath();
			context.arc(meteor.x, meteor.y, 1.8, 0, Math.PI * 2);
			context.fill();
			context.shadowBlur = 0;
		}

		function tick(now: number) {
			if (!running) return;

			const width = canvas.clientWidth;
			const height = canvas.clientHeight;
			const delta = Math.min((now - last) / 1000, 0.05);
			last = now;
			nextSpawn -= delta;

			context.clearRect(0, 0, width, height);

			if (nextSpawn <= 0 && meteors.length < 3) {
				spawn(width, height);
				nextSpawn = 1.15 + Math.random() * 1.55;
			}

			for (let i = meteors.length - 1; i >= 0; i -= 1) {
				const meteor = meteors[i];

				meteor.age += delta;
				meteor.x += meteor.vx * delta;
				meteor.y += meteor.vy * delta;

				if (meteor.age >= meteor.life) {
					meteors.splice(i, 1);
					continue;
				}

				drawMeteor(meteor);
			}

			frame = requestAnimationFrame(tick);
		}

		function sync() {
			const shouldRun = mobileQuery.matches && !motionQuery.matches && !document.hidden;

			if (shouldRun === running) return;

			running = shouldRun;
			if (running) {
				resize();
				last = performance.now();
				nextSpawn = 0.35;
				frame = requestAnimationFrame(tick);
			} else {
				cancelAnimationFrame(frame);
				meteors.length = 0;
				context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
			}
		}

		resize();
		sync();

		window.addEventListener('resize', resize);
		document.addEventListener('visibilitychange', sync);
		mobileQuery.addEventListener('change', sync);
		motionQuery.addEventListener('change', sync);

		return () => {
			running = false;
			cancelAnimationFrame(frame);
			window.removeEventListener('resize', resize);
			document.removeEventListener('visibilitychange', sync);
			mobileQuery.removeEventListener('change', sync);
			motionQuery.removeEventListener('change', sync);
		};
	});
</script>

<div class="stars-layer desktop-stars" aria-hidden="true">
	{#each desktopStars as star}
		<div
			class="shooting-star desktop-star"
			style="--delay: {star.delay}s; --top: {star.top}%; --left: {star.left}%; --duration: {star.dur}s; --len: {star.len}px; --dx: min(50vw, {star.dx}px); --dy: min(30vh, {star.dy}px);"
		></div>
	{/each}
</div>

<canvas bind:this={canvas} class="stars-layer mobile-stars" aria-hidden="true"></canvas>

<style>
	.stars-layer {
		position: absolute;
		inset: 0;
		pointer-events: none;
		contain: layout paint;
	}

	canvas.stars-layer {
		width: 100%;
		height: 100%;
	}

	.desktop-stars {
		display: none;
	}

	.mobile-stars {
		display: block;
	}

	@media (min-width: 768px) {
		.desktop-stars {
			display: block;
		}

		.mobile-stars {
			display: none;
		}
	}

	.shooting-star {
		position: absolute;
		top: var(--top);
		left: var(--left);
		width: var(--len, 100px);
		height: 2px;
		opacity: 0;
		will-change: transform, opacity, width;
	}

	.desktop-star {
		background: linear-gradient(
			90deg,
			transparent 0%,
			transparent 10%,
			rgba(0, 229, 187, 0.03) 30%,
			rgba(0, 229, 187, 0.15) 60%,
			rgba(0, 229, 187, 0.5) 85%,
			rgba(0, 229, 187, 0.9) 100%
		);
		border-radius: 0 50% 50% 0;
		animation: shootingStar var(--duration) ease-out var(--delay) infinite;
	}

	.shooting-star::before {
		content: '';
		position: absolute;
		right: -1px;
		top: 50%;
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background: #fff;
		transform: translateY(-50%);
	}

	.desktop-star::before {
		box-shadow:
			0 0 4px 1px rgba(255, 255, 255, 0.9),
			0 0 8px 2px rgba(0, 229, 187, 0.7),
			0 0 16px 4px rgba(0, 229, 187, 0.3);
	}

	@media (prefers-reduced-motion: reduce) {
		.shooting-star {
			animation: none !important;
			opacity: 0 !important;
		}
	}
</style>
