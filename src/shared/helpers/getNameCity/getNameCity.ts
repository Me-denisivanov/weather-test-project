export function getNameCity(weatherArr: { name: string }[], value: string) {
    return weatherArr.find((elementName) => elementName.name === value);
}
