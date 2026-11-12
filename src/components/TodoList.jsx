import { memo } from 'react';
import { useTodos } from '../context/TodoContext';
import TodoItem from './TodoItem';

const TodoList = memo(function TodoList() {
    const { todosFiltrados } = useTodos();

    if (todosFiltrados.length === 0) {
        return (
            <p className="mensagem-vazia">
                Nenhuma tarefa encontrada.
            </p>
        );
    }

    return (
        <ul className="todo-list">
            {todosFiltrados.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
});

export default TodoList;