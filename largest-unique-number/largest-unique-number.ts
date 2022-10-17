function largestUniqueNumber(nums: number[]): number {
    const map = new Map();

    for(let i=0; i<nums.length; i++){
        map.set(nums[i], (map.get(nums[i])||0)+1);
    }
    
    const result = [...map].sort((a,b)=> b[0] - a[0]).find((entry) => entry[1]===1);
    return result ? result[0] : -1;    
};