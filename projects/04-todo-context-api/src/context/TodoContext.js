import { createContext, useContext } from 'react'


const TodoContext = createContext({
  todos: [],
  addTodo: (todo) => {},
  deleteTodo: (id) => {},
  editTodo: (newTodo, id) => {},
  toggleComplete: (id) => {}
})

export const TodoContextProvider = TodoContext.Provider

export const useTodo = () => {
  return useContext(TodoContext)
}