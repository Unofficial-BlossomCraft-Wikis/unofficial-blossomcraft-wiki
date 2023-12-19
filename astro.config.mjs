import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import webmanifest from "astro-webmanifest";
const site = 'https://blossomcraft.dovahkiin.xyz';
export const locales = {
  root: {
    label: 'English',
    lang: 'en'
  }
};


// https://astro.build/config
export default defineConfig({
  site,
  integrations: [starlight({
    favicon: 'favicon.png',
    title: 'Unofficial BlossomCraft Wiki',
    social: {
      github: 'https://github.com/Unofficial-BlossomCraft-Wikis/unofficial-blossomcraft-wiki'
    },
    editLink: {
      baseUrl: 'https://github.com/Unofficial-BlossomCraft-Wikis/unofficial-blossomcraft-wiki/edit/main/'
    },
    customCss: [
    // Relative path to your @font-face CSS file.
    './src/fonts/fonts.css', './src/styles/main.css'],
    logo: {
      src: './src/assets/favicon.png'
    },
    locales,
    lastUpdated: true,
    sidebar: [{
      label: 'Starting',
      collapsed: true,
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: "We're migrating to WikiDot",
        link: '/starter/home/'
      }, {
        label: 'Why and What?',
        link: '/starter/why-and-what/'
      }, {
        label: 'Resources',
        link: '/starter/resources/'
      }, {
        label: 'Table of Contents',
        link: '/starter/table-of-contents/'
      }]
    }, {
      label: 'Key Shop',
      link: '/key-shop/home/'
    }, {
      label: 'Tier crates',
      collapsed: true,
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'The Tier Crates',
        link: '/tier/home/'
      }, {
        label: 'Tier I Crate',
        link: '/tier/t1/'
      }, {
        label: 'Tier II Crate',
        link: '/tier/t2/'
      }, {
        label: 'Tier III Crate',
        link: '/tier/t3/'
      }, {
        label: 'Tier IV Crate',
        link: '/tier/t4/'
      }, {
        label: 'Tier V Crate',
        link: '/tier/t5/'
      }]
    }, {
      label: 'The Spawner Crate',
      link: '/spawner/home/'
    }, {
      label: 'Season crates',
      collapsed: true,
      items: [{
        label: 'Season 1: ❀ LEGACY ❀ Crate',
        collapsed: true,
        items: [
        // Each item here is one entry in the navigation menu.
        {
          label: 'The ❀ LEGACY ❀ crate',
          link: '/legacy/home/'
        }, {
          label: 'Items',
          collapsed: true,
          autogenerate: {
            directory: 'legacy'
          }
        }]
      }, {
        label: 'Season 2: ❀ SPIRIT ❀ Crate',
        collapsed: true,
        items: [{
          label: 'The ❀ SPIRIT ❀ Crate',
          link: '/spirit/home/'
        }, {
          label: 'Items',
          collapsed: true,
          autogenerate: {
            directory: 'spirit'
          }
        }]
      }, {
        label: 'Season 10: CONSTELLATION Crate',
        collapsed: true,
        badge: {
          text: 'Newest',
          variant: 'danger'
        },
        items: [{
          label: 'The CONSTELLATION Crate',
          link: '/constellation/home/'
        }, {
          label: 'Items',
          collapsed: true,
          autogenerate: {
            directory: 'constellation'
          }
        }]
      }]
    }, {
      label: 'Anniversary Crate',
      link: '/anniversary/home/',
      badge: {
        text: 'Year 3',
        variant: 'danger'
      }
    }, {
      label: 'Christmas Crate 2023',
      link: '/christmas-crate-2023/home/'
    },{
      label: 'Dungeons',
      collapsed: true,
      badge: {
        text: 'New',
        variant: 'tip'
      },
      items: [{
        label: 'Akuma’s Citadel',
        link: '/akumas_citadel/home/'
      }]
    }]
  }), 
	webmanifest({
		name: 'Unofficial BlossomCraft Wiki',
		icon: './src/assets/favicon.png',
		short_name: 'Unofficial BlossomCraft Wiki',
		description: 'Unofficial BlossomCraft Wiki',
		start_url: '/',
		theme_color: '#E16FD6',
		background_color: '#E16FD6',
		display: 'standalone',
	}),],
  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});