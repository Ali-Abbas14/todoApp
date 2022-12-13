import { createSlice } from "@reduxjs/toolkit";

export const toDoSlice = createSlice({
    name:"toDo",
    initialState: {
        todoList: []
    },
    reducers: {
        addToDo: (state,action) => {
            let newToDoList = {
                id: Math.random(),
                content: action.payload
            }
        }
    }
})