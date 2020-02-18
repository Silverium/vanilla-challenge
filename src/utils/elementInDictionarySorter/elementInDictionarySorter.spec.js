import { elementInDictionarySorter } from './elementInDictionarySorter';
import { insertByOrder } from '../insertByOrder/insertByOrder';

jest.mock('../insertByOrder/insertByOrder');
describe('elementInDictionarySorter', () => {
  const key = 'foo';
  const sortBy = (a, b) => a > b;
  const arrayOfEntries = [];
  let dictionary;
  beforeEach(() => {
    jest.resetAllMocks();
    dictionary = new Map([[key, arrayOfEntries]]);
  });
  describe('Given any missing parameter', () => {
    it('should throw', () => {
      expect(() => elementInDictionarySorter(null, 42, sortBy)).toThrow();
      expect(() => elementInDictionarySorter(dictionary, null, sortBy)).toThrow();
      expect(() => elementInDictionarySorter(dictionary, 42, null)).toThrow();
      expect(() => elementInDictionarySorter(null, null, sortBy)).toThrow();
      expect(() => elementInDictionarySorter(dictionary, null, null)).toThrow();
      expect(() => elementInDictionarySorter(null, 42, null)).toThrow();
      expect(() => elementInDictionarySorter()).toThrow();
    });
  });
  describe('Given all required parameters', () => {
    describe('Given an initilized key ', () => {
      const element = 3;
      it('should call insertByOrder', () => {
        elementInDictionarySorter(dictionary, element, sortBy)(key);
        expect(insertByOrder).toBeCalledTimes(1);
        expect(insertByOrder).toBeCalledWith(arrayOfEntries, element, sortBy);
      });
    });
    describe('Given a NOT initilized key ', () => {
      const element = { foo: 'bar' };
      it('should set an array with the element', () => {
        const notInitializedKey = 'notInitializedKey';
        elementInDictionarySorter(dictionary, element, sortBy)(notInitializedKey);
        expect(dictionary.get(notInitializedKey)).toMatchObject([element]);
      });
    });
  });
});
