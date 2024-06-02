<script lang="ts">
	import { Arc, Chart, Group, Svg } from 'layerchart';
	import { onMount } from 'svelte';
	import { Badge, Button, Field, Input, SpringValue, Table, cls } from 'svelte-ux';

	let data_: Stats;
	const radialSegments = 50;

	onMount(async () => {
		if (process.env.NODE_ENV !== 'production') {
			// Alternatively, create a try condition: `try { webui; } catch { ... }`
			// to check whether `webui` is available.
			console.log('Using dummy data in development environment');
			const mockdata = await import('$lib/dev/mockdata');
			data_ = mockdata.data;
			setInterval(async () => {
				data_.processes = mockdata.randomizeProcs();
				data_.cpu_used_percent = Math.random() * 30;
				data_.memory.used_percent = Math.random() * 30;
			}, 1000);
			return;
		}

		// Build environment, where webui is available.
		data_ = JSON.parse(await webui.getStats());
		setInterval(async () => {
			data_ = JSON.parse(await webui.getStats());
			data_.processes.sort((a: Process, b: Process) => b.cpu_used_percent - a.cpu_used_percent);
		}, 1000);
	});

	let filterInput = '';
	$: data = filterInput !== '' ? filter() : data_;

	function filter(): Stats {
		// Smart-case search. Poor-man implementation...
		if (filterInput.toLowerCase() == filterInput && filterInput.toUpperCase() != filterInput) {
			return {
				...data_,
				processes: data_.processes.filter(
					(p) =>
						p.command.toLowerCase().includes(filterInput) ||
						p.path.toLowerCase().includes(filterInput) ||
						p.user.toLowerCase().includes(filterInput)
				)
			};
		} else {
			return {
				...data_,
				processes: data_.processes.filter(
					(p) =>
						p.command.includes(filterInput) ||
						p.path.includes(filterInput) ||
						p.user.includes(filterInput)
				)
			};
		}
	}
</script>

{#if data}
	<div class="grid grid-cols-2 my-6 overflow-x-hidden">
		<div class="h-24">
			<Chart>
				<Svg>
					<Group center>
						{#each { length: radialSegments } as _, segmentIndex}
							{@const segmentAngle = (2 * Math.PI) / radialSegments}
							{@const startAngle = segmentIndex * segmentAngle}
							{@const endAngle = (segmentIndex + 1) * segmentAngle}
							<SpringValue value={data.cpu_used_percent} let:value>
								<Arc
									{startAngle}
									{endAngle}
									innerRadius={-16}
									padAngle={0.02}
									class={cls(
										(segmentIndex / radialSegments) * 100 < value
											? 'fill-emerald-300'
											: 'fill-gray-700'
									)}
								>
									<!-- <Text
										value={Math.round(value)}
										textAnchor="middle"
										verticalAnchor="middle"
										dy={16}
										class="text-6xl tabular-nums fill-white"
									/> -->
								</Arc>
							</SpringValue>
						{/each}
					</Group>
				</Svg>
			</Chart>
		</div>
		<div class="h-24">
			<Chart>
				<Svg>
					<Group center>
						{#each { length: radialSegments } as _, segmentIndex}
							{@const segmentAngle = (2 * Math.PI) / radialSegments}
							{@const startAngle = segmentIndex * segmentAngle}
							{@const endAngle = (segmentIndex + 1) * segmentAngle}
							<SpringValue value={data.memory.used_percent} let:value>
								<Arc
									{startAngle}
									{endAngle}
									innerRadius={-16}
									padAngle={0.02}
									class={cls(
										(segmentIndex / radialSegments) * 100 < value
											? 'fill-emerald-300'
											: 'fill-gray-700'
									)}
								>
									<!-- <Text
										value={Math.round(value)}
										class="text-sm tabular-nums fill-white"
										verticalAnchor="middle"
										textAnchor="middle"
									/> -->
								</Arc>
							</SpringValue>
						{/each}
					</Group>
				</Svg>
			</Chart>
		</div>
	</div>

	<div class="flex justify-between items-center my-4">
		<Field dense class="bg-zinc-950">
			<Input placeholder="Filter..." bind:value={filterInput} on:input={filter} />
		</Field>
		<div class="text-zinc-600 text-xs font-mono">
			<div class="flex items-center justify-between gap-4 mr-2">
				<Badge value={1} dot small>
					<div class="px-2.5 py-1.5">Shortcuts:</div>
				</Badge>
				<Button variant="fill-light" size="sm" disabled>j</Button> Select next
				<Button variant="fill-light" size="sm" disabled>k</Button>
				Select previous
				<Button variant="fill-light" size="sm" disabled>K</Button> Kill process
			</div>
		</div>
	</div>
	<Table
		data={data.processes}
		classes={{ td: 'py-px px-1' }}
		columns={[
			{
				name: 'pid',
				header: 'Pid',
				align: 'left',
				classes: { td: 'pl-0' }
			},
			{
				name: 'command',
				header: 'Command',
				align: 'left'
			},
			{
				name: 'path',
				header: 'Path',
				align: 'left'
			},
			{
				name: 'user',
				header: 'User',
				align: 'left'
			},
			{
				name: 'memory_used_percent',
				header: 'Mem%',
				align: 'right',
				value: (v) => v.memory_used_percent.toFixed(2),
				dataBackground: {
					inset: [1, 2],
					tweened: { duration: 300 }
				},
				classes: {
					td: 'from-primary/5 to-primary/10'
				}
			},
			{
				name: 'cpu_used_percent',
				header: 'CPU%',
				align: 'right',
				value: (v) => v.cpu_used_percent.toFixed(2),
				dataBackground: {
					inset: [1, 2],
					tweened: { duration: 300 }
				},
				classes: {
					td: 'from-secondary/5 to-secondary/10'
				}
			}
		]}
	/>
	<div class="flex mt-4">
		<Badge placement="top-left" value={1} dot small>
			<div class="text-zinc-600 text-sm font-mono px-3 py-1">TODO items</div>
		</Badge>
	</div>
{/if}
