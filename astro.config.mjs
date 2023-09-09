import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const site = 'https://unofficial-blossomcraft-item-wiki.pages.dev';

export const locales = {
	root: { label: 'English', lang: 'en' },
};

// https://astro.build/config
export default defineConfig({
	site,
	integrations: [
		starlight({
			favicon: 'favicon.png',
			title: 'Unofficial BlossomCraft Crate & Item Wiki',
			social: {
				github: 'https://github.com/Unofficial-BlossomCraft-Wikis/fan-blossomcraft-item-docs',
			},
			editLink: {
				baseUrl: 'https://github.com/Unofficial-BlossomCraft-Wikis/fan-blossomcraft-item-docs/edit/main/',
			},
			customCss: [
				// Relative path to your @font-face CSS file.
				'./src/fonts/fonts.css',
				'./src/styles/main.css',
			],
			logo: {
				src: './src/assets/favicon.png',
			},
			locales,
			lastUpdated: true,
			sidebar: [
				{
					label: 'Starting',
					collapsed: true,
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Why and What?', link: '/starter/home/' },
						{ label: 'Table of Contents', link: '/starter/table-of-contents/' },
					],
				},
				{
					label: 'Tier crates',
					collapsed: true,
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'The Tier Crates', link: '/tier/home/' },
						{ label: 'Tier I Crate', link: '/tier/t1/' },
						{ label: 'Tier II Crate', link: '/tier/t2/' },
						{ label: 'Tier III Crate', link: '/tier/t3/' },
						{ label: 'Tier IV Crate', link: '/tier/t4/' },
						{ label: 'Tier V Crate', link: '/tier/t5/' },
					],
				},
				{
					label: 'The Spawner Crate', link: '/spawner/home/',
				},
				{
					label: 'Season crates',
					collapsed: true,
					items: [
					{
						label: 'Season 1: ❀ LEGACY ❀ Crate',
						collapsed: true,
						items: [
							// Each item here is one entry in the navigation menu.
							{ label: 'The ❀ LEGACY ❀ crate', link: '/legacy/home/'},
							{
								label: 'Items (A-Z)',
								collapsed: true,
								autogenerate: { directory: 'legacy' },
							},
							{
								label: 'Items (crate order)',
								collapsed: true,
								items: [
									{ label: '❀ Knockback Fish ❀', link: '/legacy/knockback-fish/	'},
									{ label: '❀ Levitation Boots ❀', link: '/legacy/	levitation-boots/'},
									{ label: '❀ Magma Strider ❀', link: '/legacy/magma-strider/'},
									{ label: '❀ Running Shoes ❀', link: '/legacy/running-shoes/'},
									{ label: '❀ Frostfire Gauntlet ❀', link: '/legacy/	frostfire-gauntlet/'},
									{ label: '❀ The Kings Crown ❀', link: '/legacy/	the-kings-crown/'},
									{ label: '❀ Piñata Bat ❀', link: '/legacy/pinata-bat/'},
									{ label: '❀ Pig-ifier Wand ❀', link: '/legacy/pig-ifier-wand/	'},
									{ label: '❀ Icarus Sword ❀', link: '/legacy/icarus-sword/'},
									{ label: '❀ Grapple Hook ❀', link: '/legacy/grapple-hook/'},
									{ label: '❀ Dwarf Pick ❀', link: '/legacy/dwarf-pick/'},
									{ label: '❀ Unbreakable Armour Set ❀', link: '/legacy/	unbreakable-armour-set/'},
									{ label: '❀ Blossom Helmet ❀', link: '/legacy/blossom-helmet/	'},
									{ label: '❀ Blossom Boots ❀', link: '/legacy/blossom-boots/'},
									{ label: '❀ The Repeater ❀', link: '/legacy/the-repeater/'},
									{ label: 'Blossom Bee Pet Voucher', link: '/legacy/	blossom-bee-pet-voucher/'},
									{ label: '❀ Eclipse ❀', link: '/legacy/eclipse/'},
									{ label: '❀ Blossom Sword ❀', link: '/legacy/blossom-sword/'},
									{ label: '❀ Blossom Chestplate ❀', link: '/legacy/	blossom-chestplate/'},
									{ label: '❀ Blossom Leggings ❀', link: '/legacy/	blossom-leggings/'},
									{ label: 'BB-8 Pet Voucher', link: '/legacy/bb-8-pet-voucher/	'},
									{ label: 'Mini Me Pet Voucher', link: '/legacy/	mini-me-pet-voucher/'},
									{ label: 'Red Panda Pet Voucher', link: '/legacy/	red-panda-pet-voucher/'},
									{ label: '❀ BLOSSOM WINGS ❀', link: '/legacy/blossom-wings/'},
								],
							},
						],
					},
					{
						label: 'Season 2: ❀ SPIRIT ❀ Crate',
						collapsed: true,
						items: [
							{ label: 'The ❀ SPIRIT ❀ Crate', link: '/spirit/home/' },
							{
								label: 'Items (A-Z)',
								collapsed: true,
								autogenerate: { directory: 'spirit' },
							},
							{
								label: 'Items (crate order)',
								collapsed: true,
								items: [
									// Each item here is one entry in the navigation menu.
									{ label: "❀ Kage's Lucky Pick ❀", link: '/spirit/	kages-lucky-pick/'},
									{ label: '❀ Magic Mirror ❀', link: '/spirit/magic-mirror/'},
									{ label: '❀ Big Book of Bad Jokes ❀', link: '/spirit/	big-book-of-bad-jokes/'},
									{ label: '❀ Kraken Slayer ❀', link: '/spirit/kraken-slayer/'},
									{ label: '❀ Chpsys Bath Water ❀', link: '/spirit/	chpsys-bath-water/'},
									{ label: '❀ Legions Bath Water ❀', link: '/spirit/	legions-bath-water/'},
									{ label: '❀ Mystical Cookie ❀', link: '/spirit/	mystical-cookie/'},
									{ label: '❀ Infinite Milk Bucket ❀', link: '/spirit/	infinite-milk-bucket/'},
									{ label: '❀ Pocket Drill ❀', link: '/spirit/pocket-drill/'},
									{ label: '❀ Ex-Bow-Sive ❀', link: '/spirit/ex-bow-sive/'},
									{ label: '❀ Rage Axe ❀', link: '/spirit/rage-axe/'},
									{ label: '❀ Medusas Head ❀', link: '/spirit/medusas-head/'},
									{ label: '❀ Spirit Blossom Helmet ❀', link: '/spirit/	spirit-blossom-helmet/'},
									{ label: '❀ Spirit Blossom Leggings ❀', link: '/spirit/	spirit-blossom-leggings/'},
									{ label: '❀ Spirit Blossom Boots ❀', link: '/spirit/	spirit-blossom-boots/'},
									{ label: '❀ Unbreakable Tool Set ❀', link: '/spirit/	unbreakable-tool-set/'},
									{ label: '❀ Broken Blade ❀', link: '/spirit/broken-blade/'},
									{ label: '❀ ThunderLords Trident ❀', link: '/spirit/	thunderlords-trident/'},
									{ label: '❀ The Ender Sword ❀', link: '/spirit/	the-ender-sword/'},
									{ label: '❀ Herobrines Pickaxe ❀', link: '/spirit/	herobrines-pickaxe/'},
									{ label: '❀ Spirit Blossom Chestplate ❀r', link: '/spirit/	spirit-blossom-chestplate/'},
									{ label: 'Baby Yoda Pet Voucher', link: '/spirit/	baby-yoda-pet-voucher/'},
									{ label: 'CART-ME Pet Voucher', link: '/spirit/	cart-me-pet-voucher/'},
									{ label: '❀ AZAKANA ❀', link: '/spirit/azakana/'},
									{ label: '❀ STEEL TEMPEST ❀', link: '/spirit/steel-tempest/'},
									{ label: '❀ SPIRIT BLOSSOM WINGS ❀', link: '/spirit/	spirit-blossom-wings/'},
								],
							},
						],
					},
				],
			},
			],
		}),
	],
	// Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
	image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});