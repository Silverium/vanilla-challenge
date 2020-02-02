import { getTopAppsByHostPlugin } from './getTopAppsByHostPlugin';
// TODO: better tests
describe('getTopAppsByHostPlugin', () => {
  it('returns getTopAppsByHost method', () => {
    expect(getTopAppsByHostPlugin().getTopAppsByHost).toBeTruthy();
  });
});
