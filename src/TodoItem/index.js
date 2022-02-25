import React from 'react';
import './TodoItem.css'

export function TodoItem(props) {
    return(
        <li className='TodoItem'>
            <span 
                className={`Icon Icon-check ${props.complete && 'Icon-ckeck--active'}`}
                onClick={props.onComplete}
            >
            <svg width='25px' xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            </span>

            <p className={`TodoItem-p ${props.complete && 'todoItem-p--complete' }`}>
                {props.text}
            </p>

            <span className='deleteBtn' onClick={props.onDelete}>
            <svg  width='25px' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            </span>

        </li>
    );
}