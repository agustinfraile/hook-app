import { useTodos } from '../hooks/useTodos';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';

export const TodoApp = () => {

    const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo, todoCount, pendingTodosCount  } = useTodos(); 
    
    return (
        <>
            <h1>Todos: { todoCount }</h1>
            <h4>pendientes: {pendingTodosCount }</h4>
            <hr />

            <div className="row">

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={handleNewTodo}/>
                </div>



                <div className="col-7"> 
                    <TodoList 
                        todos={ todos } 
                        onDeleteTodo={ handleDeleteTodo }
                        onToggleTodo={ handleToggleTodo }
                    />
                </div>

            </div>
        </>
    )
}