export function findMaxAverage(nums: number[], k: number): number {
    if(nums.length < k){
        return calcAverage(0, nums.length -1, nums, nums.length);
    }

    let largestAverage = -10000;
  
    for (let left = 0, right = k-1; right < nums.length; right++, left++) {
        largestAverage = Math.max(
            largestAverage, 
            calcAverage(left, right, nums, k)
            );
    }
    return largestAverage;
}

function calcAverage(
    startIndex: number, 
    endIndex: number, 
    nums: number[],
    numOfElements: number): number {
    let sum = 0;
    while (startIndex <= endIndex){
        sum += nums[startIndex++];
    }
    return sum/numOfElements;
}

//dont have to calculate the average in every iteration, the sum is enough
//sum can be slided with the window, constantly changing the first and last elements
export function findMaxAverage2(nums: number[], k: number): number {
    let sum = 0;
  
    for(let i=0; i<k; i++){
        sum += nums[i];
    }

    let largestSum = sum;

    for(let i=k; i<nums.length; i++){
        sum = sum - nums[i-k] + nums[i];
        largestSum = Math.max(largestSum, sum);
    }

    return largestSum/k;

}

// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array
// if you can flip at most k 0's.
export function longestOnes(nums: number[], k: number): number {
    let result = 0;
    let left = 0;
    let zerosInWindow = 0;

    for(let right=0; right<nums.length; right++){

        if(nums[right] === 0){
            zerosInWindow++
        }

        while(zerosInWindow > k){
            if(nums[left] === 0){
                zerosInWindow--;
            }
            left++;
        }

        result = Math.max(result, (right-left)+1);
    }

    return result;
};

// Given an integer array nums, return the number of subarrays filled with 0.

export function zeroFilledSubarray(nums: number[]): number {
    let result = 0;
    let left = 0;

    for(let right = 0; right<nums.length; right++){

        if(nums[right] === 0){
            while(nums[left]!==0 && left <= right){
                left++;
            }
            result += right-left+1; // Sum of the window lengths at each iteration
        } else {
            left = right;
        }
    
    }

    return result;
};