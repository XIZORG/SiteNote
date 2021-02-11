import {axios_in} from './DAL_API';

export const sendNewUserEvent = (name, date, id) => {
    let dates = date.split(".");
    return axios_in.post('ivent/setNewIvent',
        {
            userId: id,
            day: dates[0],
            month: dates[1],
            year: dates[2],
            descriptionOfEvent: name
        }
    )
}
