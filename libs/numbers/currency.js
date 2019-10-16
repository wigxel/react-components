const defaultConfig = {
  style: 'currency',
  currencyDisplay: 'symbol',
  maximumFractionDigits: 2
};

export const currency = (lang = 'en-US') => (config = {}) =>
  new Intl.NumberFormat(lang, { ...defaultConfig, ...config }).format;

export const numberFormat = currency('en-US')({
  style: 'decimal'
});
export const usd = currency('en-US')({ currency: 'USD' });
export const euro = currency('en-US')({ currency: 'EUR' });
export const naira = currency('en-US')({ currency: 'NGN' });
