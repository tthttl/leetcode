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