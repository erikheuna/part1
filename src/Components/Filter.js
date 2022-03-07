import React from 'react';

const Filter = ({display}) => {
    return (
        <div>
         Search Contact: <input type="text" onChange={display} />  
        </div>
    );
}

export default Filter;
