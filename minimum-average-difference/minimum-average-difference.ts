function minimumAverageDifference(nums: number[]): number {
    let minDiff = -1;
    let indexOfMinDiff = 0;

    let prefix = [nums[0]];
    for(let i=1; i<nums.length; i++){
        prefix[i]=prefix[i-1]+nums[i];
    }

    for(let i=0; i<nums.length; i++){
        const leftAverage = Math.floor(prefix[i] / (i+1));
        const rightAverage = Math.floor((prefix[prefix.length-1] - prefix[i]) / (prefix.length-(i+1)));
        
        const diff = Math.abs(leftAverage-(isNaN(rightAverage) ? 0 : rightAverage));
        if(diff < minDiff || minDiff === -1){
            minDiff = diff;
            indexOfMinDiff = i;
        }
    }
    
    return indexOfMinDiff;
};