export const light = {
  name: 'light',
  breakingPoints: {
    mobile: 768,
    smallDesktop: 1024,
  },
  boxShadow: {
    defaultShadow: '0 0.1875rem 0.5rem rgba(59, 55, 53, 0.3)',
    hardShadow: '0 0.35rem 0.75rem rgba(59, 55, 53, 0.65)',
    mediumShadow: '0 0.25rem 0.65rem rgba(59, 55, 53, 0.55)',
  },
  colors: {
    text: '#4D565C',
    primary: '#00B6A0',
  },
};

export type ITheme = typeof light;

export const themes = {
  light,
};
