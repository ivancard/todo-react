import React from 'react';
import './TodoList.css';

export function TodoList(props) {
    return(
        <section className='todolist'>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}