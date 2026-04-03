<script lang="ts">
	interface Props {
		items: string[];
		selected: string;
		onSelect: (item: string) => void;
	}

	let { items, selected, onSelect }: Props = $props();
</script>

<div class="filter-bar" role="tablist">
	{#each items as item}
		<button
			class="chip"
			class:active={selected === item}
			onclick={() => onSelect(item)}
			role="tab"
			aria-selected={selected === item}
		>
			{item}
		</button>
	{/each}
</div>

<style>
	.filter-bar {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		padding: 0.25rem 0;
	}
</style>
