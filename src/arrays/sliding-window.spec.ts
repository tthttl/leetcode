import { findMaxAverage, findMaxAverage2 } from "./sliding-window";

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