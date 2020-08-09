const parseFloatCurrency = (value: string) => {
  const cleanedValue = value.replace(/\D/g, '');
  const integer = cleanedValue.substr(0, cleanedValue.length - 2);
  const decimal = cleanedValue.substr(
    cleanedValue.length - 2,
    cleanedValue.length - 1
  );

  return Number(`${integer}.${decimal}`);
};

const secureCurrency = (value: string) =>
  Array(value.length).fill('*').join('');

export { parseFloatCurrency, secureCurrency };
