function makeGood(s: string): string {
    const stack: string[] = [];

    for(let char of s){
        if(char === char.toLowerCase()){
            if(stack.length && stack[stack.length-1] === char.toUpperCase()){
                stack.pop()
            } else {
                stack.push(char);
            }
        } else {
            if(stack.length && stack[stack.length-1] === char.toLowerCase()){
                stack.pop()
            } else {
                stack.push(char);
            }
        }
    }

    return stack.join('');
};