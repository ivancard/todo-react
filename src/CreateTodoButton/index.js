import React from 'react';
import './CreateTodoButton.css';

export function CreateTodoButton(props) {
    const onClickButton = () => {
        props.setOpenModal((prevState) => !prevState);
    };

    return (
        <button className="createButton" onClick={onClickButton}>
            +
        </button>
    );
}
