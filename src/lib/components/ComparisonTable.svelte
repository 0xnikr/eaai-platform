<script lang="ts">
	import type { ComparisonRow } from '$lib/types';

	interface Props {
		rows: ComparisonRow[];
	}

	let { rows }: Props = $props();

	function renderCell(value: string | boolean): string {
		if (value === true) return '✓';
		if (value === false) return '—';
		return value;
	}

	function cellClass(value: string | boolean): string {
		if (value === true) return 'check';
		if (value === false) return 'dash';
		return 'text';
	}
</script>

<!-- Desktop Table -->
<div class="comparison-desktop">
	<table>
		<thead>
			<tr>
				<th class="feature-col">Capability</th>
				<th>Basic Workshop</th>
				<th>DIY Internal</th>
				<th>Generic Consultant</th>
				<th class="highlight-col">EAAI</th>
			</tr>
		</thead>
		<tbody>
			{#each rows as row}
				<tr>
					<td class="feature-cell">{row.feature}</td>
					<td class={cellClass(row.basicWorkshop)}>{renderCell(row.basicWorkshop)}</td>
					<td class={cellClass(row.diyInternal)}>{renderCell(row.diyInternal)}</td>
					<td class={cellClass(row.genericConsultant)}>{renderCell(row.genericConsultant)}</td>
					<td class="highlight-cell {cellClass(row.eaai)}">{renderCell(row.eaai)}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<!-- Mobile Cards -->
<div class="comparison-mobile">
	{#each rows as row}
		<div class="compare-card">
			<div class="compare-feature">{row.feature}</div>
			<div class="compare-grid">
				<div class="compare-item">
					<span class="compare-label">Basic Workshop</span>
					<span class="compare-value {cellClass(row.basicWorkshop)}">{renderCell(row.basicWorkshop)}</span>
				</div>
				<div class="compare-item">
					<span class="compare-label">DIY Internal</span>
					<span class="compare-value {cellClass(row.diyInternal)}">{renderCell(row.diyInternal)}</span>
				</div>
				<div class="compare-item">
					<span class="compare-label">Generic Consultant</span>
					<span class="compare-value {cellClass(row.genericConsultant)}">{renderCell(row.genericConsultant)}</span>
				</div>
				<div class="compare-item highlight">
					<span class="compare-label">EAAI</span>
					<span class="compare-value {cellClass(row.eaai)}">{renderCell(row.eaai)}</span>
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
	/* Desktop */
	.comparison-desktop {
		display: none;
		overflow-x: auto;
	}

	@media (min-width: 768px) {
		.comparison-desktop {
			display: block;
		}
	}

	table {
		width: 100%;
		border-collapse: separate;
		border-spacing: 0;
		border: 1px solid var(--border-default);
		border-radius: var(--radius-card);
		overflow: hidden;
	}

	thead th {
		background: var(--bg-elevated);
		padding: 1rem 1.25rem;
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: var(--text-muted);
		text-align: center;
		border-bottom: 1px solid var(--border-default);
	}

	thead th.feature-col {
		text-align: left;
		width: 30%;
	}

	thead th.highlight-col {
		color: var(--accent-primary);
		background: var(--accent-glow);
	}

	tbody td {
		padding: 1rem 1.25rem;
		font-size: 0.875rem;
		text-align: center;
		border-bottom: 1px solid var(--border-default);
		color: var(--text-secondary);
	}

	tbody tr:last-child td {
		border-bottom: none;
	}

	tbody tr:hover {
		background: var(--bg-elevated);
	}

	.feature-cell {
		text-align: left;
		font-weight: 500;
		color: var(--text-primary);
	}

	.highlight-cell {
		background: var(--accent-glow);
	}

	.check {
		color: var(--accent-primary);
		font-weight: 700;
		font-size: 1.125rem;
	}

	.dash {
		color: var(--text-muted);
		opacity: 0.5;
	}

	.text {
		color: var(--text-secondary);
		font-size: 0.8125rem;
	}

	/* Mobile Cards */
	.comparison-mobile {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	@media (min-width: 768px) {
		.comparison-mobile {
			display: none;
		}
	}

	.compare-card {
		background: var(--bg-card);
		border: 1px solid var(--border-default);
		border-radius: var(--radius-card);
		padding: 1.25rem;
	}

	.compare-feature {
		font-size: 0.9375rem;
		font-weight: 600;
		color: var(--text-primary);
		margin-bottom: 1rem;
		padding-bottom: 0.75rem;
		border-bottom: 1px solid var(--border-default);
	}

	.compare-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.75rem;
	}

	.compare-item {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.compare-item.highlight {
		background: var(--accent-glow);
		padding: 0.5rem;
		border-radius: 0.5rem;
	}

	.compare-label {
		font-size: 0.6875rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: var(--text-muted);
	}

	.compare-value {
		font-size: 0.875rem;
		font-weight: 500;
	}

	.compare-value.check {
		color: var(--accent-primary);
		font-weight: 700;
	}

	.compare-value.dash {
		color: var(--text-muted);
		opacity: 0.5;
	}
</style>
