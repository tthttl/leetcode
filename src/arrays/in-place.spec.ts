import { removeDuplicates, replaceElements } from "./in-place";

describe('replaceElements', () => {
    it('should return [18,6,6,6,1,-1]', () => {
        expect(replaceElements([17,18,5,4,6,1])).toEqual([18,6,6,6,1,-1]);
    });
    it('should return [5,5,5,5,-1]', () => {
        expect(replaceElements([1,2,3,4,5])).toEqual([5,5,5,5,-1]);
    });
    it('should return [4,3,2,1,-1]', () => {
        expect(replaceElements([5,4,3,2,1])).toEqual([4,3,2,1,-1]);
    });
    it('should return [8,8,8,8,8,8,8,8,3,-1]', () => {
        expect(replaceElements([1,2,6,3,7,1,4,2,8,3])).toEqual([8,8,8,8,8,8,8,8,3,-1]);
    });
    it('should return [-1]', () => {
        expect(replaceElements([1])).toEqual([-1]);
    });
});

describe('removeDuplicates', () => {
    it('should return 1', () => {
        const arrayToModify = [1,1,1];
        expect(removeDuplicates(arrayToModify)).toEqual(1);
        expect(arrayToModify).toEqual([1,1,1]);
    });
    it('should return 1,2,3', () => {
        const arrayToModify = [1,1,1,2,2,3,3];
        expect(removeDuplicates(arrayToModify)).toEqual(3);
        expect(arrayToModify).toEqual([1,2,3,2,2,3,3]);
    });
    it('should handle length 1', () => {
        const arrayToModify = [1];
        expect(removeDuplicates(arrayToModify)).toEqual(1);
        expect(arrayToModify).toEqual([1]);
    });
    it('should return same when there is no duplicates', () => {
        const arrayToModify = [1,2,3,4];
        expect(removeDuplicates(arrayToModify)).toEqual(4);
        expect(arrayToModify).toEqual([1,2,3,4]);
    });
});
