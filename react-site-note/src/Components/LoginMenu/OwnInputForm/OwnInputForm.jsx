import React from 'react';
const OwnInputForm = ({input, meta, setValueInLocalState, value, ...props}) => {
    debugger;
    return (
        <input {...input} {...props} onChange={(e) => {
            console.log('something');
            console.log(e.target.value);
            setValueInLocalState(e.target.value);
        }} value={value}/>
    );
}
export default OwnInputForm;