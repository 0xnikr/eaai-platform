/**
 * Svelte action: reveals elements when they scroll into view.
 * Usage: <div use:reveal> or <div use:reveal={{ delay: 200 }}>
 *
 * Supports options:
 *   delay     – ms delay before the animation starts (default 0)
 *   duration  – ms animation duration (default 650)
 *   y         – starting Y offset in px (default 32)
 *   once      – animate only once (default true)
 *   threshold – IntersectionObserver threshold (default 0.12)
 */

interface RevealOptions {
	delay?: number;
	duration?: number;
	y?: number;
	once?: boolean;
	threshold?: number;
}

export function reveal(node: HTMLElement, options: RevealOptions = {}) {
	const {
		delay = 0,
		duration = 650,
		y = 32,
		once = true,
		threshold = 0.12
	} = options;

	// Set initial hidden state
	node.style.opacity = '0';
	node.style.transform = `translateY(${y}px)`;
	node.style.transition = `opacity ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms, transform ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`;
	node.style.willChange = 'opacity, transform';

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					node.style.opacity = '1';
					node.style.transform = 'translateY(0)';

					if (once) {
						observer.unobserve(node);
						// Clean up will-change after animation completes
						setTimeout(() => {
							node.style.willChange = 'auto';
						}, duration + delay + 100);
					}
				} else if (!once) {
					node.style.opacity = '0';
					node.style.transform = `translateY(${y}px)`;
				}
			});
		},
		{ threshold }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		},
		update(newOptions: RevealOptions) {
			// Allow dynamic option updates
			const nd = newOptions.delay ?? delay;
			const ndur = newOptions.duration ?? duration;
			node.style.transition = `opacity ${ndur}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${nd}ms, transform ${ndur}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${nd}ms`;
		}
	};
}
