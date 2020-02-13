import { indexOfOrdered, getSameValues } from './indexOfOrdered';

const minSize = 5000;
const maxSize = 5001;
// TODO: use jest tables
const numbers = size => Array.from(Array(size), (element, index) => size - index);
const objects = size =>
  Array.from(Array(size), (element, index) => ({
    value: size - index,
  }));
const valueTimes = (value, times) => Array.from(Array(times), () => value);
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
  describe('Given values as objects', () => {
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
  describe.skip('Given collections with repeated values', () => {
    describe('When no secondary criteria is given', () => {
      it('should return the first object with the same value', () => {
        const arr = [0, 1, 1, 2, 2, 2, 2, 2, 4, 5, 6, 7, 8, 9, 10];
        const value = 2;
        const expected = 3;
        const result = indexOfOrdered(arr, value);
        expect(result).toBe(expected);
      });
    });
  });
  // TODO: ascending collections
  // TODO: non linear collections ([1,5,6,23,45...])
});
describe('getSameValues', () => {
  it('should return start and end of indexes of same values', () => {
    const result = getSameValues([2, 2, 2, 2, 2, 2, 6], 2);
    expect(result).toBe(5);
  });
  it('should return end and start of indexes of same values', () => {
    const result = getSameValues([2, 2, 2, 2, 4, 5, 6, 6, 6, 6, 6], 6, { isLastElement: true });
    expect(result).toBe(6);
  });
  const table = [
    [true, 5, 9, [0, 1, 2, 3, 4, ...valueTimes(9, 2)]],
    [true, 5, 11, [0, 1, 2, 3, 4, ...valueTimes(11, 7)]],
    [true, 5, 13, [0, 1, 2, 3, 4, ...valueTimes(13, 13)]],
    [true, 5, 21, [0, 1, 2, 3, 4, ...valueTimes(21, 21)]],
    [true, 5, 101, [0, 1, 2, 3, 4, ...valueTimes(101, 101)]],
    [false, 1, 9, [...valueTimes(9, 2), ...valueTimes(9000, 12)]],
    [false, 6, 11, [...valueTimes(11, 7), ...valueTimes(9000, 12)]],
    [false, 12, 13, [...valueTimes(13, 13), ...valueTimes(9000, 12)]],
    [false, 20, 21, [...valueTimes(21, 21), ...valueTimes(9000, 12)]],
    [false, 100, 101, [...valueTimes(101, 101), ...valueTimes(9000, 12)]],
    [false, 100, 101, [...valueTimes(101, 101), ...valueTimes(9000, 1200)]],
  ];

  it.each(table)(
    'a %s last element will have %s repeated from/to index %s',
    (isLastElement, expected, element, collection) => {
      expect(getSameValues(collection, element, { isLastElement })).toBe(expected);
    }
  );
});
