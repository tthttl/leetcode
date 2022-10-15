function findMaxLength(nums: number[]): number {
    const map = new Map();
    let ans = 0;
    let count = 0;
    
    map.set(0,-1);
    
    for(let i=0; i<nums.length; i++){
        if(nums[i]===0) {
            count--;
        }
        if(nums[i]===1){
            count++;
        }
        if(map.has(count)){
            ans = Math.max(ans, i-map.get(count));
        } else {
            map.set(count, i);
        }
    }
    
    return ans;
};

