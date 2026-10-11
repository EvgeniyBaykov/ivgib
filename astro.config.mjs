// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// BASE_PATH задаётся для временного адреса в подпапке (GitHub Pages без домена).
// Пустая строка и слеш на конце приводятся к тому же виду, что и BASE_URL в src/lib/urls.ts.
const base = (process.env.BASE_PATH || '/').replace(/(.)\/+$/, '$1');
const isMainDomain = base === '/';

export default defineConfig({
  site: 'https://ivgib.ru',
  base,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: isMainDomain ? [sitemap()] : [],
  // Иначе сборщик пишет медиазапросы как (width>=…), а их не понимает Safari до 16.4 (iOS 15 и старше).
  vite: { build: { cssTarget: ['chrome100', 'safari14', 'firefox100'] } },
});
