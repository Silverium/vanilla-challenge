import { addAppToHostsPlugin } from './addAppToHostsPlugin';
import { rankedAppsByHost } from '@/mocks';

describe('addAppToHostsPlugin', () => {
  const list = [1];
  const hostAppEntryDigester = jest.fn(() => () => {});
  beforeEach(jest.clearAllMocks);
  describe('When missing parameters', () => {
    it('should throw', () => {
      expect(() => addAppToHostsPlugin(null, rankedAppsByHost, hostAppEntryDigester)).toThrow();
      expect(() => addAppToHostsPlugin(list, null, hostAppEntryDigester)).toThrow();
      expect(() => addAppToHostsPlugin(list, rankedAppsByHost, null)).toThrow();
      expect(() => addAppToHostsPlugin(null, null, hostAppEntryDigester)).toThrow();
      expect(() => addAppToHostsPlugin(list, null, null)).toThrow();
      expect(() => addAppToHostsPlugin(null, rankedAppsByHost, null)).toThrow();
      expect(() => addAppToHostsPlugin()).toThrow();
    });
  });
  describe('When including all required parameters', () => {
    it('should return an object with addAppToHosts method', () => {
      const result = addAppToHostsPlugin(list, rankedAppsByHost, hostAppEntryDigester);
      expect(result).toHaveProperty('addAppToHosts');
    });
    describe('Given addAppToHosts method ', () => {
      const result = addAppToHostsPlugin(list, rankedAppsByHost, hostAppEntryDigester);
      const { addAppToHosts } = result;
      describe('When called with any parameter', () => {
        it('should call hostAppEntryDigester', () => {
          addAppToHosts('foo');
          expect(hostAppEntryDigester).toHaveBeenCalledTimes(1);
        });
      });
    });
  });
});
