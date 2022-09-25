import { moveZeroes, removeDuplicates, replaceElements, sortArrayByParity, sortArrayByParity2 } from "./in-place";

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

describe('moveZeroes', () => {
    it('should return [1,1,1,2,1,3,1,2,0,0,0,0]', () => {
        const arrayToModify = [1,1,1,0,2,0,1,0,0,3,1,2];
        moveZeroes(arrayToModify);
        expect(arrayToModify).toEqual([1,1,1,2,1,3,1,2,0,0,0,0]);
    });
    it('should return [1,1,1,0,0]', () => {
        const arrayToModify = [0,0,1,1,1];
        moveZeroes(arrayToModify);
        expect(arrayToModify).toEqual([1,1,1,0,0]);
    });
});


describe('sortArrayByParity', () => {
    it('should return [6,2,4,3,5,1]', () => {
        const arrayToModify = [1,2,3,4,5,6];
        sortArrayByParity(arrayToModify);
        expect(arrayToModify).toEqual([6,2,4,3,5,1]);
    });
    it('should return [6,4,2,0,5,3,1]', () => {
        const arrayToModify = [1,3,5,0,2,4,6];
        sortArrayByParity(arrayToModify);
        expect(arrayToModify).toEqual([6,4,2,0,5,3,1]);
    });
    it('should return [2,1,3]', () => {
        const arrayToModify = [1,2,3];
        sortArrayByParity(arrayToModify);
        expect(arrayToModify).toEqual([2,1,3]);
    });
    it('should return [2,1,3]', () => {
        const arrayToModify = [2,2,2];
        sortArrayByParity(arrayToModify);
        expect(arrayToModify).toEqual([2,2,2]);
    });
    it('should return [1,1,1]', () => {
        const arrayToModify = [1,1,1];
        sortArrayByParity(arrayToModify);
        expect(arrayToModify).toEqual([1,1,1]);
    });
});

describe('sortArrayByParity2', () => {
    it('should return [6,2,4,3,5,1]', () => {
        const arrayToModify = [1,2,3,4,5,6];
        sortArrayByParity2(arrayToModify);
        expect(arrayToModify).toEqual([6,2,4,3,5,1]);
    });
    it('should return [6,4,2,0,5,3,1]', () => {
        const arrayToModify = [1,3,5,0,2,4,6];
        sortArrayByParity2(arrayToModify);
        expect(arrayToModify).toEqual([6,4,2,0,5,3,1]);
    });
    it('should return [2,1,3]', () => {
        const arrayToModify = [1,2,3];
        sortArrayByParity2(arrayToModify);
        expect(arrayToModify).toEqual([2,1,3]);
    });
    it('should return [2,1,3]', () => {
        const arrayToModify = [2,2,2];
        sortArrayByParity2(arrayToModify);
        expect(arrayToModify).toEqual([2,2,2]);
    });
    it('should return [1,1,1]', () => {
        const arrayToModify = [1,1,1];
        sortArrayByParity2(arrayToModify);
        expect(arrayToModify).toEqual([1,1,1]);
    });
});