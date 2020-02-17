import { dataDigester } from './dataDigester';
import { hostAppData } from '@/mocks';

describe('dataDigester', () => {
  const { digestHostAppData } = dataDigester();
  describe('Given digestHostAppData method', () => {
    it('should sort', () => {
      const digestedMap = digestHostAppData(hostAppData);
      const exampleHost = digestedMap.get('7e6272f7-098e.dakota.biz');
      const isFirstBiggerThanSecond = exampleHost[0].apdex >= exampleHost[2].apdex;
      expect(isFirstBiggerThanSecond).toBe(true);
      expect(exampleHost[150].apdex).toBe(83);
    });
  });
});
