// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const aaLang = {
  id: 'aa',
  name: 'aa',
  scopeName: 'text.aa',
  patterns: [],
  aliases: ['sjis']
};

const asciiLang = {
  id: 'ascii',
  name: 'ascii',
  scopeName: 'text.ascii',
  patterns: [],
  aliases: ['art']
};

// https://astro.build/config
export default defineConfig({
  site: 'https://sakuyainazaki.github.io',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
      langs: [aaLang, asciiLang],
      transformers: [
        {
          name: 'ascii-art-class',
          pre(node) {
            const lang = this.options.lang?.toLowerCase();
            if (lang === 'aa' || lang === 'sjis') {
              node.properties.class = `${node.properties.class || ''} aa`.trim();
            } else if (lang === 'ascii' || lang === 'art') {
              node.properties.class = `${node.properties.class || ''} ascii`.trim();
            }
          }
        }
      ]
    }
  }
});
