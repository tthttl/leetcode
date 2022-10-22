function validateStackSequences(pushed: number[], popped: number[]): boolean {
    let stack: number[] = [];
    let poppedPos = 0;

    for(let i=0; i<pushed.length; i++){
        stack.push(pushed[i]);
        while(stack.length && popped[poppedPos] === stack[stack.length-1]){
            stack.pop();
            poppedPos++;
        }
    }
    return !stack.length;
};