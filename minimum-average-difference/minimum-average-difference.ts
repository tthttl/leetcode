 function minimumAverageDifference(nums: number[]): number {
    let minDiff = -1;
    let indexOfMinDiff = 0;

    let prefix = [nums[0]];
    for(let i=1; i<nums.length; i++){
        prefix[i]=prefix[i-1]+nums[i];
    }

    for(let i=0; i<nums.length; i++){
        const leftAverage = Math.floor(prefix[i] / (i+1));
        let rightAverage = 0;
        if(i !== nums.length-1){
            rightAverage = Math.floor((prefix[prefix.length-1] - prefix[i]) / (prefix.length-(i+1)));
        }
        
        const diff = Math.abs(leftAverage-rightAverage);
        if(diff < minDiff || minDiff === -1){
            minDiff = diff;
            indexOfMinDiff = i;
        }
    }
    
    return indexOfMinDiff;
};