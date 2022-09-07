

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
    return (
        <>
            <li className="list-group-item d-flex justify-content-between">
                <span className={`align-self-center ${ (todo.done) ? 'text-decoration-line-through' : ' ' }`}>
                    {todo.description}
                </span>
                <button 
                    className='btn btn-danger'
                    onClick={() => onDeleteTodo(todo.id)}
                >
                    X
                </button>
                <button 
                    className="btn btn-success" 
                    onClick={ () => onToggleTodo( todo.id ) }
                >
                    <small>
                        ✓
                    </small> 
                </button>
            </li>
        </>
    )
}
