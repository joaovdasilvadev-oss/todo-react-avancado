import { useTodos } from '../context/TodoContext';

function TodoFilters() {
    const { filtro, setFiltro } = useTodos();

    const filtros = [
        { valor: 'todas', texto: 'Todas' },
        { valor: 'pendentes', texto: 'Pendentes' },
        { valor: 'concluidas', texto: 'Concluídas' }
    ];

    return (
        <div className="todo-filters">
            {filtros.map((item) => (
                <button
                    key={item.valor}
                    className={filtro === item.valor ? 'ativo' : ''}
                    onClick={() => setFiltro(item.valor)}
                >
                    {item.texto}
                </button>
            ))}
        </div>
    );
}

export default TodoFilters;