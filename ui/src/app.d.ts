// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	const webui: WebUI;

	interface WebUI {
		getStats(): Primise<Stats>;
	}

	type Stats = {
		memory: {
			total: number;
			available: number;
			used: number;
			used_percent: number;
		};
		cpu_used_percent: number;
		processes: Process[];
	};

	type Process = {
		pid: number;
		command: string;
		path: string;
		user: string;
		memory_used_percent: number;
		cpu_used_percent: number;
	};
}

export {};
