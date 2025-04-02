// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import starlightThemeObsidian from 'starlight-theme-obsidian';
import { createStarlightObsidianPlugin } from 'starlight-obsidian';

const [vault1_StarlightObsidian, vault1_ObsidianSidebarGroup] = createStarlightObsidianPlugin()

// https://astro.build/config
export default defineConfig({
	site: 'https://adityatelange.github.io/astro-obsidian-starlight-notes-template/',
	base: '/',
	integrations: [
		starlight({
			title: 'My Notes',
			social: {
				gitlab: 'https://gitlab.com/adityatelange/astro-obsidian-starlight-notes-template',
			},
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
			sidebar: [
				vault1_ObsidianSidebarGroup,
			],
			plugins: [
				// Set theme
				starlightThemeObsidian(),
				// Generate the Obsidian vault pages.
				vault1_StarlightObsidian({
					vault: 'obsidian-vaults/a-ship-of-truth',
					output: 'a-ship-of-truth',
					sidebar: { label: 'A Ship of Truth', collapsedFolders: true },
				}),
			]
		}),
	],
});
