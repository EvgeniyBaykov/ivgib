// Карточки каталога: сетка minmax(250px, 1fr) с зазором 20px в контейнере 1400px (поля по 16px).
// 5 колонок от 1362px, 4 — от 1092px, 3 — от 822px, 2 — от 552px.
// Пороги в sizes сдвинуты на 20px вверх: медиазапрос считает ширину вместе с полосой прокрутки.
export const CARD_WIDTH = 800;
export const CARD_WIDTHS = [360, 560, 800];
export const CARD_SIZES =
  '(min-width: 1382px) 260px, (min-width: 1112px) 23vw, (min-width: 842px) 31vw, (min-width: 572px) 46vw, 92vw';

// Плитки разделов на главной: 4 колонки от 1000px, 2 — от 560px.
export const TILE_WIDTH = 800;
export const TILE_WIDTHS = [400, 600, 800];
export const TILE_SIZES = '(min-width: 1400px) 330px, (min-width: 1000px) 24vw, (min-width: 560px) 47vw, 92vw';
