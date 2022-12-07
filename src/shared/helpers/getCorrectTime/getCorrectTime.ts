export function getCorrectTime(str: string, numForSplice: number) {
    return [...str].splice(numForSplice).join('');
}
