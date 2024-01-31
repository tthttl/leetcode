function findMaxLength(nums: number[]): number {
    const valuePerIndex = new Map<number, number>();
    let value = 0;
    let max = 0;
    
    valuePerIndex.set(0, -1);
    for(let i=0; i<nums.length; i++){
        value = value + (nums[i] === 1 ? 1 : -1);
        if(valuePerIndex.has(value)){
            max = Math.max(max, i - valuePerIndex.get(value));
        } else {
            valuePerIndex.set(value, i);
        }
    }
    
    return max;
};

