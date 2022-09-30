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

//Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
export function moveZeroes(nums: number[]): void {
    let lastNonZero=0;
    for(let i=0; i<nums.length; i++){
        if(nums[i]!==0){
            nums[lastNonZero++]=nums[i];
        }
    }
    for(let i=lastNonZero; i<nums.length; i++){
        nums[i]=0;
    }
};

//Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.
export function sortArrayByParity(nums: number[]): number[] {
    let evenIndex = nums.length - 1;
    for(let i=0; i<evenIndex; i++){
        if(!isEven(nums[i])){
            evenIndex = findLastEvenIndex(evenIndex, i, nums);
            if(evenIndex === -1){
                break;
            }
            let temp = nums[i];
            nums[i] = nums[evenIndex]
            nums[evenIndex] = temp;
            evenIndex--;
        }
    }
    return nums;
};

function findLastEvenIndex(evenIndex: number, currentIndex: number, nums: number[]){
    let result = -1;
    for(let i=evenIndex; i>=currentIndex; i--){
        if(isEven(nums[i])){
            result = i;
            break;
        }
    }
    return result;
}

function isEven(num: number): boolean {
    return num % 2 === 0;
}

export function sortArrayByParity2(nums: number[]): number[] {
    let evenIndex = nums.length - 1;
    let oddIndex = 0;

    while(oddIndex<=evenIndex){

        if(isEven(nums[evenIndex]) && !isEven(nums[oddIndex])){
            let temp = nums[oddIndex];
            nums[oddIndex] = nums[evenIndex]
            nums[evenIndex] = temp;
        }

        if(nums[evenIndex] % 2 !== 0){
            evenIndex--;
        }
        if(nums[oddIndex] % 2 === 0){
            oddIndex++;
        }

    }

    return nums;
};

export function sortArrayByParity3(nums: number[]): number[] {
    for (let i = 0, j = 0; j < nums.length; j++)
        if (nums[j] % 2 === 0) {
            let tmp = nums[i];
            nums[i++] = nums[j];
            nums[j] = tmp;
        }
    return nums;
}

// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
export function removeElement(nums: number[], val: number): number {
    if(!nums || nums.length === 0){
        return 0;
    }
    let j = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== val){
            const temp = nums[j];
            nums[j++] = nums[i];
            nums[i]=temp;
        }
    }
    return j;
};