export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
    const {description, done, id} = todo
    console.log(todo)

  return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="align-self-center w-50"
            onClick={ () => onToggleTodo(id)}>{description}</span>
            <small className={`align-self-center ${done ? 'text-success' : 'text-danger'}`}>{done === true ? "Hecho" : "Sin hacer"}</small>
            <button
            className="btn btn-danger"
            onClick={() => onDeleteTodo(id)}>Eliminar</button>
        </li>
  )
}
