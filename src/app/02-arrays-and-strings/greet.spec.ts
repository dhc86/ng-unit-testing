import { greet } from './greet';

describe('greet', ()=> {
  it('should return a string', ()=> {
    let result = greet('DHC');
    expect(typeof(result) === 'string').toBe(true);
  });
  it('should return a string that contains the passed name', ()=> {
    let name = 'DHC';
    let result = greet(name);
    expect(result).toContain(name);
  });
});
