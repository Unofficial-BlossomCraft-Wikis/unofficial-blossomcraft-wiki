import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			favicon: 'favicon.png',
			title: 'Unofficial BlossomCraft Crate & Item Documentation',
			social: {
				github: 'https://github.com/Alties-GamingYT/fan-blossomcraft-crate-docs',
			},
			sidebar: [
				{
					label: 'Starting',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Why and What?', link: '/starter/home/' },
						{ label: 'Table of Contents', link: '/starter/table-of-contents/' },
					],
				},
				{
					label: '❀ LEGACY ❀',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'The ❀ LEGACY ❀ crate', link: '/legacy/home/' },
						{ label: '❀ Knockback Fish ❀', link: '/legacy/knockback-fish/' },
					],
				},
			],
		}),
	],

	// Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
	image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
