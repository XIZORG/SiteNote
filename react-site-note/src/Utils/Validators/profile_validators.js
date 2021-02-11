const error_start = "";

let isDataCorrect = (value) => {
    let numbers = value.split(".");
    if (value.length !== 10 || numbers.length !== 3) {
        return false;
    }
    if (+numbers[0] === undefined || +numbers[0] > 31 || +numbers[0] < 1) return false;
    if (+numbers[1] === undefined || +numbers[1] > 12 || +numbers[1] < 1) return false;
    if (+numbers[2] === undefined || +numbers[2] > 2100 || +numbers[2] < 2021) return false;
    return true;
}

export const checkDate = (value) => {
    if (value && !isDataCorrect(value)) return `Дата должна быть введена в формате дд.мм.гггг`;
    return undefined;
}
export const checkHolidayName = (value) => {
    if (value && value.length > 30) return `Название праздника не должно быть больше 30 символов!`;
        return undefined;
}
