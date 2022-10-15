function findMaxLength(nums: number[]): number {
    const map = new Map();
    let ans = 0;
    let count = 0;
    
    map.set(0,-1);
    
    //save count as key in map for every distinct count encountered while increasing/decreasing, together with the current index as value 
    //if same count value encountered again, do not overwrite the stored ones, but instead store difference of current index and stored index in ans => this is the length of equal 0s and 1s
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

