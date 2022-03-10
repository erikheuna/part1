import React from 'react';

const ValidationMessage = ({validMessage}) => {
    if(validMessage === null){
        return null
    }
    return (
        <div className='valid'>
            {validMessage}
        </div>
    );
}

export default ValidationMessage;
