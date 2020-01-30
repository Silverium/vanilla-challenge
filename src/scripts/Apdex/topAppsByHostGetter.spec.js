import { topAppsByHostGetter } from './topAppsByHostGetter';

describe('topAppsByHostGetter', () => {
  it('returns getTopAppsByHost method', () => {
    expect(topAppsByHostGetter().getTopAppsByHost).toBeTruthy();
  });
});
