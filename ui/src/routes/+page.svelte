<script lang="ts">
	import { onMount } from 'svelte';
	import { Badge, Table } from 'svelte-ux';

	let data: Stats;

	onMount(async () => {
		if (process.env.NODE_ENV !== 'production') {
			// Alternatively, create a try condition: `try { webui; } catch { ... }`
			// to check whether `webui` is available.
			console.log('Using dummy data in development environment');
			const mockdata = await import('$lib/dev/mockdata');
			data = mockdata.data;
			setInterval(async () => {
				data.processes = mockdata.randomizeProcs();
				data.cpu_used_percent = Math.random() * 30;
				data.memory.used_percent = Math.random() * 30;
			}, 1000);
			return;
		}

		// Build environment, where webui is available.
		setInterval(async () => {
			if (typeof webui !== 'undefined') {
				if (webui.isConnected()) {
					data = JSON.parse(await webui.getStats());
					data.processes.sort((a: Process, b: Process) => b.cpu_used_percent - a.cpu_used_percent);
				}
			}
		}, 1000);
	});
</script>

{#if data}
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
