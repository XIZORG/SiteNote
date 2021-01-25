export const maxLength = (length) => {
    return function (value) {
        if (value && value.length > length) return `Ошибка! Длинна должна быть не больше ${length} символов!`;
        return undefined;
    }
}

export const checkEmail = (value) => {
    if (value && value.indexOf('@') === -1) return `Ошибка! Некорректный email-адрес!`;
    return undefined;
}