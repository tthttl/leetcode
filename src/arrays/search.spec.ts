import { checkIfExist, validMountainArray } from "./search";

describe('dummy', () => {
    it('should return true if array contains an element which is the double of an other element', ()=> {
        expect(checkIfExist([4,5,6,7,8])).toBeTruthy();
    });
    it('should return true even if double comes sooner than single', ()=> {
        expect(checkIfExist([4,5,6,3])).toBeTruthy();
    });
    it('should return false if no element is double', ()=> {
        expect(checkIfExist([4,5,6,7])).toBeFalsy();
    });
});

describe('validMountainArray', () => {
    it('should return false if there is no uphill', () => {
        expect(validMountainArray([3,2,1])).toBeFalsy();
    });

    it('should return false if there is no downhill', () => {
        expect(validMountainArray([1,2,3])).toBeFalsy();
    });

    it('should return false if there is uphill after the top', () => {
        expect(validMountainArray([1,2,3,2,3,1])).toBeFalsy();
    });

    it('should return false if there is straight after the top', () => {
        expect(validMountainArray([1,2,3,3,2])).toBeFalsy();
    });

    it('should return false if there is larger after the top', () => {
        expect(validMountainArray([1,2,3,2,4])).toBeFalsy();
    });

    it('should return false if there is hill after the top', () => {
        expect(validMountainArray([1,2,5,2,4])).toBeFalsy();
    });

    it('should return true if strictly increasing and then strictly decreasing', () => {
        expect(validMountainArray([1,2,3,2,1,0])).toBeTruthy();
    });

    it('should return true if valid mountain', () => {
        expect(validMountainArray([2,3,1])).toBeTruthy();
    });

    it('should return true if valid mountain', () => {
        expect(validMountainArray([4,4,3,2,1])).toBeFalsy();
    });

});