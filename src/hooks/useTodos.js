import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer"

// Initialize data
const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodos = () => {
  // useReducer Hook
  const [todos, dispatchTodo] = useReducer(todoReducer, [], init)

  // Update data in localStorage
  useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  // Add todo
  const handleNewTodo = (todo) => {
      const action = {
          type: '[TODO] Add Todo',
          payload: todo
      }

      dispatchTodo(action)
  }

  // Delete todo
  const handleDeleteTodo = id => {
      
      dispatchTodo({
          type: '[TODO] Remove Todo',
          payload: id
      })
  }

  // Change state from todo
  const handleToggleTodo = id => {

      dispatchTodo({
          type: '[TODO] Toggle Todo',
          payload: id
      })
  }

  // Count all todos
  const todosCount = () => {
    return todos.length
  }
  
  // Count pending todos
  const pendingTodosCount = () => {
    return todos.filter(todo => !todo.done).length
  }

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCount,
    pendingTodosCount
  }
}
