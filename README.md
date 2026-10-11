# ivgib.ru — «Элементы для кровли»

Статический сайт на [Astro](https://astro.build): дымники, настолбники, доборные элементы и нестандартные изделия (Иваново и Ивановская область). Перенесён с WordPress, адреса страниц сохранены один в один.

## Команды

```sh
npm install
npm run dev       # http://localhost:4321
npm run check     # проверка типов и шаблонов
npm run build     # сборка в dist/
npm run preview   # просмотр собранного сайта
```

Сборка для временного адреса в подпапке: `BASE_PATH=/ivgib npm run build`. На всех страницах тогда стоит `noindex`, а sitemap не создаётся.

## Где что лежит

| Что поменять | Где |
|---|---|
| Телефон, название, регион | `src/data/company.ts` |
| Текст главной | `src/pages/index.astro` |
| Разделы каталога: название, описание, позиции | `src/content/sections/<раздел>.yaml` |
| Фото позиций | `src/content/sections/<раздел>/` |
| Шапка (фото) | `src/assets/header.jpg` |
| Стили | `src/styles/global.css` |

Добавить позицию: положить фото в папку раздела (имя латиницей) и добавить в YAML пункт:

```yaml
  - title: Дымник «Новый»
    image: ./dymniki/18-dymnik-novyy.jpg
```

У фото без подписи вместо `title` указывается `alt`. Схема данных описана в `src/content.config.ts`.

## Деплой

GitHub Actions (`.github/workflows/deploy.yml`) при push в `main` выполняет `npm ci`, `npm run check`, `npm run build` и публикует `dist/` на GitHub Pages. Повторить деплой без коммита можно кнопкой «Run workflow» во вкладке Actions.

Пока домен не подключён, сайт собирается с `BASE_PATH=/ivgib` и открывается по временному адресу https://evgeniybaykov.github.io/ivgib/ (с `noindex`).

В настройках репозитория: Settings → Pages → Source: **GitHub Actions**.
