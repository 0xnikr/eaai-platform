<script lang="ts">
	import { theme } from '$lib/stores/theme';

	let currentTheme = $derived($theme);
</script>

<button
	onclick={() => theme.toggle()}
	class="theme-toggle"
	aria-label="Toggle {currentTheme === 'dark' ? 'light' : 'dark'} mode"
	title="Switch to {currentTheme === 'dark' ? 'light' : 'dark'} mode"
>
	<div class="toggle-track">
		<div class="toggle-thumb" class:light={currentTheme === 'light'}>
			{#if currentTheme === 'dark'}
				<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
				</svg>
			{:else}
				<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<circle cx="12" cy="12" r="5" />
					<line x1="12" y1="1" x2="12" y2="3" />
					<line x1="12" y1="21" x2="12" y2="23" />
					<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
					<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
					<line x1="1" y1="12" x2="3" y2="12" />
					<line x1="21" y1="12" x2="23" y2="12" />
					<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
					<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
				</svg>
			{/if}
		</div>
	</div>
</button>

<style>
	.theme-toggle {
		position: relative;
		background: none;
		border: none;
		cursor: pointer;
		padding: 4px;
		display: flex;
		align-items: center;
	}

	.toggle-track {
		width: 44px;
		height: 24px;
		background: var(--bg-elevated);
		border: 1px solid var(--border-default);
		border-radius: 12px;
		position: relative;
		transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.toggle-thumb {
		position: absolute;
		top: 2px;
		left: 2px;
		width: 18px;
		height: 18px;
		background: var(--accent-primary);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--text-inverse);
		transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.toggle-thumb.light {
		left: 22px;
	}

	.theme-toggle:hover .toggle-track {
		border-color: var(--accent-primary);
	}
</style>
