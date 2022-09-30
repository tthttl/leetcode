import { findDisappearedNumbers, heightChecker, heightChecker2, sortedSquares, sortedSquares2, thirdMax, thirdMax2 } from "./advanced";

describe('heightChecker', () => {
    it('should return 0 if its ordered', () => {
        const height = [1,2,3,4,5,6];
        expect(heightChecker(height)).toEqual(0);
    });
    it('should return 6 if all of them are in the bad position', () => {
        const height = [6,5,4,3,2,1];
        expect(heightChecker(height)).toEqual(6);
    });

    it('should return 4, which are in the bad pos', () => {
        const height = [1,8,3,5,6,4];
        expect(heightChecker(height)).toEqual(3);
    });

    it('should return 22, which are in the bad pos', () => {
        const height = [10,6,6,10,10,9,8,8,3,3,8,2,1,5,1,9,5,2,7,4,7,7];
        expect(heightChecker(height)).toEqual(22);
    });
});

describe('heightChecker2', () => {
    it('should return 0 if its ordered', () => {
        const height = [1,2,3,4,5,6];
        expect(heightChecker2(height)).toEqual(0);
    });
    it('should return 6 if all of them are in the bad position', () => {
        const height = [6,5,4,3,2,1];
        expect(heightChecker2(height)).toEqual(6);
    });

    it('should return 4, which are in the bad pos', () => {
        const height = [1,8,3,5,6,4];
        expect(heightChecker2(height)).toEqual(3);
    });

    it('should return 22, which are in the bad pos', () => {
        const height = [10,6,6,10,10,9,8,8,3,3,8,2,1,5,1,9,5,2,7,4,7,7];
        expect(heightChecker2(height)).toEqual(22);
    });
});

describe('thirdMax', ()=> {
    it('should return 1', () => {
        expect(thirdMax([1,2,3,2,3,1,1,1,2,3,2])).toEqual(1);
    });

    it('should return 2', () => {
        expect(thirdMax([1,2,3,2,3,1,1,1,2,3,4])).toEqual(2);
    });

    it('should return 1 instead of negative number', () => {
        expect(thirdMax([-2147483648,1,1])).toEqual(1);
    });
})

describe('thirdMax2', ()=> {
    it('should return 1', () => {
        expect(thirdMax2([1,2,3,2,3,1,1,1,2,3,2])).toEqual(1);
    });

    it('should return 2', () => {
        expect(thirdMax2([1,2,3,2,3,1,1,1,2,3,4])).toEqual(2);
    });

    it('should return 1 instead of negative number', () => {
        expect(thirdMax2([-2147483648,1,1])).toEqual(1);
    });
})

describe('findDisappearedNumbers', ()=> {
    it('should return empty', () => {
        expect(findDisappearedNumbers([1,2,3])).toEqual([]);
    });

    it('should return [2,3,4]', () => {
        expect(findDisappearedNumbers([1,1,1,1])).toEqual([2,3,4]);
    });

    it('should return empty for empty', () => {
        expect(findDisappearedNumbers([])).toEqual([]);
    });

    it('should return [5,6]', () => {
        expect(findDisappearedNumbers([4,3,2,7,8,2,3,1])).toEqual([5,6]);
    });
})

describe('sortedSquares', ()=> {
    it('should return empty', () => {
        expect(sortedSquares([1,2,3])).toEqual([1,4,9]);
    });

    it('should return [2,3,4]', () => {
        expect(sortedSquares([-4,-1,0,1,2])).toEqual([0,1,1,4,16]);
    });

    it('should return empty for empty', () => {
        expect(sortedSquares([])).toEqual([]);
    });

})

describe('sortedSquares2', ()=> {
    it('should return empty', () => {
        expect(sortedSquares2([1,2,3])).toEqual([1,4,9]);
    });

    it('should return [2,3,4]', () => {
        expect(sortedSquares2([-4,-1,0,1,2])).toEqual([0,1,1,4,16]);
    });

    it('should return empty for empty', () => {
        expect(sortedSquares2([])).toEqual([]);
    });

    it('should return [2,3,4]', () => {
        expect(sortedSquares2([-8,-7,-4,0,3,5,6])).toEqual([0,9,12,16,25,36,49,91]);
    });

})