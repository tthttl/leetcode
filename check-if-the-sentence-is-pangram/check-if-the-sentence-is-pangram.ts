function checkIfPangram(sentence: string): boolean {
    const set = new Set(sentence.split(''));
    return set.size === 26;
};