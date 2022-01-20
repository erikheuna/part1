import React from 'react';

const Search = ({filter, onFilter}) => {
    return (
        <div>
        <h2>Search a contact</h2>
        <input type="search" value={filter} onChange={onFilter}  />
        </div>
    );
}

export default Search;
