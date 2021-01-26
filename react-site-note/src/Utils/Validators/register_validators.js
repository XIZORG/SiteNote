const error_start = "";

export const maxLength = (length) => {
    return function (value) {
        if (value && value.length > length) return `${error_start}Длинна должна быть не больше ${length} символов!`;
        return undefined;
    }
}
export const minLength = (length) => {
    return function (value) {
        if (value && value.length < length) return `${error_start}Длинна должна быть ${length} или больше символов!`;
        return undefined;
    }
}

export const checkEmail = (value) => {
    if (value && value.indexOf('@') === -1) return `${error_start}Некорректный email-адрес!`;
    return undefined;
}

let checkForSymbols = (symbol, applyLatin = false, applyNumbers = false, applySpecials = false) => {
    let symbols = '' + (applyLatin ? "abcdefghijklmnopqrstuvwxyz" : '') + (applyNumbers ? "0123456789" : '') + (applySpecials ? "$#_)(" : '');
    return symbols.indexOf(symbol.toLowerCase()) !== -1;
}

export const checkLatinAndNumbersAndCharacters = (value) => {
    if (value && !value.split('').every(i => {
        return checkForSymbols(i, true, true, true);
    })) {
        return `${error_start}Разрешено использовать только латинские символы, цифры, #, $, _, (, )`;
    }
    return undefined;
}
export const checkLatin = (value) => {
    if (value && !value.split('').every(i => {
        return checkForSymbols(i, true, false, false);
    })) {
        return `${error_start}Разрешено использовать только латинские символы`;
    }
    return undefined;
}

