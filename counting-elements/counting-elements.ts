function countElements(arr: number[]): number {
    let result = 0;
    const set = new Set(arr);
    for(let num of arr){
        if(set.has(num+1)){
            result++;
        }
    }
    return result;
};