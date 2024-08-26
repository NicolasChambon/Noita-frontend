export const TOOGLE_LANGUAGE = 'TOOGLE_LANGUAGE';
export const TOOGLE_HEADER_MENU = 'TOOGLE_HEADER_MENU';

export const toogleLanguage = (language) => ({
  type: TOOGLE_LANGUAGE,
  language,
});

export const toogleHeaderMenu = () => ({
  type: TOOGLE_HEADER_MENU,
});
