import { TodoProvider, useTodos } from './context/TodoContext';
import TodoForm from './components/TodoForm';
import TodoFilters from './components/TodoFilters';
import TodoList from './components/TodoList';
import './styles.css';

function ConteudoApp() {
    const { todos } = useTodos();

    const concluidas = todos.filter((todo) => todo.concluida).length;
    const pendentes = todos.length - concluidas;

    return (
        <div className="container">
            <header>
                <h1>Todo List</h1>
                <p>Organize suas tarefas e mantenha sua produtividade.</p>
            </header>

            <main>
                <section className="todo-card">
                    <h2>Nova tarefa</h2>

                    <TodoForm />

                    <div className="estatisticas">
                        <span>Total: {todos.length}</span>
                        <span>Pendentes: {pendentes}</span>
                        <span>Concluídas: {concluidas}</span>
                    </div>
                </section>

                <section className="tarefas-section">
                    <h2>Minhas tarefas</h2>

                    <TodoFilters />

                    <TodoList />
                </section>
            </main>

            <footer>
                <p>Todo List React - 2026</p>
            </footer>
        </div>
    );
}

function App() {
    return (
        <TodoProvider>
            <ConteudoApp />
        </TodoProvider>
    );
}

export default App;