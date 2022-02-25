import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

const TodoSearch = () => {
    const { searchValue, setSearchValue } = React.useContext(TodoContext);

    const onSearchValueChange = (e) => {
        // console.log(e.target.value);
        setSearchValue(e.target.value);
    };

    return (
        <label className="TodoSearch">
            <input
                placeholder="Buscar TODO"
                onChange={onSearchValueChange}
                value={searchValue}
            />
        </label>
    );
};

export { TodoSearch };
