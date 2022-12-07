export function getIndexCity(weatherArr: { name: string }[], value: string) {
    return weatherArr.findIndex((elementId) => elementId.name === value);
}
