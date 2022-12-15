import { createSlice } from "@reduxjs/toolkit";

export const toDoSlice = createSlice({
    name:"toDo",
    initialState: {
        todoList: []
    },
    reducers: {
        addToDo: (state,action) => {
            let newToDoList = {
                id : Math.random(),
                value : action.payload
            }
        state.todoList.push(newToDoList)
        },
        deleteToDo: (state,action) => {
            let {todoList} = state
            state = todoList.filter((item) => item.id !== action.payload.id)
        },
        editToDo: (state,action) => {
            let {todoList} = state
            state = todoList.map((item) => item.id === action.payload.id ? action.payload : item )
        },
    }
})
export const { addToDo, deleteToDo, editTodo } = toDoSlice.actions

export default toDoSlice.reducer;