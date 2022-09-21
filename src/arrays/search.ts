export function checkIfExist(arr: number[]): boolean {
    for(let i=0; i<arr.length-1; i++){
        for(let j=i+1; j<arr.length; j++){
            if(isHalfOrDouble(arr[i], arr[j])){
                return true;
            }
        }
    }
    return false;
};

function isHalfOrDouble(a: number, b: number): boolean {
    return a === b*2 || b === a*2;
}

export function validMountainArray(arr: number[]): boolean {
    if(!arr || arr.length < 3 || arr[0]>arr[1]){
        return false;
    }
    let top = arr[0];
    let isClimbing = true;
    for(let i=1; i<arr.length; i++){
        if(top===arr[i]){
            return false;
        }
        if(isClimbing && top<arr[i]){
            top=arr[i];
        } else if(isClimbing && top>arr[i]){
            isClimbing = false;
            top = arr[i];
        } else if(!isClimbing && arr[i]>=top){
            return false;
        } else if(!isClimbing && arr[i]<top){
            top=arr[i];
        } 
        if(isClimbing && i+1 === arr.length){
            return false;
        }
    }
    return true;
};