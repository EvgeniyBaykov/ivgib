## Проект

Статический сайт ivgib.ru на Astro (перенос с WordPress). Устройство, команды и куда вносить правки — в `README.md`.

- Адреса страниц совпадают со старым сайтом (`trailingSlash: 'always'`), не переименовывать.
- Внутренние ссылки — только через `href()` из `src/lib/urls.ts` (учитывает `BASE_PATH`).
- Контакты — только в `src/data/company.ts`.
- В `Gallery.astro` не читать свойства `item.image` (`width` и т.п.): Astro тогда копирует в сборку тяжёлые оригиналы.
- Перед коммитом: `npm run check` и `npm run build`.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
