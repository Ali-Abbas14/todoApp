import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from "uuid"

export const toDoSlice = createSlice({
    name: "toDo",
    initialState: {
        todoList: []
    },
    reducers: {
        addToDo: (state, action) => {
            let newToDoList = {
                id: uuidv4(),
                value: action.payload
            }
            state.todoList.push(newToDoList)
        },
        deleteToDo: (state, action) => {
            let { todoList } = state
            state = todoList.filter((item) => {
                return item.id !== action.payload.id
            })
        },
        editToDo: (state, action) => {
            let { todoList } = state
            state = todoList.map((item) =>
                item.id === action.payload.id ? action.payload : item
            )
        }
    }
})
export const { addToDo, deleteToDo, editTodo } = toDoSlice.actions

export default toDoSlice.reducer
