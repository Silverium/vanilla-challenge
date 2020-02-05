import { indexOfOrdered } from './indexOfOrdered';

const minSize = 5000;
const maxSize = 5001;
// TODO: use jest tables
const numbers = size => Array.from(Array(size), (element, index) => size - index);
const objects = size =>
  Array.from(Array(size), (element, index) => ({
    value: size - index,
  }));
describe('indexOfOrdered', () => {
  describe('Given values as numbers', () => {
    for (let size = minSize; size < maxSize; size += 1) {
      const arr = numbers(size);
      const numberToSearch = size - Math.floor(size / 12);
      it(`should return index of ${numberToSearch}`, () => {
        const position = indexOfOrdered(arr, numberToSearch, { isDescending: true });

        expect(arr.indexOf(numberToSearch)).toBe(position);
      });
    }
  });
  describe('Given vales as objects', () => {
    const cases = [
      [137, objects(2000)],
      [1, objects(2001)],
      [222, objects(542)],
      [134, objects(333)],
      [333, objects(333)],
    ];
    test.each(cases)('should return index of %s', (value, collection) => {
      const expected = collection.findIndex(element => element.value === value);
      const result = indexOfOrdered(collection, collection[expected], {
        getValue: element => element.value,
        isDescending: true,
      });
      expect(result).toBe(expected);
    });
  });
  // TODO: ascending collections
  // TODO: non linear collections ([1,5,6,23,45...])
});
