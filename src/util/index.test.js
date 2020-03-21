import {
	checkVector,
	checkLine,
	checkHorizontal,
	transpose,
	checkVertical,
	getMatrixDiagonal,
	checkDiagonal,
	y_reflect,
} from './index';

describe('checkVector', () => {

	test('[1,2,3,4] values are not all 2', () => {
		expect(checkVector([1 ,2 ,3 ,4], 2)).toBe(false);
	});

	test('[1,2,2,1] values are not all 2', () => {
		expect(checkVector([1,2,2,1], 2)).toBe(false);
	});

	test('[1,2,1,1] values are not all 1', () => {
		expect(checkVector([1,2,1,1], 1)).toBe(false);
	});

	test('[1,1,1,1] values are all 1', () => {
		expect(checkVector([1,1,1,1], 1)).toBe(true);
	});

	test('[1,1,1] values are not all 2', () => {
		expect(checkVector([1,1,1], 2)).toBe(false);
	});

	test('[2,2,2,2] values are all 2', () => {
		expect(checkVector([2,2,2,2], 2)).toBe(true);
	});

});
