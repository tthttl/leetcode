function simplifyPath(path: string): string {
    const parts = path.split('/');
    const result: string[] = [];
    
    for(let part of parts){
        if(part === '.'){
            continue;
        }
        if(part === '..'){
            result.pop();
        } else if(part) {
            result.push(part);
        }
    }

    return '/'.concat(result.join('/'));
};