import { parseFloatCurrency, secureCurrency } from '../../../src/utils';
import {
  currency,
  expectedParsedFloatCurrency,
  expectedSecureCurrency,
} from './currency.dummy';

describe('Currency Utils', () => {
  it('should get float number parsed from a string as currency', () => {
    const parsedFloatCurrency = parseFloatCurrency(currency);

    expect(parsedFloatCurrency).toEqual(expectedParsedFloatCurrency);
  });

  it('should get currency secure string', () => {
    const secureCurrencyString = secureCurrency(currency);

    expect(secureCurrencyString).toEqual(expectedSecureCurrency);
  });
});
