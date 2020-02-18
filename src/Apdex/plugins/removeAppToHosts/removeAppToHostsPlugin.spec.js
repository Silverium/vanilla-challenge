import { removeAppToHostsPlugin } from './removeAppToHostsPlugin';
import { rankedAppsByHost } from '@/mocks';

describe('removeAppToHostsPlugin', () => {
  const list = [1];
  const hostAppEntryGarbager = jest.fn(() => () => {});
  beforeEach(jest.clearAllMocks);
  describe('When missing parameters', () => {
    it('should throw', () => {
      expect(() => removeAppToHostsPlugin(null, rankedAppsByHost, hostAppEntryGarbager)).toThrow();
      expect(() => removeAppToHostsPlugin(list, null, hostAppEntryGarbager)).toThrow();
      expect(() => removeAppToHostsPlugin(list, rankedAppsByHost, null)).toThrow();
      expect(() => removeAppToHostsPlugin(null, null, hostAppEntryGarbager)).toThrow();
      expect(() => removeAppToHostsPlugin(list, null, null)).toThrow();
      expect(() => removeAppToHostsPlugin(null, rankedAppsByHost, null)).toThrow();
      expect(() => removeAppToHostsPlugin()).toThrow();
    });
  });
  describe('When including all required parameters', () => {
    it('should return an object with removeAppToHosts method', () => {
      const result = removeAppToHostsPlugin(list, rankedAppsByHost, hostAppEntryGarbager);
      expect(result).toHaveProperty('removeAppToHosts');
    });
    describe('Given removeAppToHosts method ', () => {
      const initialized = removeAppToHostsPlugin(list, rankedAppsByHost, hostAppEntryGarbager);
      const { removeAppToHosts } = initialized;
      describe('When called with any parameter', () => {
        it('should call hostAppEntryGarbager', () => {
          removeAppToHosts('foo');
          expect(hostAppEntryGarbager).toHaveBeenCalledTimes(1);
        });
        it('should return the removed object', () => {
          const result = removeAppToHosts(1);
          expect(result).toBe(1);
        });
      });
    });
  });
});
