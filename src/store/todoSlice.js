import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
         text: action.payload.text,
         isCompleted: false,
         id: uuidv4(),
       })
    },
    deleteTodoHandler(state, action) {
      
    }
  },
})

export const { addTodo } = todoSlice.actions

export default todoSlice.reducer
