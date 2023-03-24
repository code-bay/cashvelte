import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/kit/vite';

const config = {
	kit: {
		adapter: adapter(),
		alias: {
			'$components/*': 'src/components/*',
			'$lib/*': 'src/lib/*',
			'$styles/*': 'src/styles/*'
		}
	},
	preprocess: [vitePreprocess()]
};

export default config;
