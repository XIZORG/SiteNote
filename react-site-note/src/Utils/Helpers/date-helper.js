export const dayToNumber = (day) => {
    day = day.toLowerCase();
    switch (day) {
        case "monday":
            return 1;
        case "tuesday":
            return 2;
        case "wednesday":
            return 3;
        case "thursday":
            return 4;
        case "friday":
            return 5;
        case "saturday":
            return 6;
        case "sunday":
            return 7;
        default: {
            throw new Error("No such day!");
        }
    }
}

export const monthToCase = (month) => {
    month = month.toLowerCase();
    switch(month) {
        case 'february' : return 'Февраля';
        case 'march': return 'Марта';
        case 'april': return 'Апреля';
        case 'may': return 'Мая';
        case 'june': return 'Июня';
        case 'july': return 'Июля';
        case 'august': return 'Августа';
        case 'september': return 'Сентрября';
        case 'october': return 'Октября';
        case 'november': return 'Ноября';
        case 'december': return 'Декабря';
        case 'january': return 'Января'
        default: {
            throw new Error('No such month!');
        }
    }
}