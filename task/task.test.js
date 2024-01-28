import { intersection, difference } from './task.js';

const array1 = [1, 2, 4, 5, 9, 8];
const array2 = [1, 5, 7, 8];

describe('intersection function', function () {
	it('should calculate arrays intersection', () => {
		expect(intersection(array1, array2)).toEqual([1, 5, 8]);
	});
});

describe('difference function', function () {
	it('should calculate arrays difference', () => {
		expect(difference(array1, array2)).toEqual([2, 4, 9, 7]);
	});
});
