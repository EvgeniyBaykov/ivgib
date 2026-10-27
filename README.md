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

Сайт открывается на домене https://ivgib.ru, адрес https://evgeniybaykov.github.io/ivgib/ перенаправляет на него.

В настройках репозитория: Settings → Pages → Source: **GitHub Actions**, Custom domain: **ivgib.ru**, **Enforce HTTPS** (галочка становится доступна, когда GitHub выпустит сертификат для домена).

При деплое через Actions домен берётся из настроек Pages (Custom domain). Файл `public/CNAME` его только дублирует: менять домен нужно в настройках, иначе он не сменится.

Домен зарегистрирован в REG.RU, DNS-зона — в Yandex Cloud DNS (`ns1.yandexcloud.net`, `ns2.yandexcloud.net`): с DNS-серверов REG.RU проверка GitHub не проходила и сертификат не выпускался. Баланс Yandex Cloud должен быть положительным, иначе зона перестанет отвечать и сайт пропадёт. Записи зоны: четыре A-записи `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` и `CNAME www` → `evgeniybaykov.github.io.`.

Сборка в подпапку для проверки: `BASE_PATH=/ivgib npm run build` (на всех страницах `noindex`, без sitemap).

Яндекс Метрика (счётчик 113831983) подключена в `src/layouts/Base.astro` и выводится только в боевой сборке для основного домена: в `npm run dev` и в сборке с `BASE_PATH` её нет.
