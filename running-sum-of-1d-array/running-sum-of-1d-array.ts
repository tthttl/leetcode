function runningSum(nums: number[]): number[] {

    // create array of sums of all the elements before
    let sums = [nums[0]];
    
    for(let i=1; i<nums.length; i++){
        sums = [...sums, sums[sums.length-1] + nums[i]];
    }
    
    return sums;
    
};