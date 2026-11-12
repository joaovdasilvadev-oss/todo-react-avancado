import { useState } from 'react';
import { useTodos } from '../context/TodoContext';

function TodoForm() {
    const [texto, setTexto] = useState('');
    const { adicionarTodo } = useTodos();

    function handleSubmit(event) {
        event.preventDefault();

        if (texto.trim() === '') {
            return;
        }

        adicionarTodo(texto.trim());
        setTexto('');
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Digite uma nova tarefa..."
                value={texto}
                onChange={(event) => setTexto(event.target.value)}
                required
            />

            <button type="submit">
                Adicionar
            </button>
        </form>
    );
}

export default TodoForm;