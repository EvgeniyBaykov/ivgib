const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Внутренняя ссылка с учётом base: href('/dymniki/') → '/ivgib/dymniki/' на временном адресе. */
export function href(path: string): string {
  return `${base}${path}`;
}

/** Абсолютный адрес на основном домене, без base. */
export function canonical(pathname: string): string {
  const path = pathname.startsWith(base) ? pathname.slice(base.length) || '/' : pathname;
  return new URL(path, 'https://ivgib.ru').href;
}

export const isMainDomain = base === '';
