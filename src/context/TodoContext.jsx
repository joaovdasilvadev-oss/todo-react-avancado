import { createContext, useContext, useState, useMemo } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const TodoContext = createContext();

export function TodoProvider({ children }) {
    const [todos, setTodos] = useLocalStorage('todos', []);
    const [filtro, setFiltro] = useState('todas');

    function adicionarTodo(texto) {
        const novaTodo = {
            id: Date.now(),
            texto,
            concluida: false
        };

        setTodos((todosAnteriores) => [
            ...todosAnteriores,
            novaTodo
        ]);
    }

    function alternarTodo(id) {
        setTodos((todosAnteriores) =>
            todosAnteriores.map((todo) =>
                todo.id === id
                    ? { ...todo, concluida: !todo.concluida }
                    : todo
            )
        );
    }

    function removerTodo(id) {
        setTodos((todosAnteriores) =>
            todosAnteriores.filter((todo) => todo.id !== id)
        );
    }

    const todosFiltrados = useMemo(() => {
        if (filtro === 'concluidas') {
            return todos.filter((todo) => todo.concluida);
        }

        if (filtro === 'pendentes') {
            return todos.filter((todo) => !todo.concluida);
        }

        return todos;
    }, [todos, filtro]);

    const valor = {
        todos,
        todosFiltrados,
        filtro,
        setFiltro,
        adicionarTodo,
        alternarTodo,
        removerTodo
    };

    return (
        <TodoContext.Provider value={valor}>
            {children}
        </TodoContext.Provider>
    );
}

export function useTodos() {
    return useContext(TodoContext);
}