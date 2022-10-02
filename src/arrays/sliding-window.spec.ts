import { findMaxAverage, findMaxAverage2, longestOnes, zeroFilledSubarray } from "./sliding-window";

describe('findMaxAverage', () => {
    it('should return 12.75', () => {
        expect(findMaxAverage([1,12,-5,-6,50,3], 4)).toEqual(12.75000);
    });

    it('should return -1', () => {
        expect(findMaxAverage([-1], 1)).toEqual(-1);
    });
});

describe('findMaxAverage2', () => {
    it('should return 12.75', () => {
        expect(findMaxAverage2([1,12,-5,-6,50,3], 4)).toEqual(12.75000);
    });

    it('should return -1', () => {
        expect(findMaxAverage2([-1], 1)).toEqual(-1);
    });
});

describe('longestOnes', () => {
    it('should return 10', () => {
        expect(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3)).toEqual(10);
    });

    it('should return 6', () => {
        expect(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2)).toEqual(6);
    });
});

describe('zeroFilledSubarray', () => {
    it('should return 6', () => {
        expect(zeroFilledSubarray([1,3,0,0,2,0,0,4])).toEqual(6);
    });

    it('should return 9', () => {
        expect(zeroFilledSubarray([0,0,0,2,0,0])).toEqual(9);
    });
});