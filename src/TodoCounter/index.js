import React from 'react';
import { TodoContext } from '../TodoContext';

export function TodoCounter() {
    const { totalTodos: total, completedTodos: completed } =
        React.useContext(TodoContext);

    return (
        <h2>
            Has compleatado {completed} de {total} TODOs
        </h2>
    );
}
