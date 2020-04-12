import { compute } from './compute';

describe('compute', ()=> {
  it('should return 0 if number is negative', ()=> {
    let test = compute(-1);
    expect(test).toBe(0);
  });
  it('should return 1 if number is 0', ()=> {
    let test = compute(0);
    expect(test).toBe(1);
  });
  it('should increase by 1 if number is positive', ()=> {
    let test = compute(2);
    expect(test).toBe(3);
  });
})
