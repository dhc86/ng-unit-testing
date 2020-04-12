import { getCurrencies } from './getCurrencies';

describe('getCurrencies', ()=> {
  it('should return an array of items', ()=> {
    let result = getCurrencies();
    expect(result.length).toBeGreaterThanOrEqual(0)
  });
  it('should return an array of strings', ()=> {
    let result = getCurrencies();
    expect(typeof(result[0]) === 'string').toBe(true)
  });
  it('should return an array with supported currencies', ()=> {
    let result = getCurrencies();
    expect(result).toContain('USD');
    expect(result).toContain('AUD');
    expect(result).toContain('EUR');
  });
})
