import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'dark' | 'light';

function createThemeStore() {
	const defaultTheme: Theme = 'dark';

	let initial: Theme = defaultTheme;
	if (browser) {
		const stored = localStorage.getItem('theme') as Theme | null;
		if (stored === 'light' || stored === 'dark') {
			initial = stored;
		}
	}

	const { subscribe, set, update } = writable<Theme>(initial);

	function applyTheme(theme: Theme) {
		if (browser) {
			const root = document.documentElement;
			root.classList.remove('dark', 'light');
			root.classList.add(theme);
			localStorage.setItem('theme', theme);
		}
	}

	if (browser) {
		applyTheme(initial);
	}

	return {
		subscribe,
		toggle: () => {
			update((current) => {
				const next = current === 'dark' ? 'light' : 'dark';
				applyTheme(next);
				return next;
			});
		},
		set: (theme: Theme) => {
			applyTheme(theme);
			set(theme);
		}
	};
}

export const theme = createThemeStore();
