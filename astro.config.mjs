import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const site = 'https://unofficial-blossomcraft-item-docs.altiesgamingstudios.com/';

// https://astro.build/config
export default defineConfig({
	site,
	integrations: [
		starlight({
			favicon: 'favicon.png',
			title: 'Unofficial BlossomCraft Crate & Item Documentation',
			social: {
				github: 'https://github.com/Alties-GamingYT/fan-blossomcraft-crate-docs',
			},
			customCss: [
				// Relative path to your @font-face CSS file.
				'./src/fonts/fonts.css',
				'./src/styles/main.css',
			],
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
					label: 'Tier crates',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'The Tier Crates', link: '/tier/home/' },
						{ label: 'Tier I (1) Crate', link: '/tier/t1/' },
						{ label: 'Tier II (2) Crate', link: '/tier/t2/' },
						{ label: 'Tier III (3) Crate', link: '/tier/t3/' },
						{ label: 'Tier IV (4) Crate', link: '/tier/t4/' },
						{ label: 'Tier V (5) Crate', link: '/tier/t5/' },
					],
				},
				{
					label: '❀ LEGACY ❀ Crate',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'The ❀ LEGACY ❀ crate', link: '/legacy/home/'},
						{ label: '❀ Knockback Fish ❀', link: '/legacy/knockback-fish/'},
						{ label: '❀ Levitation Boots ❀', link: '/legacy/levitation-boots/'},
						{ label: '❀ Magma Strider ❀', link: '/legacy/magma-strider/'},
						{ label: '❀ Running Shoes ❀', link: '/legacy/running-shoes/'},
						{ label: '❀ Frostfire Gauntlet ❀', link: '/legacy/frostfire-gauntlet/'},
						{ label: '❀ The Kings Crown ❀', link: '/legacy/the-kings-crown/'},
						{ label: '❀ Piñata Bat ❀', link: '/legacy/pinata-bat/'},
						{ label: '❀ Pig-ifier Wand ❀', link: '/legacy/pig-ifier-wand/'},
						{ label: '❀ Icarus Sword ❀', link: '/legacy/icarus-sword/'},
						{ label: '❀ Grapple Hook ❀', link: '/legacy/grapple-hook/'},
						{ label: '❀ Dwarf Pick ❀', link: '/legacy/dwarf-pick/'},
						{ label: '❀ Unbreakable Armour Set ❀', link: '/legacy/unbreakable-armour-set/'},
						{ label: '❀ Blossom Helmet ❀', link: '/legacy/blossom-helmet/'},
						{ label: '❀ Blossom Boots ❀', link: '/legacy/blossom-boots/'},
						{ label: '❀ The Repeater ❀', link: '/legacy/the-repeater/'},
						{ label: 'Blossom Bee Pet Voucher', link: '/legacy/blossom-bee-pet-voucher/'},
						{ label: '❀ Eclipse ❀', link: '/legacy/eclipse/'},
						{ label: '❀ Blossom Sword ❀', link: '/legacy/blossom-sword/'},
						{ label: '❀ Blossom Chestplate ❀', link: '/legacy/blossom-chestplate/'},
						{ label: '❀ Blossom Leggings ❀', link: '/legacy/blossom-leggings/'},
						{ label: 'BB-8 Pet Voucher', link: '/legacy/bb-8-pet-voucher/'},
						{ label: 'Mini Me Pet Voucher', link: '/legacy/mini-me-pet-voucher/'},
						{ label: 'Red Panda Pet Voucher', link: '/legacy/red-panda-pet-voucher/'},
						{ label: '❀ BLOSSOM WINGS ❀', link: '/legacy/blossom-wings/'},
					],
				},
			],
		}),
	],
	// Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
	image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});