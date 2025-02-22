import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	build: {
		rollupOptions: {
			external: (id) => {
				if (process.env.NODE_ENV === 'production') {
					// Exclude dev files from production build
					return id.includes('/src/lib/dev/');
				}
				return false;
			}
		}
	}
});
