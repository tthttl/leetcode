//Given an array arr, replace every element in that array with the greatest element 
//among the elements to its right, and replace the last element with -1.
export function replaceElements(arr: number[]): number[] {
    let top = -1;
    for(let i=arr.length-1; i>=0; i--){
        if(i === arr.length-1){
            top = arr[i];
            arr[i]=-1;
        } else {
            let current = arr[i];
            arr[i]=top;
            if(current>top){
                top=current;
            }
        }
    }
    return arr;
};

/* 
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place 
such that each unique element appears only once. The relative order of the elements should be kept the same.
Return k after placing the final result in the first k slots of nums.
*/
export function removeDuplicates(nums: number[]): number {
    if(!nums || nums.length === 0){
        return 0;
    }
    let numOfDuplicates = 0;
    let current = nums[0];
    let currentIndex = 0;
    for(let i=1; i<nums.length; i++){
        if(current === nums[i]){
            numOfDuplicates++;
        } else {
            currentIndex++;
            nums[currentIndex]=nums[i];
            current = nums[i];
        }
    }
    return nums.length-numOfDuplicates;
};