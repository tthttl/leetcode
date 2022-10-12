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

/* function missingNumberWithGauss(nums: number[]): number {
    let sum = 0;
    if (nums.length ===0){ 
        return 0;
    }
    for (let index = 0; index< nums.length; index++) {
        sum = sum + nums[index];
    }
    const expectedTotal = (nums.length * (nums.length+1))/2; //Gauss formula
    return expectedTotal - sum;

}; */