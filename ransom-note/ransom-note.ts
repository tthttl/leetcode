function canConstruct(ransomNote: string, magazine: string): boolean {
    const map = new Map();

    for(let i=0; i<magazine.length; i++){
        map.set(magazine[i], (map.get(magazine[i])||0) + 1);
    }

    for(let i=0; i<ransomNote.length; i++){
        if(map.get(ransomNote[i])){
            map.set(ransomNote[i], map.get(ransomNote[i]) - 1);
        } else {
            return false;
        }
    }
    return true;
};