<script lang="ts">
	type Star = {
		delay: number;
		top: number;
		left: number;
		dur: number;
		len: number;
		dx: number;
		dy: number;
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

	const mobileStars: Star[] = [
		{ delay: 1.2, top: 8, left: -8, dur: 13, len: 70, dx: 260, dy: 150 },
		{ delay: 7.5, top: 24, left: 34, dur: 16, len: 88, dx: 280, dy: 160 },
		{ delay: 14, top: 14, left: 62, dur: 18, len: 62, dx: 230, dy: 135 }
	];
</script>

<div class="stars-layer desktop-stars" aria-hidden="true">
	{#each desktopStars as star}
		<div
			class="shooting-star desktop-star"
			style="--delay: {star.delay}s; --top: {star.top}%; --left: {star.left}%; --duration: {star.dur}s; --len: {star.len}px; --dx: min(50vw, {star.dx}px); --dy: min(30vh, {star.dy}px);"
		></div>
	{/each}
</div>

<div class="stars-layer mobile-stars" aria-hidden="true">
	{#each mobileStars as star}
		<div
			class="shooting-star mobile-star"
			style="--delay: {star.delay}s; --top: {star.top}%; --left: {star.left}%; --duration: {star.dur}s; --len: {star.len}px; --dx: {star.dx}px; --dy: {star.dy}px;"
		></div>
	{/each}
</div>

<style>
	.stars-layer {
		position: absolute;
		inset: 0;
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

	.mobile-star {
		background: linear-gradient(
			90deg,
			transparent 0%,
			rgba(0, 229, 187, 0.02) 18%,
			rgba(0, 229, 187, 0.14) 48%,
			rgba(0, 229, 187, 0.52) 78%,
			rgba(255, 255, 255, 0.95) 100%
		);
		border-radius: 999px;
		transform-origin: right center;
		animation: shootingStarPremium var(--duration) cubic-bezier(0.16, 1, 0.3, 1) var(--delay) infinite;
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

	.mobile-star::before {
		box-shadow:
			0 0 4px 1px rgba(255, 255, 255, 0.9),
			0 0 10px 3px rgba(0, 229, 187, 0.55),
			0 0 22px 6px rgba(0, 229, 187, 0.18);
	}

	@keyframes shootingStarPremium {
		0%,
		72% {
			opacity: 0;
			transform: rotate(35deg) translate3d(0, 0, 0) scaleX(0.35);
		}
		76% {
			opacity: 1;
			transform: rotate(35deg) translate3d(0, 0, 0) scaleX(1);
		}
		88% {
			opacity: 0.86;
		}
		100% {
			opacity: 0;
			transform: rotate(35deg) translate3d(var(--dx), var(--dy), 0) scaleX(0.82);
		}
	}
</style>
