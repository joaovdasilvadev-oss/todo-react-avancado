import { useTodos } from '../context/TodoContext';

function TodoItem({ todo }) {
    const { alternarTodo, removerTodo } = useTodos();

    return (
        <li className={`todo-item ${todo.concluida ? 'concluida' : ''}`}>
            <label>
                <input
                    type="checkbox"
                    checked={todo.concluida}
                    onChange={() => alternarTodo(todo.id)}
                />

                <span>{todo.texto}</span>
            </label>

            <button
                className="btn-remover"
                onClick={() => removerTodo(todo.id)}
            >
                Remover
            </button>
        </li>
    );
}

export default TodoItem;