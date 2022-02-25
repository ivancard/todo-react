import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

export function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const { addTodos, setOpenModal } = React.useContext(TodoContext);
    const onCancel = () => {
        setOpenModal(false);
    };
    const onChange = (e) => {
        setNewTodoValue(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        addTodos(newTodoValue);
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit} className="form-container">
            <textarea
                type="text"
                placeholder="Escribe la tarea."
                value={newTodoValue}
                onChange={onChange}
            />
            <div>
                <button
                    onClick={onCancel}
                    type="button"
                    className="btn btnCancel"
                >
                    Cancelar
                </button>
                <button type="submit" className="btn btnSubmit">
                    Añadir
                </button>
            </div>
        </form>
    );
}
