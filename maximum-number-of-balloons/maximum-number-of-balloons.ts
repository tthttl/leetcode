function maxNumberOfBalloons(text: string): number {
    const map = new Map<string,number>();
    
    for(let i=0; i<text.length; i++){
        map.set(text[i], (map.get(text[i])||0)+1);
    }

    let count = map.get('b');
    
    while(count){
        if(map.get('a') >= count && map.get('n') >= count && map.get('l') >= count * 2 && map.get('o') >= count * 2){
            return count;
        }
        count--;
    }
    return 0;
};