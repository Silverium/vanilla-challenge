import { getTopAppsByHostPlugin } from './getTopAppsByHostPlugin';
import { rankedAppsByHost, host1, host2 } from '@/mocks';
import { APPS_BY_HOST_RESULTS_NUMBER as resultsNumber } from '@/config';

jest.mock('@/config', () => ({
  APPS_BY_HOST_RESULTS_NUMBER: 40,
}));

describe('getTopAppsByHostPlugin', () => {
  beforeEach(jest.resetAllMocks);
  describe('Given a Map of RankedAppsByHost', () => {
    const { getTopAppsByHost } = getTopAppsByHostPlugin(rankedAppsByHost);
    describe('Given a host with more elements than APPS_BY_HOST_RESULTS_NUMBER', () => {
      it('returns APPS_BY_HOST_RESULTS_NUMBER elements ', () => {
        expect(getTopAppsByHost(host1)).toHaveLength(resultsNumber);
      });
    });
    describe('Given a host with less elements than APPS_BY_HOST_RESULTS_NUMBER', () => {
      it('returns APPS_BY_HOST_RESULTS_NUMBER elements ', () => {
        expect(getTopAppsByHost(host2).length).toBeLessThan(resultsNumber);
      });
    });
    describe('Given no hostName', () => {
      it('should return undefined', () => {
        expect(getTopAppsByHost()).toBe(undefined);
      });
    });
    describe('Given unexisting hostName', () => {
      it('should return undefined', () => {
        expect(getTopAppsByHost('foo-bar-unexisting')).toBe(undefined);
      });
    });
  });
  describe('Given undefined RankedAppsByHost', () => {
    it('should throw', () => {
      expect(() => getTopAppsByHostPlugin()).toThrow();
    });
  });
});
