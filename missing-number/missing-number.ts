function missingNumber(nums: number[]): number {
    const map = {};
    for(const num of nums){
        map[num] = true;
    }

    for(let i=0; i<=nums.length;i++){
        if(!map[i]){
            return i;
        }
    }
    return -1;
};