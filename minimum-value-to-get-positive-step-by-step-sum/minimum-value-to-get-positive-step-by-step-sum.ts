function minStartValue(nums: number[]): number {
    
    // create an array with the sums of the previous values
    // when putting in elements, look for the smallest item => starting value has to be greater 
    let sums = [nums[0]];
    let min = nums[0];
    
    for(let i=1; i<nums.length; i++){
        sums = [...sums, sums[sums.length-1] + nums[i]];
        min = Math.min(min, sums[sums.length-1]);
    }
    console.log(sums);
    
    return min > 0 ? 1 : Math.abs(min) + 1;
    
    
};