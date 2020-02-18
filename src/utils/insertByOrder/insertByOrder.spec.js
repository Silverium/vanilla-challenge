import { insertByOrder } from './insertByOrder';

describe('insertByOrder', () => {
  it('should return an ordered collection', () => {
    const collection = [1, 3, 4, 5, 7, 9];
    const result = insertByOrder(collection, 6);
    const expected = [1, 3, 4, 5, 6, 7, 9];
    expect(result).toEqual(expected);
    expect(collection).toEqual(expected);
  });
});
